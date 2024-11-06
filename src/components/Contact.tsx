export default function Contact() {
    return (
      <section className="py-20 bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-dark-bg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-accent text-dark-bg px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }