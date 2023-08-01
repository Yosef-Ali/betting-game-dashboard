import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';
import React from 'react';
type Ranking = {
  id: number;
  rank: number;
  name: string;
  points: number;
  roi: string;
};
type Props = {
  rankings: Ranking[];
};
export const RankingsCard = ({ rankings }: Props) => {
  const columns: GridColDef[] = [
    { field: 'rank', headerName: 'Rank', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'points', headerName: 'Points', width: 150 },
    { field: 'roi', headerName: 'ROI', width: 150 },
  ];
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Rankings
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rankings}
          disableColumnMenu
          disableColumnSelector
          disableDensitySelector
          disableExtendRowFullWidth
          disableSelectionOnClick
          hideFooter
          components={{
            Header: () => (
              <div style={{ backgroundColor: 'lightgray', paddingTop: "8px", paddingBottom: "8px" }}>
                <Typography variant="subtitle1" align="center" color="textPrimary">
                  Ranking Table
                </Typography>
              </div>
            ),
          }}
          sx={{
            "& .MuiDataGrid-row": {
              cursor: "pointer",
            },
          }}
        />
      </div>
    </Paper>
  );
};
// Dummy data for rankings
export const rankings: Ranking[] = [
  {
    id: 1,
    rank: 1,
    name: 'Alice',
    points: 1200,
    roi: '25%',
  },
  {
    id: 2,
    rank: 2,
    name: 'Bob',
    points: 1100,
    roi: '22%',
  },
  {
    id: 3,
    rank: 3,
    name: 'Charlie',
    points: 1000,
    roi: '20%',
  },
  {
    id: 4,
    rank: 4,
    name: 'Diana',
    points: 900,
    roi: '18%',
  },
  {
    id: 5,
    rank: 5,
    name: 'Eve',
    points: 800,
    roi: '16%',
  },
];