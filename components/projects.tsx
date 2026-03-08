"use client"

import { ExternalLink, Github, Folder } from "lucide-react"

// We put your hardcoded projects right back where they belong!
const projects = [
  {
    title: "Fake News Detector",
    description:
      "This model can detect whether a partiicuar peice of news is fake or not in Hindi, English and Bengali. Having an accuracy of 88%, it can detect most fake news accurately.",
    tags: ["Python", "Algorithms", "Machine learning", "collab"],
    github: "#",
    live: "#",
  },
  {
    title: "EDA on Cardiovascular diseases dataset",
    description:
      "By analysing the symptoms most commonly occuring in patients suffering form cardiovascular diseases, we could accurate diagnose whether or not someone had any heart issues.",
    tags: ["Python", "Algorithms", "Machine learning", "collab"],
    github: "#",
  },
  {
    title: "Portfolio-website",
    description:
      "Gives the details about me, all my projects and how I built them.",
    tags: ["C++", "Data Structures", "Algorithms", "CP"],
    github: "#",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <article
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Folder className="h-10 w-10 text-primary" />
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tags.map((tag: string) => (
          <li
            key={tag}
            className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  ) // <--- Fixed the missing closing parenthesis here!
}

// We removed the props here so it just uses your local array above
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="whitespace-nowrap text-2xl font-bold text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-lg text-primary sm:text-xl">
              01.
            </span>
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}