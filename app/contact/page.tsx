import { Mail, MessageSquare } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

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
              href="https://github.com/yourusername" // User provided generic URL, adapt if known
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                <FaGithub className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm">github.com/yourusername</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input 
                id="name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input 
                id="email"
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="How can I help you?"
              />
            </div>
            
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
