import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Hear It from Those Who've Worked With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about 
            their experience working with our environmental consulting team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonial Content */}
          <div className="space-y-8">
            <div className="relative">
              <Quote className="w-16 h-16 text-primary/20 absolute -top-4 -left-4" />
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed relative z-10">
                "EnviroConsult transformed our compliance process. Their expertise and 
                attention to detail helped us not only meet all EPA requirements but also 
                implement sustainable practices that reduced our operational costs by 30%."
              </blockquote>
            </div>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(5.0 rating)</span>
            </div>

            <div className="space-y-2">
              <div className="text-lg font-semibold text-foreground">Sarah Mitchell</div>
              <div className="text-primary">Director of Operations</div>
              <div className="text-muted-foreground">GreenTech Manufacturing Corp</div>
            </div>

            {/* Additional Stats */}
            <div className="bg-card rounded-xl p-6 space-y-4">
              <h4 className="font-semibold text-foreground">Project Results:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">30%</div>
                  <div className="text-muted-foreground">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">EPA Compliance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6 Months</div>
                  <div className="text-muted-foreground">Implementation Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Zero</div>
                  <div className="text-muted-foreground">Violations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src="/api/placeholder/500/600" 
                alt="Sarah Mitchell - Environmental Consultant"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            {/* Floating Certification Card */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-[var(--shadow-strong)] p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">EPA Certified</div>
                  <div className="text-sm text-muted-foreground">Environmental Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8">
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-foreground mb-4">
              "Outstanding service and expertise. They helped us navigate complex regulations 
              with ease and professionalism."
            </blockquote>
            <div className="text-sm">
              <div className="font-semibold">Michael Chen</div>
              <div className="text-muted-foreground">VP Operations, TechFlow Industries</div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8">
            <div className="flex items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-foreground mb-4">
              "Their proactive approach to compliance saved us from potential violations 
              and helped improve our environmental impact."
            </blockquote>
            <div className="text-sm">
              <div className="font-semibold">Jennifer Rodriguez</div>
              <div className="text-muted-foreground">Environmental Manager, Pacific Energy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;