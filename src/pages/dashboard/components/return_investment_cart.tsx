
import React, { ReactNode } from 'react';
import { styled, useTheme } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { tokens } from '../../../themes/tokens';


const ChartCard = styled(Card)(({ theme }) => ({
  height: 400,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));


const ROIChart: React.FC<{ children?: ReactNode }> = ({ children }) => {

  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  const series = [
    {
      name: 'ROI',
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65],
    },
  ];
  const options: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    colors: [color.greenAccent[500]],

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],

      axisBorder: {
        show: true,
        color: `${color.grey[900]}`
      },
      labels: {
        style: {
          colors: `${color.greenAccent[500]}`
        }
      },
    },

    yaxis: [
      {
        axisBorder: {
          show: true,
          color: `${color.grey[500]}`
        },
        labels: {
          style: {
            colors: `${color.greenAccent[500]}`
          }
        },
      },

    ],
    tooltip: {
      y: {
        formatter: (value: number) => `${value}%`,
      },
    },
  };


  return (
    <ChartCard>
      <CardContent>
        <ReactApexChart options={options} series={series} type="line" />
        {children}
      </CardContent>
    </ChartCard>
  );
};
export default ROIChart;