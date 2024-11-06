import Image from 'next/image'

export default function ReservePage() {
  return (
    <div className="bg-white text-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Make a Reservation</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/food3.jpg"
              alt="The Velvet Ember dining area"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="date" className="block text-lg font-medium mb-2">Date</label>
                <input type="date" id="date" name="date" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="time" className="block text-lg font-medium mb-2">Time</label>
                <input type="time" id="time" name="time" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-lg font-medium mb-2">Number of Guests</label>
                <input type="number" id="guests" name="guests" min="1" max="10" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <button type="submit" className="w-full bg-accent text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-opacity-80 transition duration-300">
                Reserve Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}