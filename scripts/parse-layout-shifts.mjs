import fs from 'node:fs'

const trace = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const events = trace.traceEvents ?? []
const shifts = events.filter((event) => event.name === 'LayoutShift' || event.name === 'LayoutShiftAttribution')
const layout = events.filter((event) => event.name === 'LayoutShift' && event.args?.data)
console.log(JSON.stringify(layout.map((event) => ({
  ts: event.ts,
  value: event.args.data.impact_fraction * event.args.data.distance_fraction,
  impactFraction: event.args.data.impact_fraction,
  distanceFraction: event.args.data.distance_fraction,
  sources: event.args.data?.impacted_nodes ?? event.args.data?.sources,
})), null, 2))
console.error(`Found ${layout.length} LayoutShift events and ${shifts.length} total shift-related events`)
