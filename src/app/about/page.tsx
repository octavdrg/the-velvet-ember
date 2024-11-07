import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">About The Velvet Ember</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/food1.jpg"
              alt="The Velvet Ember signature dish"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              The Velvet Ember, nestled in the heart of the city, brings a unique blend of culinary traditions and innovative flavors. 
              Our journey began with a passion for creating an extraordinary dining experience, 
              combining time-honored techniques with contemporary twists.
            </p>
            <p className="text-lg">
              Founded by Chef Emily Laurent, The Velvet Ember is more than just a restaurant; it&apos;s a gastronomic adventure 
              that ignites the senses. Every dish is a canvas, every flavor a brushstroke in our culinary masterpiece.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold mb-6">Our Philosophy</h2>
            <p className="text-lg mb-4">
              At The Velvet Ember, we believe in the transformative power of food. Our philosophy 
              is rooted in the art of gastronomy, celebrating ingredients, and creating 
              unforgettable dining experiences that linger in your memory.
            </p>
            <p className="text-lg">
              We are committed to sustainability and innovation, working closely with local artisans and producers 
              to source the finest ingredients. Our menu evolves with the seasons, ensuring that 
              each visit to The Velvet Ember offers a new adventure for your palate.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/food2.jpg"
              alt="Chef preparing a dish"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We invite you to experience the warmth of our hospitality, the artistry of our cuisine, 
            and the enchanting ambiance at The Velvet Ember. Whether you&apos;re celebrating a special occasion 
            or simply indulging in a remarkable meal, we look forward to welcoming you to our table.
          </p>
          <Link href="/reserve" className="bg-accent text-white px-8 py-3 rounded-full text-xl hover:bg-opacity-80 transition duration-300">
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  )
}