import burgerFries from "@/assets/burger-fries.jpg";
import pizza from "@/assets/pizza.jpg";
import coffee from "@/assets/coffee.jpg";
import samosas from "@/assets/samosas.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const AppPreview = () => {
  const foodItems = [
    { image: burgerFries, name: "Burgers & Fries" },
    { image: pizza, name: "Fresh Pizza" },
    { image: coffee, name: "Coffee & Drinks" },
    { image: samosas, name: "Indian Snacks" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get ready for fresh food,
            <br />
            <span className="text-primary">delivered fast</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From crispy pizzas to steaming curries, we're bringing you the best local restaurants with lightning-fast delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Food Grid */}
          <div className="grid grid-cols-2 gap-6">
            {foodItems.map((item, index) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-white font-semibold">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* App Mockup */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <img
                src={appMockup}
                alt="Cravoo app preview"
                className="w-80 mx-auto animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
                Coming Soon!
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h4>
            <p className="text-muted-foreground">Food delivered in minutes, not hours</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥘</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Fresh & Quality</h4>
            <p className="text-muted-foreground">Only the freshest ingredients from top restaurants</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Easy Ordering</h4>
            <p className="text-muted-foreground">Simple, intuitive app experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;