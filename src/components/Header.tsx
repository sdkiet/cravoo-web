import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${isHomePage ? 'absolute' : 'relative bg-background border-b border-border'} top-0 left-0 right-0 z-50 px-6 py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className={`${isHomePage ? 'text-white' : 'text-foreground'} font-bold text-xl`}>Cravoo</span>
        </Link>
        
        {isHomePage ? (
          <Button 
            variant="outline"
            onClick={scrollToWaitlist}
            className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
          >
            Join Waitlist
          </Button>
        ) : (
          <Button 
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link to="/#waitlist">Join Waitlist</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;