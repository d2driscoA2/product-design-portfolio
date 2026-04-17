'use client'

import { useEffect, useRef } from 'react'
import styles from './TerminalHero.module.css'
import { MASCOT_GRID, MASCOT_PIXEL_SIZE, MASCOT_COLORS } from './mascot-grid'

/* ─── Types ─────────────────────────────────────────────────────── */

interface McpServer {
  name: string
  statusText: string
  ok: boolean
}

type Scene =
  | { kind: 'mcp'; cmd: string; servers: McpServer[] }
  | { kind: 'handoff'; cmd: string; cmdLabel: string; outHtml: string }

/* ─── Scene data ────────────────────────────────────────────────── */

const SCENES: Scene[] = [
  {
    kind: 'mcp',
    cmd: 'claude mcp list',
    servers: [
      { name: 'magic',        statusText: 'Connected',         ok: true  },
      { name: 'stitch',       statusText: 'Failed to connect', ok: false },
      { name: 'filesystem',   statusText: 'Connected',         ok: true  },
      { name: 'claude-flow',  statusText: 'Connected',         ok: true  },
      { name: 'playwright',   statusText: 'Connected',         ok: true  },
      { name: 'context-mode', statusText: 'Connected',         ok: true  },
    ],
  },
  {
    kind: 'handoff',
    cmd:      'echo "$(cat HANDOFF.md | wc -w) words"',
    cmdLabel: 'echo "$(cat HANDOFF.md | wc -w) words"',
    outHtml:  `<span class="${styles.num}">14,200</span> words`,
  },
]

const HOLD_MS = 5000
const TYPE_BASE_MS = 30
const TYPE_JITTER_MS = 20

/* ─── Component ─────────────────────────────────────────────────── */

