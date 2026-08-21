import fs from 'node:fs'
const trace = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const needle = Number(process.argv[3])
for (const event of trace.traceEvents ?? []) {
  const text = JSON.stringify(event)
  if (text.includes(`node_id\":${needle}`) || text.includes(`nodeId\":${needle}`)) console.log(JSON.stringify(event))
}
