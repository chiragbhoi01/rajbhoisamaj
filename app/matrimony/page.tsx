import { Navbar } from "@/components/samaj/Navbar";
import { MatrimonyProfile } from "@/components/samaj/MatrimonyProfile";

export default function MatrimonyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-8">
                <MatrimonyProfile />
            </div>
        </main>
    );
}
