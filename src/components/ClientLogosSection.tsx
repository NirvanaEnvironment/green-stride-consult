const ClientLogosSection = () => {
  // Using placeholder company names - in real implementation, these would be actual client logos
  const clients = [
    { name: "TechCorp", logo: "🏢" },
    { name: "GreenEnergy", logo: "⚡" },
    { name: "EcoManufacturing", logo: "🏭" },
    { name: "SustainableSolutions", logo: "🌱" },
    { name: "CleanTech Industries", logo: "💧" },
    { name: "RenewablePower", logo: "🔋" },
    { name: "EcoFriendly Corp", logo: "♻️" },
    { name: "GreenBuilding Co", logo: "🏗️" },
    { name: "CleanAir Systems", logo: "🌪️" },
    { name: "WaterPure Inc", logo: "💎" },
    { name: "SolarTech", logo: "☀️" },
    { name: "EcoTransport", logo: "🚛" }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Driving Environmental Excellence for 600+ Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From Fortune 500 companies to growing businesses, we've helped organizations 
            across all industries achieve their environmental compliance and sustainability goals.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="client-logo flex flex-col items-center justify-center p-6 bg-card rounded-lg"
            >
              <div className="text-4xl mb-2">{client.logo}</div>
              <div className="text-sm font-medium text-muted-foreground text-center">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">600+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">
            Certified & Accredited by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">EPA</span>
              </div>
              <span className="text-sm">EPA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">ISO</span>
              </div>
              <span className="text-sm">ISO 14001</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">OS</span>
              </div>
              <span className="text-sm">OSHA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">LE</span>
              </div>
              <span className="text-sm">LEED Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;