
import { Home, BarChart3, BellRing, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BottomNavProps {
  userType?: "supervisor" | "manager";
}

export function BottomNav({ userType = "supervisor" }: BottomNavProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const managerRoutes = [
    { name: "Home", path: "/manager", icon: Home },
    { name: "Tasks", path: "/tasks", icon: BarChart3 },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const supervisorRoutes = [
    { name: "Home", path: "/supervisor", icon: Home },
    { name: "Reports", path: "/reports", icon: BarChart3 },
    { name: "Notifications", path: "/notifications", icon: BellRing },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const routes = userType === "supervisor" ? supervisorRoutes : managerRoutes;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
      <div className="flex justify-around items-center h-16">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive(route.path)
                ? "text-agro-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <route.icon className={`w-5 h-5 mb-1 ${isActive(route.path) ? "animate-scale-in" : ""}`} />
            <span className="text-xs">{route.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
