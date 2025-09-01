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
  Award,
  ArrowRight,
  Clock,
  Star,
  Zap
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
      features: ["Permit Applications & Renewals", "Regulatory Audits & Assessments", "Compliance Monitoring & Reporting", "Violation Resolution & Remediation"],
      price: "Starting at $2,500",
      timeline: "2-4 weeks",
      featured: true
    },
    {
      icon: Users,
      title: "EHS Management",
      description: "Complete Environmental, Health & Safety program development and implementation to protect your workforce and environment.",
      features: ["Safety Program Development", "Training & Certification", "Risk Assessments", "Emergency Response Planning"],
      price: "Starting at $3,500",
      timeline: "3-6 weeks"
    },
    {
      icon: Microscope,
      title: "Environmental Testing",
      description: "Advanced laboratory testing and field sampling services for air, water, soil, and waste materials with certified analysis.",
      features: ["Air Quality Testing", "Water & Wastewater Analysis", "Soil Contamination Assessment", "Waste Characterization"],
      price: "Starting at $1,200",
      timeline: "1-2 weeks"
    },
    {
      icon: FileText,
      title: "Environmental Consulting",
      description: "Strategic environmental consulting services including impact assessments, sustainability planning, and remediation strategies.",
      features: ["Environmental Impact Assessments", "Remediation Planning", "Sustainability Consulting", "Due Diligence Support"],
      price: "Starting at $2,000",
      timeline: "2-8 weeks"
    }
  ];

  const specializedServices = [
    {
      icon: CheckCircle,
      title: "OSHA Compliance",
      description: "Workplace safety compliance and comprehensive training programs to ensure worker protection.",
      benefits: ["Reduced workplace incidents", "Lower insurance costs", "Improved employee morale"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "24/7 spill response and emergency environmental services with rapid deployment capabilities.",
      benefits: ["Immediate response", "Damage minimization", "Regulatory coordination"]
    },
    {
      icon: Leaf,
      title: "Sustainability Planning",
      description: "Green initiatives and sustainable business practices to reduce environmental impact.",
      benefits: ["Cost savings", "Brand enhancement", "Future-proofing"]
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Comprehensive environmental risk evaluation and mitigation strategies for your operations.",
      benefits: ["Risk reduction", "Proactive planning", "Cost avoidance"]
    },
    {
      icon: BarChart3,
      title: "Data Management",
      description: "Environmental data tracking, analysis, and reporting systems for informed decision-making.",
      benefits: ["Better insights", "Compliance tracking", "Performance optimization"]
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "ISO 14001 and other environmental certifications to demonstrate your commitment.",
      benefits: ["Market credibility", "Competitive advantage", "Operational excellence"]
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: "🏭", clients: "150+" },
    { name: "Oil & Gas", icon: "🛢️", clients: "80+" },
    { name: "Chemical", icon: "⚗️", clients: "60+" },
    { name: "Healthcare", icon: "🏥", clients: "90+" },
    { name: "Construction", icon: "🏗️", clients: "120+" },
    { name: "Mining", icon: "⛏️", clients: "40+" },
    { name: "Transportation", icon: "🚛", clients: "70+" },
    { name: "Agriculture", icon: "🌾", clients: "50+" },
    { name: "Real Estate", icon: "🏢", clients: "85+" },
    { name: "Municipal", icon: "🏛️", clients: "45+" }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Initial Assessment", 
      description: "Comprehensive evaluation of your current environmental status, compliance gaps, and regulatory requirements.",
      duration: "1-2 weeks"
    },
    { 
      step: "02", 
      title: "Strategy Development", 
      description: "Creation of customized solutions and detailed implementation roadmap tailored to your specific needs.",
      duration: "1-3 weeks"
    },
    { 
      step: "03", 
      title: "Implementation", 
      description: "Systematic execution of environmental programs, compliance measures, and training initiatives.",
      duration: "2-12 weeks"
    },
    { 
      step: "04", 
      title: "Monitoring & Support", 
      description: "Ongoing monitoring, reporting, continuous improvement, and regulatory update management.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/industrial-sunset.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Comprehensive Environmental Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-accent">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive environmental solutions tailored to meet your compliance needs and sustainability goals. 
              From regulatory compliance to emergency response, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>100% Compliance Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                <span>24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                <span>EPA & ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Core Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Environmental Solutions
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of environmental services covers every aspect of compliance, 
              safety, and sustainability for your organization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] ${
                  service.featured 
                    ? 'bg-gradient-to-br from-primary to-primary-light text-primary-foreground' 
                    : 'bg-card hover:-translate-y-2'
                }`}
              >
                {service.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 ${service.featured ? 'bg-white/20' : 'bg-gradient-to-br from-primary to-primary-light'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-[var(--transition-smooth)]`}>
                    <service.icon className={`w-10 h-10 ${service.featured ? 'text-white' : 'text-primary-foreground'}`} />
                  </div>
                  
                  <CardTitle className={`text-2xl md:text-3xl ${service.featured ? 'text-white' : 'text-primary'} mb-4`}>
                    {service.title}
                  </CardTitle>
                  
                  <p className={`text-lg leading-relaxed ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    <h4 className={`font-semibold ${service.featured ? 'text-white' : 'text-foreground'}`}>
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center gap-3 ${service.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                          <CheckCircle className={`w-5 h-5 ${service.featured ? 'text-accent' : 'text-primary'} flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`flex items-center justify-between p-4 ${service.featured ? 'bg-white/10' : 'bg-primary/5'} rounded-xl mb-6`}>
                    <div>
                      <div className={`text-lg font-bold ${service.featured ? 'text-white' : 'text-primary'}`}>
                        {service.price}
                      </div>
                      <div className={`text-sm ${service.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                        Timeline: {service.timeline}
                      </div>
                    </div>
                    <Clock className={`w-6 h-6 ${service.featured ? 'text-accent' : 'text-primary'}`} />
                  </div>

                  <Button 
                    className={`w-full group ${
                      service.featured 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'btn-hero'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Specialized Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Additional Services & Expertise
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized services to support your complete environmental management strategy 
              and address unique industry challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-[var(--transition-smooth)]">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Industry Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Industries We Serve
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across diverse sectors, providing tailored solutions for each industry's 
              unique environmental challenges and regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-[var(--transition-smooth)]">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">{industry.clients} clients</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Industry Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">750+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">48hrs</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Methodology</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Proven Process for Success
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to environmental consulting ensures comprehensive coverage, 
              optimal results, and long-term success for your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] text-center relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl group-hover:scale-110 transition-[var(--transition-smooth)]">
                    {process.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                    {process.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {process.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-medium">{process.duration}</span>
                  </div>
                </CardContent>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">Why Choose Us</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  The EnviroConsult Advantage
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  When you choose EnviroConsult, you're partnering with industry leaders who bring 
                  unmatched expertise, proven results, and unwavering commitment to your success.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    title: "Proven Track Record", 
                    description: "15+ years of successful environmental consulting with 100% compliance rate",
                    icon: Award
                  },
                  { 
                    title: "Expert Team", 
                    description: "EPA-certified professionals with deep industry knowledge and experience",
                    icon: Users
                  },
                  { 
                    title: "Comprehensive Solutions", 
                    description: "Full-service environmental consulting from compliance to sustainability",
                    icon: Shield
                  },
                  { 
                    title: "24/7 Support", 
                    description: "Emergency response and ongoing support whenever you need it",
                    icon: AlertTriangle
                  }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-xl shadow-[var(--shadow-soft)]">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">{advantage.title}</h4>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Service Guarantee</h3>
                  <p className="text-muted-foreground">We stand behind our work with comprehensive guarantees</p>
                </div>

                <div className="space-y-6">
                  {[
                    { guarantee: "100% Compliance Assurance", description: "We guarantee regulatory compliance or we'll fix it at no cost" },
                    { guarantee: "48-Hour Response Time", description: "Emergency situations receive immediate attention and response" },
                    { guarantee: "Satisfaction Guarantee", description: "Not satisfied? We'll work until you are, or provide a full refund" }
                  ].map((item, index) => (
                    <div key={index} className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)]">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary mb-2">{item.guarantee}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-earth-hands.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your environmental consulting needs and discover how we can help 
            your organization achieve compliance and sustainability goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold group">
              Request Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;