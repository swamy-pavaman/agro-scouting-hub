
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  color: string;
}

export function StatCard({ title, value, change, isPositive = true, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-border shadow-sm animate-fade-in">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
      </div>
      <div className="flex items-end">
        <p className="text-2xl font-semibold mr-2">{value}</p>
        {change && (
          <span className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change}
          </span>
        )}
      </div>
    </div>
  );
}
