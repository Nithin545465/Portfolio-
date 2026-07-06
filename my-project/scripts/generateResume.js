import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resumeHtml = path.resolve(__dirname, '../public/resume.html')
const outPdf = path.resolve(__dirname, '../public/resume.pdf')

async function run(){
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']})
  const page = await browser.newPage()
  await page.goto('file://' + resumeHtml, {waitUntil: 'networkidle0'})
  await page.pdf({path: outPdf, format: 'A4', printBackground: true, margin: {top: '20mm', bottom: '20mm'}})
  await browser.close()
  console.log('Resume PDF written to', outPdf)
}

run().catch(err=>{ console.error(err); process.exit(1) })
