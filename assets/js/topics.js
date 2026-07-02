/* Topic registry for the DCN Claude Training Hub.
   To publish a new training: copy topics/_template.html, write the page,
   then add an entry at the TOP of this array. Newest entries list first.

   Fields:
     title    - topic header shown on the landing page
     href     - "topics/<file>.html" for internal pages, or a full URL
     external - true for outside courses/resources (opens in a new tab)
     written  - date the page was first written, YYYY-MM-DD
     updated  - date of the last content change, YYYY-MM-DD
     version  - version of the information on the page; bump the minor
                number for content tweaks (1.1) and the major number when
                the guidance itself changes (2.0)
     summary  - one or two plain sentences on what the page covers */

const TOPICS = [
  {
    title: "Claude 101",
    href: "https://anthropic.skilljar.com/claude-101",
    external: true,
    written: "2026-07-02",
    updated: "2026-07-02",
    version: "1.0",
    summary:
      "Anthropic's free, self-paced starter course. Covers using Claude for " +
      "everyday work such as writing emails, organizing data, analyzing " +
      "documents, and drafting content. A good first stop if Claude is new to you.",
  },
  {
    title: "AI Fluency: Framework and Foundations",
    href: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    external: true,
    written: "2026-07-02",
    updated: "2026-07-02",
    version: "1.0",
    summary:
      "Anthropic's free fundamentals course on working with AI well. Teaches " +
      "the 4D framework (Delegation, Description, Discernment, Diligence) for " +
      "effective, efficient, and safe collaboration with AI tools.",
  },
];

/* Renders the registry into #topic-list on the landing page. */
function renderTopics() {
  const list = document.getElementById("topic-list");
  if (!list) return;

  const fmt = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  list.innerHTML = TOPICS.map((t) => {
    const badge = t.external
      ? '<span class="badge external">External course</span>'
      : '<span class="badge">Training page</span>';
    const updated =
      t.updated && t.updated !== t.written
        ? `<span>Updated ${fmt(t.updated)}</span>`
        : "";
    const target = t.external ? ' target="_blank" rel="noopener"' : "";
    return `
      <li class="topic-card">
        <div class="meta">
          ${badge}
          <span>Written ${fmt(t.written)}</span>
          ${updated}
          <span>v${t.version}</span>
        </div>
        <h3><a href="${t.href}"${target}>${t.title}</a></h3>
        <p>${t.summary}</p>
      </li>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderTopics);
