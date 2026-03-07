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
    <main className="flex flex-col gap-12 sm:gap-16 lg:gap-24 overflow-hidden bg-white">
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
