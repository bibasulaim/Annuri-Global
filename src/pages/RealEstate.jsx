import { Link } from 'react-router-dom'

const propertyTypes = [
  {
    icon: '🏠',
    title: 'Residential Property',
    text: 'Explore houses and residential opportunities for personal use or long-term plans.',
  },
  {
    icon: '🌳',
    title: 'Land & Plots',
    text: 'Consider land opportunities for building, farming, investment or future development.',
  },
  {
    icon: '🏢',
    title: 'Commercial Property',
    text: 'Explore property options that may support business, office, retail or other commercial needs.',
  },
]

const supportAreas = [
  'Understanding your property requirements',
  'Identifying suitable property opportunities',
  'General property search and coordination',
  'Supporting questions before making a decision',
  'Connecting enquiries with the appropriate next step',
  'Guidance for buyers and prospective investors',
]

function RealEstate() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">

      {/* Navigation */}
      <header className="border-b border-[#E8F0EC] bg-[#FAF8F1]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B5D4B] text-lg font-bold text-[#C9A227]">
              A
            </div>

            <div>
              <p className="text-lg font-bold leading-none text-[#0B5D4B]">
                ANNURI
              </p>
              <p className="text-[10px] font-medium tracking-[0.25em] text-[#C9A227]">
                GLOBAL SERVICES
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-[#0B5D4B]">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-[#0B5D4B]">
              About
            </Link>
            <Link to="/business-services" className="text-sm font-medium hover:text-[#0B5D4B]">
              Services
            </Link>
            <Link to="/global-opportunities" className="text-sm font-medium hover:text-[#0B5D4B]">
              Opportunities
            </Link>
            <Link to="/real-estate" className="text-sm font-semibold text-[#0B5D4B]">
              Real Estate
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-[#0B5D4B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#08483b]"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B5D4B] px-5 py-24 text-white lg:py-28">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Annuri Real Estate
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Property decisions should begin with clarity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Explore houses, land and other property opportunities with
            practical support to help you understand your options and decide
            on your next step.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white transition hover:bg-[#b18d20]"
            >
              Enquire About Property
            </Link>

            <Link
              to="/"
              className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Property Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore what you're looking for
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Whether you're looking for a home, land or a property for
              business purposes, start with a clear understanding of your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {propertyTypes.map((property) => (
              <div
                key={property.title}
                className="rounded-2xl border border-[#E8F0EC] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0EC] text-3xl">
                  {property.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                  {property.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {property.text}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-block text-sm font-bold text-[#C9A227] hover:text-[#0B5D4B]"
                >
                  Make an enquiry →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Property Support
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Support that helps you move with confidence.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Property decisions can involve serious financial commitments.
              Annuri focuses on giving you a clearer starting point, helping
              you communicate your requirements and understand the next steps.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-[#0B5D4B] px-7 py-3.5 font-semibold text-white hover:bg-[#08483b]"
              >
                Speak With Annuri
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#FAF8F1] p-8 lg:p-10">
            <h3 className="text-xl font-bold text-[#0B5D4B]">
              How we can support you
            </h3>

            <div className="mt-6 space-y-4">
              {supportAreas.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5D4B] text-xs text-white">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-gray-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-[#FAF8F1] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From enquiry to your next step
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8">
              <p className="text-3xl font-extrabold text-[#C9A227]">01</p>
              <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Tell us what you need
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Share your preferred property type, location, purpose and
                other requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <p className="text-3xl font-extrabold text-[#C9A227]">02</p>
              <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Explore your options
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Review available opportunities and ask the questions that
                matter before proceeding.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <p className="text-3xl font-extrabold text-[#C9A227]">03</p>
              <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Decide your next move
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Move forward when you're comfortable with the information and
                next steps available to you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#17231F] px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Start Your Enquiry
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Looking for property or land?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Tell us what you're looking for and let's discuss the best way
            forward.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-3.5 font-bold text-white transition hover:bg-[#b18d20]"
          >
            Make an Enquiry →
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B5D4B] px-5 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-bold">ANNURI GLOBAL SERVICES</p>
            <p className="mt-1 text-white/60">
              Connect. Explore. Grow Beyond Borders.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/global-opportunities" className="hover:text-white">Opportunities</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default RealEstate
