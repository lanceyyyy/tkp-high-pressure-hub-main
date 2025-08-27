"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, Shield, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-ship-cleaning.jpg";
import equipmentImage from "@/assets/hero-img.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-start pt-12 md:pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ultra high-pressure water blasting ship hull cleaning"
          className="w-full h-full object-cover water-shimmer"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>

      <div className="container relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="max-w-4xl">
          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur">
              <Calendar className="h-3 w-3 mr-1" />
              Established 1996
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur">
              <MapPin className="h-3 w-3 mr-1" />
              Ålesund - Operations Nationwide
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur">
              <Shield className="h-3 w-3 mr-1" />
              Eco-Friendly Method
            </Badge>
          </motion.div>

          {/* Main Headlines */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-snug"
          >
            WE DEPLOY 
            <span className="text-primary block">UHP WATER BLASTING</span>
            WHEREVER YOU ARE!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg mb-5 md:mb-6 text-white/90 max-w-xl leading-relaxed"
          >
            Ultra-high pressure water blasting up to <strong>3000 bar</strong> for steel, ships, and concrete surface treatment.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-6 md:mb-8"
          >
            <Button 
              className="btn-hero text-sm md:text-base px-5 md:px-6 py-3 md:py-4 h-auto"
              asChild
            >
              <a href="tel:+4795936402">
                <Phone className="h-5 w-5 mr-2" />
                Call +47 959 36 402
              </a>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-sm md:text-base px-5 md:px-6 py-3 md:py-4 h-auto backdrop-blur"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>

          {/* Key Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center"
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-2.5 md:p-3 border border-white/20">
              <div className="text-lg md:text-xl font-bold text-primary">3000</div>
              <div className="text-[10px] md:text-xs text-white/80">Bar Pressure</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-2.5 md:p-3 border border-white/20">
              <div className="text-lg md:text-xl font-bold text-primary">300</div>
              <div className="text-[10px] md:text-xs text-white/80">m² per Day</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-2.5 md:p-3 border border-white/20">
              <div className="text-lg md:text-xl font-bold text-primary">25+</div>
              <div className="text-[10px] md:text-xs text-white/80">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-2.5 md:p-3 border border-white/20">
              <div className="text-lg md:text-xl font-bold text-primary">100%</div>
              <div className="text-[10px] md:text-xs text-white/80">Eco-Friendly</div>
            </div>
          </motion.div>
          </div>

          {/* Right-side image for balance (visible on large screens) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block ml-auto"
          >
            <div className="relative aspect-[3/4] w-full max-w-xs xl:max-w-sm 2xl:max-w-md overflow-hidden rounded-xl shadow-2xl border border-white/20">
              <img
                src={equipmentImage}
                alt="UHP equipment lineup ready for deployment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;