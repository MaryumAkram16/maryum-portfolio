function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 440 440"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract diagram of connected automation nodes"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connecting lines */}
      <g stroke="var(--accent)" strokeWidth="1.2" opacity="0.35">
        <line x1="70" y1="120" x2="180" y2="80" />
        <line x1="70" y1="120" x2="150" y2="220" />
        <line x1="180" y1="80" x2="290" y2="130" />
        <line x1="180" y1="80" x2="150" y2="220" />
        <line x1="150" y1="220" x2="290" y2="130" />
        <line x1="150" y1="220" x2="230" y2="320" />
        <line x1="290" y1="130" x2="370" y2="190" />
        <line x1="290" y1="130" x2="230" y2="320" />
        <line x1="370" y1="190" x2="230" y2="320" />
        <line x1="230" y1="320" x2="120" y2="360" />
      </g>

      {/* traveling pulse along the main spine */}
      <g opacity="0.9">
        <circle r="3" fill="var(--text)">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M70,120 L180,80 L290,130 L370,190"
          />
        </circle>
      </g>

      {/* nodes */}
      {[
        { cx: 70, cy: 120, r: 26 },
        { cx: 180, cy: 80, r: 16 },
        { cx: 150, cy: 220, r: 20 },
        { cx: 290, cy: 130, r: 30 },
        { cx: 370, cy: 190, r: 14 },
        { cx: 230, cy: 320, r: 22 },
        { cx: 120, cy: 360, r: 12 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.2} fill="url(#nodeGlow)" opacity="0.5" />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  )
}

export default HeroVisual
