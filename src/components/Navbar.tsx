
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-shaza-black/95 shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-white font-serif text-xl font-bold">
          <span className={`text-shaza-gold ${scrolled ? "block" : "hidden"} md:block`}>
  <img 
    src="/lovable-uploads/shaza2__2_-removebg-preview.png" 
    alt="Logo" 
    className="h-28 w-auto rounded-full" 
  />
</span>

            {/* <span className="text-shaza-gold">Z</span>
            <span className="text-shaza-gold">A</span> */}
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.title} to={link.href} className="nav-item">
              {link.title}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Link to='/contact'>
          <Button variant="outline" className="border-shaza-gold text-shaza-gold hover:bg-shaza-gold hover:text-shaza-black">
            Get a Quote
          </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-shaza-black/95 z-40 flex flex-col p-5 animate-fade-in">
          <div className="flex flex-col space-y-5 py-8">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.href} 
                className="text-lg text-white hover:text-shaza-gold transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="mt-auto mb-8 flex justify-center">
           <Link to='/contact'>
            <Button 
              variant="outline" 
              className="border-shaza-gold text-shaza-gold hover:bg-shaza-gold hover:text-shaza-black"
              
            >
              Get a Quote
            </Button>
           </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
