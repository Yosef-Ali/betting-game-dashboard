import React from 'react'
import { FacebookOutlined, GppBadOutlined, Twitter } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GoogleIcon from '@mui/icons-material/Google';
import { tokens } from '../../../themes/tokens';

export default function socialMediaCard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          {socialMediaData.map((social, index) => (
            <React.Fragment key={social.id}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <Avatar sx={{ width: "30px", height: "30px", mr: 2, backgroundColor: colors.greenAccent[900] }} > */}
                  <Avatar sx={{ width: "30px", height: "30px", p: 2, backgroundColor: colors.greenAccent[900], color: colors.greenAccent[500] }} >
                    {social.icon}
                  </Avatar>
                  <Stack direction="column" spacing={0} sx={{ marginLeft: '8px' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '8px' }}>
                      {social.name}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              {index !== socialMediaData.length - 1 && <Divider variant="fullWidth" />}
            </React.Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card >
  )
}



// Dummy data for connections
const socialMediaData = [
  {
    id: 1,
    name: 'Facebook',
    icon: <FacebookOutlined />
  },
  {
    id: 2,
    name: 'Twitter',
    icon: <Twitter />
  },
  {
    id: 3,
    name: 'Google',
    icon: <GoogleIcon />
  },

];