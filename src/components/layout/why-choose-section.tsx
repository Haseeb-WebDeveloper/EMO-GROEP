"use client";

import { motion } from "framer-motion";
import { TrainFront, Goal, Workflow } from "lucide-react";

const features = [
  {
    title: "Swift & Compliant",
    description: "Mandatory for sale or rental? We handle the entire label process in just 1–3 business days.",
    icon: <TrainFront className="w-16 h-16 text-primary" />,
  },
  {
    title: "Tailored Efficiency",
    description: "Expert advice that fits your home and lifestyle — no generic checklists.",
    icon: <Goal className="w-16 h-16 text-primary" />,
  },
  {
    title: "End‑to‑End Service",
    description: "From inspection & NEN 2580 measurement to clear sustainability action plans.",
    icon: <Workflow className="w-16 h-16 text-primary" />,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            What Sets Us Apart
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-background border border-foreground/10 hover:border-foreground/20 transition-colors">
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-10 inline-flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/90 text-base md:text-xl">{feature.description}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}