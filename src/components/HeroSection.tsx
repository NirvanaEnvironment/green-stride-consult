import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-earth-hands.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hands protecting Earth - Environmental Conservation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-accent rounded-full"></div>
            <span className="text-primary-foreground/80 font-medium">Environmental Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Protect Your
            <span className="block text-accent">Environment</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
            Ensuring Environmental Excellence
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl leading-relaxed">
            Comprehensive environmental consulting services that help businesses achieve 
            compliance while protecting our planet for future generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>

          {/* Stats Indicator */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-accent">10+</div>
            <div className="text-primary-foreground/80">
              <div className="font-semibold">Years of Experience</div>
              <div className="text-sm">Trusted Environmental Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;