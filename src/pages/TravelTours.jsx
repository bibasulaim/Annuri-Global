import { Link } from 'react-router-dom'

const travelServices = [
  {
    icon: '✈️',
    title: 'Flight Assistance',
    text: 'Get support with finding suitable flight options and planning your journey.',
  },
  {
    icon: '🏨',
    title: 'Hotel & Accommodation',
    text: 'Find accommodation options that match your destination, budget and travel plans.',
  },
  {
    icon: '🌍',
    title: 'Tour Planning',
    text: 'Plan memorable trips with destinations, activities and experiences tailored to you.',
  },
  {
    icon: '📄',
    title: 'Travel Documentation',
    text: 'Guidance and support with preparing the documents needed for your journey.',
  },
  {
    icon: '🧳',
    title: 'Travel Consultation',
    text: 'Get practical guidance before you travel so you can prepare with confidence.',
  },
  {
    icon: '🚐',
    title: 'Transfers & Support',
    text: 'Explore options for airport transfers and other travel-related support.',
  },
]

function TravelTours() {
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
                Annuri Travel & Tours
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Your journey starts here.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                From planning your trip to getting ready for departure,
                Annuri Travel & Tours provides practical support for journeys
                across borders.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#travel-services"
                  className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white"
                >
                  Explore Services
                </a>

                <a
                  href="#travel-contact"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white"
                >
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                <div className="text-7xl">✈️</div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  Travel • Explore • Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Go further with confidence.
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  Let us help you organise the important details while you
                  focus on the journey ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="travel-services" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Travel support, all in one place
            </h2>

            <p className="mt-4 text-gray-600">
              Practical services designed to make your travel planning easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {travelServices.map((service) => (
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
                  href="#travel-contact"
                  className="mt-5 inline-block text-sm font-bold text-[#0B5D4B]"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Where Will You Go?
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                From local journeys to international adventures.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you're travelling for business, leisure, family,
                education or a new experience, we'll help you think through
                the important details of your trip.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {['Saudi Arabia', 'Oman', 'Morocco', 'Ghana', 'UAE', 'Turkey'].map(
                  (destination) => (
                    <span
                      key={destination}
                      className="rounded-full bg-[#E8F0EC] px-4 py-2 text-sm font-semibold text-[#0B5D4B]"
                    >
                      {destination}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#E8F0EC] p-8 lg:p-12">
              <div className="text-6xl">🌍</div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B5D4B]">
                Travel with better preparation.
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Good travel starts long before you reach the airport. Our
                goal is to help you understand your options and prepare
                properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="travel-contact" className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Ready to Travel?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Let's start planning your journey.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
            Tell us where you want to go and what you need help with.
            We'll guide you through the next steps.
          </p>

          <a
            href="mailto:annuriglobalservices@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-white"
          >
            Email Annuri
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold">ANNURI TRAVEL & TOURS</p>
          <p className="mt-2 text-sm text-white/60">
            A division of Annuri Global Services
          </p>
        </div>
      </footer>

    </div>
  )
}

export default TravelTours
