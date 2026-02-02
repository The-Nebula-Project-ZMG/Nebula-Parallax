export function createMediaItem({ name, kind, duration }) {
  return {
    id: crypto.randomUUID(),
    name,
    kind,
    duration
  }
}

export function addMedia(project, mediaItem) {
  project.media.push(mediaItem)
}
