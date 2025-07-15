"use client";

import { motion } from "framer-motion";
import { TrainFront, Goal, Workflow } from "lucide-react";

const features = [
  {
    title: "Snel en compliant",
    description:
      "Verplicht te koop of te huur? Wij regelen het hele labelproces in slechts 1-3 werkdagen.",
    icon: <TrainFront className="w-16 h-16 text-primary" />,
  },
  {
    title: "Gepersonaliseerde efficiënti",
    description:
      "Deskundig advies dat past bij uw huis en levensstijl – geen algemene checklists.",
    icon: <Goal className="w-16 h-16 text-primary" />,
  },
  {
    title: "End-to-end service",
    description:
      "Van inspectie & NEN 2580 meting tot heldere duurzaamheidsactieplannen.",
    icon: <Workflow className="w-16 h-16 text-primary" />,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Waarom kiezen voor EMW Groep?
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
              <div className="relative z-10 h-full p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-colors">
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-10 inline-flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/90 text-xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
