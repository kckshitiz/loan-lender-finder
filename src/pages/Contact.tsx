
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "1300 123 456",
      secondary: "Free call Australia wide",
      description: "Speak directly with our mortgage experts"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@nswmortgagebroker.com.au",
      secondary: "24/7 email support",
      description: "Send us your enquiry anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "Level 15, 1 Martin Place",
      secondary: "Sydney NSW 2000",
      description: "Visit our Sydney CBD office"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon-Fri: 8:30am - 6:00pm",
      secondary: "Sat: 9:00am - 2:00pm",
      description: "Extended hours by appointment"
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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Contact Our
              <span className="text-primary block animate-slide-in-right" style={{animationDelay: '0.4s'}}>Mortgage Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
              Ready to discuss your home loan needs? Our experienced NSW mortgage brokers are here to help. 
              Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in group" style={{animationDelay: `${0.1 * index}s`}}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="font-medium text-foreground mb-1">{method.primary}</p>
                  <p className="text-sm text-muted-foreground mb-2">{method.secondary}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select Loan Type</option>
                  <option>First Home Buyer</option>
                  <option>Refinancing</option>
                  <option>Investment Property</option>
                  <option>Construction Loan</option>
                  <option>Commercial Loan</option>
                </select>
                <Textarea placeholder="Tell us about your loan requirements..." rows={4} />
                <Button className="w-full hover-scale">
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Schedule a free 30-minute consultation with one of our experienced mortgage brokers.
                  </p>
                  <Button className="w-full hover-scale">Book Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We provide mortgage broking services across all of New South Wales:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Sydney
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Newcastle
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Wollongong
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Central Coast
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Blue Mountains
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      Hunter Valley
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent matters outside business hours:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2" />
                      <span>0400 123 456</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2" />
                      <span>urgent@nswmortgagebroker.com.au</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
