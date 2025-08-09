import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Heart, 
  AlertTriangle, 
  Shield, 
  Thermometer,
  Clock,
  Utensils,
  Droplets,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const EducationSection = () => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const topics = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Food Safety Basics",
      description: "Learn fundamental principles of safe food handling and storage",
      level: "Beginner",
      readTime: "5 min",
      color: "success",
      fullContent: "Food safety is crucial for preventing foodborne illnesses. Key principles include: proper hand washing, maintaining clean cooking surfaces, separating raw and cooked foods, cooking to safe temperatures, and storing food at correct temperatures. Always wash hands before and after handling food, use separate cutting boards for raw meat and vegetables, and refrigerate perishable foods promptly."
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Temperature Control",
      description: "Understanding critical temperatures for bacterial growth prevention",
      level: "Intermediate",
      readTime: "8 min",
      color: "warning",
      fullContent: "The 'danger zone' for food is between 40°F and 140°F (4°C to 60°C), where bacteria multiply rapidly. Keep hot foods hot (above 140°F) and cold foods cold (below 40°F). Use a food thermometer to check internal temperatures: 165°F for poultry, 160°F for ground meat, 145°F for whole cuts of beef and pork. Never leave perishable food at room temperature for more than 2 hours (1 hour if temperature is above 90°F)."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Recognizing Contamination",
      description: "Visual and sensory signs of bacterial contamination in food",
      level: "Advanced",
      readTime: "12 min",
      color: "danger",
      fullContent: "Signs of bacterial contamination include unusual odors (sour, rotten, or off smells), slimy or sticky textures, color changes, mold growth, and bubbling or foaming. Trust your senses - if something looks, smells, or feels wrong, don't consume it. However, some dangerous bacteria like Salmonella and E. coli may not produce obvious signs, which is why proper handling and cooking are essential. When in doubt, throw it out."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health Impact",
      description: "How bacterial contamination affects human health and wellbeing",
      level: "Beginner",
      readTime: "6 min",
      color: "success",
      fullContent: "Foodborne illnesses can cause symptoms ranging from mild stomach upset to severe dehydration and hospitalization. Common symptoms include nausea, vomiting, diarrhea, abdominal cramps, and fever. Vulnerable populations like pregnant women, young children, elderly adults, and immunocompromised individuals are at higher risk for severe complications. Most foodborne illnesses resolve within a few days, but some can cause long-term health issues."
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Safe Preparation",
      description: "Best practices for preparing and cooking food safely",
      level: "Intermediate",
      readTime: "10 min",
      color: "warning",
      fullContent: "Safe food preparation starts with clean hands, utensils, and surfaces. Wash all fruits and vegetables under running water. Use separate cutting boards for raw meat and ready-to-eat foods. Marinate foods in the refrigerator, not at room temperature. Don't rinse raw chicken as this can spread bacteria. Cook foods to their safe minimum internal temperatures and use a food thermometer to verify doneness."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Safety",
      description: "Ensuring drinking water is free from harmful bacteria",
      level: "Beginner",
      readTime: "7 min",
      color: "success",
      fullContent: "Safe drinking water is essential for health. If you're unsure about water quality, boil it for at least one minute or use bottled water. Be cautious with ice, especially when traveling. Well water should be tested annually for bacteria. Signs of contaminated water include unusual taste, odor, or appearance. Water filters can help, but ensure they're certified to remove bacteria and are properly maintained."
    }
  ];

  const quickTips = [
    "Wash hands for at least 20 seconds with soap and warm water",
    "Keep raw and cooked foods separate to prevent cross-contamination",
    "Cook food to safe internal temperatures",
    "Refrigerate perishables within 2 hours of preparation",
    "Use separate cutting boards for raw meat and vegetables"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Food Safety Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources to help you understand and prevent bacterial contamination
            in your food and drinks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Topics */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Learning Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {topic.icon}
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant={topic.color as any} className="text-xs">
                          {topic.level}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {topic.readTime}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {topic.description}
                    </CardDescription>
                    
                    {expandedTopic === index && (
                      <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-foreground leading-relaxed">
                          {topic.fullContent}
                        </p>
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                    >
                      {expandedTopic === index ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-2" />
                          Read More
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Quick Safety Tips
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Prevention</CardTitle>
                <CardDescription>
                  Essential practices for everyday food safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {quickTips.map((tip, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="medical">
                  Download Safety Guide
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="mt-6 border-danger/20 bg-danger/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-danger">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  If you suspect food poisoning, seek immediate medical attention.
                </p>
                <Button variant="danger" size="sm" className="w-full">
                  Emergency Contacts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;