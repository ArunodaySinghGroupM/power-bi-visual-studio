import { BarChart3, LineChart, PieChart, Table2, Gauge, TrendingUp, LayoutGrid, CreditCard, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import type { VisualizationType } from "./VisualizationSelector";

interface ComponentOption {
  type: VisualizationType;
  icon: React.ElementType;
  label: string;
  category: "charts" | "tables" | "cards";
}

const componentOptions: ComponentOption[] = [
  // Charts
  { type: "bar", icon: BarChart3, label: "Bar Chart", category: "charts" },
  { type: "line", icon: LineChart, label: "Line Chart", category: "charts" },
  { type: "pie", icon: PieChart, label: "Pie Chart", category: "charts" },
  { type: "area", icon: TrendingUp, label: "Area Chart", category: "charts" },
  { type: "gauge", icon: Gauge, label: "Gauge", category: "charts" },
  // Tables
  { type: "matrix", icon: Grid3X3, label: "Matrix", category: "tables" },
  { type: "table", icon: Table2, label: "Table", category: "tables" },
  // Cards
  { type: "card" as VisualizationType, icon: CreditCard, label: "KPI Card", category: "cards" },
];

interface ComponentPaletteProps {
  onAddVisual: (type: VisualizationType) => void;
}

export function ComponentPalette({ onAddVisual }: ComponentPaletteProps) {
  const charts = componentOptions.filter((c) => c.category === "charts");
  const tables = componentOptions.filter((c) => c.category === "tables");
  const cards = componentOptions.filter((c) => c.category === "cards");

  const renderSection = (title: string, items: ComponentOption[]) => (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-1">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <button
            key={item.type}
            onClick={() => onAddVisual(item.type)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-lg border-2 border-transparent",
              "bg-muted/50 hover:bg-muted hover:border-border transition-all",
              "cursor-pointer group"
            )}
          >
            <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-sm flex items-center gap-2">
          <LayoutGrid className="h-4 w-4" />
          Components
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Click to add to canvas
        </p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {renderSection("Charts", charts)}
          {renderSection("Tables", tables)}
          {renderSection("Cards", cards)}
        </div>
      </ScrollArea>
    </div>
  );
}
