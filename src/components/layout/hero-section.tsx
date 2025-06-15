"use client";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/layout/background";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div id="hero" className="relative mt-20 flex flex-col items-center justify-center overflow-hidden">

        {/* Floating geometric shapes */}
        <FlickeringGrid
          className="z-0 absolute inset-0 w-full h-full"
          squareSize={3}
          gridGap={12}
          color="#929791"
          maxOpacity={0.5}
          flickerChance={0.4}
          height={800}
          width={1600}
        />

        {/* Main content */}
        <div className="relative z-10 container px-4  pt-16 pb-12 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto text-4xl md:text-6xl font-[900] tracking-tight leading-[120%] mb-8 text-primary"
            style={{
              lineHeight: "120%"
            }}
          >
            Sustainable Energy Labels<br /> Practical Advice<br /> Smarter Homes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-foreground/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto"
          >
            We assess your home’s energy performance and deliver custom solutions in insulation, installations & consumption. Get a greener home — faster, easier, tailored to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="#contact">
              <Button size="lg" className="text-base min-w-[250px] h-12">
                Get Your Energy
              </Button>
            </Link>
          </motion.div>
          {/* Bottom Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative h-[300px] md:h-[400px] mx-auto rounded-2xl overflow-hidden border border-foreground/20"
          >
            <Image
              src="/Banner.jpg"
              alt="Modern construction project"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>

    </>
  );
} 