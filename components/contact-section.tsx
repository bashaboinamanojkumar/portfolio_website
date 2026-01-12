import { Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-primary font-mono text-sm mb-4">{"What's Next?"}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{"Let's Connect"}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          {
            "I'm actively seeking opportunities in Data Science and AI Engineering. Whether you have a role in mind, a project idea, or just want to discuss ML and AI, feel free to reach out!"
          }
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="mailto:manoj7@umd.edu">
              <Mail size={18} />
              Say Hello
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <Link href="https://linkedin.com/in/manojkumarbashaboina" target="_blank" rel="noopener noreferrer">
              <Send size={18} />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={16} />
          <span>College Park, Maryland, USA</span>
        </div>


      </div>
    </section>
  )
}
