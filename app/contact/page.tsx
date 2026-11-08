import { Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact | Ruwantha Harshamal",
  description:
    "Get in touch for security consulting, penetration testing engagements, or collaborations.",
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14171f] py-12 sm:py-16">
      {/* Bottom Atmospheric Mountains Backdrop matching Screen 06 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] z-0 overflow-hidden">
        <img
          src="/images/crimson-mountains.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-55 img-champagne"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171f]/75 via-[#14171f]/40 to-[#14171f]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">
        {/* Header matching Screen 06 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-6 border-b border-[#2e364a]">
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-mono font-semibold tracking-[0.18em] text-[#c8a679] uppercase">
              // CONTACT
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Get In Touch
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#d5dae6] leading-relaxed">
              Open to opportunities, freelance security assessments, and collaborations. Let&apos;s
              connect and secure things.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Contact Information (Left) | Send a Message (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6 lg:pr-8 lg:border-r lg:border-[#2e364a]">
            <h2 className="text-sm sm:text-base font-bold text-white">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:ruwanharsha01@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 text-[#e2bf8d]">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white">Email</div>
                  <div className="text-xs sm:text-sm text-[#d5dae6] group-hover:text-[#e2bf8d] transition-colors">
                    ruwanharsha01@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ruwantha-harshamal"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5 text-[#e2bf8d]">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-xs sm:text-sm text-[#d5dae6] group-hover:text-[#e2bf8d] transition-colors">
                    linkedin.com/in/ruwantha-harshamal
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
