import { Box, Tooltip, Typography } from "@mui/material";
import { TableColumn } from "./TableColumn";
import { CustomDataGrid } from "./GenericTable";
import { Help } from "@mui/icons-material";

// Usage Example
const ExampleTable: React.FC = () => {
    const columns: TableColumn[] = [
      {
        id: 'id',
        label: 'ID',
        width: 250,
        align: 'right',
        renderHeader: (column) => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {column.label}
              <Tooltip title="Unique identifier">
                <Help fontSize="small" />
              </Tooltip>
            </Box>
          )
      },
      {
        id: 'name',
        label: 'Name',
        width: 130,
        filterable: true,
        renderCell: (value) => (
          <Typography color="primary">{value}</Typography>
        ),
      },
      {
        id: 'status',
        label: 'Status',
        width: 100,
        renderCell: (value) => (
          <Box
            sx={{
              backgroundColor: value === 'active' ? 'green' : 'red',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            {value}
          </Box>
        ),
      },
    ];
  
    const rows = [
      { id: 1, name: 'John Doe', status: 'active' },
      { id: 2, name: 'Jane Smith', status: 'inactive' },
      { id: 3, name: 'Bob Johnson', status: 'active' },
    ];
  
    return <CustomDataGrid columns={columns} rows={rows} />;
  };
  
  export default ExampleTable;