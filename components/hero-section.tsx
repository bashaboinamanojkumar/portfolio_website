import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <p className="text-primary font-mono text-sm">Hi, my name is</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Manoj Kumar Bashaboina
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build intelligent systems using Machine Learning, Deep Learning, and RAG architectures.
              Previously, I engineered scalable GenAI solutions at <span className="text-primary">Cognida.ai</span> using
              LlamaIndex and Pinecone. Currently pursuing my Master&apos;s in Data Science at the{" "}
              <span className="text-primary">University of Maryland, College Park.</span>
            </p>
            {/* Social Links - Updated with Manoj's actual links */}
            <div className="flex items-center gap-6 pt-4">
              <Link
                href="https://github.com/bashaboinamanojkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/manojkumarbashaboina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="mailto:manoj7@umd.edu"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>

            <Link href="#experience" className="inline-flex items-center gap-2 mt-8 text-primary hover:underline">
              <span>View my work</span>
              <ArrowDown size={16} />
            </Link>
          </div>

          {/* Right Column - Avatar/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary border-2 border-primary/20 overflow-hidden">
                <img
                  src="/professional-portrait-of-data-scientist-man.jpg"
                  alt="Manoj Kumar Bashaboina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
