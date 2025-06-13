
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Shield, Heart, TrendingUp, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Client First",
      description: "Your financial goals are our priority. We work tirelessly to secure the best possible outcome for every client."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Licensed, insured, and committed to transparent dealings. Your trust is the foundation of our business."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "15+ years in the industry with deep knowledge of NSW property market and lending landscape."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Direct access to experienced brokers who understand your unique circumstances and needs."
    }
  ];

  const stats = [
    { value: "$2.5B+", label: "Total Loans Settled" },
    { value: "5,000+", label: "Happy Clients" },
    { value: "40+", label: "Lender Partners" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-scale-in">
              About NSW Mortgage Broker
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your Trusted
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Home Loan Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              For over 15 years, we've been helping NSW families achieve their property dreams. 
              Our experienced team of licensed mortgage brokers provides personalized service and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, NSW Mortgage Broker began with a simple mission: to make home ownership 
                  accessible and affordable for every Australian family. What started as a small brokerage 
                  in Sydney has grown into one of NSW's most trusted mortgage advisory firms.
                </p>
                <p>
                  Our founder, with over two decades in banking and finance, recognized the need for 
                  unbiased mortgage advice that puts clients first. Today, our team of licensed brokers 
                  continues this tradition, helping thousands of families secure their dream homes.
                </p>
                <p>
                  We've built lasting relationships with over 40 lenders, from major banks to specialist 
                  financiers, ensuring we can find the right loan for every situation. Our commitment to 
                  transparency, integrity, and exceptional service has earned us a reputation as NSW's 
                  go-to mortgage experts.
                </p>
              </div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-bold text-center">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Senior Mortgage Broker", experience: "12 years experience" },
              { name: "Michael Chen", role: "Commercial Lending Specialist", experience: "10 years experience" },
              { name: "Emma Williams", role: "First Home Buyer Expert", experience: "8 years experience" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Home Loan Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through the process and secure the best possible loan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 1300 123 456
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Get Pre-Approval
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
