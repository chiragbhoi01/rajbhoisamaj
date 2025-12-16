"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MATRIMONY_PROFILES as DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Lock, User } from "lucide-react";

export function MatrimonyProfile() {
    return (
        <section className="py-12 bg-secondary/5">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                    <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent">
                        Matrimony (परिचय)
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
                        Find Your Perfect Match
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        Safe, secure, and tradition-oriented matchmaking for our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DATA.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProfileCard({ profile }: { profile: any }) {
    const [open, setOpen] = useState(false);

    return (
        <Card className="overflow-hidden border-2 hover:border-accent transition-colors">
            <CardContent className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center relative">
                    <User className="w-16 h-16 text-muted-foreground/50" />
                    <div className="absolute top-2 right-2 bg-black/50 text-accent-foreground text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Lock size={10} /> Private
                    </div>
                </div>
                <div className="p-4 space-y-2">
                    <div className="flex justify-between items-start">
                        <Badge variant={profile.type === "Groom" ? "default" : "secondary"}>
                            {profile.type}
                        </Badge>
                        <span className="text-sm font-semibold text-muted-foreground">ID: {profile.id}</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-bold text-lg">{profile.age} Yrs, {profile.height}</h3>
                        <p className="text-sm text-foreground/80">{profile.education}</p>
                        <p className="text-sm text-muted-foreground">{profile.job}</p>
                        <p className="text-sm font-medium text-primary">Gotra: {profile.gotra}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="w-full bg-secondary hover:bg-secondary/90">Request Bio-data</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Request Bio-data for {profile.id}</DialogTitle>
                            <DialogDescription>
                                Enter your details to request access to this profile. The admin will connect you via WhatsApp.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" placeholder="Your Name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right">Phone</Label>
                                <Input id="phone" placeholder="+91 98765 43210" className="col-span-3" />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-accent text-accent-foreground" onClick={() => setOpen(false)}>
                            Send Request via WhatsApp
                        </Button>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
