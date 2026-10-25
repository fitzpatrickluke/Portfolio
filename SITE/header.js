const headerTemplate = `
  <header class="siteHeader">
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>
`;

// Inject the template immediately into the placeholder div
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-placeholder");
  if (headerContainer) {
    headerContainer.innerHTML = headerTemplate;

    // Get the current file name from the URL (defaults to index.html if empty)
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // Find the matching nav link and add the active class
    const navLinks = headerContainer.querySelectorAll("nav a");
    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (linkHref === currentPath) {
        link.classList.add("active");
      }
    });

  }
});