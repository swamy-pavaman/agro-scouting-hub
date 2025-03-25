
import { Link } from "react-router-dom";
import { UserCircle2, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center mb-10 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Kapil Agro</h1>
        <p className="text-xl text-agro-primary font-medium mb-1">Scouting Hub</p>
        <p className="text-muted-foreground">Select your role to continue</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl animate-fade-in">
        <Link 
          to="/supervisor" 
          className="flex flex-col items-center p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-20 h-20 rounded-full bg-agro-light flex items-center justify-center mb-4">
            <UserCircle2 className="w-10 h-10 text-agro-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Supervisor</h2>
          <p className="text-sm text-center text-muted-foreground">
            Submit reports, manage tasks, and track field activities
          </p>
        </Link>
        
        <Link 
          to="/manager" 
          className="flex flex-col items-center p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-20 h-20 rounded-full bg-agro-light flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-agro-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Manager</h2>
          <p className="text-sm text-center text-muted-foreground">
            Review submissions, track analytics, and manage supervisors
          </p>
        </Link>
      </div>
      
      <div className="mt-8 text-center text-xs text-muted-foreground animate-fade-in">
        <p>© 2023 Kapil Agro Scouting Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
