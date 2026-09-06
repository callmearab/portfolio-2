// Small compatibility layer for the standalone build: keep project cards demo-only.
(function () {
  function hideSourceActions() {
    document.querySelectorAll('#projects a, #projects button').forEach(function (el) {
      var text = (el.textContent || '').trim().toLowerCase();
      if (text === 'کد' || text === 'کد منبع' || text === 'source code' || text.includes('github')) {
        el.style.display = 'none';
      }
    });
  }
  function forceGalleryCover() {
    document.querySelectorAll('img[alt*="Fullscreen"]').forEach(function (image) {
      image.style.width = '100%';
      image.style.height = '100%';
      image.style.maxWidth = 'none';
      image.style.maxHeight = 'none';
      image.style.objectFit = 'cover';
      image.style.objectPosition = 'center';
      var parent = image.parentElement;
      if (parent) {
        parent.style.width = '100%';
        parent.style.height = '100%';
        parent.style.padding = '0';
      }
    });
  }
  new MutationObserver(hideSourceActions).observe(document.body, { childList: true, subtree: true });
  new MutationObserver(forceGalleryCover).observe(document.body, { childList: true, subtree: true });
  setTimeout(function () { hideSourceActions(); forceGalleryCover(); }, 250);
})();
