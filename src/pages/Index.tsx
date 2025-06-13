
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Licensed NSW Mortgage Broker
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect
              <span className="text-primary block">Home Loan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              As NSW's trusted mortgage brokers, we compare rates from 40+ lenders to find you 
              the best home loan deal. Our service is completely free - get pre-approved in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Pre-Approved Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Compare Rates
              </Button>
            </div>
          </div>

          {/*  Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Calculate Your Home Loan</h2>
            <p className="text-lg text-muted-foreground">
              Use our free calculator to estimate your monthly repayments and borrowing capacity
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* Featured Lenders */}
      <FeaturedLenders />

      {/* Broker Services */}
      <BrokerServices />

      {/* NSW First Home Buyer Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">NSW First Home Buyer Specialists</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Buying your first home in NSW? We'll help you navigate the First Home Owner Grant, 
              stamp duty exemptions, and find lenders with low deposit options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$10,000</div>
                  <p className="text-muted-foreground">NSW First Home Owner Grant</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5%</div>
                  <p className="text-muted-foreground">Minimum Deposit Options</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$800K</div>
                  <p className="text-muted-foreground">Stamp Duty Exemption Limit</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg">
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
