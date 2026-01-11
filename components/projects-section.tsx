import { Github, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "UMD Events Dialogue System (RAG & Search)",
    description:
      "Architected a Retrieval-Augmented Generation (RAG) pipeline utilizing Elasticsearch-native hybrid retrieval (BM25 + Dense Vectors) to improve query relevance for campus events. Implemented unsupervised topic modeling (BERTopic) and Cross-Encoder Ranking for a content-based Recommender System. Achieved near-perfect Context Precision and Recall on RAGAS evaluation metrics.",
    technologies: ["Python", "Elasticsearch", "Docker", "BERTopic", "RAG"],
    github: "https://github.com/bashaboinamanojkumar",
    date: "Aug 2025",
    image: "/rag-search-system-dashboard-with-elasticsearch.jpg",
  },
  {
    title: "Bitcoin Analysis Chatbot (RAG & Forecasting)",
    description:
      "Developed an advanced financial chatbot using LLaMA3 and Ollama, integrating real-time market data APIs and technical indicators (RSI, MACD) for actionable trading insights. Built a TensorFlow/Keras LSTM model for short-term time-series forecasting and engineered a FAISS-based vector retrieval system for low-latency semantic search.",
    technologies: ["LLaMA3", "TensorFlow", "FAISS", "Streamlit", "Plotly"],
    github: "https://github.com/bashaboinamanojkumar",
    date: "Jan 2025",
    image: "/bitcoin-cryptocurrency-trading-dashboard-with-char.jpg",
  },
  {
    title: "Vehicle Sales Price Prediction",
    description:
      "Developed an end-to-end predictive modeling pipeline for vehicle pricing, implementing advanced data preprocessing including IQR and Isolation Forest for outlier detection. Engineered ensemble regression models (XGBoost, Random Forest, LightGBM) with GPU acceleration. Achieved a 95% R² score with robust RMSE/MSE metrics validation.",
    technologies: ["Python", "XGBoost", "LightGBM", "Scikit-Learn", "GPU"],
    github: "https://github.com/bashaboinamanojkumar",
    date: "Dec 2024",
    image: "/vehicle-price-prediction-machine-learning-dashboar.jpg",
  },
]

const otherProjects = [
  {
    title: "Portfolio Optimization System",
    description: "Quantum-inspired portfolio optimization processing 750k+ data points with Black-Litterman model.",
    technologies: ["Python", "LightGBM", "Parquet"],
    github: "https://github.com/bashaboinamanojkumar",
  },
  {
    title: "Automated Data Pipelines",
    description: "Web scraping and ETL pipelines with robust error handling and scheduling protocols.",
    technologies: ["Selenium", "BeautifulSoup", "Python"],
    github: "https://github.com/bashaboinamanojkumar",
  },
  {
    title: "LSTM Time Series Forecasting",
    description: "Deep learning model for short-term financial time series predictions.",
    technologies: ["TensorFlow", "Keras", "LSTM"],
    github: "https://github.com/bashaboinamanojkumar",
  },
  {
    title: "Cross-Encoder Ranking System",
    description: "Content-based recommender system with BERTopic for topic modeling.",
    technologies: ["BERTopic", "Cross-Encoder", "Python"],
    github: "https://github.com/bashaboinamanojkumar",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-colors" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-lg border border-border"
                  />
                </div>
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <div className="flex items-center gap-3">
                  <p className="text-primary font-mono text-sm">Featured Project</p>
                  <span className="text-muted-foreground/50 font-mono text-xs">{project.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg border border-border shadow-lg">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex items-center gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </Link>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
