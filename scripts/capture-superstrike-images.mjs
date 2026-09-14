// Capture the Superstrike post's live-site imagery at exact sizes.
// Run from the repo root on Danny's Mac (network can reach the live kiosk):
//   node scripts/capture-superstrike-images.mjs
// Requires the repo's Playwright install. Outputs land in public/blog/images/superstrike/.
// After capture: compress anything over 200KB before committing.

import { chromium } from 'playwright'
import fs from 'node:fs'

const OUT = 'public/blog/images/superstrike'
const URL = 'https://logitech-kiosk.displayedux.com'
fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ headless: true })

// ── Desktop kiosk at native 1920x1080 ───────────────────────────
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
await page.screenshot({ path: `${OUT}/attract-screen.png` })

// Start: click through attract, then GET READY (two trusted clicks)
await page.mouse.click(960, 540)
await page.waitForTimeout(800)
await page.mouse.click(960, 540)

// Countdown runs ~3s; then the 10s test. Synthetic pointer events count
// as clicks in this build (verified Sept 14, 2026), so drive ~9 CPS:
await page.waitForTimeout(3200)
await page.evaluate(() => {
  let n = 0
  const iv = setInterval(() => {
    n++
    const t = document.elementFromPoint(960, 540) || document.body
    for (const type of ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) {
      const E = type.startsWith('pointer') ? PointerEvent : MouseEvent
      t.dispatchEvent(new E(type, { bubbles: true, cancelable: true, clientX: 960, clientY: 540, button: 0, pointerId: 1 }))
    }
    if (n > 95) clearInterval(iv)
  }, 110)
})

// Mid-game shots: heat tier flash lands around the 3-4s mark at this pace
await page.waitForTimeout(3500)
await page.screenshot({ path: `${OUT}/heat-tier-flash.png` })
await page.waitForTimeout(4000)
await page.screenshot({ path: `${OUT}/late-game.png` })

// Celebration screen (count-up, confetti, burst stats)
await page.waitForTimeout(2000)
await page.screenshot({ path: `${OUT}/celebration-countup.png` })
await page.waitForTimeout(2400)
await page.screenshot({ path: `${OUT}/celebration-screen.png` })

// Name entry with QWERTY
await page.waitForTimeout(4000)
await page.screenshot({ path: `${OUT}/name-entry.png` })

// IMPORTANT: skip, never save — keeps the live prize board clean.
// The skip link sits at the bottom center ("SKIP, DON'T SAVE MY SCORE").
const skip = await page.getByText(/SKIP/i).first()
await skip.click()
await page.waitForTimeout(1500)
await page.screenshot({ path: `${OUT}/results-screen.png` })
await page.close()

// ── Mobile reflow at 390x844 ────────────────────────────────────
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mob.goto(URL, { waitUntil: 'networkidle' })
await mob.waitForTimeout(2000)
await mob.screenshot({ path: `${OUT}/attract-mobile.png` })
await mob.close()

await browser.close()
console.log('Captured to', OUT, '— verify each image, then compress any file over 200KB.')
