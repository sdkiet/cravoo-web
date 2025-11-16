import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroFood}
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            FOOD IN
            <br />
            <span className="text-primary-glow">MINUTES</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 font-bold">
            CRAVE WORTHY FOOD, DELIVERED IN MINUTES
          </p>

          <p className="text-md text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {`We're cooking up something delicious. Join the waitlist to be the first to know when we launch.`}
          </p>

          <Button
            onClick={scrollToWaitlist}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 left-16 w-6 h-6 bg-primary-glow/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-32 w-3 h-3 bg-white/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
