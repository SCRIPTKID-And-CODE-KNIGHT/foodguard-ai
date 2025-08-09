import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScannerInterface from "@/components/ScannerInterface";
import EducationSection from "@/components/EducationSection";
import ReportingTool from "@/components/ReportingTool";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ScannerInterface />
      <EducationSection />
      <ReportingTool />
    </div>
  );
};

export default Index;
