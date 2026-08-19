import { useEffect, useRef } from 'react'

/*
 * Floating orbit / constellation hero animation.
 * Replicates the reference animation: a glowing central sphere, concentric
 * dashed elliptical orbit rings, small nodes traveling along the orbits,
 * tech-label badges drifting with the nodes, and dashed connection lines
 * between the hub and some nodes. Whole assembly rotates slowly clockwise
 * with a gentle breathing/float motion.
 */

const CX = 300
const CY = 300

// Orbit rings: [semiMajor, semiMinor, rotationDeg, nodeCount]
const RINGS = [
  { a: 105, b: 78, rot: 12, labels: ['Python', 'React'] },
  { a: 165, b: 122, rot: -28, labels: ['OpenAI', 'n8n'] },
  { a: 225, b: 168, rot: 18, labels: ['Node.js', 'AWS'] },
]

const BADGE_COLORS = [
  { fill: '#0d7a6e', text: '#eafffa' },
  { fill: '#2fb5a2', text: '#06221e' },
  { fill: '#1d2a3d', text: '#2fb5a2' },
]

function ellipsePoint(a, b, rotDeg, t) {
  const rad = (rotDeg * Math.PI) / 180
  const x = a * Math.cos(t)
  const y = b * Math.sin(t)
  return {
    x: CX + x * Math.cos(rad) - y * Math.sin(rad),
    y: CY + x * Math.sin(rad) + y * Math.cos(rad),
  }
}

export default function OrbitAnimation({ labels = ['Python', 'React', 'OpenAI', 'Node.js', 'AWS', 'n8n'] }) {
  const svgRef = useRef(null)

  useEffect(() => {
    let raf
    const start = performance.now()
    const render = (now) => {
      const t = (now - start) / 1000
      const svg = svgRef.current
      if (!svg) return

      // slow global rotation (degrees) + subtle breathing
      const globalRot = (t * 6) % 360
      const breathe = Math.sin(t * 0.9) * 6
      svg.style.transform = `rotate(${globalRot}deg) translateY(${breathe}px)`

      // node positions (parametric t per ring, different speeds)
      const nodePositions = RINGS.map((ring, ri) =>
        ring.labels.map((_, ni) =>
          ellipsePoint(ring.a, ring.b, ring.rot, t * (0.28 + ri * 0.12) + ni * Math.PI)
        )
      )

      // Update node circles
      svg.querySelectorAll('.node-dot').forEach((el, idx) => {
        let c = 0
        outer: for (const pts of nodePositions) {
          for (const p of pts) {
            if (c === idx) {
              el.setAttribute('cx', p.x)
              el.setAttribute('cy', p.y)
              break outer
            }
            c++
          }
        }
      })

      // Update hub connection lines (hub -> first node of each ring)
      svg.querySelectorAll('.hub-line').forEach((el, ri) => {
        const p = nodePositions[ri][0]
        el.setAttribute('x2', p.x)
        el.setAttribute('y2', p.y)
      })

      // Update floating badges (counter-rotate label so text stays upright)
      svg.querySelectorAll('.badge-g').forEach((el, idx) => {
        let c = 0
        outer: for (const pts of nodePositions) {
          for (const p of pts) {
            if (c === idx) {
              el.setAttribute('transform', `translate(${p.x}, ${p.y - 30}) rotate(${-globalRot})`)
              break outer
            }
            c++
          }
        }
      })

      // Pulse the core glow
      const core = svg.querySelector('.core-pulse')
      if (core) {
        const s = 1 + Math.sin(t * 1.8) * 0.07
        core.setAttribute('transform', `translate(${CX} ${CY}) scale(${s}) translate(${-CX} ${-CY})`)
        core.setAttribute('opacity', 0.35 + Math.sin(t * 1.8) * 0.15)
      }

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)
    return () => cancelAnimationFrame(raf)
  }, [])

  let badgeIdx = 0
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 600"
      className="orbit-svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="coreGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#2fb5a2" />
          <stop offset="60%" stopColor="#0d7a6e" />
          <stop offset="100%" stopColor="#06221e" />
        </radialGradient>
        <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* dashed orbit rings */}
      {RINGS.map((ring, i) => (
        <ellipse
          key={i}
          cx={CX}
          cy={CY}
          rx={ring.a}
          ry={ring.b}
          transform={`rotate(${ring.rot} ${CX} ${CY})`}
          fill="none"
          stroke="rgba(47,181,162,0.28)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
      ))}

      {/* hub glow pulse */}
      <circle className="core-pulse" cx={CX} cy={CY} r="52" fill="#0d7a6e" filter="url(#glow)" />

      {/* connection lines from hub to first node of each ring */}
      {RINGS.map((_, ri) => (
        <line
          key={`line-${ri}`}
          className="hub-line"
          x1={CX}
          y1={CY}
          x2={CX + RINGS[ri].a}
          y2={CY}
          stroke="rgba(250,250,248,0.35)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      ))}

      {/* central sphere */}
      <circle cx={CX} cy={CY} r="34" fill="url(#coreGrad)" filter="url(#glow)" />
      <circle cx={CX - 9} cy={CY - 10} r="8" fill="rgba(250,250,248,0.25)" />

      {/* nodes + badges */}
      {RINGS.map((ring, ri) =>
        ring.labels.map((label, ni) => {
          const p = ellipsePoint(ring.a, ring.b, ring.rot, ni * Math.PI)
          const color = BADGE_COLORS[badgeIdx % BADGE_COLORS.length]
          badgeIdx++
          return (
            <g key={`${ri}-${ni}`}>
              <circle
                className="node-dot"
                cx={p.x}
                cy={p.y}
                r={ni % 2 === 0 ? 9 : 6}
                fill={ni % 2 === 0 ? '#2fb5a2' : '#fafaf8'}
                filter="url(#glow)"
              />
              <g className="badge-g" transform={`translate(${p.x}, ${p.y - 30})`}>
                <rect
                  x={-28}
                  y={-12}
                  width="56"
                  height="24"
                  rx="12"
                  fill={color.fill}
                  stroke={color.text}
                  strokeWidth="0.8"
                  opacity="0.92"
                />
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="600"
                  fill={color.text}
                >
                  {label}
                </text>
              </g>
            </g>
          )
        })
      )}
    </svg>
  )
}
