
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Percent, Clock, Shield } from 'lucide-react';

const FeaturedLenders = () => {
  const lenders = [
    {
      name: "Commonwealth Bank",
      logo: "CBA",
      rate: "6.24%",
      comparison: "6.35%",
      features: ["First Home Buyer", "Offset Account", "Redraw"],
      rating: 4.5,
      specialOffer: "Cashback up to $4,000"
    },
    {
      name: "Westpac",
      logo: "WBC",
      rate: "6.34%",
      comparison: "6.45%",
      features: ["Investment Loans", "Construction", "SMSF"],
      rating: 4.3,
      specialOffer: "No application fees"
    },
    {
      name: "ANZ Bank",
      logo: "ANZ",
      rate: "6.29%",
      comparison: "6.40%",
      features: ["Low Doc", "Asset Finance", "Commercial"],
      rating: 4.4,
      specialOffer: "Rate discount 0.70% p.a."
    },
    {
      name: "NAB",
      logo: "NAB",
      rate: "6.19%",
      comparison: "6.30%",
      features: ["Quick Approval", "Online Banking", "Mobile App"],
      rating: 4.2,
      specialOffer: "Free valuation"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured NSW Lenders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare home loan rates from Australia's leading banks and lenders. 
            Our NSW mortgage brokers have access to over 40+ lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {lenders.map((lender, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{lender.logo}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{lender.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{lender.name}</CardTitle>
                {lender.specialOffer && (
                  <Badge variant="secondary" className="text-xs">
                    {lender.specialOffer}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Percent className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-primary">{lender.rate}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comparison Rate: {lender.comparison}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lender.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Compare & Apply
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            View All Lenders
          </Button>
          <Button size="lg" variant="outline">
            Speak to a NSW Broker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLenders;
