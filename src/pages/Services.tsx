
import { Building, Home, Construction, Briefcase, PenTool, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      icon: Home,
      description: "We specialize in building custom homes, villas, and residential buildings designed to meet your unique needs and preferences. Our residential construction services include:",
      features: [
        "Custom home design and construction",
        "Villa and luxury residence development",
        "Apartment buildings and housing complexes",
        "Renovation and expansion of existing properties",
        "Sustainable and energy-efficient homes"
      ]
    },
    {
      title: "Commercial Projects",
      icon: Building,
      description: "Our commercial construction expertise covers a wide range of projects from office buildings to retail spaces. We provide comprehensive solutions including:",
      features: [
        "Office buildings and corporate headquarters",
        "Retail spaces and shopping complexes",
        "Hospitality projects including hotels and resorts",
        "Educational and healthcare facilities",
        "Industrial buildings and warehouses"
      ]
    },
    {
      title: "Structural Engineering",
      icon: Construction,
      description: "Our structural engineering team ensures the stability, safety, and longevity of construction projects. Our services in this domain include:",
      features: [
        "Structural design and analysis",
        "Building foundation design",
        "Seismic evaluation and retrofitting",
        "Structural health monitoring",
        "Technical consultation and expert opinions"
      ]
    },
    {
      title: "Design Consultation",
      icon: PenTool,
      description: "Our design consultation services bring innovative architectural concepts to life. We focus on aesthetics, functionality, and sustainability in all our design work:",
      features: [
        "Architectural concept development",
        "Interior space planning and design",
        "3D visualization and modeling",
        "Sustainable design solutions",
        "Building information modeling (BIM)"
      ]
    },
    {
      title: "Project Management",
      icon: Briefcase,
      description: "We excel at managing construction projects from inception to completion, ensuring quality, timeliness, and cost-effectiveness:",
      features: [
        "Comprehensive project planning and scheduling",
        "Budget estimation and cost control",
        "Quality assurance and control",
        "Risk assessment and management",
        "Regular progress reporting and client communication"
      ]
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop" 
            alt="Construction Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-shaza-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="gold-gradient">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Comprehensive construction and engineering solutions tailored to meet your specific requirements
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What We Offer" 
            subtitle="At SHAZA Builders & Engineers, we provide a comprehensive range of construction services designed to address all your building needs."
          />
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-shaza-darkgray p-3 rounded-lg">
                      <service.icon size={28} className="text-shaza-gold" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif">{service.title}</h2>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <ArrowRight size={18} className="text-shaza-gold mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`bg-shaza-darkgray rounded-lg overflow-hidden ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + (index * 100000)}?q=80&w=1470&auto=format&fit=crop`}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      const backupImages = [
                        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1531&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1618172193622-ae2d025f2c95?q=80&w=1464&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1470&auto=format&fit=crop"
                      ];
                      e.currentTarget.src = backupImages[index % backupImages.length];
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-shaza-darkgray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we bring your construction projects to life"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-shaza-black p-8 rounded-lg border border-shaza-gold/20 h-full">
              <div className="w-12 h-12 flex items-center justify-center bg-shaza-gold rounded-full text-shaza-black text-xl font-bold mb-6">1</div>
              <h3 className="text-xl font-serif mb-4">Consultation & Planning</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision, requirements, and budget. Our team then develops a comprehensive plan outlining the scope, timeline, and costs of your project.
              </p>
            </div>
            
            <div className="bg-shaza-black p-8 rounded-lg border border-shaza-gold/20 h-full">
              <div className="w-12 h-12 flex items-center justify-center bg-shaza-gold rounded-full text-shaza-black text-xl font-bold mb-6">2</div>
              <h3 className="text-xl font-serif mb-4">Design & Engineering</h3>
              <p className="text-muted-foreground">
                Our architects and engineers collaborate to create detailed designs and structural plans. We incorporate your feedback through multiple revisions until the design perfectly meets your expectations.
              </p>
            </div>
            
            <div className="bg-shaza-black p-8 rounded-lg border border-shaza-gold/20 h-full">
              <div className="w-12 h-12 flex items-center justify-center bg-shaza-gold rounded-full text-shaza-black text-xl font-bold mb-6">3</div>
              <h3 className="text-xl font-serif mb-4">Construction & Delivery</h3>
              <p className="text-muted-foreground">
                Our skilled construction team brings the designs to life with precision and quality craftsmanship. We maintain regular communication throughout the build process and ensure a smooth handover upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1531&auto=format&fit=crop" 
            alt="Building Exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-shaza-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Contact us today to schedule a consultation with our team of experts. 
            We're ready to help you bring your construction vision to reality.
          </p>
          <Button asChild size="lg" className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
