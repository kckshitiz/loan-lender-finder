
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, TrendingUp, Building, Hammer, DollarSign, Shield, Users, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "First Home Buyer Loans",
      description: "Specialized assistance for first-time buyers with access to government grants and low deposit options.",
      features: ["First Home Owner Grant assistance", "5% deposit options", "Stamp duty concessions", "Expert guidance"]
    },
    {
      icon: TrendingUp,
      title: "Refinancing Services",
      description: "Switch to better rates and terms with our comprehensive refinancing solutions.",
      features: ["Rate comparison", "Cash-out options", "Debt consolidation", "No exit fee loans"]
    },
    {
      icon: Building,
      title: "Investment Property Loans",
      description: "Build your property portfolio with our investment loan expertise.",
      features: ["Interest-only options", "Portfolio lending", "Tax benefits advice", "SMSF loans"]
    },
    {
      icon: Hammer,
      title: "Construction Loans",
      description: "Finance your dream home build with our construction loan specialists.",
      features: ["Progress payments", "Land + construction", "Renovation loans", "House & land packages"]
    },
    {
      icon: DollarSign,
      title: "Commercial Loans",
      description: "Business property financing for commercial investments and owner-occupiers.",
      features: ["Commercial mortgages", "Equipment finance", "Business loans", "Asset finance"]
    },
    {
      icon: Shield,
      title: "Bad Credit Loans",
      description: "Second chance home loans for those with credit challenges.",
      features: ["Credit repair advice", "Non-conforming loans", "Alt-doc options", "Specialist lenders"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-scale-in">
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Our Mortgage
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              Comprehensive home loan solutions tailored to your unique financial situation. 
              Our NSW mortgage brokers provide expert guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale animate-fade-in group" style={{animationDelay: `${0.1 * index}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full hover-scale">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground">Expert guidance, competitive rates, and personalized service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-muted-foreground">Dedicated brokers who understand your needs</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-muted-foreground">15+ years of mortgage broking experience</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">Fully licensed and professionally insured</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
