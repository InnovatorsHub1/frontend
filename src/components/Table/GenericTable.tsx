// import { TableColumn } from "./TableColumn";
// import { DataGrid } from '@mui/x-data-grid';
// export default function GenericTable():TableColumn {
//   return (
//     <div>GenericTable</div>
//   )
// }

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

interface TableColumn {
  id: string;
  label: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  renderCell?: (value: string, row: any) => React.ReactNode;
  renderHeader?: (column: TableColumn) => React.ReactNode;
}

interface CustomDataGridProps {
  columns: TableColumn[];
  rows: any[];
  loading?: boolean;
  pageSize?: number;
}

export const CustomDataGrid: React.FC<CustomDataGridProps> = ({
  columns,
  rows,
  loading = false,
  pageSize = 10
}) => {
  // Transform TableColumn interface to MUI DataGrid columns
  const gridColumns = columns.map(column => ({
    field: column.id,
    headerName: column.label,
    width: column.width || 150,
    align: column.align || 'left',
    sortable: column.sortable ?? true,
    filterable: column.filterable ?? false,
    renderCell: column.renderCell 
      ? (params: any) => column.renderCell!(params.value, params.row)
      : undefined,
    renderHeader: column.renderHeader
      ? () => column.renderHeader!(column)
      : undefined,
  }));

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <DataGrid
        rows={rows}
        columns={gridColumns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
