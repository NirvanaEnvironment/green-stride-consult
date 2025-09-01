import { Users, Award, Leaf, Shield, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Committed to protecting and preserving our planet for future generations through sustainable practices."
    },
    {
      icon: Shield,
      title: "Integrity & Compliance",
      description: "Maintaining the highest standards of professional ethics and regulatory compliance in all our work."
    },
    {
      icon: Target,
      title: "Excellence in Service",
      description: "Delivering exceptional results through expertise, innovation, and client-focused solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive environmental change that extends beyond local communities to global sustainability."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Chief Environmental Officer",
      experience: "15+ years",
      specialty: "Environmental Impact Assessment"
    },
    {
      name: "Michael Chen",
      position: "Senior Compliance Manager",
      experience: "12+ years", 
      specialty: "Regulatory Compliance"
    },
    {
      name: "Dr. Jennifer Rodriguez",
      position: "Senior Environmental Scientist",
      experience: "10+ years",
      specialty: "Water & Soil Analysis"
    },
    {
      name: "David Thompson",
      position: "Safety & Health Director",
      experience: "14+ years",
      specialty: "EHS Management Systems"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/team-professional.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About EnviroConsult</h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-primary-foreground/90">
              Leading environmental consulting firm with over 15 years of expertise in compliance, sustainability, and environmental protection.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                <span>EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                <span>20+ Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-accent" />
                <span>600+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                At EnviroConsult, we are dedicated to helping organizations navigate the complex landscape of environmental regulations while promoting sustainable practices that benefit both business and the planet.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Our comprehensive approach combines deep regulatory expertise with innovative solutions, ensuring our clients not only meet compliance requirements but also exceed environmental stewardship expectations.
              </p>
              <Button className="btn-hero">Learn About Our Services</Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Sustainable Future</h3>
                  <p className="text-foreground/70">Building tomorrow's environmental solutions today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we provide to our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-scale bg-card border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our experienced professionals bring decades of combined expertise in environmental science, regulatory compliance, and sustainable business practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-scale bg-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-accent mb-1">{member.position}</p>
                  <p className="text-sm text-foreground/60 mb-2">{member.experience}</p>
                  <p className="text-sm text-foreground/70">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our expertise can help your organization achieve environmental excellence and regulatory compliance.
          </p>
          <Button className="btn-hero-white">Get Started Today</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;