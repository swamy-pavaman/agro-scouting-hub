
import { Clock, ChevronRight, CheckCircle, XCircle, Clock4 } from "lucide-react";
import { Link } from "react-router-dom";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "scouting" | "spraying" | "sowing" | "fuel" | "yield";
  status: "pending" | "approved" | "rejected";
}

export function TaskCard({ id, title, description, date, type, status }: TaskCardProps) {
  const getTypeColor = () => {
    switch (type) {
      case "scouting":
        return "bg-blue-100 text-blue-800";
      case "spraying":
        return "bg-green-100 text-green-800";
      case "sowing":
        return "bg-purple-100 text-purple-800";
      case "fuel":
        return "bg-yellow-100 text-yellow-800";
      case "yield":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock4 className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <Link 
      to={`/task/${id}`}
      className="block w-full p-4 mb-3 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>
        <div className="flex items-center">
          {getStatusIcon()}
          <ChevronRight className="w-5 h-5 ml-2 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          <span>{date}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full capitalize ${getTypeColor()}`}>
          {type}
        </span>
      </div>
    </Link>
  );
}
