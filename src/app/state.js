import { createProject } from '../core/project.js'

export function createInitialState() {
  const project = createProject({ name: 'Untitled Project' })

  return {
    project,
    ui: {
      status: 'idle',
      playhead: 0,
      selectedMediaId: null
    }
  }
}
