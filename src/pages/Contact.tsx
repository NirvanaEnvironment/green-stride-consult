import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Shield,
  AlertTriangle,
  Users,
  Star,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 8:00 AM - 6:00 PM EST",
      action: "Call Now",
      highlight: false
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "info@enviroconsult.com",
      secondary: "We respond within 24 hours",
      action: "Send Email",
      highlight: false
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      primary: "Schedule a meeting",
      secondary: "30-minute strategy session",
      action: "Book Now",
      highlight: true
    },
    {
      icon: AlertTriangle,
      title: "Emergency Line",
      primary: "+1 (555) 911-ENVIRO",
      secondary: "24/7 emergency response",
      action: "Emergency Call",
      highlight: false
    }
  ];

  const offices = [
    {
      city: "Green City",
      type: "Headquarters",
      address: "123 Environmental Way, Suite 200",
      city_state: "Green City, GC 12345",
      phone: "+1 (555) 123-4567",
      email: "info@enviroconsult.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      services: ["Full Service", "Emergency Response", "Laboratory Testing"]
    },
    {
      city: "Metro Center",
      type: "Regional Office",
      address: "456 Sustainability Blvd, Floor 15",
      city_state: "Metro Center, MC 23456",
      phone: "+1 (555) 234-5678", 
      email: "metro@enviroconsult.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      services: ["Compliance Consulting", "EHS Management", "Training"]
    },
    {
      city: "Coastal Regional",
      type: "Satellite Office",
      address: "789 Ocean Conservation Dr",
      city_state: "Coastal City, CC 34567",
      phone: "+1 (555) 345-6789",
      email: "coastal@enviroconsult.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      services: ["Water Testing", "Marine Compliance", "Coastal Projects"]
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to environmental emergencies?",
      answer: "Our emergency response team is available 24/7 and can be on-site within 2-4 hours for critical situations in our primary service areas. For other regions, we coordinate with local partners to ensure rapid response."
    },
    {
      question: "What types of environmental permits do you help with?",
      answer: "We assist with all major environmental permits including air quality permits, water discharge permits, waste management licenses, stormwater permits, and specialty permits for various industries and operations."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, we offer comprehensive environmental and safety training programs customized to your industry and specific regulatory requirements. Training can be conducted on-site or at our facilities."
    },
    {
      question: "How do you ensure ongoing compliance?",
      answer: "We provide continuous monitoring, regular compliance audits, proactive updates on regulatory changes, and dedicated account management to ensure your ongoing compliance status and environmental performance."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve 10+ industries including manufacturing, oil & gas, healthcare, construction, and municipal sectors. Our team has specialized expertise for each industry's unique environmental challenges."
    },
    {
      question: "Do you offer sustainability consulting?",
      answer: "Absolutely! We help organizations develop and implement sustainability strategies, achieve green certifications, reduce environmental impact, and create long-term value through sustainable practices."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-earth-hands.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">Get Expert Environmental Guidance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Contact <span className="text-accent">Our Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your environmental consulting needs? We're here to help you achieve 
              compliance and sustainability goals with personalized expert guidance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-accent" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-accent" />
                <span>Free 30-Min Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span>Same-Day Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to provide 
              expert guidance and support for all your environmental consulting needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`group text-center border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-2 ${
                  method.highlight ? 'bg-gradient-to-br from-primary to-primary-light text-primary-foreground' : 'bg-card'
                }`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${method.highlight ? 'bg-white/20' : 'bg-gradient-to-br from-primary to-primary-light'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-[var(--transition-smooth)]`}>
                    <method.icon className={`w-8 h-8 ${method.highlight ? 'text-white' : 'text-primary-foreground'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${method.highlight ? 'text-white' : 'text-primary'}`}>
                    {method.title}
                  </h3>
                  
                  <p className={`font-semibold mb-2 ${method.highlight ? 'text-white' : 'text-foreground'}`}>
                    {method.primary}
                  </p>
                  
                  <p className={`text-sm mb-6 ${method.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {method.secondary}
                  </p>
                  
                  <Button 
                    className={`w-full ${
                      method.highlight 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'btn-hero'
                    }`}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 shadow-[var(--shadow-medium)]">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and one of our environmental experts will contact you within 24 hours 
                    to discuss your specific needs and provide tailored solutions.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-primary font-semibold text-base">First Name *</Label>
                      <Input 
                        id="firstName" 
                        type="text" 
                        placeholder="John"
                        className="mt-2 h-12 border-primary/20 focus:border-primary text-base"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-primary font-semibold text-base">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        type="text" 
                        placeholder="Doe"
                        className="mt-2 h-12 border-primary/20 focus:border-primary text-base"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-primary font-semibold text-base">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@company.com"
                        className="mt-2 h-12 border-primary/20 focus:border-primary text-base"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-primary font-semibold text-base">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="mt-2 h-12 border-primary/20 focus:border-primary text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-primary font-semibold text-base">Company</Label>
                      <Input 
                        id="company" 
                        type="text" 
                        placeholder="Your Company Name"
                        className="mt-2 h-12 border-primary/20 focus:border-primary text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-primary font-semibold text-base">Service Interest</Label>
                      <select 
                        id="service" 
                        className="w-full mt-2 h-12 px-4 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="compliance">Environmental Compliance</option>
                        <option value="ehs">EHS Management</option>
                        <option value="testing">Environmental Testing</option>
                        <option value="consulting">Environmental Consulting</option>
                        <option value="emergency">Emergency Response</option>
                        <option value="sustainability">Sustainability Planning</option>
                        <option value="training">Training & Certification</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="urgency" className="text-primary font-semibold text-base">Project Urgency</Label>
                    <select 
                      id="urgency" 
                      className="w-full mt-2 h-12 px-4 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-base"
                    >
                      <option value="">Select urgency level</option>
                      <option value="emergency">Emergency (Immediate response needed)</option>
                      <option value="urgent">Urgent (Within 1 week)</option>
                      <option value="normal">Normal (Within 1 month)</option>
                      <option value="planning">Planning (Future project)</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-primary font-semibold text-base">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your environmental consulting needs, current challenges, project scope, timeline, and any specific regulatory requirements..."
                      rows={6}
                      className="mt-2 border-primary/20 focus:border-primary resize-none text-base"
                      required 
                    />
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">What happens next?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• We'll review your submission within 2 hours</li>
                          <li>• An expert consultant will contact you within 24 hours</li>
                          <li>• We'll schedule a free 30-minute consultation</li>
                          <li>• Receive a customized proposal within 48 hours</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-hero w-full h-14 text-lg group">
                    <Send className="w-6 h-6 mr-3" />
                    Send Message & Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact Card */}
              <Card className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground border-0 shadow-[var(--shadow-medium)]">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Speak directly with an environmental expert
                  </p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                    Call +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time Guarantee */}
              <Card className="bg-card border-0 shadow-[var(--shadow-soft)]">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-primary">Response Guarantee</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Emergency calls: Immediate response
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      General inquiries: Within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      Proposals: Within 48 hours
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-card border-0 shadow-[var(--shadow-soft)]">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-4">Why Choose Us?</h4>
                  <div className="space-y-4">
                    {[
                      { icon: Star, text: "5.0 average client rating" },
                      { icon: Shield, text: "EPA certified consultants" },
                      { icon: Users, text: "600+ satisfied clients" },
                      { icon: CheckCircle, text: "100% compliance success rate" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-accent" />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Locations</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Serving You Nationwide
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With multiple offices across the region, we're strategically positioned to serve your 
              environmental consulting needs wherever you are located.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)] hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-primary group-hover:text-primary-light transition-[var(--transition-smooth)]">
                      {office.city}
                    </CardTitle>
                    <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                      {office.type}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-foreground">{office.address}</div>
                        <div className="text-muted-foreground">{office.city_state}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.services.map((service, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-secondary">
                    Contact This Office
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Frequently Asked Questions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Common Questions Answered
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Quick answers to the most common questions about our environmental consulting services 
                and how we can help your organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="group bg-card border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary mb-4 group-hover:text-primary-light transition-[var(--transition-smooth)]">
                          {faq.question}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Still have questions?</p>
              <Button className="btn-hero">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="section-padding bg-gradient-to-r from-destructive/90 to-destructive text-destructive-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Environmental Emergency?</h2>
            
            <p className="text-xl mb-8 text-destructive-foreground/90 max-w-2xl mx-auto">
              For environmental emergencies, spill response, or urgent compliance issues, 
              our emergency response team is available 24/7 with rapid deployment capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-destructive hover:bg-white/90 px-8 py-4 text-lg font-bold">
                <Phone className="w-6 h-6 mr-3" />
                Call Emergency Line: +1 (555) 911-ENVIRO
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-destructive px-8 py-4 text-lg">
                <Mail className="w-6 h-6 mr-3" />
                Emergency Email
              </Button>
            </div>

            <div className="mt-8 text-sm text-destructive-foreground/80">
              Average emergency response time: 2-4 hours in primary service areas
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/team-professional.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Start the Conversation</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Whether you need immediate assistance or want to discuss long-term environmental strategy, 
            we're here to provide expert guidance and comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold group">
              <Calendar className="w-6 h-6 mr-3" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg">
              <Mail className="w-6 h-6 mr-3" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;