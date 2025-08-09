import { Button } from "@/components/ui/button";
import { Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/lab-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medical Laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Advanced Food Safety Technology</span>
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Detect Bacteria
            <br />
            <span className="text-primary-glow">Before It's Too Late</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Revolutionary AI-powered bacteria detection system that analyzes food and drinks 
            in real-time, protecting your health with laboratory-grade accuracy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="scan" size="lg" className="text-lg px-8 py-4">
              <Zap className="h-5 w-5 mr-2" />
              Start Scanning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-white/80">Detection Accuracy</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">&lt;30s</div>
              <div className="text-white/80">Analysis Time</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">50k+</div>
              <div className="text-white/80">Samples Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;