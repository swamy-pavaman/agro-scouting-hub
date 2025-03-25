
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { TaskCard } from "@/components/TaskCard";
import { StatCard } from "@/components/StatCard";
import { BarChart } from "@/components/BarChart";
import { 
  ClipboardCheck, 
  ClipboardList, 
  Users, 
  CircleDollarSign, 
  ChevronRight,
  AlertTriangle, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ManagerHome = () => {
  const pendingApprovals = [
    {
      id: "1",
      title: "Inspect Wheat Field - Block A",
      description: "Check for pest infestation and overall health",
      date: "Today, 10:30 AM",
      type: "scouting" as const,
      status: "pending" as const,
    },
    {
      id: "2",
      title: "Apply Fertilizer - Block C",
      description: "Apply NPK fertilizer to corn field",
      date: "Yesterday, 3:15 PM",
      type: "spraying" as const,
      status: "pending" as const,
    },
  ];

  const chartData = [
    { name: 'Block A', value: 24 },
    { name: 'Block B', value: 18 },
    { name: 'Block C', value: 32 },
    { name: 'Block D', value: 27 },
    { name: 'Block E', value: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Manager Dashboard" userType="manager" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <h2 className="text-xl font-semibold mb-4 mt-2 animate-fade-in">Dashboard Overview</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard 
            title="Pending Tasks" 
            value="12" 
            change="3" 
            isPositive={false} 
            icon={ClipboardList} 
            color="#F59E0B" 
          />
          <StatCard 
            title="Completed Tasks" 
            value="48" 
            change="7" 
            isPositive={true} 
            icon={ClipboardCheck} 
            color="#10B981" 
          />
          <StatCard 
            title="Total Supervisors" 
            value="8" 
            icon={Users} 
            color="#3B82F6" 
          />
          <StatCard 
            title="Yield Value" 
            value="₹32L" 
            change="12%" 
            isPositive={true} 
            icon={CircleDollarSign} 
            color="#8B5CF6" 
          />
        </div>

        <div className="flex justify-between items-center mb-4 animate-fade-in">
          <h2 className="text-xl font-semibold">Pending Approvals</h2>
          <Link to="/tasks" className="text-sm text-agro-primary flex items-center">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="mb-6">
          {pendingApprovals.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>

        <div className="flex justify-between items-center mb-4 animate-fade-in">
          <h2 className="text-xl font-semibold">Analytics & Reports</h2>
          <Link to="/analytics" className="text-sm text-agro-primary flex items-center">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <BarChart 
          title="Scouting Reports by Field Block" 
          data={chartData} 
        />

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start animate-fade-in">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-yellow-800 mb-1">Alert: Pest Detected</h3>
            <p className="text-sm text-yellow-700 mb-2">Multiple scouting reports indicate aphid infestation in Block C wheat field.</p>
            <Link to="/alert/1" className="text-sm font-medium text-agro-primary flex items-center w-fit">
              View Details <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </main>

      <BottomNav userType="manager" />
    </div>
  );
};

export default ManagerHome;
