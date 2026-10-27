
/* Israel Adekojo — portfolio interactions */

const PORTFOLIO = {
  email: "adekojoisrael54@gmail.com",
  github: "https://github.com/Adekojo-Israel",
  linkedin: "https://www.linkedin.com/in/israel-adekojo-798331338/",
  whatsapp: "https://wa.me/2348087501784",
  portrait: ""
};

const projects = [
  {
    id: "learnova",
    number: "01",
    title: "Learnova",
    category: "product",
    categoryLabel: "EDTECH / PRODUCT CONCEPT",
    status: "IN DEVELOPMENT",
    description:
      "A learning and productivity concept designed to help learners turn course outlines, difficult topics and study material into a clearer next step.",
    artTitle: "Learn smarter.<br><strong>Move forward.</strong>",
    artLabel: "LEARNING, REIMAGINED",
    artTag: "EXPLORE A TOPIC",
    demoUrl: "",
    repoUrl: "",
    case: {
      summary:
        "Learnova explores how technology can make learning more personal, organised and approachable.",
      problem:
        "Learners can struggle to break large topics into manageable parts.",
      approach:
        "Design a focused learning flow around topic explanations and course-outline planning.",
      next: [
        "Connect and verify the secure AI backend",
        "Test the learning flow with real learners",
        "Improve accessibility and mobile usability"
      ],
      status:
        "Work in progress. Only describe features as live after implementing and testing them."
    }
  },
  {
    id: "score-tool",
    number: "02",
    title: "Student Score Calculator",
    category: "tools",
    categoryLabel: "JAVASCRIPT / ACADEMIC TOOL",
    status: "TO BE BUILT",
    description:
      "A planned academic decision-support tool to help students understand course scores, calculate GPA and explore how future grades may affect their targets.",
    artTitle: "Know your marks.<br><strong>Plan your next move.</strong>",
    artLabel: "STUDENT TOOLKIT",
    artTag: "CALCULATE WITH CLARITY",
    demoUrl: "",
    repoUrl: "",
    case: {
      summary:
        "The goal is to build more than a basic calculator: a transparent tool that explains results and helps students plan their next academic steps.",
      problem:
        "Students may know their marks but struggle to interpret weighted scores, GPA targets and possible outcomes.",
      approach:
        "Start with clear course inputs and transparent calculations, then add target scenarios after validating grading rules.",
      next: [
        "Confirm the supported grading systems",
        "Implement weighted score and GPA calculations",
        "Test edge cases and compare results against hand calculations",
        "Add target scenarios and exportable summaries"
      ],
      status:
        "Planned project. It is not presented as a finished or deployed application."
    }
  },
  {
    id: "task-flow",
    number: "03",
    title: "Taskflow",
    category: "tools",
    categoryLabel: "PRODUCTIVITY / WEB APP",
    status: "CONCEPT TO BUILD",
    description:
      "A proposed planning app to help students and busy learners break large goals into realistic steps and decide what deserves attention next.",
    artTitle: "Less chaos.<br><strong>More momentum.</strong>",
    artLabel: "A CALMER WORKFLOW",
    artTag: "FOCUS ON THE NEXT STEP",
    demoUrl: "",
    repoUrl: "",
    case: {
      summary:
        "Taskflow will explore a more practical approach to planning than a generic to-do list.",
      problem:
        "A long task list does not always help someone decide what to do first or fit work into a real week.",
      approach:
        "Build a focused planner around task breakdown, deadlines, estimated effort and weekly capacity.",
      next: [
        "Interview potential users about planning problems",
        "Build task creation and completion flows",
        "Add prioritisation and weekly planning",
        "Test persistence, mobile use and accessibility"
      ],
      status: "Concept only until built and tested."
    }
  }
];

/* DOM helpers */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

let toastTimer;

/* Safe external links */

