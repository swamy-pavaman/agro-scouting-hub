
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Settings, 
  LogOut 
} from "lucide-react";
import { StatCard } from "@/components/StatCard";

const Profile = () => {
  const user = {
    name: "Rahul Sharma",
    role: "Field Supervisor",
    email: "rahul.sharma@kapilagro.com",
    phone: "+91 98765 43210",
    location: "Nashik, Maharashtra",
    joinDate: "April 2022",
    profileImage: "https://i.pravatar.cc/150?img=11"
  };

  const stats = [
    {
      title: "Tasks Completed",
      value: "128",
      change: "12% ↑",
      isPositive: true,
      icon: Clock,
      color: "#3B82F6"
    },
    {
      title: "Approval Rate",
      value: "94%",
      change: "2% ↑",
      isPositive: true,
      icon: Calendar,
      color: "#10B981"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="My Profile" userType="supervisor" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img 
                src={user.profileImage} 
                alt={user.name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-agro-primary/20"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-agro-primary font-medium">{user.role}</p>
              <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Crops Expert</span>
                <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Field Operations</span>
              </div>
            </div>
            
            <div className="ml-auto mt-4 sm:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{user.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Joined</p>
                <p className="font-medium">{user.joinDate}</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3 animate-fade-in">Performance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Account Settings</h3>
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start px-3 py-5 h-auto">
              <User className="w-5 h-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Personal Information</p>
                <p className="text-sm text-muted-foreground">Update your personal details</p>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start px-3 py-5 h-auto">
              <Settings className="w-5 h-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Preferences</p>
                <p className="text-sm text-muted-foreground">Manage app notifications and settings</p>
              </div>
            </Button>
            
            <Button variant="ghost" className="w-full justify-start px-3 py-5 h-auto text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="w-5 h-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Sign Out</p>
                <p className="text-sm text-muted-foreground">Log out from your account</p>
              </div>
            </Button>
          </div>
        </div>
      </main>

      <BottomNav userType="supervisor" />
    </div>
  );
};

export default Profile;
