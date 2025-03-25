
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, MapPin, Calendar, User, ArrowLeft } from "lucide-react";

const TaskReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [advice, setAdvice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock task data - in a real app this would come from an API
  const task = {
    id: id || "1",
    title: "Inspect Wheat Field - Block A",
    type: "scouting",
    crop: "Wheat",
    disease: "None detected",
    fruits: 120,
    flowers: 85,
    location: "Block A - North Section",
    date: "May 15, 2023 - 10:30 AM",
    supervisor: "Rajesh Kumar",
    description: "Conducted thorough inspection of wheat field in Block A. Plants appear healthy with good growth. No signs of pest infestation or disease. Soil moisture is adequate. Some areas might need additional nitrogen based on leaf color.",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626289065018-898d65e11476?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6962b5?q=80&w=1374&auto=format&fit=crop",
    ],
  };

  const handleApprove = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success message before navigating
      const approveBtn = document.getElementById('approve-btn');
      const rejectBtn = document.getElementById('reject-btn');
      
      if (approveBtn && rejectBtn) {
        approveBtn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Approved</span>';
        approveBtn.classList.add('bg-green-600');
        rejectBtn.classList.add('opacity-50');
        rejectBtn.setAttribute('disabled', 'true');
      }
      
      setTimeout(() => {
        navigate('/manager');
      }, 1500);
    }, 1000);
  };

  const handleReject = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Show rejection message before navigating
      const approveBtn = document.getElementById('approve-btn');
      const rejectBtn = document.getElementById('reject-btn');
      
      if (approveBtn && rejectBtn) {
        rejectBtn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Rejected</span>';
        rejectBtn.classList.add('bg-red-600');
        approveBtn.classList.add('opacity-50');
        approveBtn.setAttribute('disabled', 'true');
      }
      
      setTimeout(() => {
        navigate('/manager');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Task Review" userType="manager" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-muted-foreground mb-4 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-border p-5 mb-6 animate-fade-in">
          <h1 className="text-xl font-semibold mb-1">{task.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
              {task.type}
            </span>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
              {task.crop}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-sm font-medium mb-3">Report Details</h2>
              
              <div className="space-y-3">
                {task.type === "scouting" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Disease/Pest:</span>
                      <span className="text-sm">{task.disease}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fruits Count:</span>
                      <span className="text-sm">{task.fruits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Flowers Count:</span>
                      <span className="text-sm">{task.flowers}</span>
                    </div>
                  </>
                )}
                
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{task.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{task.date}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{task.supervisor}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-medium mb-3">Description</h2>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-medium mb-3">Uploaded Images</h2>
            <div className="grid grid-cols-3 gap-3">
              {task.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Task image ${index + 1}`}
                  className="h-24 w-full object-cover rounded-lg border border-border"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-border p-5 mb-6 animate-fade-in">
          <h2 className="text-sm font-medium mb-3">Add Advice (Optional)</h2>
          <textarea
            value={advice}
            onChange={(e) => setAdvice(e.target.value)}
            className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring mb-4"
            placeholder="Enter your advice or feedback for the supervisor"
            rows={3}
          ></textarea>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              id="reject-btn"
              onClick={handleReject}
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-red-100 text-red-600 p-3 rounded-lg font-medium hover:bg-red-200 transition-colors"
            >
              <XCircle className="w-5 h-5" /> Reject
            </button>
            <button
              id="approve-btn"
              onClick={handleApprove}
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 bg-green-100 text-green-600 p-3 rounded-lg font-medium hover:bg-green-200 transition-colors"
            >
              <CheckCircle className="w-5 h-5" /> Approve
            </button>
          </div>
        </div>
      </main>

      <BottomNav userType="manager" />
    </div>
  );
};

export default TaskReview;
