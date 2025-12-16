"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { COMMITTEE_MEMBERS as DATA } from "@/lib/data";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommitteeGrid() {
    return (
        <section className="py-12 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                    <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary">
                        Our Leaders
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-secondary sm:text-4xl">
                        Executive Committee (कार्यकारिणी)
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Meet the dedicated members serving our Samaj with honor and pride.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DATA.map((member) => (
                        <Card key={member.id} className="overflow-hidden border-t-4 border-t-accent hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                <div className="relative h-24 w-24 rounded-full border-2 border-accent/30 p-1">
                                    {/* Placeholder Avatar */}
                                    <div className="h-full w-full rounded-full bg-secondary/10 flex items-center justify-center text-2xl font-serif font-bold text-secondary">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                                    <p className="text-primary font-medium text-sm">{member.designation}</p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin size={14} />
                                    <span>{member.village}</span>
                                </div>

                                <Button variant="outline" size="sm" className="w-full mt-2 gap-2 border-accent/20 text-primary hover:bg-accent/5 hover:text-primary">
                                    <Phone size={14} />
                                    Contact
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
