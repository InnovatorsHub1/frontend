import { TableColumn } from "./TableColumn";

export interface DataTableProps<T> {
    // Core props
    data: T[];
    columns: TableColumn[];
    
    // Features
    sortable?: boolean;
    filterable?: boolean;
    selectable?: boolean;
    expandable?: boolean;
    
    // Pagination
    pagination?: {
      pageSize: number;
      page: number;
      total: number;
    };
    
    // Events
    onSort?: (sortConfig: SortConfig) => void;
    onFilter?: (filters: FilterConfig) => void;
    onSelectionChange?: (selected: T[]) => void;
    onPageChange?: (page: number) => void;
    
    // Customization
    rowHeight?: number;
    headerHeight?: number;
    loading?: boolean;
    emptyState?: React.ReactNode;
  }