
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, DollarSign, Calendar, Shield, CheckCircle, ArrowRight, Calculator, Percent } from 'lucide-react';

const Refinancing = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Lower Interest Rates",
      description: "Switch to competitive rates and reduce your monthly repayments",
      savings: "Save $200-500/month"
    },
    {
      icon: DollarSign,
      title: "Cash Out Options",
      description: "Access equity for renovations, investments, or debt consolidation",
      savings: "Up to 80% equity"
    },
    {
      icon: Calendar,
      title: "Better Loan Terms",
      description: "Improve loan features like offset accounts and redraw facilities",
      savings: "Enhanced features"
    },
    {
      icon: Shield,
      title: "No Exit Fees",
      description: "Many lenders offer refinancing with no exit fees",
      savings: "Save $600-2000"
    }
  ];

  const reasons = [
    {
      title: "High Interest Rate",
      description: "Your current rate is above market average",
      action: "Compare current rates"
    },
    {
      title: "Poor Service",
      description: "Unsatisfied with your current lender's service",
      action: "Find better service"
    },
    {
      title: "Need Cash",
      description: "Access equity for home improvements or investments",
      action: "Calculate equity"
    },
    {
      title: "Better Features",
      description: "Want offset accounts, redraw, or other features",
      action: "Explore options"
    },
    {
      title: "Fixed Rate Ending",
      description: "Your fixed rate period is coming to an end",
      action: "Lock in new rates"
    },
    {
      title: "Debt Consolidation",
      description: "Combine multiple debts into your home loan",
      action: "Simplify payments"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Health Check",
      description: "We review your current loan and identify potential savings"
    },
    {
      step: "2",
      title: "Market Comparison",
      description: "Compare rates and features from 40+ lenders"
    },
    {
      step: "3",
      title: "Application",
      description: "Submit your refinancing application to the best lender"
    },
    {
      step: "4",
      title: "Settlement",
      description: "We handle the entire process including settlement"
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
              Refinancing Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Switch & Save on Your
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Home Loan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              Lower your repayments, access better features, or unlock your home's equity. 
              Our refinancing experts compare 40+ lenders to find you the perfect deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="hover-scale">
                Get Refinancing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Free Loan Health Check
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Refinance?</h2>
            <p className="text-lg text-muted-foreground">Unlock the potential savings and benefits of refinancing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in group" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                  <div className="text-sm font-medium text-primary">{benefit.savings}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Refinance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Common Refinancing Reasons</h2>
            <p className="text-lg text-muted-foreground">Is it time to switch? Check these common scenarios</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="hover-scale animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground mb-4">{reason.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {reason.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refinancing Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Refinancing Process</h2>
            <p className="text-lg text-muted-foreground">Simple steps to better home loan terms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Calculate Your Potential Savings</h2>
              <p className="text-muted-foreground mb-6">
                See how much you could save by refinancing your home loan. Even a small rate reduction 
                can result in significant savings over the life of your loan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Compare rates from 40+ lenders</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>No obligation, free comparison</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Expert advice on loan features</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>Handle all paperwork and applications</span>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Refinancing Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Loan Balance</label>
                  <input className="w-full p-3 border border-input rounded-md" placeholder="$500,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Interest Rate (%)</label>
                  <input className="w-full p-3 border border-input rounded-md" placeholder="6.5%" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Remaining Loan Term (years)</label>
                  <input className="w-full p-3 border border-input rounded-md" placeholder="25" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">New Interest Rate (%)</label>
                  <input className="w-full p-3 border border-input rounded-md" placeholder="6.0%" />
                </div>
                <Button className="w-full hover-scale">
                  Calculate Savings
                </Button>
                <div className="bg-primary/5 p-4 rounded-md text-center">
                  <div className="text-2xl font-bold text-primary">$85,000</div>
                  <div className="text-sm text-muted-foreground">Potential lifetime savings</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let high interest rates cost you thousands. Get a free refinancing quote 
            and discover how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Speak to Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refinancing;
