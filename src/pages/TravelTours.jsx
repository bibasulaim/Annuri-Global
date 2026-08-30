function TravelTours() {
  const services = [
    {
      icon: '✈️',
      title: 'Flight Support',
      text: 'Get practical assistance when planning and preparing for your journey.',
    },
    {
      icon: '🗺️',
      title: 'Tours & Trips',
      text: 'Explore travel experiences and trip-planning support for local and international journeys.',
    },
    {
      icon: '🛂',
      title: 'Travel Guidance',
      text: 'Understand important travel requirements and plan your next steps with greater clarity.',
    },
    {
      icon: '🕌',
      title: 'Umrah Support',
      text: 'Get guidance on Umrah planning, requirements and travel arrangements.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B5D4B] text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A227]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <a
            href="/"
            className="text-sm font-medium text-white/70 transition hover:text-[#C9A227]"
          >
            ← Back to Annuri
          </a>

          <p className="mt-10 font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Annuri Travel & Tours
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Your journey starts with a better plan.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Travel planning, tours and practical support designed to help you
            move confidently from where you are to where you want to go.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white transition hover:bg-[#b18d20]"
            >
              Plan Your Journey
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Travel Made Clearer
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                From planning to departure, know your next step.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Whether you are travelling for business, leisure, religious
                purposes or a new experience, good preparation can make the
                journey smoother.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Annuri provides practical travel support while helping you
                understand your options before you commit.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-[#E8F0EC] lg:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F0EC] text-4xl">
                🌍
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#0B5D4B]">
                Travel with confidence.
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Clear information, thoughtful planning and responsive support
                can make a big difference before you set off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Travel support built around your journey
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#E8F0EC] bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel types */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#0B5D4B] p-8 text-white">
              <p className="text-4xl">🌍</p>
              <h3 className="mt-6 text-xl font-bold">International Travel</h3>
              <p className="mt-3 leading-7 text-white/70">
                Planning to travel beyond Nigeria? Start with the right
                information and preparation.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8F0EC]">
              <p className="text-4xl">🚍</p>
              <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                Road Travel
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Explore road travel options and trip support for destinations
                within and beyond Nigeria.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E8F0EC]">
              <p className="text-4xl">🕌</p>
              <h3 className="mt-6 text-xl font-bold text-[#0B5D4B]">
                Religious Travel
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Planning Umrah? Get started by understanding the requirements
                and arrangements involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Ready When You Are
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tell us where you're going.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Share your travel needs with us and let's discuss the best way to
            move forward.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-3.5 font-bold text-white transition hover:bg-[#b18d20]"
          >
            Contact Annuri
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p className="font-bold">ANNURI GLOBAL SERVICES</p>
          <p className="text-sm text-white/50">
            Connecting you beyond borders.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TravelTours
