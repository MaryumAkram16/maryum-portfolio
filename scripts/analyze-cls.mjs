import fs from 'node:fs'

const report = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const audits = report.audits
const cls = audits['cumulative-layout-shift']
const elements = audits['layout-shift-elements']
const shifts = audits['layout-shift-groups']
console.log(JSON.stringify({
  cls: cls?.numericValue,
  clsDisplay: cls?.displayValue,
  clsDetails: cls?.details,
  elements: elements?.details?.items?.slice(0, 12),
  groups: shifts?.details?.items?.slice(0, 12),
  metricAudits: Object.fromEntries(['first-contentful-paint','largest-contentful-paint','speed-index','total-blocking-time'].map((id) => [id, audits[id]?.numericValue])),
}, null, 2))
