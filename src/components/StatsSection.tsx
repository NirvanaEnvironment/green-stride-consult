import { useEffect, useState } from 'react';
import teamImage from '@/assets/team-professional.jpg';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "500+", label: "Projects Completed", suffix: "" },
    { number: "1000+", label: "Clients Served", suffix: "" },
    { number: "50+", label: "Team Members", suffix: "" },
    { number: "15+", label: "Years Experience", suffix: "" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startCount = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - startCount) + startCount);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats-section" className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={teamImage} 
          alt="Professional environmental consulting team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Our proven track record speaks for itself. We've helped hundreds of 
            companies achieve environmental compliance and sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/\D/g, ''));
            const suffix = stat.number.replace(/\d/g, '');
            
            return (
              <div key={index} className="text-center">
                <div className="stat-number mb-2">
                  <CountUpNumber end={numericValue} />
                  {suffix}
                </div>
                <div className="text-primary-foreground/80 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-accent text-xl font-semibold">EPA Certified</div>
            <div className="text-primary-foreground/70">Environmental Protection Agency</div>
          </div>
          <div className="space-y-2">
            <div className="text-accent text-xl font-semibold">ISO 14001</div>
            <div className="text-primary-foreground/70">Environmental Management</div>
          </div>
          <div className="space-y-2">
            <div className="text-accent text-xl font-semibold">OSHA Compliant</div>
            <div className="text-primary-foreground/70">Safety Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;