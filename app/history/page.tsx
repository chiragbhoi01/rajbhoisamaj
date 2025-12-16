import { Navbar } from "@/components/samaj/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "History & Heritage",
};

export default function HistoryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container py-12 px-4 md:px-6">
                <h1 className="text-4xl font-serif font-bold text-secondary mb-6">History & Heritage</h1>
                <article className="prose prose-lg dark:prose-invert max-w-4xl">
                    <p>
                        The <strong>Raj Bhoi Mali Samaj</strong> has a rich and vibrant history intertwined with the royal lineage of Rajasthan.
                    </p>
                    <h3>Origins (उत्पत्ति)</h3>
                    <p>
                        Based on historical records and ethnography, the Bhoi community traditionally served as water managers, fishermen, and palanquin bearers.
                        In ancient and medieval India, carrying the palanquin was a symbol of closeness to royalty.
                        The prefix "Raj" signifies this royal association and the valor of our ancestors.
                    </p>
                    <h3>The Mali Connection</h3>
                    <p>
                        The Mali identity reflects our deep roots in agriculture and gardening. Over time, in the Mewar-Wagad region,
                        these identities have merged to form a unique community known for its hard work, resilience, and service.
                    </p>
                    <p className="mt-8 italic text-muted-foreground">
                        Detailed history from the research report will be populated here.
                    </p>
                </article>
            </div>
        </main>
    );
}