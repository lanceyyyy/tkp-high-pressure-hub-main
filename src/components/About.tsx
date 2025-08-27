"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Calendar, 
  MapPin, 
  Leaf, 
  Award,
  TrendingUp,
  Target
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "1989",
      title: "Early Experience",
      description: "Operators gained experience in concrete, steel, and rock cleaning"
    },
    {
      year: "1994",
      title: "Industry Interest",
      description: "Norwegian shipping industry showed interest in water blasting as steel pretreatment method"
    },
    {
      year: "1996", 
      title: "Company Founded",
      description: "TKP Ultrahøytrykk AS established as specialized water blasting company"
    },
    {
      year: "2000s",
      title: "Equipment Development",
      description: "Pumps and equipment developed to handle pressure over 2500 bar"
    },
    {
      year: "Today",
      title: "Industry Leader",
      description: "Recognized eco-friendly method with 250-300m² daily capacity"
    }
  ];

  const stats = [
    {
      number: "25+",
      label: "Years of Experience",
      icon: Calendar,
      description: "Established expertise since 1996"
    },
    {
      number: "9",
      label: "Team Members",
      icon: Users,
      description: "1 CEO, 2 supervisors, 6 operators"
    },
    {
      number: "300",
      label: "m² Daily Capacity",
      icon: TrendingUp,
      description: "Under normal conditions"
    },
    {
      number: "100%",
      label: "Norway Coverage",
      icon: MapPin,
      description: "Based in Ålesund, nationwide operations"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About TKP Ultrahøytrykk AS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A specialized water blasting company with over 25 years of expertise in surface treatment and industrial cleaning
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="card-industrial">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    TKP Ultrahøytrykk AS is a water blasting company established in 1996. We are led by a CEO, 
                    along with 2 work supervisors and 6 high-pressure operators.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    For 25 years, we have specialized in removing paint, rust, and concrete from surfaces. 
                    We primarily work with surface treatment both inside and outside boats at shipyards, 
                    but also have broad expertise in water chiseling of concrete.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      <Leaf className="h-3 w-3 mr-1" />
                      Eco-Friendly
                    </Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      <Award className="h-3 w-3 mr-1" />
                      Certified Operators
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                      <Target className="h-3 w-3 mr-1" />
                      Quality Focus
                    </Badge>
                  </div>
                </div>
                <div className="space-y-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 bg-muted/50 rounded-lg p-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{stat.number}</div>
                        <div className="font-medium">{stat.label}</div>
                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company History Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our History</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="card-industrial">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="outline" className="bg-primary text-primary-foreground">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Purpose */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="card-industrial gradient-steel">
            <CardContent className="p-8">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Company Purpose</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To maintain the best possible competence and safety within water blasting services, 
                and develop a safe, efficient, and pleasant workplace based on our HSE program.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;