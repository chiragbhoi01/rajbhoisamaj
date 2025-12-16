"use client";

import React from "react";
import Image from "next/image"; // If using Next.js Image
import { cn } from "@/lib/utils";

// Mock Images (using unsplash)
const IMAGES = [
    "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=600&auto=format&fit=crop", // Prayer
    "https://images.unsplash.com/photo-1590053142880-775752c04068?q=80&w=600&auto=format&fit=crop", // Temple
    "https://images.unsplash.com/photo-1561587422-4aceed4d0107?q=80&w=600&auto=format&fit=crop", // Fabric
    "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=600&auto=format&fit=crop", // Wedding
    "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600&auto=format&fit=crop", // Community
    "https://images.unsplash.com/photo-1605218456209-67990b769658?q=80&w=600&auto=format&fit=crop", // Puja
];

export function Gallery() {
    return (
        <section className="py-16 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-secondary">
                        Community Gallery (झलकियाँ)
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Glimpses of our culture, festivals, and temples.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {IMAGES.map((src, i) => (
                        <div key={i} className="break-inside-avoid overflow-hidden rounded-lg border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all">
                            {/* Note: Just using img for simplicity with external URLs, use Image with configuration in production */}
                            <img
                                src={src}
                                alt={`Raj Bhoi Mali Samaj - ${
                                  i === 0 ? "Prayer" :
                                  i === 1 ? "Temple" :
                                  i === 2 ? "Fabric" :
                                  i === 3 ? "Wedding" :
                                  i === 4 ? "Community" :
                                  "Puja"
                                }`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
