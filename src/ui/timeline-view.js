export function renderTimeline(timeline, state) {
  if (!timeline) {
    return
  }

  const trackHtml = state.project.timeline.tracks
    .map((track) => {
      const clips = track.clips.length
        ? track.clips
            .map((clip) => `<div class="clip">${clip.name}</div>`)
            .join('')
        : '<div class="clip">No clips</div>'

      return `
        <div class="timeline__track">
          <div>${track.label}</div>
          <div class="track__clips">${clips}</div>
        </div>
      `
    })
    .join('')

  timeline.innerHTML = `
    <div class="timeline__header">
      <div class="timeline__title">
        <input type="checkbox" checked />
        <span>Timeline</span>
      </div>
      <div class="timeline__time">00:00:00</div>
    </div>
    <div class="timeline__ruler">
      <span>00:00:00</span>
      <span>00:00:30</span>
      <span>00:01:00</span>
      <span>00:01:30</span>
      <span>00:02:00</span>
    </div>
    <div class="timeline__tracks">
      ${trackHtml}
    </div>
  `
}
