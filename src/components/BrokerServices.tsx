
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, DollarSign, Clock, Shield, CheckCircle, Phone } from 'lucide-react';

const BrokerServices = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Free Service",
      description: "No cost to you - we're paid by the lenders, not our clients"
    },
    {
      icon: Users,
      title: "Expert NSW Brokers",
      description: "Local knowledge of NSW property market and lender requirements"
    },
    {
      icon: Clock,
      title: "Fast Approvals",
      description: "Pre-approval in 24-48 hours with our streamlined process"
    },
    {
      icon: Shield,
      title: "40+ Lenders",
      description: "Access to major banks, credit unions, and specialist lenders"
    }
  ];

  const benefits = [
    "Compare rates from 40+ lenders in minutes",
    "NSW First Home Buyer Grant assistance",
    "Investment property loan specialists",
    "Construction and land loan experts",
    "Refinancing and debt consolidation",
    "SMSF and commercial lending",
    "Bad credit and low doc solutions",
    "Ongoing support throughout the loan"
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our NSW Mortgage Brokers?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As licensed mortgage brokers in NSW, we help you navigate the complex home loan market 
            and secure the best deal for your situation. Our service is completely free to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">What We Do For You</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <p className="opacity-90">
                Speak to one of our qualified NSW mortgage brokers today
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-xl font-bold">1300 123 456</span>
                </div>
                <p className="text-sm opacity-90">Available 7 days a week</p>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Get Free Consultation
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  Calculate Borrowing Power
                </Button>
              </div>

              <div className="text-center text-sm opacity-90">
                <p>Licensed NSW Mortgage Broker</p>
                <p>Australian Credit Licence #123456</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrokerServices;
