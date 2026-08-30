import { useState } from 'react'

const services = [
  {
    icon: '✈️',
    title: 'Travel & Tours',
    text: 'Travel planning, tours and support for journeys across borders.',
  },
  {
    icon: '🌍',
    title: 'Global Opportunities',
    text: 'Discover international opportunities and pathways beyond your borders.',
  },
  {
    icon: '💼',
    title: 'Business Services',
    text: 'Professional support for businesses, entrepreneurs and growing brands.',
  },
  {
    icon: '🤝',
    title: 'Consulting & Support',
    text: 'Practical guidance designed to help you make confident decisions.',
  },
  {
    icon: '🏠',
    title: 'Real Estate',
    text: 'Explore houses, land and property opportunities with practical support.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E8F0EC] bg-[#FAF8F1]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          
          <a href="#" className="flex items-center gap-2">
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
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium hover:text-[#0B5D4B]">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-[#0B5D4B]">About</a>
            <a href="/business-services" className="text-sm font-medium hover:text-[#0B5D4B]">Services</a>
            <a href="/global-opportunities" className="text-sm font-medium hover:text-[#0B5D4B]">Opportunities</a>
            <a href="/real-estate" className="text-sm font-medium hover:text-[#0B5D4B]">Real Estate</a>
            <a href="/contact" className="rounded-full bg-[#0B5D4B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#08483b]">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-[#E8F0EC] px-5 pb-5 pt-3 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/business-services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="/global-opportunities" onClick={() => setMenuOpen(false)}>Opportunities</a>
              <a href="/real-estate" onClick={() => setMenuOpen(false)}>Real Estate</a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-[#0B5D4B] px-5 py-2.5 font-semibold text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            
            <div>
              <div className="mb-6 inline-flex rounded-full bg-[#E8F0EC] px-4 py-2 text-sm font-semibold text-[#0B5D4B]">
                ✦ TRAVEL • BUSINESS • OPPORTUNITIES • PROPERTY
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Connect. Explore.
                <span className="block text-[#0B5D4B]">
                  Grow Beyond Borders.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Annuri Global Services helps individuals and businesses navigate
                travel, opportunities, business support and property with clarity,
                confidence and practical guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-[#0B5D4B] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#0B5D4B]/20 transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  className="rounded-full border-2 border-[#C9A227] px-7 py-3.5 font-semibold text-[#0B5D4B] transition hover:bg-[#C9A227] hover:text-white"
                >
                  Contact Us
                </a>
                <a
                  href="/real-estate"
                  className="rounded-full border border-[#0B5D4B]/20 px-7 py-3.5 font-semibold text-[#0B5D4B] transition hover:bg-[#E8F0EC]"
                >
                  Explore Property
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C9A227]/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#0B5D4B]/20 blur-3xl" />

              <div className="relative rounded-[2rem] bg-[#0B5D4B] p-8 shadow-2xl lg:p-12">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
                  <div className="mb-8 text-6xl">🌍</div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                    Annuri Global
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Explore. Connect. Grow.
                  </h2>
                  <p className="mt-4 leading-7 text-white/75">
                    Opening doors to meaningful journeys, services and
                    opportunities across the globe.
                  </p>

                  <div className="mt-8 flex gap-3">
                    <div className="h-2 flex-1 rounded-full bg-[#C9A227]" />
                    <div className="h-2 w-16 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Services built around your next move
              </h2>
              <p className="mt-4 text-gray-600">
                From travel to business and international opportunities,
                Annuri is here to help you move forward.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={
                    service.title === "Travel & Tours"
                      ? "/travel-tours"
                      : service.title === "Global Opportunities"
                        ? "/global-opportunities"
                        : service.title === "Business Services"
                          ? "/business-services"
                          : service.title === "Consulting & Support"
                            ? "/consulting-support"
                            : "#"
                  }
                  className="rounded-2xl border border-[#E8F0EC] bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                About Annuri
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Built to connect people with possibilities.
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                Annuri Global Services is focused on providing practical,
                professional and people-centered services that help individuals
                and businesses navigate opportunities locally and globally.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#E8F0EC] p-5">
                  <p className="text-2xl font-bold text-[#0B5D4B]">01</p>
                  <p className="mt-2 font-semibold">Professional</p>
                </div>
                <div className="rounded-2xl bg-[#E8F0EC] p-5">
                  <p className="text-2xl font-bold text-[#0B5D4B]">02</p>
                  <p className="mt-2 font-semibold">Transparent</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#17231F] p-8 text-white lg:p-12">
              <div className="text-5xl">✦</div>
              <h3 className="mt-8 text-2xl font-bold">
                Your journey matters.
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                We believe that the right information, guidance and support
                can turn an idea into a real opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Why Annuri */}
        <section className="bg-[#FAF8F1] py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Why Annuri
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                More than a service. A connection to what's next.
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We are building Annuri around the things that matter most:
                clarity, trust and practical access to opportunities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0EC] text-3xl">
                  🎯
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                  Practical Guidance
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We focus on useful information and support that helps you
                  understand your options and take action.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0EC] text-3xl">
                  🌍
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                  Beyond Borders
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  From travel to international opportunities, we help connect
                  local ambitions with global possibilities.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0EC] text-3xl">
                  🤝
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                  People First
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We want every interaction with Annuri to feel clear,
                  professional and genuinely helpful.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Explore Possibilities
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Opportunities beyond borders
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  Discover areas where new opportunities may be waiting for
                  you.
                </p>
              </div>

              <a
                href="/global-opportunities"
                className="w-fit rounded-full border-2 border-[#0B5D4B] px-6 py-3 font-semibold text-[#0B5D4B] transition hover:bg-[#0B5D4B] hover:text-white"
              >
                Explore Opportunities →
              </a>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <a
                href="/global-opportunities"
                className="group rounded-2xl bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">💼</div>
                <h3 className="mt-5 text-lg font-bold text-[#0B5D4B]">
                  Jobs & Careers
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Explore career paths and remote or international work
                  possibilities.
                </p>
                <span className="mt-5 block text-sm font-bold text-[#C9A227]">
                  Explore →
                </span>
              </a>

              <a
                href="/global-opportunities"
                className="group rounded-2xl bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">🎓</div>
                <h3 className="mt-5 text-lg font-bold text-[#0B5D4B]">
                  Education
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Find education, training and scholarship opportunities.
                </p>
                <span className="mt-5 block text-sm font-bold text-[#C9A227]">
                  Explore →
                </span>
              </a>

              <a
                href="/global-opportunities"
                className="group rounded-2xl bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">🌍</div>
                <h3 className="mt-5 text-lg font-bold text-[#0B5D4B]">
                  International
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Discover opportunities that connect you with the wider
                  world.
                </p>
                <span className="mt-5 block text-sm font-bold text-[#C9A227]">
                  Explore →
                </span>
              </a>

              <a
                href="/travel-tours"
                className="group rounded-2xl bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">✈️</div>
                <h3 className="mt-5 text-lg font-bold text-[#0B5D4B]">
                  Travel & Relocation
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Plan journeys and explore travel-related services.
                </p>
                <span className="mt-5 block text-sm font-bold text-[#C9A227]">
                  Explore →
                </span>
              </a>

              <a
                href="/real-estate"
                className="group rounded-2xl bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">🏠</div>
                <h3 className="mt-5 text-lg font-bold text-[#0B5D4B]">
                  Property & Land
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Explore property opportunities and practical real-estate support.
                </p>
                <span className="mt-5 block text-sm font-bold text-[#C9A227]">
                  Explore →
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-[#E8F0EC] bg-white py-10">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-3 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F0EC] text-xl">
                ✓
              </div>
              <div>
                <p className="font-bold text-[#0B5D4B]">Clear Information</p>
                <p className="text-sm text-gray-500">Know your options.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F0EC] text-xl">
                ✦
              </div>
              <div>
                <p className="font-bold text-[#0B5D4B]">Practical Support</p>
                <p className="text-sm text-gray-500">Guidance when it matters.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F0EC] text-xl">
                🤝
              </div>
              <div>
                <p className="font-bold text-[#0B5D4B]">People First</p>
                <p className="text-sm text-gray-500">Built around your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section id="opportunities" className="bg-[#0B5D4B] py-20 text-white">
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Global Opportunities
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Ready to explore what's possible?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
              Stay connected to opportunities, services and information that
              can help you take your next step.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-3.5 font-bold text-white transition hover:bg-[#b18d20]"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let's connect.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Have a question or want to learn more about our services?
              We'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:annuriglobalservices@gmail.com"
                className="rounded-full bg-[#0B5D4B] px-7 py-3.5 font-semibold text-white"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="rounded-full border-2 border-[#0B5D4B] px-7 py-3.5 font-semibold text-[#0B5D4B]"
              >
                View Contact Page
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#17231F] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <div>
            <p className="font-bold">ANNURI GLOBAL SERVICES</p>
            <p className="mt-1 text-sm text-white/50">
              Connecting you beyond borders.
            </p>
          </div>
          <p className="text-sm text-white/50">
            © 2026 Annuri Global Services. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
