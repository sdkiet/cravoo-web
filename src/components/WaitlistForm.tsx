import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, CheckCircle } from "lucide-react";
const API_URL = process.env.API_URL;

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("API_URL", API_URL)
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
     if (!phone) {
      toast({
        title: "Email required",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "You're on the list! 🚀",
        description: "We'll notify you when Cravoo is live",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-subtle">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-card">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              You're on the list!
            </h3>
            <p className="text-muted-foreground text-lg">
              We'll notify you when Cravoo is live 🚀
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-subtle">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join the Waitlist
            </h3>
            <p className="text-muted-foreground text-lg">
              Be the first to experience fast, fresh food delivery with Cravoo
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 py-4 text-lg rounded-xl border-2 focus:border-primary"
                required
              />
            </div>
            
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-12 py-4 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-light text-white py-4 text-lg rounded-xl font-semibold shadow-elegant transform hover:scale-[1.02] transition-all duration-300"
            >
              {isLoading ? "Adding you to the list..." : "Notify Me When It's Live"}
            </Button>
          </form>
          
          {/* <p className="text-center text-sm text-muted-foreground mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;