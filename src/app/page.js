import HeaderWithBanner from '@/components/working-professionals/HeaderWithBanner';
import HeroSection from '@/components/working-professionals/HeroSection';
import PortfolioSection from '@/components/working-professionals/PortfolioSection';
import CurriculumSection from '@/components/working-professionals/CurriculumSection';
import ReturnsSection from '@/components/working-professionals/ReturnsSection';
import StatsBanner from '@/components/working-professionals/StatsBanner';
import StudentOutcomesSection from '@/components/working-professionals/StudentOutcomesSection';
import PlacementSupportSection from '@/components/working-professionals/PlacementSupportSection';
import BuiltForYouSection from '@/components/working-professionals/BuiltForYouSection';
import TimeCommitmentSection from '@/components/working-professionals/TimeCommitmentSection';
import SelfCheckSection from '@/components/working-professionals/SelfCheckSection';
import FAQSection from '@/components/working-professionals/FAQSection';
import { InstructorSection } from "@/components/working-professionals/instructor-section";
import FinalCTASection from '@/components/working-professionals/FinalCTASection';
import Footer from '@/components/working-professionals/Footer';

 
export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <HeaderWithBanner />
      <HeroSection />
      <PortfolioSection />
      <CurriculumSection />
      <ReturnsSection />
      <StatsBanner />
      <StudentOutcomesSection />
      <PlacementSupportSection />
      <BuiltForYouSection />
      <TimeCommitmentSection />
      <SelfCheckSection />
      <FAQSection />
      <InstructorSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
