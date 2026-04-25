import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h3 className="font-serif text-2xl mb-6 tracking-wider">THE LATTICE BISTRO</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Where culinary art meets warm hospitality. Join us for an unforgettable dining experience in the heart of the city.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-sage transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-sage transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-sage transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium tracking-widest text-sm mb-6 text-sage uppercase">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-sage flex-shrink-0 mt-1" />
              <span>123 Culinary Avenue,<br />Gourmet District, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-sage flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sage flex-shrink-0" />
              <span>reservations@latticebistro.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium tracking-widest text-sm mb-6 text-sage uppercase">Opening Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex justify-between border-b border-gray-700 pb-2">
              <span>Monday - Thursday</span>
              <span>5:00 PM - 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-gray-700 pb-2 pt-2">
              <span>Friday - Saturday</span>
              <span>5:00 PM - 11:30 PM</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Sunday</span>
              <span>4:00 PM - 9:00 PM</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The Lattice Bistro. All rights reserved.
      </div>
    </footer>
  );
}
