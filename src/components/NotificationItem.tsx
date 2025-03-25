
import { Bell } from "lucide-react";

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export function NotificationItem({ title, message, time, isRead }: NotificationItemProps) {
  return (
    <div className={`p-4 mb-3 border-l-4 ${isRead ? 'border-l-gray-300 bg-white' : 'border-l-agro-primary bg-agro-light'} rounded-lg shadow-sm animate-fade-in`}>
      <div className="flex items-start justify-between mb-1">
        <h4 className="font-medium text-foreground">{title}</h4>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
