import { Navbar } from "@/components/samaj/Navbar";
import { TournamentHighlights } from "@/components/samaj/TournamentHighlights";
import { Gallery } from "@/components/samaj/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Gallery",
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-8">
                <TournamentHighlights />
                <Gallery />
            </div>
        </main>
    );
}