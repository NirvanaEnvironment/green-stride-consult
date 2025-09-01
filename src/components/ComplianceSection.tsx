import { Button } from '@/components/ui/button';
import { FileText, Shield, Factory, Droplets, Zap } from 'lucide-react';

const ComplianceSection = () => {
  const complianceAreas = [
    {
      icon: FileText,
      title: "Environmental Permits",
      description: "Air quality permits, water discharge permits, and waste management licenses."
    },
    {
      icon: Shield,
      title: "Safety Regulations",
      description: "OSHA compliance, workplace safety protocols, and hazard assessments."
    },
    {
      icon: Factory,
      title: "Industrial Compliance",
      description: "Manufacturing regulations, emissions standards, and industrial waste management."
    },
    {
      icon: Droplets,
      title: "Water & Wastewater",
      description: "Clean Water Act compliance, stormwater management, and treatment systems."
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Renewable energy compliance, efficiency standards, and carbon footprint reduction."
    }
  ];

  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            End-To-End Compliance Support For Local And National Environmental Laws
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Navigate complex environmental regulations with confidence. Our comprehensive 
            compliance support covers all aspects of environmental law from federal EPA 
            requirements to local municipal codes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {complianceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 text-center hover:shadow-[var(--shadow-medium)] card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-[var(--transition-smooth)]">
                <area.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Regulatory Bodies */}
        <div className="bg-card rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-center text-primary mb-8">
            We Help You Comply With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">EPA</div>
              <div className="text-sm text-muted-foreground">Environmental Protection Agency</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">OSHA</div>
              <div className="text-sm text-muted-foreground">Occupational Safety & Health</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">DOT</div>
              <div className="text-sm text-muted-foreground">Department of Transportation</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">Local Codes</div>
              <div className="text-sm text-muted-foreground">Municipal Regulations</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-secondary">
            All Compliance Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;