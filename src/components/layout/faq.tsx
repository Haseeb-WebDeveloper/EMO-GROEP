"use client"

import { useState } from "react";

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQ() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const faq: FAQItem[] = [
        {
            q: "What is an energy label?",
            a: "It’s a mandatory certificate showing your home’s energy efficiency—required for sale or rent."
        },
        {
            q: "How soon will I get it?",
            a: "You’ll receive all documents within 1–3 business days after inspection. Need it faster? Ask about rush delivery"
        },
        {
            q: "How much does it cost?",
            a: "It depends on your property’s type and where you live. Request a free, transparent quote now."
        },
    ];

    return (
        <div className="container mx-auto px-4 py-32">
            <div className="max-w-4xl mx-auto">
                {/* FAQ Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Before You Ask
                    </h2>
                    <p className="text-foreground/90 text-base md:text-xl">
                        We answer what you’re likely thinking.
                    </p>
                </div>

                {/* FAQ Questions */}
                <div className="space-y-4">
                    {faq.map((qa, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                            >
                                <span className="text-lg font-medium">{qa.q}</span>
                                <span className="text-2xl transform transition-transform duration-200" style={{
                                    transform: openQuestion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}>
                                    ↓
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className="overflow-hidden transition-all duration-200"
                                style={{
                                    maxHeight: openQuestion === index ? '200px' : '0',
                                    opacity: openQuestion === index ? 1 : 0
                                }}
                            >
                                <div className="px-6 py-4 border-t border-border bg-primary/5">
                                    <p className="text-lg">{qa.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}