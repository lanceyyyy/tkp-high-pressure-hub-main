"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Ship, 
  Droplets, 
  Wrench, 
  Cog, 
  Waves, 
  Building2,
  ArrowRight,
  Zap,
  Timer,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const imageUrls = import.meta.glob('/src/assets/*', { eager: true, as: 'url' }) as Record<string, string>;
  const services = [
    {
      title: "Ship Hull & Surface Treatment",
      description: "Efficient and eco-friendly surface treatment on steel for boats and ships with UHP water blasting up to 3000 Bar",
      details: "On large surfaces like ship hulls and sides, we can produce up to 300m² per working day with our equipment.",
      learnMoreMessage: "På store overflater som skipsbunner og skutesider kan vi produsere opptil 300m2 pr arbeidsdag med vårt utstyr.",
      icon: Ship,
      features: ["Up to 3000 Bar pressure", "300m² per day capacity", "Eco-friendly process"],
      color: "text-accent",
      image: "assets/ship-hull-treatment.jpg"
    },
    {
      title: "Tank Work",
      description: "Experienced in UHP water blasting of tanks, including RSW fishing tanks and freshwater tanks",
      details: "With UHP water blasting up to 3000 Bar, we can remove rust and paint in a safe, effective way.",
      learnMoreMessage: "Med UHP Vannblåsing med opptil 3000Bar kan vi fjerne rust og maling på en trygg, god og effektiv måte.",
      icon: Droplets,
      features: ["RSW fishing tanks", "Freshwater tanks", "Safe rust removal"],
      color: "text-primary",
      image: "assets/tank-work.jpg"
    },
    {
      title: "Spot Blasting",
      description: "Mobile equipment deployment for spot blasting rust penetration, poor paint, winches and more",
      details: "Quick response with portable equipment for targeted cleaning and surface preparation.",
      icon: Zap,
      features: ["Mobile equipment", "Rust penetration removal", "Winch cleaning"],
      color: "text-accent",
      image: "assets/spot-blasting.webp"
    },
    {
      title: "Parts & Machinery",
      description: "Rust and paint removal from smaller parts and machinery components",
      details: "Precision cleaning for mechanical components and industrial parts.",
      icon: Cog,
      features: ["Small parts cleaning", "Machinery components", "Precision work"],
      color: "text-secondary",
      image: "assets/parts-and-machinery.webp"
    },
    {
      title: "Boat Washing",
      description: "Rapid and efficient washing of large surfaces on boats, removing all growth and shells",
      details: "Complete hull cleaning service for marine vessels of all sizes.",
      icon: Waves,
      features: ["Large surface washing", "Growth removal", "Shell cleaning"],
      color: "text-accent",
      image: "assets/boat-washing.jpg"
    },
    {
      title: "Concrete Chiseling",
      description: "Removal of old concrete for rehabilitation projects",
      details: "Remove old concrete while achieving clean reinforcement bars before applying new concrete.",
      learnMoreMessage: "Med vårt utstyr kan vi meisle vekk gammel betong og samtidig få skinnende rene armeringsjern før påføring av ny betong.",
      icon: Building2,
      features: ["Concrete rehabilitation", "Clean reinforcement", "Structural work"],
      color: "text-primary",
      image: "assets/concrete-chiseling.jpg"
    }
  ];

  const qualityFeatures = [
    {
      title: "Availability & Service",
      description: "Open all weekdays throughout the year with focus on customer availability and service",
      icon: Timer
    },
    {
      title: "Satisfied Customers",
      description: "Customer needs are our focus regardless of job size - satisfied customers are our best marketing",
      icon: CheckCircle
    },
    {
      title: "Solid Partnership",
      description: "Well-established routines and solid foundation in the industry with continuous development",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized ultra-high pressure water blasting services for marine, industrial, and construction applications
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-industrial group relative overflow-hidden h-80 md:h-96">
                <img
                  src={imageUrls[`/src/${service.image}`] || "/placeholder.svg"}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-3">
                    <CardTitle className="text-white drop-shadow">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm text-white/80 mb-3">{service.details}</p>
                  {service.hasOwnProperty('learnMoreMessage') && service.learnMoreMessage && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="w-full group/btn bg-black/30 text-white hover:bg-black/40">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <p className="text-sm text-muted-foreground p-4">
                          {service.learnMoreMessage}
                        </p>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quality Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-12">Why Choose TKP Ultrahøytrykk</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;