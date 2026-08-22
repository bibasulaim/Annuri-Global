import { Link } from 'react-router-dom'

const opportunities = [
  {
    flag: '🇸🇦',
    country: 'Saudi Arabia',
    title: 'Opportunities in Saudi Arabia',
    text: 'Explore employment and international opportunities available in Saudi Arabia.',
  },
  {
    flag: '🇴🇲',
    country: 'Oman',
    title: 'Opportunities in Oman',
    text: 'Discover potential work and professional opportunities in Oman.',
  },
  {
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    title: 'Opportunities in UAE',
    text: 'Explore career and business opportunities across the UAE.',
  },
  {
    flag: '🇬🇭',
    country: 'Ghana',
    title: 'Opportunities in Ghana',
    text: 'Find opportunities and useful information for working or doing business in Ghana.',
  },
  {
    flag: '🇲🇦',
    country: 'Morocco',
    title: 'Opportunities in Morocco',
    text: 'Explore international opportunities and useful resources relating to Morocco.',
  },
]

const categories = [
  {
    icon: '💼',
    title: 'Jobs Abroad',
    text: 'Discover international employment opportunities and recruitment updates.',
  },
  {
    icon: '🎓',
    title: 'Scholarships',
    text: 'Find education and scholarship opportunities beyond your home country.',
  },
  {
    icon: '🌍',
    title: 'International Programs',
    text: 'Explore programs, fellowships and opportunities with an international focus.',
  },
  {
    icon: '🚀',
    title: 'Business Opportunities',
    text: 'Discover ideas and opportunities for entrepreneurs and growing businesses.',
  },
]

function GlobalOpportunities() {
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
                Annuri Global Opportunities
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Discover opportunities beyond borders.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Explore international jobs, scholarships, programs and
                opportunities that could help you take your next step.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#opportunity-categories"
                  className="rounded-full bg-[#C9A227] px-7 py-3.5 font-bold text-white"
                >
                  Explore Opportunities
                </a>

                <a
                  href="#submit"
                  className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white"
                >
                  Share an Opportunity
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur lg:p-10">
              <div className="text-7xl">🌍</div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Explore • Prepare • Apply
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Information can open doors.
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                Our goal is to make useful international opportunity
                information easier to discover and understand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="opportunity-categories" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Opportunity Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Find what fits your next move
            </h2>

            <p className="mt-4 text-gray-600">
              Browse different types of international opportunities in one
              place.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-[#E8F0EC] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{category.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {category.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Countries */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Explore by Destination
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Where are you looking to go?
            </h2>

            <p className="mt-4 text-gray-600">
              Start exploring opportunities by country.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.country}
                className="group rounded-2xl border border-[#E8F0EC] bg-[#FAF8F1] p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{opportunity.flag}</span>

                  <div>
                    <p className="text-sm font-semibold text-[#C9A227]">
                      {opportunity.country}
                    </p>

                    <h3 className="text-xl font-bold text-[#0B5D4B]">
                      {opportunity.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {opportunity.text}
                </p>

                <button
                  type="button"
                  className="mt-5 font-bold text-[#0B5D4B]"
                >
                  View opportunities →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Safety note */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-3xl border border-[#C9A227]/30 bg-[#E8F0EC] p-7 lg:p-10">

            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>

              <div>
                <h3 className="text-xl font-bold text-[#0B5D4B]">
                  Stay alert when applying
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Always verify employers, recruiters and application
                  requirements before sending money or personal documents.
                  Annuri does not guarantee employment, visas or successful
                  applications.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Submit */}
      <section id="submit" className="bg-[#17231F] py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Have an Opportunity?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Help us share useful opportunities.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
            If you know about a legitimate international opportunity that
            could benefit others, you can contact Annuri for consideration.
          </p>

          <a
            href="mailto:annuriglobalservices@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#C9A227] px-8 py-4 font-bold text-white"
          >
            Send an Opportunity
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B5D4B] py-8 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="font-bold">ANNURI GLOBAL OPPORTUNITIES</p>

          <p className="mt-2 text-sm text-white/60">
            A division of Annuri Global Services
          </p>
        </div>
      </footer>

    </div>
  )
}

export default GlobalOpportunities
