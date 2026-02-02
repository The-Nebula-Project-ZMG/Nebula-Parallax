import { addMedia, createMediaItem } from '../core/media-bin.js'

export function bindAppEvents({ state, regions, renderMediaBin, renderTimeline }) {
  regions.toolbar?.addEventListener('click', (event) => {
    const action = event.target?.dataset?.action
    if (!action) {
      return
    }

    if (action === 'new-project') {
      state.project.name = `Untitled Project ${Date.now().toString().slice(-4)}`
      renderMediaBin(regions.mediaList, state)
      renderTimeline(regions.timeline, state)
      if (regions.projectMeta) {
        regions.projectMeta.innerHTML = `
          <div><strong>${state.project.name}</strong></div>
          <div>Tracks: ${state.project.timeline.tracks.length}</div>
          <div>Media: ${state.project.media.length}</div>
        `
      }
    }

    if (action === 'import-media') {
      const placeholder = createMediaItem({
        name: `Clip ${state.project.media.length + 1}`,
        kind: 'video',
        duration: '00:00:12'
      })
      addMedia(state.project, placeholder)
      renderMediaBin(regions.mediaList, state)
      if (regions.projectMeta) {
        regions.projectMeta.innerHTML = `
          <div><strong>${state.project.name}</strong></div>
          <div>Tracks: ${state.project.timeline.tracks.length}</div>
          <div>Media: ${state.project.media.length}</div>
        `
      }
    }
  })
}
