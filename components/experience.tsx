"use client"

const experiences = [
  {
    period: "2025 — Present",
    role: "Technical Lead",
    organization: "TechFest Central Committee",
    description:
      "Spearheading the technical track for the university's flagship technical festival. Managing a team of 25+ members to organize coding contests, hackathons, and algorithm design challenges with 2000+ participants across 50 colleges.",
    tags: ["Leadership", "Event Management", "Competitive Programming", "Hackathons"],
  },
  {
    period: "2024 — 2025",
    role: "Sports Tournament Director",
    organization: "University Athletics Council",
    description:
      "Directed the annual inter-college sports tournament featuring 12 disciplines and 1500+ athletes. Built a custom bracket-management and score-tracking system in C++ to handle real-time standings and automated fixture generation.",
    tags: ["C++", "Tournament Systems", "Team Coordination", "Scheduling"],
  },
  {
    period: "2024 — Present",
    role: "Open Source Contributor",
    organization: "LLVM Project",
    description:
      "Contributing to LLVM compiler infrastructure, focusing on optimization passes for loop vectorization. Authored patches accepted upstream improving codegen performance by 8% on benchmark suites.",
    tags: ["C++", "Compilers", "LLVM", "Open Source"],
  },
  {
    period: "2023 — 2024",
    role: "Competitive Programming Mentor",
    organization: "ACM Student Chapter",
    description:
      "Mentored 40+ students for ICPC regionals, designing weekly problem sets covering advanced topics like centroid decomposition, heavy-light decomposition, and persistent data structures.",
    tags: ["Algorithms", "Mentoring", "ICPC", "Data Structures"],
  },
  {
    period: "2023",
    role: "Technical Fest Coordinator",
    organization: "CodeSprint Hackathon",
    description:
      "Organized a 36-hour national-level hackathon with 500+ participants and 80 teams. Managed sponsor relations, built the registration portal, and designed algorithmic challenge tracks.",
    tags: ["Event Planning", "Web Development", "Sponsorship", "Hackathon"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="whitespace-nowrap text-2xl font-bold text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-lg text-primary sm:text-xl">
              02.
            </span>
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[140px] md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <article key={i} className="group relative flex flex-col gap-4 md:flex-row">
                {/* Period */}
                <div className="shrink-0 md:w-[140px] md:text-right md:pr-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Dot on line */}
                <div className="absolute left-[-5px] top-1 hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:left-[135px] md:block" />

                {/* Content card */}
                <div className="flex-1 rounded-lg border border-border bg-card p-6 transition-all duration-300 group-hover:border-primary/40 md:ml-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                    <span className="text-primary">{" · "}</span>
                    <span className="text-primary">{exp.organization}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
