import type { LayoutType } from "@/components/LayoutPalette";

// Shared grid style logic for consistent layout rendering
// Used by both DraggablePanel (build mode) and ViewDashboard (view mode)
export function getGridStyle(layoutType: LayoutType | string): React.CSSProperties {
  const styles: Record<string, React.CSSProperties> = {
    "single": { display: "grid", gridTemplateColumns: "1fr" },
    "two-columns": { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
    "three-columns": { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" },
    "two-rows": { display: "grid", gridTemplateRows: "1fr 1fr", gap: "8px" },
    "three-rows": { display: "grid", gridTemplateRows: "1fr 1fr 1fr", gap: "8px" },
    "left-sidebar": { display: "grid", gridTemplateColumns: "100px 1fr", gap: "8px" },
    "right-sidebar": { display: "grid", gridTemplateColumns: "1fr 100px", gap: "8px" },
    "grid-2x2": { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "8px" },
    "header-content": { display: "grid", gridTemplateRows: "60px 1fr", gap: "8px" },
    "content-footer": { display: "grid", gridTemplateRows: "1fr 60px", gap: "8px" },
    // Legacy mappings for backward compatibility
    "2-column": { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
    "3-column": { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" },
    "2x2-grid": { display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "8px" },
    "sidebar-left": { display: "grid", gridTemplateColumns: "100px 1fr", gap: "8px" },
    "sidebar-right": { display: "grid", gridTemplateColumns: "1fr 100px", gap: "8px" },
  };
  return styles[layoutType] || styles.single;
}
