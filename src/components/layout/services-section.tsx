"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Energy Label for Homes",
    paragraph: "Fast, compliant energy label reporting — ideal for sale or rental.",
    image: "/Energy-Label.avif",
    link: "https://isodomi.nl/"
  },
  {
    title: "NEN 2580 Measurement",
    paragraph: "Precise living area measurement by certified assessors.",
    image: "/NEN-2580-Measurement.avif",
    link: "#contact"
  },
  {
    title: "WWS Point Analysis",
    paragraph: "Transparent scoring for subsidies, tax breaks, and grants.",
    image: "/WWS-Point-Analysis.avif",
    link: "#contact"
  },
  {
    title: "Sustainability Advice",
    paragraph: "Smart, practical solutions to upgrade insulation, tech, and energy use — made for your budget.",
    image: "/Sustainability-Advice.avif",
    link: "#contact"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-foreground/5">
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What We Offer
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Service Card */}
              <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border overflow-hidden border-border h-full flex flex-col justify-between">
                <div>
                  {/* Image */}
                  <div className="relative h-44 aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="object-cover aspect-video transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/90 mb-4 text-base md:text-xl">{service.paragraph}</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={service.link}
                    className="flex items-center justify-center px-4 py-2 rounded-md bg-foreground/90 text-background w-full group-hover:bg-primary/80 group-hover:text-primary-foreground transition-colors"
                  >
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}