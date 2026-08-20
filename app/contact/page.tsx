import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[#171a4b] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Contact Us
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Let's discuss your next project.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need construction, engineering, project management,
              or supervision services, our team is ready to hear about your
              requirements.
            </p>
          </div>
        </section>

        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center bg-[#ed1c24] text-xl font-black text-white">
                  01
                </div>

                <h2 className="mt-8 text-2xl font-black text-[#171a4b]">
                  Call Us
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Speak directly with our team about your construction and
                  engineering requirements.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:0765750255"
                    className="font-bold text-[#ed1c24] hover:text-red-700"
                  >
                    0765 750 255
                  </a>

                  <a
                    href="tel:0741451478"
                    className="font-bold text-[#ed1c24] hover:text-red-700"
                  >
                    0741 451 478
                  </a>
                </div>
              </div>

              <div className="bg-[#171a4b] p-8 text-white shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center bg-[#ed1c24] text-xl font-black text-white">
                  02
                </div>

                <h2 className="mt-8 text-2xl font-black">
                  WhatsApp
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Send us a message and share the initial details of your
                  project.
                </p>

                <a
                  href="https://wa.me/256765750255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-bold text-[#ed1c24] hover:text-red-400"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center bg-[#ed1c24] text-xl font-black text-white">
                  03
                </div>

                <h2 className="mt-8 text-2xl font-black text-[#171a4b]">
                  Email Us
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Send us your project details and our team will get back to
                  you.
                </p>

                <a
                  href="mailto:PARAPETCONTRACTORS@GMAIL.COM"
                  className="mt-6 inline-block break-all font-bold text-[#ed1c24] hover:text-red-700"
                >
                  PARAPETCONTRACTORS@GMAIL.COM
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Send a Message
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Have a question? Get in touch.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Use the form to send us a message, or request a detailed quote
                for your project.
              </p>

              <Link
                href="/quote"
                className="mt-8 inline-flex bg-[#ed1c24] px-6 py-4 font-bold text-white hover:bg-red-700"
              >
                Request a Quote
              </Link>
            </div>

            <div className="bg-[#f7f7f5] p-8 md:p-12">
              <form className="space-y-7">
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
                    className="mt-3 w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#ed1c24]"
                  />
                </div>

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
                    className="mt-3 w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#ed1c24]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-bold text-[#171a4b]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What would you like to discuss?"
                    className="mt-3 w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#ed1c24]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-[#171a4b]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help you."
                    className="mt-3 w-full resize-none border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#ed1c24]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#171a4b] px-6 py-4 font-bold text-white hover:bg-[#ed1c24]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}