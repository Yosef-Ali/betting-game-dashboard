
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CasinoIcon from '@mui/icons-material/Casino';
import FunctionsIcon from '@mui/icons-material/Functions';
import StarIcon from '@mui/icons-material/Star';
import { DashboardCard } from '../../../components/shared/DashboardCard';
import { tokens } from '../../../themes/tokens';

type Props = {
  totalBets: number;
  openBets: number;
};

const BetsCard: React.FC<Props> = ({
  totalBets,
  openBets,
}) => {

  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  return (

    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bets Info"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CasinoIcon sx={{ fontSize: 70, color: color.greenAccent[500] }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" color="text.secondary" >Total Bets:</Typography>
            <Typography variant="h5" fontWeight={700} ml={1}>{totalBets}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
            <Typography variant="h5" color="text.secondary" > Open Bets: </Typography>
            <Typography variant="h5" fontWeight="700" ml={1}> {openBets}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar sx={{ width: 36, height: 36, marginRight: 1 }} />
            <Avatar sx={{ width: 36, height: 36, marginRight: 1 }} />
            <Avatar sx={{ width: 36, height: 36, marginRight: 1 }} />
            <Avatar sx={{ width: 36, height: 36, marginRight: 1 }} />
            <Avatar sx={{ width: 36, height: 36 }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};
export default BetsCard;