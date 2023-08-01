
import * as React from 'react';
import { Box, Stack, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function ConnectionsCard() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Connections"
      />
      <CardContent>
        <Stack spacing={2}>
          {connections.map((connection, index) => (
            <React.Fragment key={connection.id}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={connection.name} src={connection.image} />
                  <Stack direction="column" spacing={0} sx={{ marginLeft: '8px' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
                      {connection.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
                      {connection.connections} Connections
                    </Typography>
                  </Stack>
                </Box>
                <PersonOutlineIcon color="action" />
              </Box>
              {index !== connections.length - 1 && <Divider variant="fullWidth" />}
            </React.Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card >
  );
}
// Dummy data for connections
const connections = [
  {
    id: 1,
    name: 'Alice',
    connections: "300k",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Bob',
    connections: "10",
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Charlie',
    connections: "200k",
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 4,
    name: 'Daisy',
    connections: "100k",
    image: 'https://randomuser.me/api/portraits/women/88.jpg',
  },
];