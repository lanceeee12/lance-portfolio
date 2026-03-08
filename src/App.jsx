import React from "react";

const stats = [
  { value: "2,000+", label: "Enterprise migrations delivered" },
  { value: "$14M+", label: "Annual contract value migrated" },
  { value: "159%", label: "Peak quarterly performance" },
  { value: "$217K+", label: "Partner rebate revenue influenced" },
];

const experiences = [
  {
    role: "Team Lead: Data Operations & Marketplace Analyst",
    company: "Softchoice, A WWT Company",
    dates: "2023 – Present · Remote, Calgary, AB",
    highlights: [
      "Directed enterprise SaaS migrations across Government, Education, and Commercial sectors, moving $14M+ in annual contract value.",
      "Delivered 2,000+ subscription transitions with zero data loss and 100% QA accuracy.",
      "Designed scalable workflows for multi-tenant, cross-currency, and high-volume accounts; removed 50+ systemic bottlenecks.",
      "Automated entitlement validation and compliance checks via API integrations, improving throughput and reducing risk.",
      "Served as escalation lead across Marketplace, IT, Master Data, Sales, and Vendor stakeholders.",
      "Built AI-assisted internal tools using LLM APIs to accelerate documentation, validation, and reconciliation.",
      "Led onboarding and capability development for 5+ team members to standardize execution quality.",
    ],
  },
  {
    role: "Flight Crew Scheduler",
    company: "Lynx Air",
    dates: "2023 · Calgary, AB",
    highlights: [
      "Delivered 95% of crew schedules on-time without adjustments, supporting uninterrupted operations.",
      "Resolved an average of 10 monthly scheduling issues while minimizing disruption.",
      "Coordinated 15+ monthly shift trades with zero operational impact.",
    ],
  },
  {
    role: "Business Development Manager",
    company: "Globe Telecom",
    dates: "2021 – 2022 · Philippines",
    highlights: [
      "Managed a portfolio of 350+ VIP enterprise accounts, improving retention and operational efficiency.",
      "Strengthened lifecycle relationships and created a repeatable engagement rhythm with key stakeholders.",
      "Built a foundation in telecom data systems and customer operations.",
    ],
  },
  {
    role: "Charter Pilot",
    company: "Cebu Aero Flying Club Inc.",
    dates: "2019 – 2020 · Philippines",
    highlights: [
      "Operated charter flights for tourism using a C-172 with a focus on safety and customer experience.",
    ],
  },
];

const projects = [
  {
    title: "AI-Assisted Migration Toolkit",
    description:
      "Built LLM-powered helpers for documentation drafting, structured validation checks, and cross-platform reconciliation — reducing manual effort while improving consistency.",
  },
  {
    title: "Marketplace Governance Playbook",
    description:
      "Implemented standardized entitlement validation, compliance checks, and escalation routing to protect data integrity at scale.",
  },
  {
    title: "Enterprise Migration Factory",
    description:
      "Designed repeatable, multi-tenant migration workflows that supported federal, cross-currency, and high-volume accounts with zero data loss.",
  },
  {
    title: "Operational Bottleneck Elimination",
    description:
      "Led root-cause analysis across 50+ systemic issues, improving SLA adherence and program velocity.",
  },
];

const skills = [
  {
    category: "CRM & ERP",
    items: ["Salesforce", "SAP CRM", "SAP ERP", "Atlassian", "AppDirect"],
  },
  {
    category: "APIs & Automation",
    items: ["REST APIs", "JSON", "API Integration", "Workflow Automation", "Adobe APIs"],
  },
  {
    category: "AI Automation",
    items: ["LLM APIs (ChatGPT, Claude)", "OpenClaw", "Clawbot", "Zapier", "Vibe Code", "Lovable"],
  },
  {
    category: "Data & Reporting",
    items: ["Power BI", "Microsoft Excel"],
  },
  {
    category: "Programming & SaaS Tools",
    items: ["JavaScript", "SaaS Platforms"],
  },
];

const achievements = [
  "2,000+ enterprise migrations delivered with zero data loss and 100% QA accuracy.",
  "$14M+ in annual contract value transitioned across public and private sector accounts.",
  "159% peak quarterly performance, driving $217K+ in rebate revenue.",
  "50+ systemic bottlenecks removed through root-cause analysis and process redesign.",
  "Automated compliance and entitlement validation to increase throughput and reduce risk.",
];

const valueProps = [
  {
    title: "Enterprise-scale migration leadership",
    detail:
      "I de-risk complex SaaS transitions by combining precise QA, resilient workflows, and cross-functional coordination.",
  },
  {
    title: "Automation that unlocks velocity",
    detail:
      "API-driven validation and AI-assisted tooling turn manual checks into reliable, scalable systems.",
  },
  {
    title: "Operators’ mindset, executive clarity",
    detail:
      "I translate ambiguity into measurable outcomes, balancing stakeholder priorities with operational integrity.",
  },
];

const proofMetrics = [
  { label: "Migration accuracy", value: 100, display: "100% QA accuracy" },
  { label: "Performance vs. target", value: 159, display: "159% peak attainment" },
  { label: "Programs delivered", value: 95, display: "95% on-time schedules" },
  { label: "Rebate impact", value: 75, display: "$217K+ revenue influence" },
];

