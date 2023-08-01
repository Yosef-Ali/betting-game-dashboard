
import { Box, Stack, Typography, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

interface PageContainerProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ icon, title, description, children }) => {
  const { palette } = useTheme();
  console.log('title', title)
  return (
    <Box color={palette.grey[700]} margin="1rem 1rem 0 1rem">
      <Box display="flex" mb={3} >
        <Stack mr={1}>
          {icon}
        </Stack>
        <Stack>
          <Typography variant='h4' mb="-0.1rem" gutterBottom>{title}</Typography>
          <Typography variant='body2' gutterBottom color={palette.grey[400]}>{description}</Typography>
        </Stack>
      </Box>
      {children}
    </Box >
  );
}

