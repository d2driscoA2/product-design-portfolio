/**
 * Pixel grid for the Anthropic-style robot mascot shown in the Claude Code
 * terminal hero. Rendered at 4px per cell into a 44x44 container.
 *
 * Legend:
 *   ' ' — empty
 *   '1' — body fill (coral red)
 *   '2' — eye cavity (background color)
 *   '3' — accent shadow (darker red)
 */
export const MASCOT_GRID: readonly string[] = [
  '           ',
  '  1     1  ',
  '  1     1  ',
  ' 111111111 ',
  '11111111111',
  '11221122211',
  '11221122211',
  '11111111111',
  '11111111111',
  ' 1       1 ',
  ' 1       1 ',
] as const

export const MASCOT_PIXEL_SIZE = 4
export const MASCOT_COLORS = {
  body:   '#E0767A',
  eye:    '#1E2329',
  accent: '#B85A5E',
} as const
