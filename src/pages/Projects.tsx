
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'residential' | 'commercial' | 'ongoing' | 'interior';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  completed?: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Villa Project",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      completed: "2022"
    },
    {
      id: 2,
      title: "Luxury Apartment Complex",
      category: "residential",
      image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=1470&auto=format&fit=crop",
      completed: "2021"
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1474&auto=format&fit=crop",
      completed: "2020"
    },
    {
      id: 4,
      title: "Shopping Mall",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1535268244970-1b509f49d7c4?q=80&w=1503&auto=format&fit=crop",
      completed: "2019"
    },
    {
      id: 5,
      title: "Resort Hotel",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1474&auto=format&fit=crop",
      completed: "2021"
    },
    {
      id: 6,
      title: "Tech Park Phase 1",
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1469&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Riverside Residential Tower",
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1577593980495-6e8755148b50?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Executive Office Interior",
      category: "interior",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop",
      completed: "2023"
    },
    {
      id: 9,
      title: "Luxury Home Renovation",
      category: "interior",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1374&auto=format&fit=crop",
      completed: "2022"
    },
    {
      id: 10,
      title: "Boutique Hotel",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop",
      completed: "2020"
    },
    {
      id: 11,
      title: "Family Villa",
      category: "residential",
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1470&auto=format&fit=crop",
      completed: "2021"
    },
    {
      id: 12,
      title: "Restaurant Renovation",
      category: "interior",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1528&auto=format&fit=crop",
      completed: "2022"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential Buildings' },
    { value: 'commercial', label: 'Commercial Projects' },
    { value: 'ongoing', label: 'Ongoing Projects' },
    { value: 'interior', label: 'Interior & Renovation' },
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" 
            alt="Construction Projects"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-shaza-black/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="gold-gradient">Projects</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Explore our portfolio of residential buildings, commercial complexes, and renovation projects
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Project Gallery" 
            subtitle="Browse our collection of completed and ongoing projects"
          />
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                className={cn(
                  activeCategory === category.value 
                    ? "bg-shaza-gold text-shaza-black hover:bg-shaza-lightgold" 
                    : "border-shaza-gold/60 text-shaza-gold hover:bg-shaza-gold hover:text-shaza-black"
                )}
                onClick={() => setActiveCategory(category.value as ProjectCategory)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                category={project.completed ? `${project.category.charAt(0).toUpperCase() + project.category.slice(1)} • ${project.completed}` : `${project.category.charAt(0).toUpperCase() + project.category.slice(1)} • Ongoing`}
                imageSrc={project.image}
              />
            ))}
          </div>
          
          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-16 bg-shaza-darkgray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl text-shaza-gold font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl text-shaza-gold font-bold mb-2">12+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl text-shaza-gold font-bold mb-2">35+</div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl text-shaza-gold font-bold mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-shaza-black to-shaza-darkgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your construction needs and how we can help bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
