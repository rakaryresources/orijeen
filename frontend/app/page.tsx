import HeroSection from "../components/HeroSection";
import CourseDetailsSection from "../components/CourseDetailsSection";
import IdealForYouSection from "../components/IdealForYouSection";
import InstructorSection from "../components/InstructorSection";
import ProgramSection from "../components/ProgramSection";
import GraduatesSection from "../components/GraduatesSection";
import RatesAndLoyaltySection from "../components/RatesAndLoyaltySection";
import RegistrationFormSection from "../components/RegistrationFormSection";
import SocialsFooterSection from "../components/SocialsFooterSection";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-clip bg-[#0a0a0a]">
      <HeroSection />
      <CourseDetailsSection />
      <IdealForYouSection />
      <InstructorSection />
      <ProgramSection />
      <GraduatesSection />
      <RatesAndLoyaltySection />
      <RegistrationFormSection />
      <SocialsFooterSection />
    </main>
  );
}
