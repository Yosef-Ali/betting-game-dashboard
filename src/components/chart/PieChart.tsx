import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { PieChartProps } from "../../interfaces/pichart";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      display="flex"
      flexDirection="row"

      alignItems="center"
    >
      <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
        <ReactApexChart
          options={{
            chart: { type: "donut" },
            colors,
            legend: { show: false },
            dataLabels: { enabled: false },
            stroke: {
              show: true,
              width: 3,
              colors: ["transparent"]
            },
          }}

          series={series}
          type="donut"
          width="150px"
        />
        <Typography variant="h5" color="text.secondary" >
          {title}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          mt={1}
        >
          {value}
        </Typography>

      </Stack>
    </Box>
  );
};

export default PieChart;