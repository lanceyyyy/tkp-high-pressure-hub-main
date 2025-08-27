"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Anchor, Building2, Zap } from "lucide-react";

const imageUrls = import.meta.glob('/src/assets/*', { eager: true, as: 'url' }) as Record<string, string>;

const Partners = () => {
  const partners = [
    {
      name: "Båtbygg AS",
      type: "Shipyard",
      contact: "Kjell Inge Sjåstad – +47 909 19 199",
      description: "Marine construction and shipbuilding services",
      icon: Anchor,
      logo: "assets/baatbygg.webp"
    },
    {
      name: "Solstrand Verft",
      type: "Shipyard", 
      contact: "Tore Rekdal - +47 90 64 73 45",
      description: "Ship repair and maintenance facility",
      icon: Anchor,
      logo: "assets/solstrand.webp"
    },
    {
      name: "Vegsund Slip AS",
      type: "Shipyard",
      contact: "Kristian Drønnen - +47 926 14 260", 
      description: "Ship repair and dry dock services",
      icon: Anchor,
      logo: "assets/vegsund.webp"
    },
    {
      name: "Fiskerstrand Verft",
      type: "Shipyard",
      contact: "Tore Myklebust - +47 941 41 581",
      description: "Specialized fishing vessel construction",
      icon: Anchor,
      logo: "assets/fikerstrand.webp"
    },
    {
      name: "Slipen Mekaniske Sandnessjøen",
      type: "Marine Services",
      contact: "Asgeir Lisø – +47 922 95 086",
      description: "Mechanical services for marine industry",
      icon: Building2,
      logo: "assets/slipen.webp"
    },
    {
      name: "Kleven Verft",
      type: "Shipyard",
      contact: "Sigbjørn Holm – +47 916 48 203",
      description: "Advanced shipbuilding and offshore construction",
      icon: Anchor,
      logo: "assets/greenyard.webp"
    },
    {
      name: "Tafjord Kraftvarme - Betong",
      type: "Construction",
      contact: "Jone Dybvik – +47 473 28 437",
      description: "Concrete construction and energy solutions",
      icon: Building2,
      logo: "assets/tafjord.webp"
    },
    {
      name: "Protector Norway AS",
      type: "Industrial",
      contact: "Magne Søvik: +47 913 38 457",
      description: "Industrial protection and safety solutions",
      icon: Zap,
      logo: "assets/protector.webp"
    }
  ];

  const allPartners = partners;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted collaborations with leading Norwegian shipyards, marine services, and industrial companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PartnersMarquee partners={allPartners} />
        </motion.div>

        {/* Partnership CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="card-industrial gradient-marine text-white">
            <CardContent className="p-8">
              <ExternalLink className="h-12 w-12 mx-auto mb-6 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Interested in Partnership?</h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-6">
                We're always looking to expand our network of quality partners in the marine and industrial sectors. 
                Contact us to discuss collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+4795936402"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Call +47 959 36 402
                </a>
                <a 
                  href="mailto:post@tkpultrahoytrykk.no"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

type Partner = {
  name: string;
  type: string;
  contact: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  logo?: string; // optional logo URL
};

const PartnersMarquee: React.FC<{ partners: Partner[] }> = ({ partners }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const animationRef = React.useRef<number | null>(null);
  const offsetRef = React.useRef<number>(0);

  const speedPxPerSecond = 80; // adjust for faster/slower scroll

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTs = performance.now();

    const step = (ts: number) => {
      if (isHovered) {
        animationRef.current = requestAnimationFrame(step);
        lastTs = ts;
        return;
      }

      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      offsetRef.current += speedPxPerSecond * dt;

      const contentWidth = track.scrollWidth / 2; // since we duplicate
      if (contentWidth > 0) {
        if (offsetRef.current >= contentWidth) {
          offsetRef.current -= contentWidth;
        }
      }

      track.style.transform = `translateX(-${offsetRef.current}px)`;
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  const items = React.useMemo(() => partners.map((p) => ({ ...p })), [partners]);
  const doubled = React.useMemo(() => items.concat(items), [items]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-y-0 left-0 w-32 from-muted/70 to-transparent bg-gradient-to-r pointer-events-none backdrop-blur-md" />
      <div className="absolute inset-y-0 right-0 w-32 from-transparent to-muted/70 bg-gradient-to-l pointer-events-none backdrop-blur-md" />

      <div className="will-change-transform" ref={trackRef} style={{ display: 'flex', gap: '1.5rem' }}>
        {doubled.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-background/60 backdrop-blur border border-border/50 flex-none"
          >
            {partner.logo ? (
              <img
                src={partner.logo.startsWith('http') ? partner.logo : (imageUrls[`/src/${partner.logo}`] || "/placeholder.svg")}
                alt={`${partner.name} logo`}
                className="h-16 w-28 object-contain shrink-0"
                loading="lazy"
              />
            ) : (
              <div className="w-28 h-16 rounded-md bg-muted flex items-center justify-center text-[11px] text-muted-foreground shrink-0">
                Logo
              </div>
            )}
            <span className="text-xs text-muted-foreground leading-tight text-left">
              {partner.contact}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};