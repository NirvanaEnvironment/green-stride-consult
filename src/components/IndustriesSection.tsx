import { Factory, Zap, Building2, Truck, Waves, TreePine, Cpu, Pill, Hammer } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    { icon: Factory, name: "Manufacturing", image: "🏭" },
    { icon: Zap, name: "Energy & Utilities", image: "⚡" },
    { icon: Building2, name: "Commercial Real Estate", image: "🏢" },
    { icon: Truck, name: "Transportation", image: "🚛" },
    { icon: Waves, name: "Oil & Gas", image: "🛢️" },
    { icon: TreePine, name: "Agriculture", image: "🌾" },
    { icon: Cpu, name: "Technology", image: "💻" },
    { icon: Pill, name: "Healthcare", image: "🏥" },
    { icon: Hammer, name: "Construction", image: "🏗️" }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Trusted by Leading Industries Nationwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across diverse industries, providing tailored environmental 
            solutions that meet the unique challenges and regulatory requirements of each sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group bg-card rounded-xl p-8 text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-[var(--transition-smooth)]">
                {industry.image}
              </div>
              
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-[var(--transition-smooth)]">
                <industry.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-[var(--transition-smooth)]">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Industry Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">9+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">600+</div>
              <div className="text-muted-foreground">Companies Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Compliance Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;