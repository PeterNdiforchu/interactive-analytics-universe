
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-foreground flex items-center">
          <span className="text-primary">Data</span>Analytics
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About Me
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="ml-4 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <a href="https://github.com/shanderson10" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`px-4 py-2 ${location.pathname === '/' ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`px-4 py-2 ${location.pathname === '/projects' ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              About Me
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              Contact
            </Link>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
              <a href="https://github.com/shanderson10" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
