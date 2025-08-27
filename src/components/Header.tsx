"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Equipment", href: "#equipment" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
    {/* Sticky Wrapper for both bars */}
    <div className="sticky top-0 z-50 w-full">
      <div>
        {/* Top Info Bar */}
        <div className="w-full bg-primary text-primary-foreground text-xs">
          <div className="container h-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:+4795936402" className="flex items-center gap-2 hover:underline">
                <Phone className="h-3.5 w-3.5" />
                <span>+4795936402</span>
              </a>
              <a href="mailto:post@tkpultrahoytrykk.no" className="hidden sm:flex items-center gap-2 hover:underline">
                <Mail className="h-3.5 w-3.5" />
                <span>post@tkpultrahoytrykk.no</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2 opacity-90">
              <MapPin className="h-3.5 w-3.5" />
              <span className="tracking-wide">Lerstadvika 28, 6014 ÅLESUND</span>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <header className="w-full border-b bg-background">
          <div className="container flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center min-w-0">
              <button
                type="button"
                aria-label="Go to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="focus:outline-none"
              >
                <img
                  src="/logo.webp"
                  alt="TKP Ultrahøytrykk AS"
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          {/* Mobile Dropdown Panel */}
          {isOpen && (
            <div className="md:hidden absolute inset-x-0 top-24 bg-background border-b shadow-lg">
              <div className="container py-4">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t mt-2">
                    <Button 
                      onClick={() => scrollToSection('#contact')}
                      variant="outline"
                      className="h-11 w-full justify-start"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>

    </>
  );
};

export default Header;