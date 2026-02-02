export function renderLayout(container, state) {
  container.innerHTML = `
    <div class="app">
      <header class="toolbar" data-region="toolbar"></header>
      <section class="workspace">
        <aside class="sidebar">
          <div class="panel">
            <div class="panel__tabs">
              <button class="tab tab--active">Media</button>
              <button class="tab">Audio</button>
              <button class="tab">Titles</button>
            </div>
            <div class="panel__search">
              <input type="text" placeholder="Search media" />
            </div>
            <div class="panel__folders">
              <button class="folder folder--active">Project Media</button>
              <button class="folder">Stock Videos</button>
              <button class="folder">Favorites</button>
            </div>
            <div class="media-actions" data-region="media-actions"></div>
            <div class="media-list" data-region="media-list"></div>
          </div>
          <div class="panel">
            <div class="panel__header">Project</div>
            <div class="project-meta" data-region="project-meta"></div>
          </div>
        </aside>
        <main class="preview-area" data-region="preview"></main>
      </section>
      <section class="timeline" data-region="timeline"></section>
    </div>
  `

  const projectMeta = container.querySelector('[data-region="project-meta"]')
  if (projectMeta) {
    projectMeta.innerHTML = `
      <div><strong>${state.project.name}</strong></div>
      <div>Tracks: ${state.project.timeline.tracks.length}</div>
      <div>Media: ${state.project.media.length}</div>
    `
  }

  return {
    toolbar: container.querySelector('[data-region="toolbar"]'),
    mediaActions: container.querySelector('[data-region="media-actions"]'),
    mediaList: container.querySelector('[data-region="media-list"]'),
    preview: container.querySelector('[data-region="preview"]'),
    timeline: container.querySelector('[data-region="timeline"]'),
    projectMeta
  }
}
