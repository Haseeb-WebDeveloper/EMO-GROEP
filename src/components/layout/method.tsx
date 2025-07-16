"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  ClipboardList,
  Home,
  FileCheck,
  Receipt,
} from "lucide-react";
import Image from "next/image";

const howWeWork = [
  {
    title: "Offerteaanvraag en goedkeuring",
    description:
      "Vraag eenvoudig online een offerte aan voor uw energielabel of woningrapportage. Na uw goedkeuring plannen wij direct een afspraak in voor de woningopname. Onze offertes zijn transparant, zonder verrassingen achteraf.",
    icon: FileText,
  },
  {
    title: "Inplannen van de afspraak",
    description:
      "Na goedkeuring van de offerte, plannen we samen met u een afspraak voor de opname van de woning. We zijn flexibel en zorgen ervoor dat dit op een moment gebeurt dat voor u het beste uitkomt.",
    icon: Calendar,
  },
  {
    title: "Voorbereiding en informatie aanleveren",
    description:
      "Voor een snelle en nauwkeurige beoordeling van uw woning vragen wij u om bepaalde gegevens vooraf aan te leveren. Dit kan gaan om zelf aangebrachte isolatie, geïnstalleerde duurzame technologieën zoals zonnepanelen of warmtepompen, en andere relevante installaties. Dit helpt ons om het energielabel en/of rapportage zo volledig mogelijk op te stellen.",
    icon: ClipboardList,
  },
  {
    title: "Woningopname door onze gecertificeerde adviseur",
    description:
      "Onze deskundige adviseur komt langs om een gedetailleerde opname van uw woning uit te voeren. Tijdens deze opname worden alle belangrijke aspecten van de woning bekeken, zoals isolatie, ramen, verwarmingssystemen en ventilatie. Dit is cruciaal voor het opstellen van een verplicht energielabel.",
    icon: Home,
  },
  {
    title: "Uitwerken van het energielabel en/of rapportage",
    description:
      "Na de opname werkt onze adviseur het energielabel voor uw woning uit of maakt het benodigde NEN 2580 meetrapport of de WWS puntentelling. Dit gebeurt volledig volgens de geldende richtlijnen en normen.",
    icon: FileCheck,
  },
  {
    title: "Factuur en oplevering van het energielabel",
    description:
      "Na afronding ontvangt u de factuur voor onze diensten. Wij leveren het energielabel en/of de rapportages digitaal aan, zodat u deze snel kunt gebruiken voor bijvoorbeeld de verkoop of verhuur van uw woning. Indien gewenst, lichten wij de rapportages ook persoonlijk toe.",
    icon: Receipt,
  },
];

export function HowWeWork() {
  return (
    <section className="relative py-8 md:py-24 overflow-hidden bg-foreground/5">
      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row"
        >
          {/* Left side with improved sticky behavior */}
          <div className="space-y-6 w-full lg:w-[40%] lg:sticky">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Onze werkwijze
            </h2>
            <p className="text-foreground/90 text-lg text-pretty">
              <strong>
                Snel en efficiënt uw energielabel en rapportages aanvragen
              </strong>{" "}
              Bij EMW Groep zorgen we ervoor dat het aanvragen van een{" "}
              <strong>energielabel voor uw woning</strong>, het opstellen van
              een <strong>NEN 2580 meetrapport</strong> of het uitvoeren van een{" "}
              <strong>WWS puntentelling</strong> snel, duidelijk en eenvoudig
              verloopt. Dit is hoe onze werkwijze eruitziet:
            </p>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-[60%]">
            {howWeWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 rounded-xl border border-primary/10 bg-background flex flex-col gap-4 w-full h-full hover:border-primary/40 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-medium">{item.title}</h3>
                    <p className="text-lg text-foreground/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
