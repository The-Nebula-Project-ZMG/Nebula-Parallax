export const nebulaCore = {
  available: false,
  reason: 'Nebula Core UI/input packages not wired in this scaffold.'
}

export function noteNebulaCoreUsage() {
  return [
    'Use @nebulaproject/core/navigation for focus and controller navigation.',
    'Use @nebulaproject/core/input for controller/keyboard mapping.',
    'Use @nebulaproject/core/theme for shared colors, spacing, and typography.',
    'Use @nebulaproject/core/glyphs for controller glyph rendering.'
  ]
}
