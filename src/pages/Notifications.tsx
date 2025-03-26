
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { NotificationItem } from "@/components/NotificationItem";
import { BellRing } from "lucide-react";
import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Task Approved",
      message: "Your scouting report for Block B has been approved by the manager.",
      time: "2 hours ago",
      isRead: false,
    },
    {
      title: "New Advice",
      message: "Manager suggests increasing water in Block C due to dry conditions.",
      time: "Yesterday",
      isRead: true,
    },
    {
      title: "Task Rejected",
      message: "Your fuel usage report needs additional information. Please update and resubmit.",
      time: "2 days ago",
      isRead: true,
    },
    {
      title: "System Update",
      message: "The farm management system has been updated with new features.",
      time: "1 week ago",
      isRead: true,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        isRead: true
      }))
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Notifications" userType="supervisor" />
      
      <main className="container mx-auto px-4 pt-20 pb-20">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <BellRing className="w-5 h-5 text-agro-primary" />
            <h2 className="text-xl font-semibold animate-fade-in">Notifications</h2>
          </div>
          <button 
            onClick={markAllAsRead}
            className="text-sm text-agro-primary hover:underline"
          >
            Mark all as read
          </button>
        </div>
        
        <div className="space-y-3 mb-4">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-lg shadow-sm">
              <BellRing className="w-12 h-12 mx-auto text-muted-foreground opacity-40" />
              <p className="mt-2 text-muted-foreground">No notifications yet</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav userType="supervisor" />
    </div>
  );
};

export default Notifications;
