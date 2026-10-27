


(function () {
  // Every image with class="zoomable" becomes part of the gallery
  const images = Array.from(document.querySelectorAll('img.zoomable'));
  if (!images.length) return;

  // Build the overlay
  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML = `
    <button class="lb-btn lb-close" aria-label="Close">&times;</button>
    <button class="lb-btn lb-prev" aria-label="Previous image">&#8249;</button>
    <img class="lb-img" alt="">
    <button class="lb-btn lb-next" aria-label="Next image">&#8250;</button>
    <div class="lb-count"></div>
  `;
  document.body.appendChild(overlay);

  const bigImg = overlay.querySelector('.lb-img');
  const count = overlay.querySelector('.lb-count');
  let current = 0;

  if (images.length === 1) overlay.classList.add('lb-single');

  function show(index) {
    current = (index + images.length) % images.length; // wraps around
    const thumb = images[current];
    // Use data-full="big.jpg" if you have a larger version, else the normal src
    bigImg.src = thumb.dataset.full || thumb.src;
    bigImg.alt = thumb.alt;
    count.textContent = (current + 1) + ' / ' + images.length;
  }

  function open(index) {
    show(index);
    overlay.classList.add('lb-open');
    document.body.classList.add('lb-lock');
  }

  function close() {
    overlay.classList.remove('lb-open');
    document.body.classList.remove('lb-lock');
  }

  // Open when a gallery image is clicked
  images.forEach((img, i) => img.addEventListener('click', () => open(i)));

  // Buttons (stopPropagation so they don't trigger the "click anywhere closes" rule)
  overlay.querySelector('.lb-prev').addEventListener('click', (e) => { e.stopPropagation(); show(current - 1); });
  overlay.querySelector('.lb-next').addEventListener('click', (e) => { e.stopPropagation(); show(current + 1); });
  overlay.querySelector('.lb-close').addEventListener('click', (e) => { e.stopPropagation(); close(); });

  // Clicking anywhere else (background or the image itself) closes
  overlay.addEventListener('click', close);

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('lb-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
