// src/components/features.tsx
import { CheckCircle2 } from "lucide-react"

const featureCategories = [
  {
    title: "Verified B2B Database",
    features: [
      "100% verified business email & phone data",
      "Updated every 30 days for maximum accuracy",
      "Access to decision-makers, CXOs & business owners",
      "Data filtered by industry, company size & location",
    ],
  },
  {
    title: "Built for Marketing & Sales Teams",
    features: [
      "Ready-to-use data for email marketing & telecalling",
      "Easy CSV/Excel export for campaigns",
      "Compatible with major CRM tools (HubSpot, Zoho, etc.)",
      "Dedicated data support & customization on request",
    ],
  },
  {
    title: "Affordable & Scalable Solutions",
    features: [
      "Flexible pricing — buy only what you need",
      "Custom data packages for different industries",
      "Bulk business database with instant delivery",
      "Trusted by 500+ marketing teams & agencies",
    ],
  },
  {
    title: "Industries We Cover",
    features: [
      "Real Estate, Finance, IT, Healthcare, Education",
      "Manufacturing, Logistics & more niche verticals",
      "Verified leads segmented by region & company type",
      "B2B data tailored for Indian & global markets",
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 text-balance">
            Verified B2B Data That Delivers <span className="text-blue-600">Real Results.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From email campaigns to telecalling — MQL Experts provides
            accurate, ready-to-use business data to help you reach real decision-makers faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featureCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
