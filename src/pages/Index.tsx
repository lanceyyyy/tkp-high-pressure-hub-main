"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Equipment from '@/components/Equipment';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Services />
          <About />
          <Equipment />
          <Team />
          <Partners />
          <Contact />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
