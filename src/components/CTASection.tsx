import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Shield, TrendingUp } from 'lucide-react';
import industrialSunset from '@/assets/industrial-sunset.jpg';

const CTASection = () => {
  const insights = [
    {
      icon: FileText,
      title: "Compliance Reports",
      description: "Latest regulatory updates"
    },
    {
      icon: Shield,
      title: "Risk Assessments",
      description: "Environmental impact analysis"
    },
    {
      icon: TrendingUp,
      title: "Sustainability Metrics",
      description: "Performance tracking tools"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={industrialSunset} 
          alt="Industrial sunset landscape representing environmental balance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                Insights That Keep You Compliant
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Stay ahead of environmental regulations with our comprehensive insights 
                and proactive compliance solutions. Our expert team ensures your business 
                remains compliant while optimizing for sustainability and cost-effectiveness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-foreground">
                What You'll Get:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Comprehensive environmental audit and assessment</span>
                </li>
                <li className="flex items-center space-x-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Customized compliance strategy and implementation plan</span>
                </li>
                <li className="flex items-center space-x-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Ongoing monitoring and regulatory updates</span>
                </li>
                <li className="flex items-center space-x-3 text-primary-foreground/90">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24/7 support from certified environmental experts</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-accent group">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Compliance Guide
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-primary-foreground font-semibold">EPA Certified Consultants</div>
                  <div className="text-primary-foreground/70 text-sm">Trusted by 600+ companies nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Cards */}
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <insight.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-primary-foreground/80">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">48hrs</div>
                  <div className="text-sm text-primary-foreground/70">Average Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-primary-foreground/70">Compliance Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;