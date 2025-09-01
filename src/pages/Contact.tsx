import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 8:00 AM - 6:00 PM EST"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@enviroconsult.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Environmental Way, Suite 200",
      subtext: "Green City, GC 12345"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      subtext: "Emergency services available 24/7"
    }
  ];

  const offices = [
    {
      city: "Green City (Headquarters)",
      address: "123 Environmental Way, Suite 200",
      phone: "+1 (555) 123-4567",
      email: "info@enviroconsult.com"
    },
    {
      city: "Metro Center",
      address: "456 Sustainability Blvd, Floor 15",
      phone: "+1 (555) 234-5678", 
      email: "metro@enviroconsult.com"
    },
    {
      city: "Coastal Regional",
      address: "789 Ocean Conservation Dr",
      phone: "+1 (555) 345-6789",
      email: "coastal@enviroconsult.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-earth-hands.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-primary-foreground/90">
              Ready to discuss your environmental consulting needs? We're here to help you achieve compliance and sustainability goals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-accent" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-lg text-foreground/80 mb-8">
                Fill out the form below and one of our environmental experts will contact you within 24 hours to discuss your specific needs.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-primary font-medium">First Name *</Label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      placeholder="John"
                      className="mt-1 border-primary/20 focus:border-primary"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-primary font-medium">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      placeholder="Doe"
                      className="mt-1 border-primary/20 focus:border-primary"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-primary font-medium">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com"
                    className="mt-1 border-primary/20 focus:border-primary"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-primary font-medium">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="mt-1 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-primary font-medium">Company</Label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Your Company Name"
                    className="mt-1 border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-primary font-medium">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full mt-1 px-3 py-2 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="compliance">Environmental Compliance</option>
                    <option value="ehs">EHS Management</option>
                    <option value="testing">Environmental Testing</option>
                    <option value="consulting">Environmental Consulting</option>
                    <option value="emergency">Emergency Response</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-primary font-medium">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your environmental consulting needs..."
                    rows={6}
                    className="mt-1 border-primary/20 focus:border-primary resize-none"
                    required 
                  />
                </div>
                
                <Button className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-scale bg-card border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-foreground/60">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="mt-8 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">Emergency Services</h4>
                  <p className="text-foreground/80 mb-3">
                    For environmental emergencies, spill response, or urgent compliance issues, our emergency response team is available 24/7.
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Call Emergency Line: +1 (555) 911-ENVIRO
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Locations</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              With multiple offices across the region, we're positioned to serve your environmental consulting needs wherever you are.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover-scale bg-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-foreground/80">
                Quick answers to common questions about our environmental consulting services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly can you respond to environmental emergencies?",
                  answer: "Our emergency response team is available 24/7 and can be on-site within 2-4 hours for critical situations in our service areas."
                },
                {
                  question: "What types of environmental permits do you help with?",
                  answer: "We assist with all major environmental permits including air quality, water discharge, waste management, and specialty permits for various industries."
                },
                {
                  question: "Do you provide training for our staff?",
                  answer: "Yes, we offer comprehensive environmental and safety training programs customized to your industry and specific regulatory requirements."
                },
                {
                  question: "How do you ensure ongoing compliance?",
                  answer: "We provide continuous monitoring, regular audits, and proactive updates on regulatory changes to ensure your ongoing compliance status."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-primary mb-3">{faq.question}</h4>
                    <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you need immediate assistance or want to discuss long-term environmental strategy, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;