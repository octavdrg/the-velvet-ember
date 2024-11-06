import Image from 'next/image'
import Link from 'next/link'
import { ChefHat, UtensilsCrossed, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/images/home.jpg"
          alt="The Velvet Ember restaurant interior"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl font-bold mb-6 text-white drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
            The Velvet Ember
          </h1>
          <p className="text-4xl mb-10 text-white drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
            A culinary journey through exquisite flavors
          </p>
          <Link href="/menu" className="bg-accent text-white px-10 py-4 rounded-full text-2xl hover:bg-opacity-80 transition duration-300 shadow-lg">
            View Our Menu
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-center mb-16">Experience Culinary Excellence</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <ChefHat size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-3xl font-semibold mb-4">Master Chefs</h3>
            <p className="text-xl text-gray-600">Our world-class chefs craft each dish with passion and precision.</p>
          </div>
          <div className="text-center">
            <UtensilsCrossed size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-3xl font-semibold mb-4">Exquisite Cuisine</h3>
            <p className="text-xl text-gray-600">Indulge in a fusion of flavors that will tantalize your taste buds.</p>
          </div>
          <div className="text-center">
            <Clock size={64} className="mx-auto mb-6 text-accent" />
            <h3 className="text-3xl font-semibold mb-4">Unforgettable Moments</h3>
            <p className="text-xl text-gray-600">Create lasting memories in our elegant and inviting atmosphere.</p>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Featured Dishes</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/images/food${index}.jpg`}
                  alt={`Featured dish ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-semibold mb-4">Signature Dish {index}</h3>
                  <p className="text-xl text-gray-600 mb-6">A delightful blend of flavors that will transport your senses.</p>
                  <Link href="/menu" className="text-xl text-accent hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-8">Ready to Embark on a Culinary Adventure?</h2>
        <p className="text-2xl text-gray-600 mb-10">Join us at The Velvet Ember for an unforgettable dining experience.</p>
        <Link href="/reserve" className="bg-accent text-white px-10 py-4 rounded-full text-2xl hover:bg-opacity-80 transition duration-300">
          Make a Reservation
        </Link>
      </div>
    </div>
  )
}