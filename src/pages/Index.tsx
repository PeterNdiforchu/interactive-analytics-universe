
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

const Index = () => {
  // Get only the first 3 projects for the homepage
  const featuredProjects = projectsData.slice(0, 5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Featured Projects Section */}
      <section className="section">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button asChild variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
            <Link to="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-portfolio-blue to-portfolio-dark-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your data?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to extract valuable insights from your data and drive data-informed decisions.
          </p>
          <Button asChild size="lg" className="bg-white text-portfolio-blue hover:bg-gray-100">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
