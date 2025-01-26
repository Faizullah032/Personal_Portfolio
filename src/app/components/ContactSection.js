export default function ContactSection() {
    return (
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }