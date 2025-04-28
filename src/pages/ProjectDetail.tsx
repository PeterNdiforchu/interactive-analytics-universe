
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === Number(id));
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Project Banner */}
      <div className="w-full h-[40vh] bg-gradient-to-r from-portfolio-blue to-portfolio-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white border-none">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg mb-6">{project.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                  <p>
                    The project aimed to address key business challenges by analyzing complex datasets 
                    and extracting actionable insights to drive strategic decision-making.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Approach</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Collected and cleaned large datasets from multiple sources</li>
                    <li>Applied statistical analysis to identify patterns and trends</li>
                    <li>Developed interactive visualizations to communicate findings</li>
                    <li>Implemented predictive models to forecast future outcomes</li>
                    <li>Created comprehensive reports with actionable recommendations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Results</h3>
                  <p>
                    The analysis revealed significant insights that led to a 25% improvement in 
                    operational efficiency and a 15% increase in revenue. Stakeholders were able to make 
                    data-driven decisions with confidence, resulting in improved business outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Key Visualizations */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Key Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Dashboard 1</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">Performance Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time KPI tracking and performance metrics
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Dashboard 2</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">Trend Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Time-series visualization of key metrics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-muted-foreground">Duration</h4>
                  <p>3 months</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-muted-foreground">Client</h4>
                  <p>Finance Industry</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-muted-foreground">Tools Used</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>SQL for data extraction and transformation</li>
                    <li>Python for data analysis and modeling</li>
                    <li>Tableau for data visualization</li>
                    <li>Excel for reporting</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button asChild className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                
                {project.demoUrl && (
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            {/* Related Projects */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
              
              <div className="space-y-4">
                {projectsData
                  .filter(p => p.id !== project.id && p.tags.some(tag => project.tags.includes(tag)))
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <div key={relatedProject.id} className="border-b pb-4 last:border-0">
                      <Link to={`/projects/${relatedProject.id}`} className="hover:text-primary">
                        <h4 className="font-medium">{relatedProject.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
