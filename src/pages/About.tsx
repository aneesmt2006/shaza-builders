
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "SHAZA Builders & Engineers was established in Coorg with a vision to deliver exceptional construction services."
    },
    {
      year: "2013",
      title: "First Major Project",
      description: "Completed our first large-scale commercial project, setting new standards in the industry."
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Expanded our team and services to include structural engineering and interior design."
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Received recognition for excellence in construction and building design."
    },
    {
      year: "2022",
      title: "Innovation & Growth",
      description: "Incorporated sustainable building practices and expanded our portfolio with luxury residential projects."
    }
  ];

  const team = [
    {
      name: "Arun Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      position: "Chief Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
    },
    {
      name: "Rajesh Singh",
      position: "Construction Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
    },
    {
      name: "Kavita Nair",
      position: "Interior Design Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1398&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?q=80&w=1470&auto=format&fit=crop" 
            alt="Architecture Blueprint"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-shaza-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            About <span className="gold-gradient">SHAZA</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Learn about our journey, our values, and the people behind SHAZA Builders & Engineers.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1470&auto=format&fit=crop" 
                alt="SHAZA Building Project"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                title="Our Story" 
                subtitle="Building excellence since 2010"
                center={false}
              />
              <p className="mb-6 text-muted-foreground">
                SHAZA Builders & Engineers was founded in 2010 in the scenic hills of Coorg by a team of passionate 
                architects and civil engineers with a vision to transform the construction landscape. 
              </p>
              <p className="mb-6 text-muted-foreground">
                What started as a small local construction company has grown into a reputable firm known for delivering 
                high-quality residential and commercial projects throughout the region. Our commitment to excellence, 
                attention to detail, and customer satisfaction has been the cornerstone of our success.
              </p>
              <p className="text-muted-foreground">
                Today, we are proud to be one of the leading construction companies in Coorg, with a 
                portfolio of successful projects that stand as testimony to our expertise and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-shaza-darkgray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Mission & Vision" 
            subtitle="What drives us forward"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-shaza-black p-8 rounded-lg border border-shaza-gold/30 h-full">
              <h3 className="text-2xl font-serif mb-4 text-white">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver exceptional construction and engineering services that exceed client expectations, 
                through innovative design, quality craftsmanship, and sustainable building practices. 
                We are committed to creating spaces that enhance lives and communities while maintaining 
                the highest standards of integrity and professionalism.
              </p>
            </div>
            
            <div className="bg-shaza-black p-8 rounded-lg border border-shaza-gold/30 h-full">
              <h3 className="text-2xl font-serif mb-4 text-white">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and respected construction company in the region, known for architectural 
                excellence, engineering innovation, and client satisfaction. We aspire to create landmark structures 
                that stand the test of time, while fostering a culture of continuous improvement and environmental 
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in the SHAZA story"
          />
          
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-shaza-gold/30 -translate-x-1/2" />
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Year */}
                  <div className="md:w-1/2 mb-4 md:mb-0 relative">
                    <div className={`md:absolute ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:transform ${index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} bg-shaza-gold text-shaza-black font-bold py-2 px-6 rounded inline-block`}>
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Circle on timeline */}
                  <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-shaza-gold rounded-full -translate-x-1/2" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 bg-shaza-darkgray p-6 rounded-lg ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <h3 className="text-xl font-serif mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-shaza-black to-shaza-darkgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Your Project with Us?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Experience the SHAZA difference in construction quality and project management. 
            Contact us today to discuss your vision.
          </p>
          <Button asChild size="lg" className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
