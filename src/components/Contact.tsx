"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  Facebook
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields and accept the privacy policy.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your water blasting project? Get in touch with our team for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          className="max-w-xl w-full mx-auto"
          >
            <Card className="card-industrial w-full">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Get Free Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+47 xxx xx xxx"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Inquiry *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your project, surface area, location, and timeline..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I consent to the information being used for contact purposes. *
                      <br />
                      <a href="/privacy" className="text-primary hover:underline">
                        Read our privacy policy
                      </a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-hero w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-xl w-full mx-auto"
          >
            {/* Quick Contact */}
            <Card className="card-industrial">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <Button 
                    className="btn-hero w-full justify-start text-lg py-6"
                    asChild
                  >
                    <a href="tel:+4795936402">
                      <Phone className="h-5 w-5 mr-3" />
                      +47 959 36 402
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full justify-start text-lg py-6"
                    asChild
                  >
                    <a href="mailto:post@tkpultrahoytrykk.no">
                      <Mail className="h-5 w-5 mr-3" />
                      post@tkpultrahoytrykk.no
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="card-industrial">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">Open all day</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    We're available all weekdays throughout the year
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="card-industrial">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Location
                </h3>
                <div className="space-y-2">
                  <div className="font-medium">TKP Ultrahøytrykk AS</div>
                  <div className="text-muted-foreground">Lerstadvika 28</div>
                  <div className="text-muted-foreground">6014 ÅLESUND</div>
                  <div className="text-muted-foreground">Norway</div>
                  <div className="text-sm text-muted-foreground mt-3">
                    Org. nr: 876 463 172
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-industrial">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <Button 
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a 
                    href="https://www.facebook.com/tkp.as/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5 mr-3" />
                    Visit us on Facebook
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="card-industrial gradient-marine text-white">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Service Coverage</h3>
                <p className="text-white/90">
                  Based in Ålesund, we provide ultra-high pressure water blasting services 
                  throughout Norway. No project is too big or too small.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;