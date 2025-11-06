import { Database, Target, TrendingUp, Zap } from "lucide-react"

const benefits = [
  {
    icon: Database,
    title: "Verified Database",
    description: "Access to 50M+ verified B2B contacts with real-time data updates and accuracy guarantees.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Advanced filtering and segmentation to reach the right decision-makers at scale.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Increase conversion rates by 3-5x with high-quality leads and actionable insights.",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Seamless API integration and direct CRM sync for immediate campaign launch.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 text-balance">
            Why Choose <span className="text-blue-600">MQL</span> Experts?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to build a world-class lead generation engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-blue-200 hover:shadow-premium transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