const testimonials = [
  {
    quote:
      "“Add a client or leader quote here that speaks to your leadership and impact.”",
    name: "Name, Title",
    context: "Company / Team",
  },
  {
    quote:
      "“A second endorsement strengthens credibility — highlight trust, precision, or execution.”",
    name: "Name, Title",
    context: "Company / Team",
  },
  {
    quote:
      "“Optional: a peer testimonial showing cross-functional partnership.”",
    name: "Name, Title",
    context: "Company / Team",
  },
];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">LP</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#impact">Impact</a>
            <a href="#projects">Initiatives</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Team Lead · SaaS Marketplace & Data Operations</p>
            <p className="name-mark">Lance Perez</p>
            <h1>
              Enterprise SaaS migrations,
              <span> automated at scale.</span>
            </h1>
            <p className="lead">
              I lead high-volume, high-stakes platform transitions across CRM and
              reseller ecosystems, pairing API-driven automation with pragmatic
              operational leadership. 2,000+ migrations delivered, $14M+ ACV
              moved, and zero data loss.
            </p>
            <div className="cta-group">
              <a className="btn primary" href="/LancePerez_Resume.pdf" download>
                Download Resume
              </a>
              <a className="btn ghost" href="#contact">
                Let’s Talk
              </a>
            </div>
            <div className="trust-line">
              <span>Based in Canada · Permanent Resident</span>
              <span>Open to leadership roles in SaaS, data ops, or automation</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="badge">Impact Snapshot</div>
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Section id="homepage" eyebrow="Homepage" title="The value I bring to enterprise SaaS programs">
          <div className="value-grid">
            {valueProps.map((item) => (
              <article key={item.title} className="card value">
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow="About" title="Operational leader for complex SaaS ecosystems">
          <div className="split">
            <p>
              I specialize in leading large-scale SaaS platform transformations
              where precision, automation, and cross-functional alignment are
              non-negotiable. My background blends marketplace governance, API
              integrations, and AI-enabled workflow optimization with hands-on
              people leadership.
            </p>
            <p>
              Whether migrating a federal account, standardizing a reseller
              workflow, or unblocking a critical escalation, I bring structure
              and clarity to complex environments. I’m known for scaling systems
              without sacrificing data integrity — and for building teams that
              execute with confidence.
            </p>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Proven delivery across industries">
          <div className="stack">
            {experiences.map((exp) => (
              <article key={exp.role} className="card">
                <div className="card-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="muted">{exp.company}</p>
                  </div>
                  <p className="muted">{exp.dates}</p>
                </div>
                <ul className="list">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="impact" eyebrow="Impact" title="Measurable results that move the needle">
          <div className="impact-grid">
            {achievements.map((item) => (
              <div key={item} className="impact-card">
                <span className="impact-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="chart-panel">
            <div className="chart-header">
              <h3>Operational performance snapshot</h3>
              <p className="muted">
                A quick visual of delivery quality, performance, and impact.
              </p>
            </div>
            <div className="bar-chart">
              {proofMetrics.map((metric) => (
                <div key={metric.label} className="bar-row">
                  <div className="bar-label">
                    <span>{metric.label}</span>
                    <span className="muted">{metric.display}</span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${Math.min(metric.value, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools, platforms, and technical strengths">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.category} className="skill-card">
                <h3>{skill.category}</h3>
                <div className="pill-group">
                  {skill.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Portfolio" title="Selected initiatives and work samples">
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project">
                <h3>{project.title}</h3>
                <p className="muted">{project.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="testimonials" eyebrow="Testimonials & Proof" title="Credibility that reinforces results">
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.quote} className="card testimonial">
                <p className="quote">{item.quote}</p>
                <div className="testimonial-meta">
                  <p>{item.name}</p>
                  <p className="muted">{item.context}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="muted testimonial-note">
            Replace the placeholders above with real endorsements from leaders,
            peers, or clients for maximum credibility.
          </p>
        </Section>

        <Section id="resume" eyebrow="Resume" title="Download the full resume">
          <div className="resume-callout">
            <p>
              Prefer a traditional format? Grab the PDF version for easy
              reference.
            </p>
            <a className="btn primary" href="/LancePerez_Resume.pdf" download>
              Download Resume PDF
            </a>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build what’s next">
          <div className="contact">
            <p>
              I’m open to leadership roles in SaaS, marketplace operations, data
              operations, and automation. If you’re hiring for someone who can
              scale complex systems and lead teams through change, let’s connect.
            </p>
            <div className="contact-cards">
              <a className="contact-card" href="mailto:lancebperez@gmail.com">
                <p className="muted">Email</p>
                <p>lancebperez@gmail.com</p>
              </a>
              <a className="contact-card" href="tel:+15879682153">
                <p className="muted">Phone</p>
                <p>+1 (587) 968-2153</p>
              </a>
              <div className="contact-card">
                <p className="muted">Location</p>
                <p>Canada · Permanent Resident</p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>© 2026 Lance Perez. Built for impact.</p>
      </footer>
    </div>
  );
}

export default App;
