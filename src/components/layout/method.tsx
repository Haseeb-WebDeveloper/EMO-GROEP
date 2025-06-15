"use client"

import { motion } from "framer-motion"
import { FileText, Calendar, ClipboardList, Home, FileCheck, Receipt } from "lucide-react"
import Image from "next/image"

const howWeWork = [
    {
        title: "Offerte aanvragen",
        description: "Vraag vrijblijvend een offerte aan via onze website. Binnen 24 uur ontvang je een duidelijk voorstel op maat, zonder verborgen kosten.",
        icon: FileText
    },
    {
        title: "Afspraak inplannen",
        description: "Akkoord met de offerte? Dan plannen we direct een moment in dat jou het beste uitkomt — vaak al binnen een paar dagen.",
        icon: Calendar
    },
    {
        title: "Voorbereiding en info aanleveren",
        description: "Je ontvangt een korte checklist met de gegevens die we nodig hebben. Zo verloopt alles soepel en efficiënt op de dag van opname.",
        icon: ClipboardList
    },
    {
        title: "Woningopname",
        description: "Onze expert komt langs om de woning zorgvuldig in te meten en te inspecteren. Dit duurt gemiddeld 30 tot 60 minuten, afhankelijk van het type woning.",
        icon: Home
    },
    {
        title: "Uitwerking rapportages",
        description: "We verwerken alle gegevens en stellen de benodigde rapportages op, zoals het energielabel of NEN 2580-meetrapport. Grondig, maar snel.",
        icon: FileCheck
    },
    {
        title: "Factuur en digitale oplevering",
        description: "Je ontvangt de factuur en het complete rapport digitaal in je inbox. Alles veilig opgeslagen én eenvoudig te downloaden of door te sturen.",
        icon: Receipt
    },
]

export function HowWeWork() {
    return (
        <section className="relative py-8 md:py-24 overflow-hidden">
            <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                            Onze werkwijze
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full">
                        {howWeWork.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="p-6 rounded-xl border border-primary/10 bg-foreground/5 flex flex-col gap-4 w-full h-full hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                                            <item.icon className="w-8 h-8 text-primary" />

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-medium">{item.title}</h3>
                                        <p className="text-lg text-foreground/90">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 