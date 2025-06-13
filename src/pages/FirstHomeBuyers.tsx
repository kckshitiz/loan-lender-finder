
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, DollarSign, FileText, Calculator, Gift, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const FirstHomeBuyers = () => {
  const benefits = [
    {
      icon: Gift,
      title: "First Home Owner Grant",
      amount: "$10,000",
      description: "Available for eligible first home buyers purchasing new homes under $750,000"
    },
    {
      icon: FileText,
      title: "Stamp Duty Exemptions",
      amount: "Up to $800K",
      description: "Full exemption for properties under $650K, partial exemption up to $800K"
    },
    {
      icon: Calculator,
      title: "Low Deposit Options",
      amount: "From 5%",
      description: "Access to lenders offering loans with deposits as low as 5%"
    },
    {
      icon: Shield,
      title: "Lenders Mortgage Insurance",
      amount: "LMI Options",
      description: "Reduced or waived LMI options available through select lenders"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Discuss your goals, assess your financial position, and understand your borrowing capacity."
    },
    {
      number: "02",
      title: "Pre-Approval",
      description: "Get pre-approved to know your budget and strengthen your position when house hunting."
    },
    {
      number: "03",
      title: "Property Search",
      description: "Find your perfect home with confidence, knowing exactly what you can afford."
    },
    {
      number: "04",
      title: "Final Approval",
      description: "Submit your formal application and secure your home loan for settlement."
    }
  ];

  const checklist = [
    "Proof of income (payslips, tax returns)",
    "Bank statements (3-6 months)",
    "Identification documents",
    "Details of assets and liabilities",
    "Deposit savings evidence",
    "Employment verification"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-scale-in">
              First Home Buyer Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your First Home
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Starts Here</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              Navigate NSW's first home buyer incentives and secure your dream home with expert guidance. 
              Access grants, stamp duty savings, and low deposit loan options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <Button size="lg" className="hover-scale">
                Get Pre-Approved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="hover-scale">
                Download Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NSW Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">NSW First Home Buyer Benefits</h2>
            <p className="text-lg text-muted-foreground">Take advantage of generous NSW government incentives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in group" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{benefit.amount}</div>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Your First Home Journey</h2>
            <p className="text-lg text-muted-foreground">A simple 4-step process to homeownership</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">What You'll Need</h2>
              <p className="text-muted-foreground mb-6">
                Prepare these documents to streamline your first home buyer application process:
              </p>
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Eligibility Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">First Home Owner Grant</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Must be an Australian citizen or permanent resident</li>
                    <li>• Must be 18 years or older</li>
                    <li>• Must not have owned property before</li>
                    <li>• Property value under $750,000 (new homes)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stamp Duty Exemption</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Property value under $800,000</li>
                    <li>• Must live in the property for 6+ months</li>
                    <li>• Full exemption under $650,000</li>
                    <li>• Partial exemption $650,000-$800,000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Buy Your First Home?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our first home buyer specialists are here to guide you through every step. 
            Get your free consultation and pre-approval today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-scale">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Speak to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstHomeBuyers;
