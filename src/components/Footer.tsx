
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shaza-black border-t border-shaza-darkgray">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <div className="text-white font-serif text-2xl font-bold">
                <span className="text-shaza-gold">SHA</span>
                <span className="text-shaza-gold">Z</span>
                <span className="text-shaza-gold">A</span>
              </div>
              <p className="text-sm text-shaza-gold">BUILDERS & ENGINEERS</p>
              <p className="text-sm text-shaza-gold">LLC COORG</p>
            </div>
            <p className="text-muted-foreground mb-6">
              Turning architectural visions into reality with precision, innovation, and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-shaza-darkgray p-2 rounded-full text-white hover:text-shaza-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-shaza-darkgray p-2 rounded-full text-white hover:text-shaza-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-shaza-darkgray p-2 rounded-full text-white hover:text-shaza-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="gold-hover">Home</Link></li>
              <li><Link to="/about" className="gold-hover">About Us</Link></li>
              <li><Link to="/services" className="gold-hover">Services</Link></li>
              <li><Link to="/projects" className="gold-hover">Projects</Link></li>
              <li><Link to="/contact" className="gold-hover">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="gold-hover">Residential Construction</Link></li>
              <li><Link to="/services" className="gold-hover">Commercial Projects</Link></li>
              <li><Link to="/services" className="gold-hover">Structural Engineering</Link></li>
              <li><Link to="/services" className="gold-hover">Design Consultation</Link></li>
              <li><Link to="/services" className="gold-hover">Interior & Renovation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-shaza-gold" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-shaza-gold" />
                <a href="mailto:info@shazabuilders.com" className="gold-hover">info@shazabuilders.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-shaza-gold mt-1" />
                <span>
                  SHAZA Builders & Engineers<br />
                  LLC Coorg, Karnataka<br />
                  India - 571201
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-shaza-darkgray text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SHAZA Builders & Engineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
