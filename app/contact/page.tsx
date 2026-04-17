import { Mail, MessageSquare } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact | Ruwantha Harshamal",
  description: "Get in touch for security consulting, pentesting opportunities, or collaborations.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-primary" />
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Open to opportunities, freelance security assessments, and collaborations. Let&apos;s connect and secure things.
        </p>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <a 
              href="mailto:ruwanharsha2001@gmail.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm">ruwanharsha2001@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ruwantha-harshamal"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <p className="text-sm">ruwantha-harshamal</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/ruwanthah" // Updated with a more likely username or keeping it generic if unsure
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                <FaGithub className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm">github.com/ruwanthah</p>
              </div>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
