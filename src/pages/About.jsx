import { Link } from 'react-router-dom'

function About() {
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

          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              About Annuri
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Connecting people, businesses and opportunities.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Annuri Global Services is a multi-service brand focused on
              helping individuals and businesses access practical services,
              information and opportunities locally and internationally.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Vision
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Making global possibilities easier to reach.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We believe that access to the right information, professional
                support and genuine opportunities can make a meaningful
                difference in people's lives and businesses.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Annuri brings several services under one identity, creating a
                platform where people can explore travel, business support and
                international opportunities.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#E8F0EC] p-8 lg:p-12">
              <div className="text-6xl">✦</div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B5D4B]">
                Our approach
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Professional. Practical. Transparent. People-focused.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Values
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              What guides us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['🤝', 'Integrity', 'We value honesty and responsible service.'],
              ['🎯', 'Purpose', 'We focus on services that create practical value.'],
              ['🌍', 'Opportunity', 'We believe possibilities should not be limited by borders.'],
              ['⭐', 'Excellence', 'We continuously aim to improve the experience we provide.'],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E8F0EC] bg-[#FAF8F1] p-7 text-center"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Annuri Global Services
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your journey. Your business. Your opportunity.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
            Whatever your next step looks like, we're building Annuri to be a
            trusted place to start.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-white"
          >
            Explore Annuri
          </Link>

        </div>
      </section>

      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold">ANNURI GLOBAL SERVICES</p>
          <p className="mt-2 text-sm text-white/60">
            Connecting you beyond borders.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default About
