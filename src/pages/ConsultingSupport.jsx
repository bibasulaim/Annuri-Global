import { Link } from 'react-router-dom'

const supportServices = [
  {
    icon: '🧭',
    title: 'Personal Guidance',
    text: 'Practical guidance to help you understand your options, plan your next step and make informed decisions.',
  },
  {
    icon: '💼',
    title: 'Business Consultation',
    text: 'Clear and practical consultation for entrepreneurs, small businesses and people developing new ideas.',
  },
  {
    icon: '🌍',
    title: 'Travel & Opportunity Guidance',
    text: 'Support in understanding travel plans, international opportunities and the steps involved.',
  },
  {
    icon: '📋',
    title: 'Application Support',
    text: 'Guidance with preparing information, documents and applications for relevant opportunities.',
  },
  {
    icon: '🔎',
    title: 'Research & Information',
    text: 'Research support to help you find, compare and understand useful information before making a decision.',
  },
  {
    icon: '🤝',
    title: 'General Consulting',
    text: 'Have a specific challenge? Tell us what you need and we can discuss the most suitable way to support you.',
  },
]

function ConsultingSupport() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">

      <section className="bg-[#0B5D4B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

          <Link
            to="/"
            className="mb-8 inline-block text-sm font-semibold text-[#C9A227]"
          >
            ← Back to Annuri Global Services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Annuri Consulting & Support
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Clear guidance for your next step.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Practical consulting, research and support services designed
                to help individuals and businesses understand their options
                and move forward with greater clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#support-services"
                  className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white"
                >
                  Explore Support
                </a>

                <a
                  href="mailto:annuriglobalservices@gmail.com"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur lg:p-10">
              <div className="text-7xl">💡</div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Understand • Plan • Move Forward
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Better information. Better decisions.
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                We help you make sense of information and identify practical
                next steps based on your situation.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="support-services" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Support
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Practical support built around your needs
            </h2>

            <p className="mt-4 text-gray-600">
              Whether you need information, direction or professional support,
              we're here to help you understand the next move.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#E8F0EC] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.text}
                </p>

                <a
                  href="mailto:annuriglobalservices@gmail.com"
                  className="mt-5 inline-block text-sm font-bold text-[#0B5D4B]"
                >
                  Discuss your needs →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-[#E8F0EC] p-7">
              <div className="text-3xl">✓</div>
              <h3 className="mt-4 font-bold text-[#0B5D4B]">
                Practical
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Advice focused on what you can actually do next.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E8F0EC] p-7">
              <div className="text-3xl">🔎</div>
              <h3 className="mt-4 font-bold text-[#0B5D4B]">
                Research-Based
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We help you understand information before making important
                decisions.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E8F0EC] p-7">
              <div className="text-3xl">🤝</div>
              <h3 className="mt-4 font-bold text-[#0B5D4B]">
                People-Focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every enquiry is approached with clarity and professionalism.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Need Support?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tell us what you're trying to achieve.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
            Send us an email with a brief description of what you need help
            with. We'll review your enquiry and discuss the appropriate next
            step.
          </p>

          <a
            href="mailto:annuriglobalservices@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-white"
          >
            Email Annuri
          </a>

        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl border border-[#C9A227]/30 bg-[#E8F0EC] p-6 text-sm leading-6 text-gray-600">
            <strong className="text-[#0B5D4B]">
              Important:
            </strong>{' '}
            Annuri provides information, guidance and support services.
            Specific outcomes such as employment, visa approval, admission,
            travel approval or business success are not guaranteed.
          </div>
        </div>
      </section>

      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold">ANNURI CONSULTING & SUPPORT</p>
          <p className="mt-2 text-sm text-white/60">
            A division of Annuri Global Services
          </p>
        </div>
      </footer>

    </div>
  )
}

export default ConsultingSupport
