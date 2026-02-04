# Dashboard Builder - Feature Roadmap

## ✅ Completed Features

- **Filters/Slicers**: Dropdown (multi-select, Group By dimensions), List (multi-select), Date Range (default: date), Numeric Range (measures only)
- **Header Component**: Text container with logo upload, snap to top, match width
- **Multi-Line Chart**: Measure 1 and Measure 2 fields in right panel
- **Table Visual**: "Select Columns" multi-select with all measures and dimensions
- **KPI Cards**: Measure and Calculation fields only (no Group By or Date)
- **Chart Sorting**: Sort options for all chart types (value/name, asc/desc)
- **Cross-Filtering**: Click one visual to filter others
- **Visual Type Switching**: Click palette item to change selected visual type

## 🔲 TBD - Pending Features

### UI/UX Enhancements
| Feature | Description | Status |
|---------|-------------|--------|
| X-axis Text Fitting | Fit more text labels on x-axis (rotation, truncation) | TBD |
| Grid Lock | Snap-to-grid alignment for visuals | TBD |
| Expand on Drag | Visual expands to fill area where dragged | TBD |
| Preview Button | Full-screen preview mode for dashboard | TBD |

### Visual Configuration
| Feature | Description | Status |
|---------|-------------|--------|
| Date Split on Visual | Date granularity control per visual | TBD |
| Sorting on Visual | Sort control per individual visual | TBD |
| Data Label Options | Show/hide and format data labels | TBD |
| Show Totals Toggle | Table visual totals row in Format panel | TBD |

### Chart Types
| Feature | Description | Status |
|---------|-------------|--------|
| Gauge Chart | Fix gauge functionality | TBD |
| Matrix Visual | Row/Column fields (Group By), Values (Measures) | TBD |

### Advanced Charts (Disabled)
These charts are currently disabled pending functionality discussion:
- Waterfall
- Treemap
- Funnel
- Scatter

---

## Implementation Notes

### Matrix Visual Redesign
When implementing Matrix:
- **Values**: Measures only
- **Rows**: Group By dimensions
- **Columns**: Group By dimensions
- Remove: Group By and Date dropdowns

### Table Show Totals
Add toggle in Format Visual panel to show/hide totals row at bottom of table.

### Grid Lock System
Consider 8px or 16px grid for snap alignment.
