"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MATCH_RESULTS as DATA } from "@/lib/data";
import { Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TournamentHighlights() {
    return (
        <section className="py-12 bg-emerald/5">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-serif font-bold text-foreground">
                            Sports Highlights
                        </h2>
                        <p className="text-muted-foreground">
                            Updates from the Raj Bhoi Samaj Cricket Tournament
                        </p>
                    </div>
                    <Button className="bg-emerald hover:bg-emerald/90 text-white gap-2">
                        <Trophy size={18} /> Register Team
                    </Button>
                </div>

                <div className="relative overflow-x-auto pb-4">
                    <div className="flex gap-6 min-w-max">
                        {DATA.map((match) => (
                            <Card key={match.id} className="w-[300px] md:w-[350px] border-l-4 border-l-emerald">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                                        <span className="font-semibold text-emerald">Match {match.id}</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {match.date}</span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Team A */}
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">{match.teamA}</span>
                                            <span className="font-mono bg-muted px-2 py-0.5 rounded">{match.scoreA}</span>
                                        </div>

                                        <div className="text-xs text-center text-muted-foreground">VS</div>

                                        {/* Team B */}
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">{match.teamB}</span>
                                            <span className="font-mono bg-muted px-2 py-0.5 rounded">{match.scoreB}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t text-center">
                                        <span className="text-sm font-medium text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                                            Winner: {match.winner}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
