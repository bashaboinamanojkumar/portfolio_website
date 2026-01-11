import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogs = [
  {
    title: "Building RAG Pipelines with Elasticsearch and BERTopic",
    description:
      "A comprehensive guide to implementing Retrieval-Augmented Generation systems with hybrid search combining BM25 and dense vectors for improved relevance.",
    date: "Aug 2025",
    readTime: "10 min read",
    url: "#",
    tags: ["RAG", "Elasticsearch", "NLP"],
  },
  {
    title: "Time Series Forecasting with LSTM Networks",
    description:
      "Deep dive into building LSTM models for financial time-series prediction, including feature engineering with technical indicators like RSI and MACD.",
    date: "Jan 2025",
    readTime: "12 min read",
    url: "#",
    tags: ["Deep Learning", "LSTM", "Finance"],
  },
  {
    title: "Ensemble Methods for Price Prediction: XGBoost vs LightGBM",
    description:
      "Comparing gradient boosting frameworks for regression tasks, with GPU acceleration and hyperparameter optimization strategies.",
    date: "Dec 2024",
    readTime: "8 min read",
    url: "#",
    tags: ["XGBoost", "LightGBM", "ML"],
  },
  {
    title: "Portfolio Optimization with Black-Litterman Model",
    description:
      "Implementing modern portfolio theory with investor views integration, including Mean-CVaR optimization for downside risk reduction.",
    date: "Nov 2024",
    readTime: "15 min read",
    url: "#",
    tags: ["Finance", "Optimization", "Python"],
  },
]

export function BlogsSection() {
  return (
    <section id="blogs" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground">Blogs</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.url}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {blog.date}
                </span>
                <span>·</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {blog.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{blog.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline">
            View all posts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
