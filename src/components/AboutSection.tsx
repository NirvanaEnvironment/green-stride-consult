import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Leaf } from 'lucide-react';
import complianceImage from '@/assets/compliance-scales.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Certified Experts",
      description: "Our team holds industry-leading certifications"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful compliance projects"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personalized attention for every client"
    },
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Environmentally conscious approaches"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Comprehensive Environment Compliance & EHS Compliance Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide end-to-end environmental consulting services that ensure your business 
                stays compliant with local and federal regulations while promoting sustainable 
                practices that benefit both your organization and the environment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-secondary">
              View Our Work
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img 
                src={complianceImage} 
                alt="Environmental compliance and legal scales representing justice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-[var(--shadow-strong)] p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;