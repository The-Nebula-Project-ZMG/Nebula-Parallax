import { createInitialState } from './state.js'
import { renderLayout } from '../ui/layout.js'
import { renderToolbar } from '../ui/toolbar.js'
import { renderMediaBin } from '../ui/media-bin.js'
import { renderPreview } from '../ui/preview.js'
import { renderTimeline } from '../ui/timeline-view.js'
import { bindAppEvents } from './events.js'

export function initApp(root) {
  if (!root) {
    return
  }

  const state = createInitialState()
  const regions = renderLayout(root, state)

  renderToolbar(regions.toolbar, state)
  renderMediaBin(regions.mediaList, state)
  renderPreview(regions.preview, state)
  renderTimeline(regions.timeline, state)

  bindAppEvents({ state, regions, renderMediaBin, renderTimeline })
}
