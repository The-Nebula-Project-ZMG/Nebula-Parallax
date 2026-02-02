import { createTimeline } from './timeline.js'

export function createProject({ name }) {
  return {
    id: crypto.randomUUID(),
    name,
    media: [],
    timeline: createTimeline(),
    createdAt: new Date().toISOString()
  }
}
