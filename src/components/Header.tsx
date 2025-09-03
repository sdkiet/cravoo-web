import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold text-lg">C</span>
          </div>
          <span className="text-white font-bold text-xl">Cravoo</span>
        </div>
        
        <Button 
          variant="outline"
          onClick={scrollToWaitlist}
          className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;