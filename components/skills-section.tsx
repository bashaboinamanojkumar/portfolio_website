const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LLMs", "RAG", "Recommender Systems", "Ranking", "A/B Testing", "Deep Learning"],
  },
  {
    title: "ML Libraries",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "XGBoost", "LightGBM", "BERTopic"],
  },
  {
    title: "Infrastructure & Cloud",
    skills: ["AWS (EC2, S3, SQS)", "Docker", "CI/CD", "Git", "Load Balancers"],
  },
  {
    title: "Data & Search",
    skills: ["Elasticsearch", "FAISS", "Parquet", "PostgreSQL", "ETL Pipelines"],
  },
  {
    title: "Tools & Visualization",
    skills: ["Tableau", "Plotly", "Streamlit", "Selenium", "BeautifulSoup", "Jupyter"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Skills & Tools</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-secondary rounded-md hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
