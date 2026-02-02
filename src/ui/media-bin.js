export function renderMediaBin(mediaList, state) {
  if (!mediaList) {
    return
  }

  if (state.project.media.length === 0) {
    mediaList.innerHTML = '<div class="media-item">No media yet</div>'
    return
  }

  mediaList.innerHTML = `
    <div class="media-grid">
      ${state.project.media
        .map((item) => {
          return `
            <div class="media-card">
              <div class="media-card__thumb">${item.kind.toUpperCase()}</div>
              <div class="media-card__meta">
                <div class="media-card__name">${item.name}</div>
                <small>${item.duration}</small>
              </div>
            </div>
          `
        })
        .join('')}
    </div>
  `
}
