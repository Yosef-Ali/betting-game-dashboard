
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Box, Tabs, Tab, Typography, Divider, useTheme } from '@mui/material';
import { tokens } from '../../../themes/tokens';

interface HandleChangeProps {
  (event: React.SyntheticEvent, newValue: number): void;
}

const InfoBox = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode)
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={2}
      mb={4}
    >
      <Box
        flex="1"
        p={2}
        bgcolor={color.primary.main}
        color="text.secondary"
        border={1}
        borderColor="text.secondary"
        boxShadow={1}
        borderRadius={2}
        textAlign="center"
      >
        <Typography variant="h6" noWrap={false} >Leaderboard</Typography>
        <Typography variant="h6" marginTop="-5px">Position</Typography>
        <Divider sx={{ marginY: '5px' }} />

        <Typography variant="h5" fontWeight={700}>
          10
        </Typography>
      </Box>

      <Box
        flex="1"
        p={2}
        bgcolor={color.primary.main}
        color="text.secondary"
        border={1}
        borderColor="text.secondary"
        boxShadow={1}
        borderRadius={2}
        textAlign="center"
      >

        <Typography variant="h6" noWrap={false}>Number of</Typography>
        <Typography variant="h6" marginTop="-5px">Achievement</Typography>
        <Divider sx={{ marginY: '5px' }} />

        <Typography variant="h5" fontWeight={700}>
          6
        </Typography>
      </Box>

      <Box
        flex="1"
        p={2}
        bgcolor={color.primary.main}
        color="text.secondary"
        border={1}
        borderColor="text.secondary"
        boxShadow={1}
        borderRadius={2}
        textAlign="center"
      >

        <Typography variant="h6" noWrap={false}>Number of</Typography>
        <Typography variant="h6" marginTop="-5px">Games</Typography>
        <Divider sx={{ marginY: '5px' }} />

        <Typography variant="h5" fontWeight={700}>
          30
        </Typography>
      </Box>
    </Box>
  );
};
const InfoTabs = () => {
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const color = tokens(theme.palette.mode)

  const handleChange: HandleChangeProps = (event, newValue) => {
    setValue(newValue);
  };

  const tabContent: { [key: number]: string } = {
    0: 'Bio: Hello, My name is Alexander Amanuel and I like to place bets on soccer. It feels like I am usually winning but we will see what my statistics say here on Betgram. Anyone who is in this to make money should follow and copy me! And if you like, my friend Tachi will pay you back for all your losses! Thanks, Alexander! ',
    1: 'Sed euismod libero sed nunc tincidunt, vel placerat ipsum dictum. Fusce eget urna in nisi sollicitudin convallis. ',
    2: 'Praesent auctor quam sit amet ligula cursus, eget finibus velit faucibus. In in metus sed augue consectetur porta. ',
    3: 'Curabitur tincidunt nisl vel risus lacinia, a ultrices orci aliquam. Nullam non ex auctor, ultrices lacus sit amet, semper ligula. ',
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: `${color.greenAccent[500]}`,
            height: '4px',
          }
        }}
      >
        <Tab label="Information" />
        <Tab label="Photos" />
        <Tab label="Favorite Sports" />
        <Tab label="Teams/Players" />
      </Tabs>
      <Box p={2}>
        {Object.keys(tabContent).map((index) => (
          <div key={index} hidden={value !== parseInt(index)}>
            {tabContent[parseInt(index)]}
          </div>
        ))}
      </Box>
    </Box>
  );
};

const InfoCard = () => {
  return (
    <Card sx={{ p: 2 }} >
      <CardHeader title="Card Header" titleTypographyProps={{ variant: 'h5' }} />
      <CardContent>
        <InfoBox />
        <InfoTabs />
      </CardContent>
      <CardActions>
        <Button variant='outlined'>More Info</Button>
      </CardActions>
    </Card>
  );
};
export default InfoCard;