import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ApplicationSection from "@/components/home/ApplicationSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <ApplicationSection />
                <ProcessSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
