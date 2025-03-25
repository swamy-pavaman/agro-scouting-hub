
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Upload, X, Check } from "lucide-react";

const TaskSubmission = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const getTitle = () => {
    switch (type) {
      case "scouting":
        return "Scouting Report";
      case "spraying":
        return "Spraying Report";
      case "sowing":
        return "Sowing Report";
      case "fuel":
        return "Fuel Usage Report";
      case "yield":
        return "Yield Report";
      default:
        return "Submit Report";
    }
  };

  const getFields = () => {
    switch (type) {
      case "scouting":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
                Crop
              </label>
              <select
                id="crop"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select crop</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="corn">Corn</option>
                <option value="cotton">Cotton</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="disease" className="block text-sm font-medium text-foreground mb-1">
                Disease/Pest (if any)
              </label>
              <select
                id="disease"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select disease/pest</option>
                <option value="aphids">Aphids</option>
                <option value="rust">Rust</option>
                <option value="blight">Blight</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fruits" className="block text-sm font-medium text-foreground mb-1">
                  No. of Fruits
                </label>
                <input
                  type="number"
                  id="fruits"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter number"
                />
              </div>
              <div>
                <label htmlFor="flowers" className="block text-sm font-medium text-foreground mb-1">
                  No. of Flowers
                </label>
                <input
                  type="number"
                  id="flowers"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter number"
                />
              </div>
            </div>
          </>
        );
      case "spraying":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
                Crop
              </label>
              <select
                id="crop"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select crop</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="corn">Corn</option>
                <option value="cotton">Cotton</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1">
                Total Area Sprayed (acres)
              </label>
              <input
                type="number"
                id="area"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter area"
              />
            </div>
          </>
        );
      case "sowing":
        return (
          <div className="mb-4">
            <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
              Crop
            </label>
            <select
              id="crop"
              className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select crop</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>
        );
      case "fuel":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
                Crop/Field
              </label>
              <select
                id="crop"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select crop/field</option>
                <option value="wheat">Wheat - Block A</option>
                <option value="rice">Rice - Block B</option>
                <option value="corn">Corn - Block C</option>
                <option value="cotton">Cotton - Block D</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="driver" className="block text-sm font-medium text-foreground mb-1">
                Driver Name
              </label>
              <input
                type="text"
                id="driver"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter driver name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1">
                  Quantity (liters)
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label htmlFor="kms" className="block text-sm font-medium text-foreground mb-1">
                  KMs
                </label>
                <input
                  type="number"
                  id="kms"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter kilometers"
                />
              </div>
            </div>
          </>
        );
      case "yield":
        return (
          <>
            <div className="mb-4">
              <label htmlFor="crop" className="block text-sm font-medium text-foreground mb-1">
                Crop
              </label>
              <select
                id="crop"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select crop</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="corn">Corn</option>
                <option value="cotton">Cotton</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1">
                  Total Area Harvested (acres)
                </label>
                <input
                  type="number"
                  id="area"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter area"
                />
              </div>
              <div>
                <label htmlFor="harvest" className="block text-sm font-medium text-foreground mb-1">
                  Harvest (tons)
                </label>
                <input
                  type="number"
                  id="harvest"
                  className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter harvest amount"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="quality" className="block text-sm font-medium text-foreground mb-1">
                Quality
              </label>
              <select
                id="quality"
                className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select quality</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const newPreviewUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
      setIsUploading(false);
    }, 1500);
  };

  const removeImage = (index: number) => {
    const newUrls = [...previewUrls];
    newUrls.splice(index, 1);
    setPreviewUrls(newUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show a success state before redirecting
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Submitted</span>';
      submitBtn.classList.add('bg-green-600');
    }
    
    setTimeout(() => {
      navigate('/supervisor');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar title={getTitle()} userType="supervisor" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <form onSubmit={handleSubmit} className="animate-fade-in">
          {getFields()}
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter detailed description"
            ></textarea>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-1">
              Upload Media
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-input rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <div className="flex text-sm text-muted-foreground">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-agro-primary hover:text-agro-primary/80 focus-within:outline-none">
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          
          {isUploading && (
            <div className="w-full bg-agro-light rounded-lg p-4 mb-4 flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-agro-primary mr-3"></div>
              <span className="text-sm text-foreground">Uploading images...</span>
            </div>
          )}
          
          {previewUrls.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Uploaded Images</p>
              <div className="grid grid-cols-3 gap-3">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`preview ${index}`}
                      className="h-24 w-full object-cover rounded-lg border border-border"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button
            id="submit-btn"
            type="submit"
            className="w-full bg-agro-primary text-white p-3 rounded-lg font-medium shadow-sm hover:bg-agro-primary/90 transition-colors"
          >
            Submit Report
          </button>
        </form>
      </main>

      <BottomNav userType="supervisor" />
    </div>
  );
};

export default TaskSubmission;
