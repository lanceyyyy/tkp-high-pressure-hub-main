"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Equipment", href: "#equipment" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo.webp"
                alt="TKP Ultrahøytrykk AS"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Professional ultra-high pressure water blasting services for marine, industrial, 
              and construction applications. Serving all of Norway since 1996.
            </p>
            <div className="flex space-x-4">
              <Button 
                className="btn-hero"
                asChild
              >
                <a href="tel:+4795936402">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                asChild
              >
                <a 
                  href="https://www.facebook.com/tkp.as/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a 
                    href="tel:+4795936402"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    +47 959 36 402
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href="mailto:post@tkpultrahoytrykk.no"
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    post@tkpultrahoytrykk.no
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-secondary-foreground/80">
                    Lerstadvika 28<br />
                    6014 ÅLESUND<br />
                    Norway
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-secondary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-secondary-foreground/80">
              © {new Date().getFullYear()} TKP Ultrahøytrykk AS — Org nr 876 463 172
            </p>
            <p className="text-sm text-secondary-foreground/60 mt-1">
              All rights reserved. Professional water blasting services in Norway.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;