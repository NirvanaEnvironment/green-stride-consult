import { Users, Award, Leaf, Shield, Target, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Committed to protecting and preserving our planet for future generations through sustainable practices and innovative solutions."
    },
    {
      icon: Shield,
      title: "Integrity & Compliance",
      description: "Maintaining the highest standards of professional ethics and regulatory compliance in all our environmental consulting work."
    },
    {
      icon: Target,
      title: "Excellence in Service",
      description: "Delivering exceptional results through expertise, innovation, and client-focused solutions that exceed expectations."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive environmental change that extends beyond local communities to contribute to global sustainability goals."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Chief Environmental Officer",
      experience: "15+ years",
      specialty: "Environmental Impact Assessment",
      certifications: ["EPA Certified", "ISO 14001 Lead Auditor"]
    },
    {
      name: "Michael Chen",
      position: "Senior Compliance Manager",
      experience: "12+ years", 
      specialty: "Regulatory Compliance",
      certifications: ["OSHA Certified", "Environmental Law"]
    },
    {
      name: "Dr. Jennifer Rodriguez",
      position: "Senior Environmental Scientist",
      experience: "10+ years",
      specialty: "Water & Soil Analysis",
      certifications: ["Laboratory Certified", "Research PhD"]
    },
    {
      name: "David Thompson",
      position: "Safety & Health Director",
      experience: "14+ years",
      specialty: "EHS Management Systems",
      certifications: ["CSP Certified", "Risk Management"]
    }
  ];

  const achievements = [
    { number: "600+", label: "Clients Served", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "100%", label: "Compliance Rate", icon: CheckCircle },
    { number: "24/7", label: "Emergency Support", icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/team-professional.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">EPA Certified Environmental Experts</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              About <span className="text-accent">EnviroConsult</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Leading environmental consulting firm with over 15 years of expertise in compliance, 
              sustainability, and environmental protection. Trusted by 600+ companies nationwide.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{achievement.number}</div>
                  <div className="text-primary-foreground/80 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">Our Mission</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Protecting Our Planet Through Expert Environmental Solutions
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At EnviroConsult, we are dedicated to helping organizations navigate the complex landscape 
                  of environmental regulations while promoting sustainable practices that benefit both business and the planet.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our comprehensive approach combines deep regulatory expertise with innovative solutions, 
                  ensuring our clients not only meet compliance requirements but also exceed environmental stewardship expectations.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Comprehensive environmental compliance management",
                  "Sustainable business practice implementation", 
                  "Risk assessment and mitigation strategies",
                  "Emergency response and remediation services"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-hero group">
                Learn About Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary-light/10 to-accent/10 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-8 shadow-[var(--shadow-medium)]">
                    <Leaf className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Sustainable Future</h3>
                  <p className="text-lg text-muted-foreground">Building tomorrow's environmental solutions today</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-[var(--shadow-strong)] p-6 border border-primary/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5.0</div>
                    <div className="text-sm text-muted-foreground">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Principles That Guide Our Work
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values shape every decision we make and every solution we provide, 
              ensuring consistent excellence in environmental consulting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-[var(--transition-smooth)]">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Our Expert Leadership Team
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced professionals bring decades of combined expertise in environmental science, 
              regulatory compliance, and sustainable business practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-[var(--transition-smooth)]">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                    {member.name}
                  </h3>
                  
                  <p className="text-accent font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.experience} Experience</p>
                  <p className="text-sm text-foreground/70 mb-4">{member.specialty}</p>
                  
                  <div className="space-y-2">
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mr-2">
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History & Achievements */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium">Our Journey</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  15+ Years of Environmental Excellence
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Founded in 2009, EnviroConsult has grown from a small team of passionate environmental 
                  scientists to a leading consulting firm serving clients across multiple industries and regions.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { year: "2009", milestone: "Company founded with focus on environmental compliance" },
                  { year: "2012", milestone: "Achieved EPA certification and expanded service offerings" },
                  { year: "2016", milestone: "Opened second office and reached 100+ clients milestone" },
                  { year: "2020", milestone: "Launched sustainability consulting division" },
                  { year: "2024", milestone: "Serving 600+ clients with 20+ expert consultants" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-foreground leading-relaxed">{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-[var(--shadow-medium)]">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Certifications & Accreditations</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "EPA", full: "Environmental Protection Agency", badge: "🏛️" },
                    { name: "ISO 14001", full: "Environmental Management", badge: "🌍" },
                    { name: "OSHA", full: "Occupational Safety & Health", badge: "🛡️" },
                    { name: "LEED", full: "Leadership in Energy & Environmental Design", badge: "🏗️" }
                  ].map((cert, index) => (
                    <div key={index} className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-3xl mb-2">{cert.badge}</div>
                      <div className="font-bold text-primary">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">{cert.full}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl">
                  <div className="flex items-center justify-center space-x-4">
                    <Star className="w-8 h-8 text-accent" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Industry Leader</div>
                      <div className="text-sm text-muted-foreground">Recognized Excellence in Environmental Consulting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we provide to our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-[var(--transition-smooth)]">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-earth-hands.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our expertise can help your organization achieve environmental excellence 
            and regulatory compliance while building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;