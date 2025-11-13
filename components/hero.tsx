"use client"

interface HeroProps {
  onOpenContactForm: () => void
}

export default function Hero({ onOpenContactForm }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-bg.png)",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Background Network Pattern */}
      <div className="absolute inset-0 bg-network-pattern pointer-events-none"></div>

      <div className="relative mx-auto max-w-4xl">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-2 border border-blue-100">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-slate-700">10+ years of industry experience</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 text-balance">
          Smart Data.
          <br />
          <span className="text-blue-600">Smarter Outreach.</span>
          <br />
          Solid Results.
        </h1>

        {/* Subheadline */}
        <p className="text-center text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Access verified B2B databases and unlock lead-generation opportunities with precision targeting. Streamline
          your sales pipeline and close deals faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenContactForm}
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition shadow-premium"
          >
            Get Your Quote
          </button>
          <button
            onClick={onOpenContactForm}
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition"
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  )
}
