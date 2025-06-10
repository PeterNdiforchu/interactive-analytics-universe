
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Profile Image & Summary */}
          <div className="bg-portfolio-dark-bg text-white p-8 rounded-lg lg:sticky lg:top-24">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-portfolio-purple/20 p-1">
                <img 
                  src="/lovable-uploads/shanika_anderson.png"
                  alt="Shanika" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h2 className="text-3xl font-bold mb-2">Hi, I'm Shanika</h2>
              <h3 className="text-xl text-gray-300 mb-6">
                A Data Analyst known for strong communication and problem-solving skills. I specialize in Excel, SQL, and Tableau for impactful business analysis.
              </h3>
              
              <p className="text-center mb-8">
                Always learning and ready for new challenges—let's create solutions together!
              </p>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a 
                  href="https://https://github.com/shanderson10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-portfolio-accent transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/shanika-anderson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-portfolio-accent transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              
              <div className="mt-4 text-sm text-gray-400">
                © Shanika Anderson 2025
              </div>
            </div>
          </div>
          
          {/* Right side - About Me Content */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-8 pb-4 border-b">About Me</h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Welcome to my portfolio! I'm not just a Data Analyst. I'm passionate about leveraging data-driven insights 
                to empower businesses and drive success. My journey into this field was built on a background in Pyschology with 
                a passion for problem solving.
            
              </p>
              
              <p>
                During my professional years, I delved into diverse aspects of business advising, from insurance to marketing. 
                However, it was in a data analytics internship program that I discovered the transformative power of data in shaping business outcomes. 
                This realization ignited my interest in leveraging data to empower businesses to make informed decisions crucial for success in their respective industries.
              </p>
              
              <p>
                I am currently a Data Analyst at Oeson, where each day presents an opportunity to apply my skills and values. My role demands 
                active listening, effective communication, and problem-solving—traits finely honed through firsthand client 
                interactions. Guided by my core values of Dependability, Integrity, Constant Improvement, and Empathy (DICE), 
                I navigate challenges with resolve and empathy, consistently delivering tailored solutions that meet and exceed 
                client expectations.
              </p>
              
              <p>
                This portfolio showcases my projects, learning journey, and dedication to continuous growth and innovation in 
                Data Analysis.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Data Analysis & Visualization
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> SQL & Database Management
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Tableau & Power BI
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Advanced Excel
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Python for Data Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Statistical Analysis
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Data Analysis Certification</h4>
                    <p className="text-sm">Chegg Skills, May 2024 - November 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bachelor of Science in Psychology</h4>
                    <p className="text-sm">University Name, 2006-2010</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="flex-1">
                <Link to="/projects">View My Projects</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="/lovable-uploads/Shanika-Anderson Resume 2.19.25.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
