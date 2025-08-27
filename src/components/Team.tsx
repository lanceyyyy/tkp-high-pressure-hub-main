"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  User,
  Users,
  Crown,
  Settings
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Siw-Malen Aarskog-Røen",
      role: "CEO",
      phone: "+47 959 36 402",
      email: "siw@tkpultrahoytrykk.no",
      icon: Crown,
      color: "text-primary"
    },
    {
      name: "Tom Røen", 
      role: "Operations Manager",
      phone: "+47 982 46 925",
      email: "post@tkpultrahoytrykk.no",
      icon: Settings,
      color: "text-accent"
    },
    {
      name: "Eivind Engesbak",
      role: "Foreman",
      phone: "+47 982 46 928", 
      email: "post@tkpultrahoytrykk.no",
      icon: Users,
      color: "text-secondary"
    }
  ];

  const companyInfo = {
    email: "post@tkpultrahoytrykk.no",
    phone: "+47 959 36 402",
    address: "Lerstadvika 28, 6014 ÅLESUND",
    orgNumber: "876 463 172"
  };

  return (
    <section id="team" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced leadership team with decades of expertise in ultra-high pressure water blasting
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-industrial text-center group">
                <CardContent className="p-2">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="h-12 w-12 text-white" />
                  </div>
                  
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge className="mb-6">{member.role}</Badge>
                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        {member.phone}
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        {member.email}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="card-industrial gradient-steel">
            <CardContent className="p-4 lg:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Building className="h-8 w-8 text-primary mr-3" />
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">General Email</div>
                        <a 
                          href={`mailto:${companyInfo.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Main Phone</div>
                        <a 
                          href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {companyInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-muted-foreground">{companyInfo.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Organization Number</div>
                        <div className="text-muted-foreground">{companyInfo.orgNumber}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
                  <p className="text-muted-foreground mb-6">
                    Contact our team for professional water blasting services anywhere in Norway
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="btn-hero w-full"
                      asChild
                    >
                      <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;