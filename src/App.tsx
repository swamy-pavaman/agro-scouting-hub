
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          {/* Default route redirects to supervisor home */}
          <Route path="/" element={<Navigate to="/supervisor" replace />} />
          
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
