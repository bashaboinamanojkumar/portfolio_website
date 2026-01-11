import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Data Science",
    institution: "University of Maryland, College Park",
    location: "USA",
    period: "Aug 2024 — May 2026",
    description:
      "Pursuing advanced studies in Data Science with focus on Machine Learning, Deep Learning, and Statistical Modeling.",
    achievements: ["GPA: 3.9/4.0", "Graduate Researcher"],
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Vasavi College of Engineering",
    location: "Hyderabad, India",
    period: "Aug 2019 — May 2023",
    description: "Comprehensive foundation in computer science, algorithms, data structures, and software engineering.",
    achievements: ["GPA: 8.35/10"],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Education</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-mono text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
