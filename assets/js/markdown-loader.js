const section = new URLSearchParams(window.location.search).get('section');
const titleMap = {
  "analysis-guidelines": "Analysis Guidelines",
  "building-blocks": "Building Blocks",
  "complete-astrology": "Complete Astrology",
  "interpretation": "Interpretation",
  "legal": "Legal"
};

document.getElementById("page-title").innerText = titleMap[section] || "Section";

fetch(`../sections/${section}/index.md`)
  .then(res => res.text())
  .then(md => {
    document.getElementById("content").innerHTML = marked.parse(md);
  })
  .catch(err => {
    document.getElementById("content").innerHTML = `<p>Error loading section content: ${err.message}</p>`;
  });