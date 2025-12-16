"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Home", labelHi: "मुख्य पृष्ठ" },
    { href: "/history", label: "History", labelHi: "इतिहास" },
    { href: "/committee", label: "Committee", labelHi: "कार्यकारिणी" },
    { href: "/matrimony", label: "Matrimony", labelHi: "परिचय" },
    { href: "/events", label: "Events", labelHi: "कार्यक्रम" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Top Bar - Maroon Strip */}
            <div className="h-1 w-full bg-secondary" />

            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    {/* Placeholder for Crest */}
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary">
                        R
                    </div>
                    <Link href="/" className="flex flex-col">
                        <span className="text-lg font-serif font-bold leading-tight text-foreground">
                            Raj Bhoi Mali Samaj
                        </span>
                        <span className="text-xs text-muted-foreground">Banswara, Rajasthan</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group flex flex-col items-center text-sm font-medium transition-colors hover:text-primary"
                        >
                            <span>{link.label}</span>
                            <span className="text-[10px] text-muted-foreground group-hover:text-primary/70">
                                {link.labelHi}
                            </span>
                        </Link>
                    ))}
                    <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                        <Heart size={16} />
                        Donate (सहयोग)
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="pt-10">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-6">
                            <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary">
                                    R
                                </div>
                                <span className="font-serif font-bold">Raj Bhoi Mali Samaj</span>
                            </Link>

                            <div className="flex flex-col gap-4">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex flex-col border-b pb-2 text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        <span>{link.label}</span>
                                        <span className="text-xs text-muted-foreground">{link.labelHi}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-4">
                                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                                    <Heart size={16} />
                                    Donate Now
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
