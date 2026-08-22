import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#17231F]">

      {/* Hero */}
      <section className="bg-[#0B5D4B] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">

          <Link
            to="/"
            className="mb-8 inline-block text-sm font-semibold text-[#C9A227]"
          >
            ← Back to Annuri Global Services
          </Link>

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Contact Annuri
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Let's talk about what you're looking for.
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Whether you're planning a journey, looking for an opportunity,
              or need business support, tell us what you need.
            </p>
          </div>

        </div>
      </section>

      {/* Contact options */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">📧</div>
              <h2 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Email
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Send us your enquiry directly by email.
              </p>

              <a
                href="mailto:annuriglobalservices@gmail.com"
                className="mt-5 inline-block font-bold text-[#0B5D4B]"
              >
                Email us →
              </a>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">📧</div>
              <h2 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Email
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Send a detailed enquiry and we'll get back to you.
              </p>

              <a
                href="mailto:annuriglobalservices@gmail.com"
                className="mt-5 inline-block font-semibold text-[#0B5D4B] hover:underline"
              >
                annuriglobalservices@gmail.com →
              </a>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🌍</div>
              <h2 className="mt-5 text-xl font-bold text-[#0B5D4B]">
                Our Services
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Travel, opportunities and business support under one brand.
              </p>

              <Link
                to="/"
                className="mt-5 inline-block font-bold text-[#0B5D4B]"
              >
                Explore services →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Send an Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-4 text-gray-600">
              Fill in the details below. This form is currently for enquiry
              collection and will be connected to our contact system later.
            </p>
          </div>

          <form
            className="mt-12 space-y-6 rounded-3xl bg-[#FAF8F1] p-7 lg:p-10"
            onSubmit={(event) => event.preventDefault()}
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="text-sm font-semibold">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-[#DDE8E2] bg-white px-4 py-3 outline-none focus:border-[#0B5D4B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-[#DDE8E2] bg-white px-4 py-3 outline-none focus:border-[#0B5D4B]"
                />
              </div>

            </div>

            <div>
              <label className="text-sm font-semibold">
                What are you interested in?
              </label>

              <select
                className="mt-2 w-full rounded-xl border border-[#DDE8E2] bg-white px-4 py-3 outline-none focus:border-[#0B5D4B]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Travel & Tours</option>
                <option>Global Opportunities</option>
                <option>Business Services</option>
                <option>Consulting & Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell us what you need..."
                className="mt-2 w-full rounded-xl border border-[#DDE8E2] bg-white px-4 py-3 outline-none focus:border-[#0B5D4B]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#0B5D4B] px-7 py-4 font-bold text-white transition hover:bg-[#08483b]"
            >
              Send Enquiry
            </button>

          </form>

        </div>
      </section>

      {/* Disclaimer */}
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
          <p className="font-bold">ANNURI GLOBAL SERVICES</p>
          <p className="mt-2 text-sm text-white/60">
            We'd love to hear from you.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default Contact
