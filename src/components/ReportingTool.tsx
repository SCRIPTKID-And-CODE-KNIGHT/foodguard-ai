import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  AlertTriangle, 
  Camera, 
  MapPin, 
  Calendar,
  Phone,
  FileText,
  CheckCircle
} from "lucide-react";

const ReportingTool = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    foodType: "",
    symptoms: "",
    location: "",
    date: "",
    description: "",
    contact: ""
  });

  const commonSymptoms = [
    "Nausea", "Vomiting", "Diarrhea", "Stomach cramps", 
    "Fever", "Headache", "Fatigue", "Loss of appetite"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate report submission
    toast({
      title: "Report Submitted Successfully",
      description: "Your food poisoning report has been forwarded to health authorities.",
    });

    // Reset form
    setFormData({
      foodType: "",
      symptoms: "",
      location: "",
      date: "",
      description: "",
      contact: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-danger/10 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-danger" />
            <span className="text-sm font-medium text-danger">Report Food Poisoning</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Incident Reporting Tool
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help protect your community by reporting suspected food poisoning incidents. 
            Your report will be securely forwarded to relevant health authorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Incident Report Form
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help health authorities investigate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Food Type */}
                  <div>
                    <Label htmlFor="food-type">Type of Food/Drink *</Label>
                    <Select value={formData.foodType} onValueChange={(value) => handleInputChange("foodType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meat">Meat Products</SelectItem>
                        <SelectItem value="seafood">Seafood</SelectItem>
                        <SelectItem value="dairy">Dairy Products</SelectItem>
                        <SelectItem value="vegetables">Vegetables/Fruits</SelectItem>
                        <SelectItem value="beverages">Beverages</SelectItem>
                        <SelectItem value="prepared">Prepared Meals</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Symptoms */}
                  <div>
                    <Label>Symptoms Experienced</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 mb-3">
                      {commonSymptoms.map((symptom) => (
                        <Badge 
                          key={symptom}
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-center justify-center"
                        >
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                    <Textarea
                      placeholder="Describe symptoms and their severity..."
                      value={formData.symptoms}
                      onChange={(e) => handleInputChange("symptoms", e.target.value)}
                      className="min-h-20"
                    />
                  </div>

                  {/* Date and Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Date of Consumption
                      </Label>
                      <Input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Location
                      </Label>
                      <Input
                        placeholder="Restaurant/store name and address"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <Label htmlFor="contact" className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      Contact Information (Optional)
                    </Label>
                    <Input
                      placeholder="Phone or email for follow-up"
                      value={formData.contact}
                      onChange={(e) => handleInputChange("contact", e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      placeholder="Any additional information that might be helpful..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="min-h-24"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <Label className="flex items-center mb-2">
                      <Camera className="h-4 w-4 mr-1" />
                      Photo Evidence (Optional)
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload photos of the food item or receipt
                      </p>
                    </div>
                  </div>

                  <Button type="submit" variant="danger" size="lg" className="w-full">
                    Submit Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-success">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Your Report Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0" />
                    Helps identify contamination sources
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0" />
                    Protects other consumers
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0" />
                    Improves food safety standards
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-2 flex-shrink-0" />
                    All reports are confidential
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-warning/20 bg-warning/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-warning">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Seek Medical Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  If symptoms are severe or persistent, seek immediate medical attention.
                </p>
                <Button variant="warning" size="sm" className="w-full">
                  Emergency Contacts
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Report Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  After submission, you'll receive a confirmation number. 
                  Health authorities typically respond within 24-48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingTool;