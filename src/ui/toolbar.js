export function renderToolbar(toolbar, state) {
  if (!toolbar) {
    return
  }

  toolbar.innerHTML = `
    <div class="toolbar__left">
      <div class="brand">
        <div class="brand__mark">◆</div>
        <span class="app-title">Parallax</span>
      </div>
      <nav class="menu">
        <button class="menu__item">File</button>
        <button class="menu__item">Edit</button>
        <button class="menu__item">View</button>
        <button class="menu__item">Export</button>
      </nav>
    </div>
    <div class="toolbar__right">
      <button class="btn" data-action="new-project">New Project</button>
      <button class="btn" data-action="import-media">Import</button>
      <button class="icon-btn" aria-label="Undo">⟲</button>
      <button class="icon-btn" aria-label="Settings">⚙</button>
      <button class="icon-btn" aria-label="Menu">☰</button>
    </div>
  `
}
