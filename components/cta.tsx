"use client"

interface CTAProps {
  onOpenContactForm: () => void
}

export default function CTA({ onOpenContactForm }: CTAProps) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 text-balance">
          Ready to transform your sales pipeline?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Get started with a personalized demo and discover how MQL Experts can help you reach the right
          decision-makers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenContactForm}
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition shadow-premium"
          >
            Request a Qoute
          </button>
          <button
            onClick={onOpenContactForm}
            className="rounded-full bg-slate-900 px-8 py-3 text-base font-semibold text-white hover:bg-slate-800 transition"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
