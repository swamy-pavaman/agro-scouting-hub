
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  title: string;
  to: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export function ActionButton({ title, to, icon: Icon, color, bgColor }: ActionButtonProps) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center p-3 rounded-xl transition-transform duration-200 hover:scale-105 animate-fade-in"
      style={{ backgroundColor: bgColor }}
    >
      <div 
        className="flex items-center justify-center w-10 h-10 rounded-full mb-2"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-xs font-medium text-foreground">{title}</span>
    </Link>
  );
}
