import * as React from 'react';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { Theme, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { DashboardCard } from '../../../components/shared/DashboardCard';
import { useTheme } from "@mui/material";
import { tokens } from '../../../themes/tokens';


function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = styled(Slider)(({ color, theme }) => ({
  color: color || `${theme.palette.error.main}`,
  height: 6,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: color ? color : theme.palette.error.main,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

export const SlidesCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const primary = theme.palette.primary.light
  //const secondary = theme.palette.secondary.main;

  //console.log('theme', secondary)

  return (
    <DashboardCard>
      <Box sx={{ width: 240 }}>
        <Typography gutterBottom>Risk Level</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="Risk Level"
          defaultValue={20}
        />
        <Typography gutterBottom>User Level</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={80}
          color="secondary"
        />
      </Box>
    </DashboardCard>
  );
}