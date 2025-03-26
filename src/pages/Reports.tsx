
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { TabView } from "@/components/TabView";
import { BarChart } from "@/components/BarChart";
import { Calendar, BarChart3, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  const weeklyData = [
    { name: 'Mon', value: 4 },
    { name: 'Tue', value: 6 },
    { name: 'Wed', value: 3 },
    { name: 'Thu', value: 8 },
    { name: 'Fri', value: 5 },
    { name: 'Sat', value: 7 },
    { name: 'Sun', value: 2 },
  ];

  const monthlyData = [
    { name: 'Jan', value: 12 },
    { name: 'Feb', value: 19 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 21 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 24 },
  ];

  const taskSummary = [
    { type: "Scouting", count: 42, color: "#3B82F6" },
    { type: "Spraying", count: 28, color: "#10B981" },
    { type: "Sowing", count: 16, color: "#8B5CF6" },
    { type: "Fuel", count: 23, color: "#F59E0B" },
    { type: "Yield", count: 11, color: "#EC4899" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Reports" userType="supervisor" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-agro-primary" />
            <h2 className="text-xl font-semibold animate-fade-in">Task Reports</h2>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Task Completion</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8">
                <Calendar className="w-4 h-4 mr-1" />
                This Week
              </Button>
            </div>
          </div>
          
          <TabView 
            tabs={[
              {
                label: "Weekly",
                content: (
                  <div className="h-64">
                    <BarChart 
                      data={weeklyData} 
                      xAxisKey="name" 
                      barKey="value" 
                      color="#3B82F6"
                    />
                  </div>
                ),
              },
              {
                label: "Monthly",
                content: (
                  <div className="h-64">
                    <BarChart 
                      data={monthlyData} 
                      xAxisKey="name" 
                      barKey="value" 
                      color="#10B981"
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
        
        <h3 className="text-lg font-medium mb-3 animate-fade-in">Task Summary</h3>
        <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
          <div className="space-y-4">
            {taskSummary.map((task, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: task.color }} 
                  />
                  <span>{task.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{task.count}</span>
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ 
                        width: `${(task.count / 45) * 100}%`,
                        backgroundColor: task.color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav userType="supervisor" />
    </div>
  );
};

export default Reports;
