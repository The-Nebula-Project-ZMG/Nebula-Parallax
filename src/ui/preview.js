export function renderPreview(preview, state) {
  if (!preview) {
    return
  }

  preview.innerHTML = `
    <div class="preview">
      <div class="preview__header">Preview</div>
      <div class="preview__screen">
        <div>Preview Window</div>
      </div>
      <div class="preview__controls">
        <div class="control-group">
          <button class="icon-btn" aria-label="Play">▶</button>
          <div class="scrub-bar">
            <div class="scrub-bar__fill"></div>
            <div class="scrub-bar__handle"></div>
          </div>
          <button class="icon-btn" aria-label="Skip">⏭</button>
        </div>
        <div class="control-group">
          <span>00:01:12 / 00:04:35</span>
          <span>1.0x</span>
        </div>
      </div>
    </div>
  `
}
