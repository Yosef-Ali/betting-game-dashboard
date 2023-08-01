import { LinearProgress, Paper, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export const Profile = (props: Props) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Your Information
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Progress
      </Typography>
      <LinearProgress variant="determinate" value={75} sx={{ mb: 1 }} />
      <Typography variant="body2" color="text.secondary">
        Level
      </Typography>
      <LinearProgress variant="determinate" value={50} sx={{ mb: 1 }} />
      <Typography variant="body2" color="text.secondary">
        Experience
      </Typography>
      <LinearProgress variant="determinate" value={25} sx={{ mb: 1 }} />
    </Paper>
  )
}