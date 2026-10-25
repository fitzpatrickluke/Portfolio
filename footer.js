const footerTemplate = `
  <footer class="siteFooter">
    <p>© 2026 Luke Fitzpatrick.</p>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer-placeholder");
  if (footerContainer) {
    footerContainer.innerHTML = footerTemplate;
  }
});