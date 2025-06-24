
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
    },
     {
      title: "Gardening",
      icon: Briefcase,
      description: "We excel at managing garden construction projects from inception to completion, ensuring quality, timeliness, and cost-effectiveness",
      features: [
        "Comprehensive garden design and planting schedule",
        "Budget estimation and resource allocation",
        "Quality assurance and horticultural care",
        "Risk assessment and pest/disease management",
        "Regular progress updates and client consultation"
      ]
    },
     {
      title: "Landscaping",
      icon: Briefcase,
      description: "We specialize in delivering exceptional landscaping projects by focusing on creativity, durability, and client vision",
      features: [
        "Tailored landscape design tailored to site conditions and client preferences",
        "Selection and installation of sustainable materials",
        "Ongoing site monitoring and adjustment post-installation",
        
      ]
    },
     {
      title: "Interioring",
      icon: Briefcase,
      description: "We bring interior spaces to life with creativity, comfort, and functionality, tailored to your lifestyle and taste",
      features: [
        "Custom space planning and layout design that maximizes flow, light, and usability while reflecting your personal style.",
        "Coordination with contractors, craftsmen, and suppliers to ensure seamless execution",
        "Quality assurance and control",
        "Continuous client collaboration and updates throughout the process"
      ]
    },
    {
      title: "Water Proofing",
      icon: Briefcase,
      description: "We specialize in protecting structures from water damage by delivering reliable and durable waterproofing solutions",
      features: [
        "Thorough assessment of vulnerable areas to determine the most effective waterproofing methods and materials.",
        "Use of high-quality membranes, coatings, sealants, and drainage systems ",
        "Regular inspection and maintenance planning"
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
                        "https://blog.novatr.com/hubfs/An%20architect%20creating%20a%20building%20model.webp",
                        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2Ufj9BtOH5y2X1zqJGC7DW/42ca8f8ec791bd4363748714dd2a91f7/GettyImages-1885024349.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000",
                        "https://media.istockphoto.com/id/1445233447/photo/landscape-gardener-laying-turf-for-new-lawn.jpg?s=612x612&w=0&k=20&c=OAK9mHqL-5K36q85Fn46HTQZZUwN5yCR0GS80bu1iOI=",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq50OtpuM-_hgdsrri_NRTdjBp_zJEFvHwJw&s",
                        "https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?semt=ais_hybrid&w=740",
                        "https://media.istockphoto.com/id/1042389232/photo/worker-preparing-part-of-bitumen-roofing-felt-roll-for-melting-by-gas-heater-torch-flame-on.jpg?s=612x612&w=0&k=20&c=rPABKM4VJqZVVTpuITFLNSlXaja4vmwUo3WpD_XgLU0="
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