function safeExternalUrl(value) {
  try {
    const url = new URL(value);

    return ["https:", "http:"].includes(url.protocol)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

/* Small notification message */

function showToast(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

/* Project cards */

function renderProjects(filter = "all") {
  const grid = $("#projectGrid");
  const count = $("#projectCount");

  if (!grid || !count) return;

  const visible = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  count.textContent =
    `${String(visible.length).padStart(2, "0")} PROJECT` +
    (visible.length === 1 ? "" : "S");

  grid.innerHTML = visible.map((project, index) => {
    const demo = safeExternalUrl(project.demoUrl);
    const repo = safeExternalUrl(project.repoUrl);

    return `
      <article class="project-card"
        style="animation-delay:${index * 70}ms">

        <div class="project-art art-${project.number}">
          <div class="art-glow"></div>
          <div class="art-grid"></div>

          <div class="art-window">
            <div class="window-bar">
              <i></i><i></i><i></i>
            </div>

            <div class="window-body">
              <span class="window-label">
                ${escapeHTML(project.artLabel)}
              </span>

              <div class="window-heading">
                ${project.artTitle}
              </div>

              <div class="window-lines">
                <span></span><span></span><span></span>
              </div>

              <span class="window-pill">
                ${escapeHTML(project.artTag)}
              </span>
            </div>
          </div>

          <span class="art-number">
            IA / ${project.number}
          </span>
        </div>

        <div class="project-card-top">
          <span>${escapeHTML(project.categoryLabel)}</span>
          <span class="status-label">
            ${escapeHTML(project.status)}
          </span>
        </div>

        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>

        <div class="project-card-actions">
          <button
            class="project-action case-open"
            type="button"
            data-project="${escapeHTML(project.id)}">
            Read project notes <span>↗</span>
          </button>

          <a class="project-action"
            ${
              demo
                ? `href="${escapeHTML(demo)}"
                   target="_blank"
                   rel="noopener noreferrer"`
                : `href="#contact" data-pending="demo"`
            }>
            ${demo ? "Live demo" : "Demo not published"}
            <span>↗</span>
          </a>

          ${
            repo
              ? `<a class="project-action"
                   href="${escapeHTML(repo)}"
                   target="_blank"
                   rel="noopener noreferrer">
                   Source code <span>↗</span>
                 </a>`
              : ""
          }
        </div>
      </article>
    `;
  }).join("");

  $$(".case-open", grid).forEach(button => {
    button.addEventListener("click", () => {
      openCase(button.dataset.project);
    });
  });

  $$('[data-pending="demo"]', grid).forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("This project does not have a published demo yet.");
    });
  });
}

/* Project details dialog */

function openCase(id) {
  const project = projects.find(item => item.id === id);

  if (!project) return;

  const detail = project.case;
  const content = $("#caseContent");
  const dialog = $("#caseDialog");

  if (!content || !dialog) return;

  content.innerHTML = `
    <p class="case-kicker">
      ${escapeHTML(project.number)} /
      ${escapeHTML(project.categoryLabel)}
    </p>

    <h2 id="caseTitle">${escapeHTML(project.title)}</h2>

    <p class="case-summary">
      ${escapeHTML(detail.summary)}
    </p>

    <div class="case-details">
      <article>
        <h3>The problem</h3>
        <p>${escapeHTML(detail.problem)}</p>
      </article>

      <article>
        <h3>The approach</h3>
        <p>${escapeHTML(detail.approach)}</p>
      </article>

      <article>
        <h3>Next milestones</h3>
        <ul>
          ${detail.next.map(item =>
            `<li>${escapeHTML(item)}</li>`
          ).join("")}
        </ul>
      </article>

      <article>
        <h3>Current status</h3>
        <p>${escapeHTML(project.status)}</p>
      </article>
    </div>

    <p class="case-warning">
      ${escapeHTML(detail.status)}
    </p>
  `;

  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();

  if (!$$("dialog").some(item => item.open)) {
    document.body.classList.remove("dialog-open");
  }
}

/* Light and dark themes */

function initTheme() {
  const toggle = $("#themeToggle");

  if (!toggle) return;

  const setTheme = theme => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("ia-theme", theme);
    } catch {
      // The theme still works if storage is unavailable.
    }

    toggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme"
    );

    const meta = $('meta[name="theme-color"]');

    if (meta) {
      meta.content = theme === "dark"
        ? "#090b0a"
        : "#f2f3ed";
    }
  };

  let savedTheme = "";

  try {
    savedTheme = localStorage.getItem("ia-theme") || "";
  } catch {
    // Use the HTML default if storage is unavailable.
  }

  setTheme(
    savedTheme ||
    document.documentElement.dataset.theme ||
    "dark"
  );

  toggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark"
        ? "light"
        : "dark";

    setTheme(nextTheme);
  });
}

/* Mobile navigation */

function initMobileNav() {
  const toggle = $("#menuToggle");
  const nav = $("#mobileNav");

  if (!toggle || !nav) return;

  const close = () => {
    nav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };

  toggle.addEventListener("click", () => {
    const opening = nav.hidden;

    nav.hidden = !opening;

    toggle.setAttribute(
      "aria-expanded",
      String(opening)
    );

    toggle.setAttribute(
      "aria-label",
      opening ? "Close navigation" : "Open navigation"
    );
  });

  $$("a", nav).forEach(link => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", event => {
    if (
      !nav.hidden &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      close();
    }
  });
}

