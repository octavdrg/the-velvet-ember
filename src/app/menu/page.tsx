import Image from 'next/image'
import Link from 'next/link'

const menuCategories = [
  { name: "Appetizers", image: "/images/menu1.jpg" },
  { name: "Main Courses", image: "/images/menu2.jpg" },
  { name: "Desserts", image: "/images/menu3.jpg" },
  { name: "Drinks", image: "/images/menu4.jpg" },
]

export default function MenuPage() {
  return (
    <div className="bg-white text-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Menu</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                width={600}
                height={800}
                className="object-cover w-full h-96 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-3xl font-bold text-white">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/reserve" className="bg-accent text-white px-8 py-3 rounded-full text-xl hover:bg-opacity-80 transition duration-300">
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  )
}