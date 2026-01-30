import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BarChart3 } from "lucide-react";

// All Meta Ads metrics from the provided table
export const metaMetrics = [
  "100% Video View",
  "25% Video View",
  "50% Video View",
  "75% Video View",
  "Brand Suitability Blocked Ads",
  "Brand Suitability Failed Ads",
  "Clicks",
  "CPC",
  "CPCV",
  "CPE",
  "CPL",
  "CPM",
  "CPV",
  "CTR",
  "Engagement Rate",
  "Engagements",
  "Impression",
  "Impressions (Verification)",
  "Landing Page View",
  "Leads",
  "Measurable Impressions (Verification)",
  "Measurable Rate (Verification)",
  "Spend",
  "Thruplays",
  "Tracked Ads",
  "Video Spend",
  "Video Starts",
  "Video Views",
  "Viewability Impressions (Verification)",
  "Viewability Rate",
  "Viewabillity Rate (Verification)",
  "VTR",
] as const;

// All GroupBy dimensions
export const groupByDimensions = [
  "Ad Category",
  "Ad Format",
  "Ad Name",
  "Ad Set Label",
  "Ad Set Name",
  "Ad Set Type",
  "Ad Type",
  "Age",
  "Campaign Category",
  "Campaign Label",
  "Campaign Name",
  "Campaign Type",
  "Device",
  "Gender",
  "Platform",
] as const;

// Date granularity options
export const dateGranularities = [
  { value: "none", label: "No Date Split" },
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
  { value: "quarter", label: "Quarter" },
  { value: "year", label: "Year" },
] as const;

export type MetaMetric = typeof metaMetrics[number];
export type GroupByDimension = typeof groupByDimensions[number];
export type DateGranularity = typeof dateGranularities[number]["value"];

export interface ChartConfig {
  measure: MetaMetric | "";
  groupBy: GroupByDimension | "";
  dateGranularity: DateGranularity;
}

interface ChartConfigDropdownsProps {
  config: ChartConfig;
  onChange: (config: ChartConfig) => void;
}

export function ChartConfigDropdowns({ config, onChange }: ChartConfigDropdownsProps) {
  const handleMeasureChange = (value: string) => {
    onChange({ ...config, measure: value as MetaMetric });
  };

  const handleGroupByChange = (value: string) => {
    onChange({ ...config, groupBy: value as GroupByDimension });
  };

  const handleDateChange = (value: string) => {
    onChange({ ...config, dateGranularity: value as DateGranularity });
  };

  return (
    <div className="space-y-4 overflow-hidden">
      <div className="flex items-center gap-2 pb-3 border-b">
        <BarChart3 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Chart Configuration
        </h3>
      </div>

      {/* Measure Dropdown */}
      <div className="space-y-2">
        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Measure
        </Label>
        <Select value={config.measure} onValueChange={handleMeasureChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a measure..." />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {metaMetrics.map((metric) => (
              <SelectItem key={metric} value={metric}>
                {metric}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* GroupBy Dropdown */}
      <div className="space-y-2">
        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Group By
        </Label>
        <Select value={config.groupBy} onValueChange={handleGroupByChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select dimension..." />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {groupByDimensions.map((dimension) => (
              <SelectItem key={dimension} value={dimension}>
                {dimension}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Granularity Dropdown */}
      <div className="space-y-2">
        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Date
        </Label>
        <Select value={config.dateGranularity} onValueChange={handleDateChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select date split..." />
          </SelectTrigger>
          <SelectContent>
            {dateGranularities.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Summary */}
      {config.measure && config.groupBy && (
        <div className="pt-3 border-t">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{config.measure}</span> by{" "}
            <span className="font-medium text-foreground">{config.groupBy}</span>
            {config.dateGranularity !== "none" && (
              <> split by <span className="font-medium text-foreground">{config.dateGranularity}</span></>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
