"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxImage } from "../ui/ParallaxImage";
import { Button } from "../ui/button";
import Link from "next/link";

export function SustainabilitySection() {
  return (
    <section className="pb-24 pt-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  VERTROUW OP DUURZAAMHEID
                </h2>
                <p className="text-xl">Energielabels en advies op maat</p>
              </div>

              <p className="text-lg leading-relaxed">
                Wij leveren energielabels en bieden gericht advies om uw woning
                te verbeteren op het gebied van isolatie, installaties en
                energieverbruik. Met onze expertise helpen we u bij het
                verduurzamen van uw woning en het verhogen van het energielabel
                – efficiënt, praktisch en afgestemd op uw situatie.
              </p>

              {/* Feature List */}
              <div className="space-y-4 pt-6">
                {[
                  "Professionele energielabel certificering",
                  "Persoonlijk advies voor woningverbetering",
                  "Expertise in duurzame oplossingen",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link href="#contact">
                  <Button size="lg" className="text-base min-w-[250px] h-12">
                    Vraag direct een offerte aan
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] rounded-md overflow-hidden"
            >
              <ParallaxImage
                className="w-full mx-auto rounded-[1rem] lg:rounded-none"
                src="/advice.webp"
                alt="Modern construction project"
                fill={true}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
