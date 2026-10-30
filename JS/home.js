/* ============================================================
   Portfolio Projects Data & Rendering Logic
   ============================================================ */
const SITE = {
  alternateRows: true, // true = image flips sides on every other project

  projects: [
    {
      title: "Denver Zoo Website Redesign",
      link: "denver-zoo.html",
      image: "ASSETS/Home/portfolioZoo.png"
    },
    {
      title: "Library of Congress Brand Redesign",
      link: "library-of-congress-brand-redesign.html",
      image: "ASSETS/Home/portfolioLOC.png"
    },
    {
      title: "Sephora UX Research Report",
      link: "sephora-ux.html",
      image: "ASSETS/Home/portfolioSephora.png"
    },
    {
      title: "2nd & Charles Website Redesign",
      link: "2Charles-redesign.html",
      image: "ASSETS/home/portfolio2C.png"
    },
    {
      title: "HD-2D Scene",
      link: "hd2d-scene.html",
      image: "ASSETS/Home/portfolioHD.png"
    }
  ]
};

// Helper function to create DOM elements safely
const el = (tag, props = {}, kids = []) => {
    const n = Object.assign(document.createElement(tag), props);
    kids.forEach(k => n.append(k));
    return n;
};

// Render project cards into <section id="work">
const workSection = document.getElementById("projects");

if (workSection) {
    // Loop for each projects
    SITE.projects.forEach((p, i) => {
        // Create an <a>, where className is flipped or not
        const a = el("a", { 
            className: "project" + (SITE.alternateRows && i % 2 ? " flip" : ""), 
            href: p.link || "#" 
        });
        
        // Create the div with the image
        const thumb = el("div", { className: "thumb" });
        if (p.image) {
            thumb.append(el("img", { src: p.image, alt: p.title, loading: "lazy" }));
        }
        
        // append all this
        a.append(thumb, el("div", { className: "title", textContent: p.title }));
        workSection.append(a);
    });
}