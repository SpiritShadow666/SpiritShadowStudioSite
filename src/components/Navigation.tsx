import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import studioLogo from "@/assets/studio-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Studio Name */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img 
              src={studioLogo} 
              alt="Studio Logo" 
              className="w-10 h-10 animate-glow"
            />
            <span className="text-xl font-bold text-gradient">
              Spirit Shadow Studio
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/privacy" 
              className={`nav-link ${isActive('/privacy') ? 'text-primary' : ''}`}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;