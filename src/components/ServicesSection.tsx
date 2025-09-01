import { Button } from '@/components/ui/button';
import { Shield, Users, Leaf, MessageCircle, FileCheck, HardHat } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Environmental Compliance",
      description: "Comprehensive auditing and compliance management for environmental regulations and standards.",
      featured: false
    },
    {
      icon: HardHat,
      title: "Safety Officer Compliance",
      description: "Expert safety consulting and officer training to ensure workplace safety standards.",
      featured: false
    },
    {
      icon: Leaf,
      title: "Environmental Services",
      description: "Complete environmental impact assessments, remediation, and sustainable solutions for your business.",
      featured: true
    },
    {
      icon: MessageCircle,
      title: "Consulting Services",
      description: "Strategic environmental consulting and advisory services for long-term sustainability.",
      featured: false
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Complete Environmental Solutions Under One Roof
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From compliance auditing to comprehensive environmental services, we provide 
            everything your business needs to meet regulatory requirements and sustainability goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-[var(--transition-smooth)] ${
                service.featured
                  ? 'bg-gradient-to-br from-primary to-primary-light text-primary-foreground'
                  : 'bg-card hover:shadow-[var(--shadow-medium)] card-hover'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                service.featured 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-primary/10'
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.featured ? 'text-primary-foreground' : 'text-primary'
                }`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-4 ${
                service.featured ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed ${
                service.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'
              }`}>
                {service.description}
              </p>

              {service.featured && (
                <div className="absolute top-6 right-6">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-secondary">
            All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;