export function TerminalHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const mascotRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const cancelRef = useRef(false)

  /* Build mascot pixels once on mount */
  useEffect(() => {
    const el = mascotRef.current
    if (!el) return
    el.innerHTML = ''
    for (let y = 0; y < MASCOT_GRID.length; y++) {
      const row = MASCOT_GRID[y]
      for (let x = 0; x < row.length; x++) {
        const c = row[x]
        if (c === ' ') continue
        const px = document.createElement('div')
        px.className = styles.mascotPixel
        px.style.left = `${x * MASCOT_PIXEL_SIZE}px`
        px.style.top = `${y * MASCOT_PIXEL_SIZE}px`
        px.style.width = `${MASCOT_PIXEL_SIZE}px`
        px.style.height = `${MASCOT_PIXEL_SIZE}px`
        if (c === '2') px.style.background = MASCOT_COLORS.eye
        else if (c === '3') px.style.background = MASCOT_COLORS.accent
        else px.style.background = MASCOT_COLORS.body
        el.appendChild(px)
      }
    }
  }, [])

  /* Run the animation loop */
  useEffect(() => {
    const body = bodyRef.current
    const hero = heroRef.current
    if (!body || !hero) return

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    cancelRef.current = false

    const onEnter = () => { pausedRef.current = true }
    const onLeave = () => { pausedRef.current = false }
    hero.addEventListener('mouseenter', onEnter)
    hero.addEventListener('mouseleave', onLeave)

    const wait = (ms: number): Promise<void> => new Promise(resolve => {
      let remaining = ms
      const tick = () => {
        if (cancelRef.current) return resolve()
        if (pausedRef.current) { setTimeout(tick, 60); return }
        remaining -= 60
        if (remaining <= 0) resolve()
        else setTimeout(tick, 60)
      }
      setTimeout(tick, 60)
    })

    const typeLine = async (cmd: string): Promise<void> => {
      const line = document.createElement('div')
      line.className = styles.line
      line.innerHTML = `<span class="${styles.prompt}">›</span><span class="${styles.cmd}"></span><span class="${styles.cursor}"></span>`
      body.appendChild(line)
      const cmdEl = line.querySelector(`.${styles.cmd}`) as HTMLSpanElement
      const cursor = line.querySelector(`.${styles.cursor}`) as HTMLSpanElement
      if (reduced) {
        cmdEl.textContent = cmd
        cursor.remove()
        return
      }
      for (let i = 0; i < cmd.length; i++) {
        if (cancelRef.current) return
        while (pausedRef.current) await wait(60)
        cmdEl.textContent = cmd.substring(0, i + 1)
        await wait(TYPE_BASE_MS + Math.random() * TYPE_JITTER_MS)
      }
      cursor.remove()
    }

    const pad = (s: string, w: number) => ` ${s}${' '.repeat(w - s.length)} `

    const showMcpTable = async (servers: McpServer[]) => {
      const serverW = Math.max(6, ...servers.map(s => s.name.length), 'Server'.length)
      const statusW = Math.max(6, ...servers.map(s => s.statusText.length), 'Status'.length)
      const hLine = `┌${'─'.repeat(serverW + 2)}┬${'─'.repeat(statusW + 2)}┐`
      const mLine = `├${'─'.repeat(serverW + 2)}┼${'─'.repeat(statusW + 2)}┤`
      const fLine = `└${'─'.repeat(serverW + 2)}┴${'─'.repeat(statusW + 2)}┘`
      const headerRow = `│${pad('Server', serverW)}│${pad('Status', statusW)}│`

      let tableHtml = `<div class="${styles.tHead}">${hLine}</div>`
      tableHtml += `<div class="${styles.tHead}">${headerRow}</div>`
      tableHtml += `<div class="${styles.tHead}">${mLine}</div>`
      for (const s of servers) {
        const serverCell = pad(s.name, serverW)
        const statusPadded = pad(s.statusText, statusW)
        const cls = s.ok ? styles.tOk : styles.tFail
        const rowCls = s.ok ? '' : styles.tRowFail
        const statusHtml = statusPadded.replace(s.statusText, `<span class="${cls}">${s.statusText}</span>`)
        tableHtml += `<div class="${rowCls}">│${serverCell}│${statusHtml}│</div>`
      }
      tableHtml += `<div class="${styles.tHead}">${fLine}</div>`

      const announce = document.createElement('div')
      announce.className = styles.outBlock
      announce.innerHTML = `
        <div class="${styles.announce}">
          <span class="${styles.announceDot}"></span>
          <span>Here are your configured MCP servers:</span>
        </div>
        <div class="${styles.table}">${tableHtml}</div>
        <div class="${styles.issues}">
          <b>Issues to note:</b>
          <div class="${styles.issueLine}"><span class="${styles.dash}">–</span><b>stitch</b> is failing to connect</div>
        </div>
      `
      body.appendChild(announce)
      await wait(100)
      announce.classList.add(styles.outBlockShow)
    }

    const showHandoffCount = async (cmdLabel: string, valueHtml: string) => {
      const out = document.createElement('div')
      out.className = styles.outBlock
      out.innerHTML = `
        <div class="${styles.bashHead}">
          <span class="${styles.bashDot}"></span>
          <span class="${styles.bashTitle}"><b>Bash</b>(${cmdLabel})</span>
        </div>
        <div class="${styles.bashSub}"><span class="${styles.corner}">⌙</span> <span>${valueHtml}</span></div>
      `
      body.appendChild(out)
      await wait(80)
      out.classList.add(styles.outBlockShow)
    }

    const clearBody = async () => {
      const els = Array.from(body.children) as HTMLElement[]
      for (const el of els) {
        el.style.transition = 'opacity 200ms ease'
        el.style.opacity = '0'
      }
      await wait(220)
      if (!cancelRef.current) body.innerHTML = ''
    }

    const playScene = async (s: Scene) => {
      await typeLine(s.cmd)
      await wait(180)
      if (s.kind === 'mcp') await showMcpTable(s.servers)
      else await showHandoffCount(s.cmdLabel, s.outHtml)
      await wait(reduced ? 800 : HOLD_MS)
    }

    const loop = async () => {
      while (!cancelRef.current) {
        for (const s of SCENES) {
          if (cancelRef.current) return
          await playScene(s)
        }
        await wait(400)
        if (!cancelRef.current) await clearBody()
        await wait(200)
      }
    }

    if (reduced) {
      // Static: show the MCP scene only
      typeLine(SCENES[0].cmd).then(() => {
        if (SCENES[0].kind === 'mcp') showMcpTable(SCENES[0].servers)
      })
    } else {
      loop()
    }

    return () => {
      cancelRef.current = true
      hero.removeEventListener('mouseenter', onEnter)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.chead}>
        <div className={styles.mascot} ref={mascotRef} aria-hidden="true" />
        <div className={styles.cheadInfo}>
          <div className={styles.cheadTitle}>
            <b>Claude Code</b>
            <span className={styles.cheadVer}>v2.1.73</span>
          </div>
          <div className={styles.cheadSub}>Sonnet 4.6 · Claude Pro</div>
          <div className={styles.cheadPath}>~/Desktop/Claude/portfolio/claude-written/danny-portfolio</div>
        </div>
      </div>
      <div className={styles.body} ref={bodyRef} aria-hidden="true" />
      <div className={styles.ruflo}>
        <span className={styles.rfLabel}>RuFlo V3.5</span>
        <span className={styles.rfSep}>·</span>
        <span className={styles.rfUser}>Danny Driscoll</span>
        <span className={styles.rfSep}>·</span>
        <span>
          <span className={styles.rfBranch}>⌥ design-v2</span>{' '}
          <span className={styles.rfDirty}>+1~2?17</span>
        </span>
        <span className={styles.rfSep}>·</span>
        <span className={styles.rfModel}>Sonnet 4.6</span>
        <span className={styles.rfSep}>·</span>
        <span className={styles.rfTime}>◴ 16s</span>
        <span className={styles.rfSep}>·</span>
        <span className={styles.rfCtx}>● 14% ctx</span>
        <span className={styles.rfSep}>·</span>
        <span className={styles.rfCost}>$0.12</span>
      </div>
    </div>
  )
}
