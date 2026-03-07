"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`relative z-10 mx-auto max-w-3xl transition-all duration-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="mb-4 font-mono text-sm text-primary">
          {"Hello, my name is"}
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          Raunak Bhattacharjee.
        </h1>
        <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl text-balance">
          I build efficient systems.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          Software engineer specializing in{" "}
          <span className="text-foreground font-medium">C++</span>,{" "}
          <span className="text-foreground font-medium">
            algorithms &amp; data structures
          </span>
          , and{" "}
          <span className="text-foreground font-medium">
            high-performance computing
          </span>
          . Passionate about machine learning, solving problems, and
          organizing large-scale technical events.
        </p>

        <div className="mt-8 flex items-center gap-5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/Raunak-B"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/raunak-bhattacharjee-83257b273/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:raunakbhattacharjee7@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
