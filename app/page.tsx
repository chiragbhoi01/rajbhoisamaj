import { Navbar } from "@/components/samaj/Navbar";
import { HeroSection } from "@/components/samaj/HeroSection";
import { TournamentHighlights } from "@/components/samaj/TournamentHighlights";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <HeroSection />

      <TournamentHighlights />

      <section className="container py-16 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-serif font-bold text-secondary">
            About Our Samaj
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <strong>Raj Bhoi Mali Samaj</strong> of Banswara is a vibrant community rooted in time-honored traditions.
            We are dedicated to the progress of our members through education, social unity, and service.
            This platform serves as a digital bridge connecting every family.
          </p>
        </div>
      </section>
    </main>
  );
}