/* Project category filters */

function initFilters() {
  $$(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter-button").forEach(item => {
        const active = item === button;

        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      renderProjects(button.dataset.filter);
    });
  });
}

/* Configure profile links */

function configureLink(selector, url, fallback = "#contact") {
  const link = $(selector);

  if (!link) return;

  const valid = safeExternalUrl(url);

  if (valid) {
    link.href = valid;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = fallback;

    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("Add your actual profile URL in script.js first.");
    });
  }
}

/* Email, social links and portrait */

function initContact() {
  const email = PORTFOLIO.email.trim();
  const emailCta = $("#emailCta");
  const copyButton = $("#copyEmail");

  if (emailCta && copyButton) {
    if (
      email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      !email.includes("YOUR_REAL_EMAIL")
    ) {
      emailCta.href = `mailto:${email}`;

      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(email);
          showToast("Email address copied.");
        } catch {
          showToast(`Email: ${email}`);
        }
      });
    } else {
      emailCta.href = "#";

      emailCta.addEventListener("click", event => {
        event.preventDefault();
        showToast("Add your real email in script.js to activate email contact.");
      });

      copyButton.addEventListener("click", () => {
        showToast("Add your real email address in script.js first.");
      });
    }
  }

  configureLink("#githubLink", PORTFOLIO.github);
  configureLink("#linkedinLink", PORTFOLIO.linkedin);

  const whatsapp = safeExternalUrl(PORTFOLIO.whatsapp);

  if (whatsapp) {
    $$("[data-whatsapp-link]").forEach(link => {
      try {
        const existing = new URL(link.href);
        const configured = new URL(whatsapp);

        if (existing.search) {
          configured.search = existing.search;
        }

        link.href = configured.href;
      } catch {
        link.href = whatsapp;
      }
    });
  }

  const portrait = $("#portraitImage");

  if (portrait && PORTFOLIO.portrait.trim()) {
    portrait.src = PORTFOLIO.portrait.trim();
  }

  if (portrait) {
    portrait.addEventListener("error", () => {
      portrait.alt =
        "Portrait could not load. Check the image path in script.js.";
      portrait.style.opacity = ".25";
    });
  }
}

/* Case-study and quick-navigation dialogs */

function initDialogs() {
  const caseDialog = $("#caseDialog");
  const commandDialog = $("#commandDialog");
  const closeButton = $("#closeDialog");

  if (caseDialog && closeButton) {
    closeButton.addEventListener("click", () => {
      closeDialog(caseDialog);
    });
  }

  [caseDialog, commandDialog].filter(Boolean).forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target === dialog) {
        closeDialog(dialog);
      }
    });

    dialog.addEventListener("close", () => {
      if (!$$("dialog").some(item => item.open)) {
        document.body.classList.remove("dialog-open");
      }
    });
  });

  const input = $("#commandInput");
  const list = $("#commandList");
  const hint = $("#commandHint");

  if (!commandDialog || !input || !list || !hint) return;

  const filter = query => {
    $$("button", list).forEach(button => {
      button.hidden = !button.textContent
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  const openCommand = () => {
    if (caseDialog?.open) caseDialog.close();

    commandDialog.showModal();
    document.body.classList.add("dialog-open");

    input.value = "";
    filter("");
    input.focus();
  };

  hint.addEventListener("click", openCommand);

  document.addEventListener("keydown", event => {
    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {
      event.preventDefault();

      if (commandDialog.open) {
        closeDialog(commandDialog);
      } else {
        openCommand();
      }
    }

    if (event.key === "Escape" && commandDialog.open) {
      closeDialog(commandDialog);
    }
  });

  input.addEventListener("input", () => {
    filter(input.value);
  });

  $$("button", list).forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      closeDialog(commandDialog);

      document.querySelector(target)?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth"
      });
    });
  });
}

/* Scroll progress and reveal animations */

function initScrollEffects() {
  const progress = $("#scrollProgress");

  if (progress) {
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      progress.style.width =
        `${max > 0 ? window.scrollY / max * 100 : 0}%`;
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true
    });
  }

  const items = $$(".reveal");

  if (
    "IntersectionObserver" in window &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => {
      item.classList.add("is-visible");
    });
  }
}

/* Start the portfolio */

function init() {
  renderProjects();
  initTheme();
  initMobileNav();
  initFilters();
  initContact();
  initDialogs();
  initScrollEffects();

  const year = $("#currentYear");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
