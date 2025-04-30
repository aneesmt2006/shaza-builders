
import { Building, Home as HomeIcon, Construction, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';

export default function Home() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, villas, and residential buildings designed and built with precision and attention to detail.',
      icon: HomeIcon,
    },
    {
      title: 'Commercial Projects',
      description: 'Office spaces, retail outlets, and commercial complexes that combine functionality with architectural excellence.',
      icon: Building,
    },
    {
      title: 'Structural Engineering',
      description: 'Expert structural engineering solutions ensuring stability, safety, and longevity of your construction projects.',
      icon: Construction,
    },
    {
      title: 'Design Consultation',
      description: 'Comprehensive design consultation services to bring your vision to life with innovative architectural concepts.',
      icon: Briefcase,
    },
  ];

  const projects = [
    {
      title: 'Luxury Villa Project',
      category: 'Residential',
      imageSrc: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Commercial Complex',
      category: 'Commercial',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
    },
    {
      title: 'Modern Office Building',
      category: 'Commercial',
      imageSrc: 'https://images.unsplash.com/photo-1577042939454-8b29ebe0adad?q=80&w=1374&auto=format&fit=crop',
    },
    {
      title: 'Residential Apartments',
      category: 'Residential',
      imageSrc: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1470&auto=format&fit=crop',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-height flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/f301b5fc-1acc-498f-9751-72ae5251b749.png" 
            alt="SHAZA Builders & Engineers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shaza-black to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="block">We Build Your</span>
              <span className="block gold-gradient">Dream's To Reality</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Precision engineering, architectural excellence, and construction mastery to transform your vision into remarkable structures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-shaza-gold text-shaza-gold hover:bg-shaza-gold hover:text-shaza-black">
                <Link to="/projects">Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-shaza-darkgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="About SHAZA Builders & Engineers" 
                subtitle="A premier construction company based in Coorg, committed to excellence and innovation."
                center={false}
              />
              <p className="mb-6 text-muted-foreground">
                At SHAZA Builders & Engineers, we combine technical expertise with creative design to deliver exceptional construction projects. 
                Our team of experienced professionals is dedicated to turning architectural visions into reality with the highest standards of quality and craftsmanship.
              </p>
              <p className="mb-8 text-muted-foreground">
                Since our establishment, we have successfully executed numerous projects across residential and commercial segments, 
                earning a reputation for reliability, precision, and timely delivery.
              </p>
              <Button asChild className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl border border-shaza-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1541976590-506171572adm?q=80&w=1470&auto=format&fit=crop" 
                alt="SHAZA Builders Office"
                className="w-full h-[400px] object-cover"
                onError={(e) => {
                  // Fallback image if the primary image fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1531&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive construction and engineering solutions tailored to your needs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-shaza-gold text-shaza-gold hover:bg-shaza-gold hover:text-shaza-black">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-shaza-darkgray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Explore our portfolio of exceptional construction projects"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1476&auto=format&fit=crop" 
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-shaza-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Build Your Dream Project?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Partner with SHAZA Builders & Engineers for outstanding quality, innovative design, and timely execution.
          </p>
          <Button asChild size="lg" className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
