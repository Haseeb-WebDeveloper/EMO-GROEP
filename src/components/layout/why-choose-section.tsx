"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Timer,
  Award,
  Lightbulb,
  UserCircle2,
  MessageSquareMore,
} from "lucide-react";

const features = [
  {
    title: "Alles onder één dak",
    description:
      "Van energielabels tot NEN 2580 meetrapporten en WWS-puntentellingen – bij EMW Groep regelen we het volledige traject. Efficiënt, transparant en professioneel.",
    icon: <Building2 className="w-12 h-12 text-primary" />,
  },
  {
    title: "Snelle levering",
    description:
      "Wij begrijpen dat u snel duidelijkheid nodig heeft, zeker bij verkoop of verhuur van een woning. Daarom leveren wij onze rapporten en adviezen snel en accuraat.",
    icon: <Timer className="w-12 h-12 text-primary" />,
  },
  {
    title: "Gecertificeerde adviseurs",
    description:
      "Onze energieadviseurs en meetexperts zijn volledig gecertificeerd en werken volgens de actuele normen en richtlijnen, zoals BRL9500 en NEN 2580.",
    icon: <Award className="w-12 h-12 text-primary" />,
  },
  {
    title: "Advies op maat",
    description:
      "U ontvangt niet alleen een rapport, maar ook helder en praktisch advies om uw woning te verbeteren – of het nu gaat om isolatie, ventilatie of andere energiebesparende maatregelen.",
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
  },
  {
    title: "Eén vast aanspreekpunt",
    description:
      "Bij EMW Groep krijgt u persoonlijke begeleiding van A tot Z. U heeft één contactpersoon die het hele traject coördineert en altijd bereikbaar is voor vragen.",
    icon: <UserCircle2 className="w-12 h-12 text-primary" />,
  },
  {
    title: "Eén vast aanspreekpunt",
    description:
      "Bij EMW Groep krijgt u persoonlijke begeleiding van A tot Z. U heeft één contactpersoon die het hele traject coördineert en altijd bereikbaar is voor vragen.",
    icon: <MessageSquareMore className="w-12 h-12 text-primary" />,
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
          className=" mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Waarom voor ons kiezen
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
              <div className="relative z-10 h-full p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-colors">
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
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
