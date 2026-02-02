export function createTimeline() {
  return {
    id: crypto.randomUUID(),
    tracks: [createTrack('V1'), createTrack('A1')]
  }
}

export function createTrack(label) {
  return {
    id: crypto.randomUUID(),
    label,
    clips: []
  }
}
