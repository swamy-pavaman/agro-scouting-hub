
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Welcome to Kapil Agro Scouting Hub",
      description: "Track and manage all your agricultural scouting activities in one place.",
      image: "/onboarding-1.svg", // You would need to add this asset
    },
    {
      title: "Submit Field Reports",
      description: "Easily capture field conditions, pests, diseases, and crop health.",
      image: "/onboarding-2.svg", // You would need to add this asset
    },
    {
      title: "Review and Analyze",
      description: "Get insights and make data-driven decisions for better crop management.",
      image: "/onboarding-3.svg", // You would need to add this asset
    },
  ];
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to appropriate page (supervisor or manager)
      navigate("/supervisor");
    }
  };
  
  const skipOnboarding = () => {
    navigate("/supervisor");
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? "w-8 bg-agro-primary" 
                  : "w-2 bg-agro-light"
              }`}
            />
          ))}
        </div>
        
        {/* Content card */}
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="h-48 flex items-center justify-center mb-6">
              {/* Placeholder for image - replace with actual images */}
              <div className="w-40 h-40 bg-agro-light rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-agro-primary"
                >
                  {currentStep === 0 && (
                    <>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </>
                  )}
                  {currentStep === 1 && (
                    <>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
                      <path d="M9 9h1" />
                      <path d="M9 13h6" />
                      <path d="M9 17h6" />
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </>
                  )}
                </svg>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h2>
              <p className="text-muted-foreground">{steps[currentStep].description}</p>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-agro-primary hover:bg-agro-primary/90"
                onClick={nextStep}
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Get Started
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
              
              {currentStep < steps.length - 1 && (
                <Button 
                  variant="ghost" 
                  className="w-full text-muted-foreground"
                  onClick={skipOnboarding}
                >
                  Skip
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
