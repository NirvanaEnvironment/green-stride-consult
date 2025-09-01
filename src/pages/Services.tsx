import { 
  Shield, 
  FileText, 
  Microscope, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Leaf,
  Target,
  BarChart3,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: "Environmental Compliance",
      description: "Comprehensive compliance management for federal, state, and local environmental regulations including EPA requirements and permitting.",
      features: ["Permit Applications", "Regulatory Audits", "Compliance Monitoring", "Violation Resolution"],
      featured: true
    },
    {
      icon: Users,
      title: "EHS Management",
      description: "Complete Environmental, Health & Safety program development and implementation to protect your workforce and environment.",
      features: ["Safety Program Development", "Training & Certification", "Risk Assessments", "Emergency Response Planning"]
    },
    {
      icon: Microscope,
      title: "Environmental Testing",
      description: "Advanced laboratory testing and field sampling services for air, water, soil, and waste materials with certified analysis.",
      features: ["Air Quality Testing", "Water Analysis", "Soil Contamination", "Waste Characterization"]
    },
    {
      icon: FileText,
      title: "Environmental Consulting",
      description: "Strategic environmental consulting services including impact assessments, sustainability planning, and remediation strategies.",
      features: ["Impact Assessments", "Remediation Planning", "Sustainability Consulting", "Due Diligence"]
    }
  ];

  const specializedServices = [
    {
      icon: CheckCircle,
      title: "OSHA Compliance",
      description: "Workplace safety compliance and training programs."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Spill response and emergency environmental services."
    },
    {
      icon: Leaf,
      title: "Sustainability Planning",
      description: "Green initiatives and sustainable business practices."
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Environmental risk evaluation and mitigation strategies."
    },
    {
      icon: BarChart3,
      title: "Data Management",
      description: "Environmental data tracking and reporting systems."
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "ISO 14001 and other environmental certifications."
    }
  ];

  const industries = [
    "Manufacturing", "Oil & Gas", "Chemical", "Healthcare", "Construction", 
    "Mining", "Transportation", "Agriculture", "Real Estate", "Municipal"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/industrial-sunset.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-primary-foreground/90">
              Comprehensive environmental solutions tailored to meet your compliance needs and sustainability goals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                <span>EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Full Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Core Services</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our comprehensive suite of environmental services covers every aspect of compliance, safety, and sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index} 
                className={`hover-scale ${service.featured ? 'bg-primary text-primary-foreground' : 'bg-card'} border-0 shadow-soft`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${service.featured ? 'bg-white/20' : 'bg-gradient-to-br from-primary to-primary-light'} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className={`w-8 h-8 ${service.featured ? 'text-white' : 'text-primary-foreground'}`} />
                  </div>
                  <CardTitle className={`text-2xl ${service.featured ? 'text-white' : 'text-primary'}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-lg mb-6 leading-relaxed ${service.featured ? 'text-white/90' : 'text-foreground/80'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-3 ${service.featured ? 'text-white/90' : 'text-foreground/70'}`}>
                        <CheckCircle className={`w-5 h-5 ${service.featured ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Specialized Services</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Additional expertise areas to support your complete environmental management strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover-scale bg-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Industries We Serve</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our expertise spans across diverse sectors, providing tailored solutions for each industry's unique environmental challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-4 text-center hover-scale border border-primary/10"
              >
                <span className="text-primary font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Process</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              A systematic approach to environmental consulting that ensures comprehensive coverage and optimal results.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Comprehensive evaluation of your current environmental status and compliance needs." },
              { step: "02", title: "Strategy", description: "Development of customized solutions and implementation roadmap." },
              { step: "03", title: "Implementation", description: "Execution of environmental programs and compliance measures." },
              { step: "04", title: "Monitoring", description: "Ongoing monitoring, reporting, and continuous improvement." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{process.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today to discuss your environmental consulting needs and discover how we can help your organization achieve compliance and sustainability goals.
          </p>
          <Button className="btn-hero-white">Request Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;