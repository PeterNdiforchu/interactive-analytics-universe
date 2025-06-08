
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark-bg text-portfolio-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Intro */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-portfolio-accent">Data</span>Analytics
            </h3>
            <p className="text-sm mb-4 text-gray-300">
              Data analytics portfolio showcasing projects and expertise in business intelligence, data visualization, and predictive modeling.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-portfolio-accent transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-portfolio-accent transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-portfolio-accent transition-colors">About Me</Link></li>
              <li><Link to="/contact" className="hover:text-portfolio-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/shanderson10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shanika-anderson/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:email@example.com" 
                className="text-gray-300 hover:text-portfolio-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              email@example.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Shanika Anderson. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Designed with ❤️ by Shanika Anderson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
