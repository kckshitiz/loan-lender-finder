
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span>1300 123 456</span>
            </div>
            <div className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
              <Mail className="h-4 w-4" />
              <span>info@nswmortgagebroker.com.au</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Licensed NSW Mortgage Broker
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center animate-scale-in">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">NSW Mortgage Broker</h1>
              <p className="text-xs text-muted-foreground">Your Home Loan Experts</p>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Home Loans</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] animate-fade-in">
                    <Link to="/first-home-buyers" className="grid gap-1 p-2 rounded-md hover:bg-accent transition-colors duration-200">
                      <h3 className="font-medium">First Home Buyers</h3>
                      <p className="text-sm text-muted-foreground">Special rates and government grants</p>
                    </Link>
                    <Link to="/refinancing" className="grid gap-1 p-2 rounded-md hover:bg-accent transition-colors duration-200">
                      <h3 className="font-medium">Refinancing</h3>
                      <p className="text-sm text-muted-foreground">Switch to better rates and terms</p>
                    </Link>
                    <div className="grid gap-1 p-2 rounded-md hover:bg-accent transition-colors duration-200">
                      <h3 className="font-medium">Investment Loans</h3>
                      <p className="text-sm text-muted-foreground">Property investment financing</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hover-scale">Compare Rates</Button>
            <Button className="hover-scale animate-scale-in">Get Pre-Approval</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
