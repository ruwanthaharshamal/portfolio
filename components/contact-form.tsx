"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#1d222e]/95 border border-[#2e364a] p-8 text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-[#2a251d] border border-[#4f4230] text-[#e2bf8d] flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold font-serif text-white">Message Sent</h3>
        <p className="text-xs sm:text-sm text-[#d5dae6] max-w-md mx-auto">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono text-[#e2bf8d] hover:underline pt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm sm:text-base font-bold text-white">
        Send a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-[#1d222e]/95 border border-[#2e364a] focus:border-[#e2bf8d] focus:outline-none text-xs sm:text-sm text-white placeholder:text-[#9da6b8] transition-colors"
          />
        </div>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-[#1d222e]/95 border border-[#2e364a] focus:border-[#e2bf8d] focus:outline-none text-xs sm:text-sm text-white placeholder:text-[#9da6b8] transition-colors"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-[#1d222e]/95 border border-[#2e364a] focus:border-[#e2bf8d] focus:outline-none text-xs sm:text-sm text-white placeholder:text-[#9da6b8] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-lg bg-[#e2bf8d] hover:bg-[#d4af7a] disabled:opacity-60 text-[#14171f] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-lg"
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}
