/* Topic registry for the DCN Claude Training Hub.
   To publish a new training: copy topics/_template.html, write the page,
   then add an entry to this array. The list renders sorted by audience
   level (beginner first), then by release date, newest first.

   Fields:
     title    - topic header shown on the landing page
     href     - "topics/<file>.html" for internal pages, or a full URL
     external - true for outside courses/resources (opens in a new tab)
     audience - who the page is for: "beginner" | "intermediate" | "advanced"
     written  - date the page was first written / released, YYYY-MM-DD
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
    audience: "beginner",
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
    audience: "beginner",
    written: "2026-07-02",
    updated: "2026-07-02",
    version: "1.0",
    summary:
      "Anthropic's free fundamentals course on working with AI well. Teaches " +
      "the 4D framework (Delegation, Description, Discernment, Diligence) for " +
      "effective, efficient, and safe collaboration with AI tools.",
  },
  {
    title: "Accessing the brand-dcn Skill and Plugin",
    href: "topics/access-brand-dcn.html",
    external: false,
    audience: "intermediate",
    written: "2026-07-02",
    updated: "2026-07-02",
    version: "1.2",
    summary:
      "DCN's brand skill is already installed for everyone; this page shows " +
      "how to leverage it. Lead any request with /brand-dcn to draft, fix, " +
      "or brand-check work, with ready-to-use prompt examples.",
  },
  {
    title: "Configuring and Using the Microsoft 365 Connector",
    href: "topics/microsoft-365-connector.html",
    external: false,
    audience: "intermediate",
    written: "2026-07-02",
    updated: "2026-07-02",
    version: "1.1",
    summary:
      "Connect Claude to Outlook, SharePoint, OneDrive, and Teams so it can " +
      "find your emails, files, and chats itself. Covers the two-minute " +
      "account setup, ready-to-use prompt examples, and the read-only limits.",
  },
];

const AUDIENCE = {
  beginner: { label: "Beginner", rank: 0 },
  intermediate: { label: "Intermediate", rank: 1 },
  advanced: { label: "Advanced", rank: 2 },
};

/* Renders the registry into #topic-list on the landing page,
   sorted by audience rank, then release date (newest first),
   then registry order. */
function renderTopics() {
  const list = document.getElementById("topic-list");
  if (!list) return;

  const fmt = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const sorted = TOPICS.map((t, i) => ({ t, i })).sort((a, b) => {
    const ra = (AUDIENCE[a.t.audience] || AUDIENCE.beginner).rank;
    const rb = (AUDIENCE[b.t.audience] || AUDIENCE.beginner).rank;
    if (ra !== rb) return ra - rb;
    if (a.t.written !== b.t.written) return a.t.written < b.t.written ? 1 : -1;
    return a.i - b.i;
  });

  list.innerHTML = sorted.map(({ t }) => {
    const aud = AUDIENCE[t.audience] || AUDIENCE.beginner;
    const typeBadge = t.external
      ? '<span class="badge external">Course</span>'
      : '<span class="badge">Training</span>';
    const updated =
      t.updated && t.updated !== t.written
        ? `<span>Updated ${fmt(t.updated)}</span>`
        : "";
    const target = t.external ? ' target="_blank" rel="noopener"' : "";
    return `
      <li class="topic-card">
        <div class="row">
          <h3><a href="${t.href}"${target}>${t.title}</a></h3>
          <div class="meta">
            <span class="badge audience-${t.audience}">${aud.label}</span>
            ${typeBadge}
            <span>${fmt(t.written)}</span>
            ${updated}
            <span>v${t.version}</span>
          </div>
        </div>
        <p>${t.summary}</p>
      </li>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderTopics);
