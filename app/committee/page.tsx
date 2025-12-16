import { Navbar } from "@/components/samaj/Navbar";
import { CommitteeGrid } from "@/components/samaj/CommitteeGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Committee",
};

export default function CommitteePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-8">
                <CommitteeGrid />
            </div>
        </main>
    );
}