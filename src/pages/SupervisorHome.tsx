
import { Navbar } from "@/components/Navbar";
import { TaskCard } from "@/components/TaskCard";
import { ActionButton } from "@/components/ActionButton";
import { TabView } from "@/components/TabView";
import { Leaf, Droplet, Sprout, Fuel, Scale } from "lucide-react";
import { WeatherReport } from "@/components/WeatherReport";

const SupervisorHome = () => {
  const pendingTasks = [
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

  const approvedTasks = [
    {
      id: "3",
      title: "Harvest Monitoring - Block B",
      description: "Check quality and quantity of harvested crops",
      date: "May 12, 2:45 PM",
      type: "yield" as const,
      status: "approved" as const,
    },
  ];

  const rejectedTasks = [
    {
      id: "4",
      title: "Seed Planting - Block D",
      description: "Plant tomato seeds in prepared soil",
      date: "May 10, 11:20 AM",
      type: "sowing" as const,
      status: "rejected" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Supervisor Dashboard" userType="supervisor" />
      
      <main className="container mx-auto px-4 pt-20 pb-6">
        <div className="mb-6">
          <WeatherReport />
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-2 animate-fade-in">Task List</h2>
        
        <TabView 
          tabs={[
            {
              label: "Pending",
              content: (
                <div>
                  {pendingTasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              ),
            },
            {
              label: "Approved",
              content: (
                <div>
                  {approvedTasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              ),
            },
            {
              label: "Rejected",
              content: (
                <div>
                  {rejectedTasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              ),
            },
          ]}
        />

        <h2 className="text-xl font-semibold mt-8 mb-4 animate-fade-in">Quick Actions</h2>
        <div className="grid grid-cols-5 gap-3">
          <ActionButton 
            title="Scouting" 
            to="/submit/scouting" 
            icon={Leaf} 
            color="#3B82F6" 
            bgColor="#EFF6FF" 
          />
          <ActionButton 
            title="Spraying" 
            to="/submit/spraying" 
            icon={Droplet} 
            color="#10B981" 
            bgColor="#ECFDF5" 
          />
          <ActionButton 
            title="Sowing" 
            to="/submit/sowing" 
            icon={Sprout} 
            color="#8B5CF6" 
            bgColor="#F5F3FF" 
          />
          <ActionButton 
            title="Fuel" 
            to="/submit/fuel" 
            icon={Fuel} 
            color="#F59E0B" 
            bgColor="#FFFBEB" 
          />
          <ActionButton 
            title="Yield" 
            to="/submit/yield" 
            icon={Scale} 
            color="#EC4899" 
            bgColor="#FCE7F3" 
          />
        </div>
      </main>
    </div>
  );
};

export default SupervisorHome;
