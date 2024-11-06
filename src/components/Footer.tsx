import Link from 'next/link'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-accent mb-4">The Velvet Ember</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="flex items-center justify-center md:justify-start mb-2">
              <Phone size={18} className="mr-2" /> (123) 456-7890
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail size={18} className="mr-2" /> info@thevelvetember.com
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Hours</h4>
            <p className="mb-2">Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p className="mb-2">Saturday: 10:00 AM - 11:00 PM</p>
            <p>Sunday: 10:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Velvet Ember. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}