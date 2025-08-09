import { Button } from "@/components/ui/button";
import { Microscope, Shield, BookOpen, AlertTriangle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <Microscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BacteriaGuard</h1>
              <p className="text-sm text-muted-foreground">Food Safety Detection System</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Scanner</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Education</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Reports</span>
            </Button>
          </nav>
          
          <Button variant="medical" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;