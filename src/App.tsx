
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Onboarding from "./pages/Onboarding";
import SupervisorHome from "./pages/SupervisorHome";
import ManagerHome from "./pages/ManagerHome";
import TaskSubmission from "./pages/TaskSubmission";
import TaskReview from "./pages/TaskReview";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Initial routes */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Supervisor routes */}
          <Route path="/supervisor" element={<SupervisorHome />} />
          <Route path="/submit/:type" element={<TaskSubmission />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          
          {/* Manager routes */}
          <Route path="/manager" element={<ManagerHome />} />
          <Route path="/task/:id" element={<TaskReview />} />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
