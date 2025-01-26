export interface TableColumn {
    id: string;
    label: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    filterable?: boolean;
    renderCell?: (value: any, row: any) => React.ReactNode;
    renderHeader?: (column: TableColumn) => React.ReactNode;
  }