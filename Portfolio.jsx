import { useState } from "react";
import "./Portfolio.css";

const PROJECTS = [
  {
    tag: "FULL-STACK · IN PROGRESS",
    title: "FitCoach",
    description:
      "A coaching platform where trainers build weekly workout splits, assign them to clients, and track progress. Coaches plan muscle groups per day, add exercises with sets/reps/weight, and clone templates across clients.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT Auth"],
    links: [{ label: "View code", href: "https://github.com/Mohammedsohail-0" }],
  },
  {
    tag: "IOT · HARDWARE + SOFTWARE",
    title: "EAGLE",
    description:
      "Embedded Augmented Glass Lens Equipment — a wearable smart glass that pairs with a mobile app over Bluetooth to sync notifications in real time. Built across firmware, mobile, and cloud.",
    stack: ["Java", "XML", "Firebase", "Bluetooth"],
    links: [{ label: "View code", href: "https://github.com/Mohammedsohail-0/EAGLE" }],
  },
  {
    tag: "LANDING PAGE · CLIENT WORK",
    title: "OVRLOOX — Shape The Drop",
    description:
      "A conversion-focused landing page built for a dropshipping storefront, from layout to copy to responsive behavior across devices.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "View code", href: "https://github.com/Mohammedsohail-0/OVRLOOX-ShapeTheDrop" }],
  },
  {
    tag: "WEB APP",
    title: "doit",
    description:
      "A task management app focused on fast, frictionless input — add, organize, and clear tasks without the interface getting in the way.",
    stack: ["JavaScript", "React"],
    links: [{ label: "View code", href: "https://github.com/Mohammedsohail-0/doit" }],
  },
];

const SKILLS = [
  { group: "Frontend", items: ["React", "JavaScript", "Responsive CSS", "REST integration"] },
  { group: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT Auth"] },
  { group: "Other", items: ["Firebase", "Bluetooth/IoT", "Git", "API design"] },
];

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com"; // TODO: replace with real contact email

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore, email is still visible/selectable
    }
  };

  return (
    <div className="portfolio">
      {/* ---------- Nav ---------- */}
      <header className="nav">
        <span className="nav-mark">MS</span>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="hero">
        <p className="hero-eyebrow">Full-stack developer</p>
        <h1 className="hero-title">
          I build the systems behind
          <br />
          working products.
        </h1>
        <p className="hero-sub">
          Mohammed Sohail — React and Node.js developer. I've shipped a coaching
          platform, an IoT wearable, and client landing pages, each built to
          actually hold up under real use, not just look good in a screenshot.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#work">
            See the work
          </a>
          <a className="btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="work" id="work">
        <p className="section-label">Selected work</p>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-tag">{project.tag}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- About / Skills ---------- */}
      <section className="about" id="about">
        <p className="section-label">About</p>
        <div className="about-grid">
          <p className="about-text">
            I'm early in my professional career but I ship real, working
            software — not tutorials. FitCoach is a full coaching platform
            with authentication, role-based access, and a data model built
            around how trainers actually plan a week. EAGLE took me outside
            the browser entirely, into Bluetooth and embedded hardware. I
            learn fast, I debug carefully, and I care about the details that
            make software feel finished.
          </p>
          <div className="skills-list">
            {SKILLS.map((group) => (
              <div className="skills-group" key={group.group}>
                <p className="skills-group-label">{group.group}</p>
                <p className="skills-group-items">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="contact" id="contact">
        <p className="section-label">Get in touch</p>
        <h2 className="contact-title">Have a project in mind?</h2>
        <p className="contact-sub">
          I'm open to freelance work and new opportunities. The fastest way to
          reach me is email.
        </p>
        <button className="email-btn" onClick={handleCopyEmail}>
          {email}
          <span className="email-btn-hint">{copied ? "Copied!" : "Click to copy"}</span>
        </button>
        <a
          className="github-link"
          href="https://github.com/Mohammedsohail-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Mohammedsohail-0 →
        </a>
      </section>

      <footer className="footer">
        <p>Built by Mohammed Sohail.</p>
      </footer>
    </div>
  );
}
