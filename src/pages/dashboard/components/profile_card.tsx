import { Avatar, Box, Card, CardContent, Divider, Grid, Stack, Theme, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Rating from '@mui/material/Rating';
import { styled, useTheme } from '@mui/material';
import { FollowersProps, LocationProps, ProfileCardProps } from '../../../interfaces/profile';
import { tokens } from '../../../themes/tokens';


const StyledCard = styled(Card)`
  max-width: 345px;
  margin: auto;
`;
const StyledCardContent = styled(CardContent)`
  display: flex;
`;
const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 12px auto;
`;
const Location: React.FC<LocationProps> = ({ country, city }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { palette } = theme as Theme;
  return (
    <Box display="flex" alignItems="center" p="8px" justifyContent="center">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: "30px", height: "30px", mr: 2, backgroundColor: colors.greenAccent[900] }} >
          <LocationOnIcon fontSize='small' sx={{ color: colors.greenAccent[500] }} />
        </Avatar>
        <Stack justifyItems="start">
          <Typography fontWeight={700} textAlign="start" color={colors.greenAccent[500]}>{country}</Typography>
          <Typography variant="body2" textAlign="start" color='text.secondary'>{city}</Typography>
        </Stack>
      </Box>
    </Box >
  );
};
const Followers: React.FC<FollowersProps> = ({ followersCount, followingCount }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (

    <Box display="flex" alignItems="center" justifyContent="center" >
      <Stack direction="row"
        divider={
          <Box
            component="hr"
            sx={{
              border: (theme) =>
                // `1px solid ${theme.palette.mode === 'dark' ? '#262B32' : '#fff'}`
                `1px solid lightgrey }`
              ,
            }}
          />
        }
        spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: "30px", height: "30px", mr: 2, backgroundColor: colors.greenAccent[900] }}>
            <PeopleAltIcon fontSize='small' sx={{ color: colors.greenAccent[500] }} />
          </Avatar>
          <Stack justifyItems="start">
            <Typography fontWeight={700} textAlign="start" color={colors.greenAccent[500]}>{followersCount}</Typography>
            <Typography variant="body2" textAlign="start" color="text.secondary">Followers</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ width: "30px", height: "30px", mr: 2, backgroundColor: colors.greenAccent[900] }}>
            <PersonIcon fontSize='small' sx={{ color: colors.greenAccent[500] }} />
          </Avatar>
          <Stack justifyItems="start" >
            <Typography fontWeight={700} textAlign="start" color={colors.greenAccent[500]}>{followingCount}</Typography>
            <Typography variant="body2" textAlign="start" color="text.secondary" >Following</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>

  );
};
const ProfileCard: React.FC<ProfileCardProps> = ({
  avatar,
  name,
  location,
  followers,
  rating
}) => {


  return (
    <Card elevation={1}>
      <Card elevation={0}>
        <CardContent sx={{
          textAlign: 'center',
          py: 4
        }}>
          <StyledAvatar src={avatar} />
          <Typography variant="h5" align="center" sx={{ my: "16px" }}>{name}</Typography>
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ my: "16px" }} />
          <Location country={location.country} city={location.city} />
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ my: "16px" }} />
          <Followers followersCount={followers.followersCount} followingCount={followers.followingCount} />
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ my: "16px" }} />
          <Rating value={rating} readOnly />
        </CardContent>
      </Card>
    </Card>


  );
};
export default ProfileCard;