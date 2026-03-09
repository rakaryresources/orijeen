import HeroSection from "../components/HeroSection";
import CourseDetailsSection from "../components/CourseDetailsSection";
import IdealForYouSection from "../components/IdealForYouSection";
import AuthorAndContentSection from "../components/AuthorAndContentSection";
import ProgramSection from "../components/ProgramSection";
import GraduatesSection from "../components/GraduatesSection";
import RatesAndLoyaltySection from "../components/RatesAndLoyaltySection";
import RegistrationFormSection from "../components/RegistrationFormSection";
import SocialsFooterSection from "../components/SocialsFooterSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-[#0a0a0a]">
      <HeroSection />
      <CourseDetailsSection />
      <IdealForYouSection />
      <AuthorAndContentSection />
      <ProgramSection />
      <GraduatesSection />
      <RatesAndLoyaltySection />
      <RegistrationFormSection />
      <SocialsFooterSection />
    </main>
  );
}
