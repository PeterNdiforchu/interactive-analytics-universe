
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">My Data Analytics Projects</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my data analysis projects, demonstrating skills in visualization, statistical analysis, and predictive modeling.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className="m-1"
            >
              All Projects
            </Button>
            {allTags.map(tag => (
              <Button 
                key={tag} 
                variant={filter === tag ? 'default' : 'outline'} 
                onClick={() => setFilter(tag)}
                className="m-1"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">No projects match the selected filter.</p>
            <Button onClick={() => setFilter('all')}>Show All Projects</Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
