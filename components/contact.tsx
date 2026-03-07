"use client"

import { useState, type FormEvent } from "react"
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="whitespace-nowrap text-2xl font-bold text-foreground sm:text-3xl">
            <span className="mr-2 font-mono text-lg text-primary sm:text-xl">
              03.
            </span>
            Get In Touch
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-10 max-w-lg text-muted-foreground leading-relaxed">
          Whether you have a question, want to collaborate on an open-source
          project, or just want to say hello, feel free to reach out. I&apos;ll
          get back to you as soon as I can.
        </p>

        <div className="mb-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            hello@alexchen.dev
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            San Francisco, CA
          </span>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 rounded-lg border border-primary/30 bg-card p-10">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Message Sent
            </h3>
            <p className="text-muted-foreground">
              Thanks for reaching out! I&apos;ll respond within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 font-mono text-sm text-primary underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-lg flex-col gap-5 text-left"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What's this about?"
                className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-primary bg-transparent px-8 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
