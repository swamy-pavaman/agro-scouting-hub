
import { Bell, Menu, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  userType?: "supervisor" | "manager";
}

export function Navbar({ title, userType = "supervisor" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-medium">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/notifications" className="relative p-2 rounded-full text-foreground hover:bg-muted transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-agro-accent rounded-full"></span>
          </Link>
          <Link to="/profile" className="p-1 rounded-full bg-agro-primary text-white">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="w-64 h-full bg-background border-r border-border animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-border">
              <h2 className="text-lg font-medium">Kapil Agro</h2>
              <p className="text-sm text-muted-foreground capitalize">{userType}</p>
            </div>
            <nav className="p-2">
              <Link 
                to={userType === "supervisor" ? "/supervisor" : "/manager"} 
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/tasks" 
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tasks
              </Link>
              <Link 
                to="/reports" 
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                to="/analytics" 
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
