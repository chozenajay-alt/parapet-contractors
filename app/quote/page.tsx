import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function QuotePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-[#171a4b] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Request a Quote
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Tell us about your project.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Share the details of your construction or engineering project and
              help us understand how PARAPET CONTRACTORS & ENGINEERING LTD can
              support you.
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            {/* Information */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Start Your Inquiry
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#171a4b]">
                The more we know about your project, the better we can understand your requirements.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Provide the basic details below. You can include your preferred
                contact method, project type, location, estimated budget, and
                any other information that will help us understand your needs.
              </p>

              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-[#ed1c24] pl-5">
                  <h3 className="font-bold text-[#171a4b]">
                    Construction Projects
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Commercial, building, and industrial construction inquiries.
                  </p>
                </div>

                <div className="border-l-2 border-[#ed1c24] pl-5">
                  <h3 className="font-bold text-[#171a4b]">
                    Engineering Services
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Structural, civil, and technical engineering requirements.
                  </p>
                </div>

                <div className="border-l-2 border-[#ed1c24] pl-5">
                  <h3 className="font-bold text-[#171a4b]">
                    Project Management
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Professional supervision, planning, and project coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 shadow-sm md:p-12">
              <form className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Company Name
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company or organization"
                      className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    />
                  </div>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="text-sm font-bold text-[#171a4b]"
                  >
                    Preferred Contact Method
                  </label>

                  <select
                    id="contact"
                    name="contact"
                    required
                    defaultValue=""
                    className="mt-3 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                  >
                    <option value="" disabled>
                      Select your preferred contact method
                    </option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                  </select>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Project Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="mt-3 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option>Building Construction</option>
                      <option>Industrial Construction</option>
                      <option>Structural & Civil Engineering</option>
                      <option>Project Management & Supervision</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="text-sm font-bold text-[#171a4b]"
                    >
                      Project Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City, district, or site location"
                      className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="text-sm font-bold text-[#171a4b]"
                  >
                    Estimated Budget or Project Size
                  </label>

                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder="Optional"
                    className="mt-3 w-full border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="text-sm font-bold text-[#171a4b]"
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    placeholder="Describe your project, requirements, timeline, or any other important details."
                    className="mt-3 w-full resize-none border border-slate-300 px-4 py-3 outline-none transition focus:border-[#ed1c24]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ed1c24] px-6 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Submit Quote Request
                </button>

                <p className="text-center text-sm leading-6 text-slate-500">
                  By submitting this form, you are providing your contact
                  details so our team can respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}