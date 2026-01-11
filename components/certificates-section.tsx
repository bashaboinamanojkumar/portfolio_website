import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const certificates = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2023",
    credentialUrl: "https://www.ibm.com/training/",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2022",
    credentialUrl: "https://www.coursera.org",
  },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Certificates</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <Link
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="text-primary" size={20} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {cert.title}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1 font-mono">{cert.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
