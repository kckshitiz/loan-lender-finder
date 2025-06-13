
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">NSW Mortgage Broker</h3>
                <p className="text-sm text-slate-400">Your Home Loan Experts</p>
              </div>
            </div>
            <p className="text-slate-400">
              Licensed mortgage brokers serving all of New South Wales. 
              We help you find the best home loan deals with access to 40+ lenders.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">First Home Buyer Loans</a></li>
              <li><a href="#" className="hover:text-white">Refinancing</a></li>
              <li><a href="#" className="hover:text-white">Investment Property Loans</a></li>
              <li><a href="#" className="hover:text-white">Construction Loans</a></li>
              <li><a href="#" className="hover:text-white">Commercial Loans</a></li>
              <li><a href="#" className="hover:text-white">SMSF Loans</a></li>
              <li><a href="#" className="hover:text-white">Bad Credit Loans</a></li>
            </ul>
          </div>

          {/* NSW Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">NSW Areas We Serve</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Sydney</a></li>
              <li><a href="#" className="hover:text-white">Newcastle</a></li>
              <li><a href="#" className="hover:text-white">Wollongong</a></li>
              <li><a href="#" className="hover:text-white">Central Coast</a></li>
              <li><a href="#" className="hover:text-white">Blue Mountains</a></li>
              <li><a href="#" className="hover:text-white">Illawarra</a></li>
              <li><a href="#" className="hover:text-white">Hunter Valley</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1300 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@nswmortgagebroker.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sydney, NSW 2000</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Subscribe to Updates</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            <p>&copy; 2024 NSW Mortgage Broker. All rights reserved.</p>
            <p>Australian Credit Licence #123456 | Licensed Mortgage Broker</p>
          </div>
          
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Credit Guide</a>
            <a href="#" className="hover:text-white">Complaints</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
