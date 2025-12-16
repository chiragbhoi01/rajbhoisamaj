"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 hero-background-image"
                style={{
                    // Ideally use a real image of Banswara or Temple
                    backgroundImage: "url('https://images.unsplash.com/photo-1590053142880-775752c04068?q=80&w=1920&auto=format&fit=crop')"
                }}
                aria-label="Background image of a temple"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

            <div className="container relative z-20 px-4 text-center text-foreground">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Badge / Tagline */}
                    <span className="inline-block rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                        Wagad Area Community Platform
                    </span>

                    {/* Main Heading */}
                    <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block text-accent drop-shadow-md">
                            Unity, Service, and Tradition
                        </span>
                        <span className="mt-2 block text-2xl sm:text-3xl md:text-4xl font-light text-white/90">
                            संगठन, सेवा और संस्कार
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl font-sans">
                        The Official Digital Platform of <strong className="text-foreground">Raj Bhoi Mali Samaj</strong>, Banswara.
                        Connecting our community, preserving our heritage.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button size="lg" className="bg-accent text-accent-foreground h-12 px-8 text-lg">
                            Join Our Community
                        </Button>
                        <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/20 hover:text-background h-12 px-8 text-lg gap-2">
                            <Calendar className="w-5 h-5" />
                            Upcoming Events
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
