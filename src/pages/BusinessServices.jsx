import { Link } from 'react-router-dom'

const services = [
  {
    icon: '📊',
    title: 'Research & Data Services',
    text: 'Research, information gathering and data support to help individuals and businesses make better decisions.',
  },
  {
    icon: '📱',
    title: 'Digital & Social Media',
    text: 'Practical digital support, content planning and social media solutions for growing brands.',
  },
  {
    icon: '📝',
    title: 'Business Documentation',
    text: 'Professional support with business documents, profiles, proposals and other business materials.',
  },
  {
    icon: '🚀',
    title: 'Business Growth Support',
    text: 'Ideas, strategy and practical guidance for entrepreneurs looking to develop and grow.',
  },
  {
    icon: '💡',
    title: 'Business Consulting',
    text: 'Clear, practical guidance to help you evaluate opportunities and make informed business decisions.',
  },
  {
    icon: '🤝',
    title: 'Professional Support',
    text: 'Flexible support tailored to your specific business or project requirements.',
  },
]

function BusinessServices() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">

      {/* Hero */}
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
                Annuri Business Services
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Helping ideas become opportunities.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Practical business, digital and professional support for
                entrepreneurs, individuals and growing organisations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#business-services"
                  className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white"
                >
                  Explore Services
                </a>

                <a
                  href="#business-contact"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white"
                >
                  Work With Us
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur lg:p-10">
              <div className="text-7xl">💼</div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Strategy • Support • Growth
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Build with clarity.
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                Whether you're starting something new or improving an existing
                business, the right support can make the journey easier.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section id="business-services" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Support for your next business move
            </h2>

            <p className="mt-4 text-gray-600">
              Flexible services designed around real business needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
                  href="#business-contact"
                  className="mt-5 inline-block text-sm font-bold text-[#0B5D4B]"
                >
                  Discuss your needs →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Who We Help
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Support for people at different stages.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                You don't have to have a large company before seeking
                professional support. Annuri works with individuals,
                entrepreneurs and growing businesses.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['🌱', 'Startups', 'Turning early ideas into practical plans.'],
                ['👩🏽‍💼', 'Entrepreneurs', 'Supporting day-to-day business growth.'],
                ['🏢', 'Businesses', 'Improving digital and business operations.'],
                ['✨', 'Individuals', 'Professional support for personal projects.'],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-[#E8F0EC] p-6"
                >
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-4 font-bold text-[#0B5D4B]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="business-contact" className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Have a business idea or challenge?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
            Tell us what you're working on and what kind of support you need.
            We'll discuss the best way forward.
          </p>

          <a
            href="mailto:annuriglobalservices@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-white"
          >
            Contact Annuri
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold">ANNURI BUSINESS SERVICES</p>
          <p className="mt-2 text-sm text-white/60">
            A division of Annuri Global Services
          </p>
        </div>
      </footer>

    </div>
  )
}

export default BusinessServices
