
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-portfolio-blue to-portfolio-dark-bg text-white py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm Kelachi
            <span className="block text-portfolio-accent mt-2">Data Analyst & Visualizer</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            I specialize in transforming complex data into actionable insights through Excel, SQL, Tableau, and Python. 
            Let's turn your data challenges into opportunities.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-portfolio-purple hover:bg-portfolio-light-purple">
              <Link to="/projects" className="flex items-center">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-portfolio-blue">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="aspect-square rounded-full bg-portfolio-purple/20 backdrop-blur-sm p-8 border border-portfolio-purple/30 animate-fade-in">
            <img 
              src="/lovable-uploads/32ef4166-9e58-4904-b36b-4c8bbd055659.png" 
              alt="Data Analytics" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-portfolio-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-portfolio-purple/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
