import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComingSoonBadge from "@/components/ComingSoonBadge";
import WaitlistForm from "@/components/WaitlistForm";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ComingSoonBadge />
        <AppPreview />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;