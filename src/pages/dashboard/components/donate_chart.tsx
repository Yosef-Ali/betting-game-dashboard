

import { Box } from '@mui/material'
import React from 'react'
import PieChart from '../../../components/chart/PieChart'
import { DashboardCard } from '../../../components/shared/DashboardCard'

type Props = {}

export const DonateChatCard = (props: Props) => {
  return (
    <DashboardCard  >
      <Box display="flex" gap={4} justifyContent="center" alignItems="center">
        <PieChart
          title="Wins"
          value={200}
          series={[50, 50]}
          colors={["#4cceac", "#b7ebde"]}
        />
        <PieChart
          title="Draws"
          value={80}
          series={[80, 20]}
          colors={["#4cceac", "#b7ebde"]}
        />
        <PieChart
          title="Losses"
          value={5684}
          series={[70, 30]}
          colors={["#4cceac", "#b7ebde"]}
        />
      </Box>
    </DashboardCard>
  )
}