
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  title?: string;
  xAxisKey?: string;
  barKey?: string;
  color?: string;
}

export function BarChart({ data, title, xAxisKey = "name", barKey = "value", color = "#0A7D3F" }: BarChartProps) {
  return (
    <div className="w-full h-72 bg-white p-4 rounded-lg border border-border shadow-sm animate-fade-in">
      {title && <h3 className="text-sm font-medium text-muted-foreground mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height="85%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10 }}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '0.5rem', 
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' 
            }}
          />
          <Bar 
            dataKey={barKey} 
            fill={color} 
            radius={[4, 4, 0, 0]} 
            barSize={30}
            animationDuration={1500}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
