import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CasinoIcon from '@mui/icons-material/Casino';
import FunctionsIcon from '@mui/icons-material/Functions';

import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { DashboardCard } from '../../../components/shared/DashboardCard';
type Props = {
  achievements: string;
};
export const AchievementsCard: React.FC<Props> = ({
  achievements
}) => {
  return (

    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Achievements"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <StarIcon sx={{ fontSize: 70 }} color="warning" />
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>

            <Typography variant="h5">
              {achievements}
            </Typography>
          </Grid>


        </Grid>
      </CardContent>
    </Card >
  );
};
