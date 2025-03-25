
import { useState } from "react";

interface TabViewProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function TabView({ tabs }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full animate-fade-in">
      <div className="flex border-b border-border mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium relative transition-colors ${
              activeTab === index
                ? "text-agro-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agro-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>
      <div className="py-2">{tabs[activeTab].content}</div>
    </div>
  );
}
