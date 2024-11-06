import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Le Comptoir restaurant interior"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl font-bold mb-6">Le Comptoir</h1>
        <p className="text-3xl mb-10">A culinary journey through France</p>
        <Link href="/menu" className="bg-accent text-dark-bg px-8 py-3 rounded-full text-xl hover:bg-opacity-80 transition duration-300">
          View Our Menu
        </Link>
      </div>
    </div>
  )
}