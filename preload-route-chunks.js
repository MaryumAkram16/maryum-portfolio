// Post-build script: inject <link rel="modulepreload"> for the Work/Contact
// route chunks (with their hashed filenames) into dist/index.html so both
// lazy routes mount instantly on first navigation.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distIndex = path.resolve(__dirname, 'dist/index.html')

// Find chunk files by their stable names
const assetsDir = path.resolve(__dirname, 'dist/assets')
const files = fs.readdirSync(assetsDir)
const chunkLinks = files
  .filter(f => f.startsWith('Work-') || f.startsWith('Contact-'))
  .filter(f => f.endsWith('.js'))
  .map(f => `    <link rel="modulepreload" href="/maryum-portfolio/assets/${f}" />`)
  .join('\n')

let html = fs.readFileSync(distIndex, 'utf8')
const marker = '<!-- preloads -->'
if (html.includes(marker)) {
  html = html.replace(marker, chunkLinks)
} else {
  html = html.replace('</head>', `${chunkLinks}\n</head>`)
}
fs.writeFileSync(distIndex, html)
console.log('Injected modulepreload links:', chunkLinks)
