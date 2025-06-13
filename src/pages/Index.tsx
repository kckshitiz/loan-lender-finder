
import React from 'react';
import Header from '@/components/Header';
import LoanCalculator from '@/components/LoanCalculator';
import FeaturedLenders from '@/components/FeaturedLenders';
import BrokerServices from '@/components/BrokerServices';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Shield, Award } from 'lucide-react';

const Index = () => {
  const stats = [
    { icon: TrendingUp, value: "$2.5B+", label: "Loans Settled" },
    { icon: Users, value: "5,000+", label: "Happy Clients" },
    { icon: Shield, value: "40+", label: "Lender Partners" },
    { icon: Award, value: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with NSW Home Background */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 overflow-hidden animate-fade-in">
        {/* NSW Modern Home Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-scale-in">
              Licensed NSW Mortgage Broker
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Find Your Perfect
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Home Loan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              As NSW's trusted mortgage brokers, we compare rates from 40+ lenders to find you 
              the best home loan deal. Our service is completely free - get pre-approved in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="text-lg px-8 hover-scale group">
                Get Pre-Approved Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover-scale">
                Compare Rates
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${1 + index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2 animate-scale-in" style={{animationDelay: `${1.2 + index * 0.1}s`}} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Happy NSW Families Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Helping NSW Families Achieve Their Dreams</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              See how we've helped thousands of families find their perfect home across NSW
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern NSW family home exterior"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Dream Home in Parramatta</h3>
                <p className="text-sm opacity-90">Sarah & Mike's First Home</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fade-in" style={{animationDelay: '0.5s'}}>
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful NSW suburban home with family"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibent">Family Home in Newcastle</h3>
                <p className="text-sm opacity-90">The Johnson Family</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fade-in" style={{animationDelay: '0.6s'}}>
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury NSW home with modern architecture"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Investment Property Success</h3>
                <p className="text-sm opacity-90">Central Coast Investment</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="hover-scale animate-fade-in" style={{animationDelay: '0.8s'}}>
              View More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Calculate Your Home Loan</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              Use our free calculator to estimate your monthly repayments and borrowing capacity
            </p>
          </div>
          <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Featured Lenders */}
      <div className="animate-fade-in">
        <FeaturedLenders />
      </div>

      {/* Broker Services */}
      <div className="animate-fade-in">
        <BrokerServices />
      </div>

      {/* NSW Property Market Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">NSW Property Market Insights</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stay informed about the latest trends in the NSW property market. Our expert brokers 
                provide valuable insights to help you make informed decisions about your home loan.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-scale-in" style={{animationDelay: '0.2s'}} />
                  <p className="text-muted-foreground">Current average rates starting from 5.89%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-scale-in" style={{animationDelay: '0.4s'}} />
                  <p className="text-muted-foreground">Sydney median house price: $1.2M</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-scale-in" style={{animationDelay: '0.6s'}} />
                  <p className="text-muted-foreground">First home buyer activity up 15%</p>
                </div>
              </div>
              <Button className="hover-scale animate-scale-in" style={{animationDelay: '0.8s'}}>
                Get Market Report
              </Button>
            </div>
            <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Sydney Opera House and harbor representing NSW property market"
                className="w-full h-96 object-cover rounded-lg shadow-lg hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* NSW First Home Buyer Section */}
      <section className="py-16 bg-muted/30 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">NSW First Home Buyer Specialists</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Buying your first home in NSW? We'll help you navigate the First Home Owner Grant, 
              stamp duty exemptions, and find lenders with low deposit options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2 animate-scale-in" style={{animationDelay: '0.6s'}}>$10,000</div>
                  <p className="text-muted-foreground">NSW First Home Owner Grant</p>
                </CardContent>
              </Card>
              <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.5s'}}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2 animate-scale-in" style={{animationDelay: '0.7s'}}>5%</div>
                  <p className="text-muted-foreground">Minimum Deposit Options</p>
                </CardContent>
              </Card>
              <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.6s'}}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2 animate-scale-in" style={{animationDelay: '0.8s'}}>$800K</div>
                  <p className="text-muted-foreground">Stamp Duty Exemption Limit</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="hover-scale animate-fade-in" style={{animationDelay: '1s'}}>
              First Home Buyer Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
