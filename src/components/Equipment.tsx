"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Activity, 
  Settings, 
  Shield,
  Gauge,
  Wrench,
  HardHat,
  Zap,
  CircuitBoard,
  Container
} from "lucide-react";
import equipmentImage from "@/assets/equipment-lineup.jpg";

const Equipment = () => {
  const equipment = [
    {
      category: "Ultra High Pressure Pumps - Truck Mounted",
      items: ["2 ultrahigh pressure pumps mounted on truck"],
      icon: Truck,
      color: "text-primary"
    },
    {
      category: "Ultra High Pressure Pumps - Trailer Mounted", 
      items: ["2 ultrahigh pressure pumps mounted on trailer"],
      icon: Container,
      color: "text-accent"
    },
    {
      category: "Specialized Equipment",
      items: ["1 Hammelmann Spiderjet", "1 Conjet robot machine with 40 cm disc"],
      icon: CircuitBoard,
      color: "text-secondary"
    },
    {
      category: "User & Safety Equipment",
      items: ["User equipment for all types of assignments", "Complete safety equipment"],
      icon: Shield,
      color: "text-primary"
    }
  ];

  const pumpCapacity = [
    { pressure: "2500", flow: "48", unit: "bar / liter" },
    { pressure: "2600", flow: "32", unit: "bar / liter" },
    { pressure: "2500", flow: "26", unit: "bar / liter" },
    { pressure: "3000", flow: "23", unit: "bar / liter" }
  ];

  const mainTasks = [
    "All steel and concrete work",
    "Pipe galleries",
    "Facades", 
    "Rock cleaning",
    "Marine industry"
  ];

  const certifications = [
    {
      title: "Certified Papers",
      items: ["Operation and safety course for high-pressure operators"],
      icon: HardHat
    },
    {
      title: "Professional Certificates",
      items: [
        "Truck and construction machinery",
        "Manually movable personal lifts",
        "Trailer-mounted personal lifts", 
        "Self-propelled personal lifts",
        "Car-mounted personal lifts",
        "Motor mechanic",
        "Employees with broad professional experience"
      ],
      icon: Wrench
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Equipment & Capacity</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art ultra-high pressure equipment and certified operators for professional water blasting services
          </p>
        </motion.div>

        {/* Equipment Image Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-deep">
            <img 
              src={equipmentImage} 
              alt="TKP Ultrahøytrykk industrial equipment lineup"
              className="w-full h-[400px] object-cover water-shimmer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Equipment Fleet</h3>
              <p className="text-white/90">Mobile and truck-mounted ultra-high pressure systems</p>
            </div>
          </div>
        </motion.div>

        {/* Equipment Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {equipment.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-industrial h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg leading-tight">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pump Specifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Pump Capacity Specifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pumpCapacity.map((pump, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="card-industrial">
                  <CardContent className="p-6">
                    <Gauge className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{pump.pressure}</div>
                    <div className="text-xl font-semibold mb-1">{pump.flow}</div>
                    <div className="text-sm text-muted-foreground">{pump.unit}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Tasks */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-industrial h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Settings className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Main Applications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our specialized water blasting services cover a wide range of industrial applications:
                </p>
                <div className="space-y-3">
                  {mainTasks.map((task, index) => (
                    <motion.div
                      key={task}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{task}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="card-industrial">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <cert.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {cert.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <Badge variant="outline" className="text-xs mt-0.5 flex-shrink-0">
                          <Zap className="h-3 w-3 mr-1" />
                          Certified
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;