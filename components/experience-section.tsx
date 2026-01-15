import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "March 2025 — Present",
    title: "Graduate Researcher (Do Quantum)",
    company: "University of Maryland, College Park",
    companyUrl: "https://umd.edu",
    location: "Maryland, US",
    description:
      "Engineered a portfolio optimization system processing 750k+ data points, utilizing Python and Parquet caching to reduce data reload latency by 5x. Developed predictive models using LightGBM to analyze market momentum and sentiment, integrating Black-Litterman optimization. Implemented Deep Learning and Mean-CVaR optimization algorithms to reduce downside risk by 20%.",
    technologies: ["Python", "LightGBM", "Deep Learning", "Parquet", "Black-Litterman"],
  },
  {
    period: "July 2025 — Aug 2025",
    title: "Data Science and Technology Intern",
    company: "Connyct",
    companyUrl: "https://connyct.com",
    location: "Maryland, US",
    description:
      "Built automated data ingestion pipelines using Python (Selenium, BeautifulSoup) to scrape and structure unstructured data from diverse web sources. Designed robust error handling and scheduling protocols to maintain reliable data collection. Performed data normalization and schema alignment for large-scale datasets.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Data Pipelines", "ETL"],
  },
  {
    period: "Jun 2023 - Jul 2024",
    title: "Machine Learning Engineer",
    company: "Cognida.ai",
    companyUrl: "https://cognida.ai",
    location: "Hyderabad, Telangana, India",
    description:
      "Leveraged Generative AI and RAG (Retrieval-Augmented Generation) to build scalable solutions using LlamaIndex and Pinecone. Developed and optimized machine learning models using PyTorch and SQL for data management.",
    technologies: ["Machine Learning", "PyTorch", "SQL", "Generative AI", "RAG", "LlamaIndex", "Pinecone"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-muted-foreground font-mono">{exp.period}</div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {exp.title} ·{" "}
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    {exp.company}
                    <ExternalLink size={14} />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground/70">{exp.location}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
