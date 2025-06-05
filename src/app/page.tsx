import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import CharacterShowcase from "@/components/home/CharacterShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import ApplicationSection from "@/components/home/ApplicationSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
            <Header />
            <main className="relative overflow-hidden">
                <HeroSection />
                <CharacterShowcase />
                <ServicesSection />
                <ApplicationSection />
                <ProcessSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
