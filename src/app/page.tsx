export default function Home() {
  const interests = [
    { label: "Texas Longhorns Football", bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", hover: "hover:bg-orange-600" },
    { label: "Big Green Egg", bg: "bg-green-50", border: "border-green-200", text: "text-green-700", hover: "hover:bg-green-600" },
    { label: "SaaS", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", hover: "hover:bg-blue-600" },
    { label: "Statistics", bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", hover: "hover:bg-purple-600" },
    { label: "Indie Rock", bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", hover: "hover:bg-rose-600" },
    { label: "Personal Finance", bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", hover: "hover:bg-emerald-600" },
    { label: "Cycling", bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", hover: "hover:bg-sky-600" },
    { label: "Coffee", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", hover: "hover:bg-amber-600" },
    { label: "Golf", bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700", hover: "hover:bg-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Location & Contact Icons */}
        <div className="mb-8 flex flex-col items-end gap-2">
          <p className="text-sm text-slate-400">Austin, TX</p>
          <nav className="flex gap-3">
          <a
            href="mailto:tkasinger@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-teal-600 hover:text-teal-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" />
            </svg>
          </a>
          <a
            href="https://github.com/rhquant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-teal-600 hover:text-teal-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/travis-kasinger-65514a31/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-teal-600 hover:text-teal-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.mixcloud.com/kravist/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mixcloud"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-colors hover:border-teal-600 hover:text-teal-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </a>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-400">
            Your Photo
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Hello, I&apos;m Travis
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
              Passionate about problem solving. I&apos;m at my best when
              achieving my goals and supporting the goals of others. Building
              the future of GTM Operations.
            </p>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">Interests</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest.label}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:text-white ${interest.bg} ${interest.border} ${interest.text} ${interest.hover}`}
              >
                {interest.label}
              </span>
            ))}
          </div>
        </section>

        {/* Background Section */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">Background</h2>
          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-teal-600 py-2 pl-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Director of North America Sales Operations
                  </h3>
                  <p className="text-sm text-slate-500">Zendesk</p>
                </div>
                <span className="shrink-0 text-sm text-slate-400">
                  2020 — Present
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Building the revenue machine behind Zendesk&apos;s growth.
              </p>
            </div>
            <div className="border-l-2 border-teal-600 py-2 pl-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Senior Manager, Sales Operations
                  </h3>
                  <p className="text-sm text-slate-500">
                    GoDaddy (via acquisition)
                  </p>
                </div>
                <span className="shrink-0 text-sm text-slate-400">
                  2016 — 2020
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Built a sales ops team from zero. Stood up the analytics,
                designed the processes, shipped the tech stack.
              </p>
            </div>
            <div className="border-l-2 border-teal-600 py-2 pl-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Sales Operations Analyst
                  </h3>
                  <p className="text-sm text-slate-500">
                    Yodle (acquired by Web.com)
                  </p>
                </div>
                <span className="shrink-0 text-sm text-slate-400">
                  2014 — 2016
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Learned by doing: shipped BI dashboards from the analyst seat.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="p-6">
              <h3 className="font-semibold text-slate-800">Project One</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A brief description of what this project does and the
                technologies used to build it.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  React
                </span>
                <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-slate-800">Project Two</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A brief description of what this project does and the
                technologies used to build it.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  Next.js
                </span>
                <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900">Education</h2>
          <div className="mt-6">
            <div className="border-l-2 border-teal-600 py-2 pl-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-800">
                  The University of Texas at Austin
                </h3>
                <span className="shrink-0 text-sm text-slate-400">
                  2009 — 2013
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Bachelor in Economics, Minor in Mathematics
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
