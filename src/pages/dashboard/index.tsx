import { Box, BoxProps, Card, Grid, Typography, useTheme } from "@mui/material"

import { Dashboard, Facebook, Info, Instagram, Telegram, WhatsApp } from "@mui/icons-material"
import { PageContainer } from "../../components/container/pageContainer"
import SalesOverview from "./components/SalesOverview"
import ConnectionsCard from "./components/connection"
import { RankingsCard, rankings } from "./components/rankings_card"
import ProfileCard from "./components/profile_card"
import BetsCard from "./components/bets_car"
import { AchievementsCard } from "./components/achvment_card"
import user from "../../data"
import { DonateChatCard } from "./components/donate_chart"
import InfoCard from "./components/info_card"
import ROIChart from "./components/return_investment_cart"
import SocialMediaCard from "./components/social_media"
import { SlidesCard } from "./components/slides_card"
import { useMediaQuery } from "@mui/material"






export const DashboardPage: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1200px)')
  const { palette } = useTheme()

  return (
    <PageContainer title="Dashboard" description="Welcome to your Dashboard" icon={<Dashboard />}>

      <Grid display="grid" container spacing={3} gridAutoFlow="dense" gridTemplateColumns={{
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: "repeat(4, 1fr)",
        xl: "repeat(4, 1fr)"
      }} gridAutoRows={{
        sm: 'minmax(180px, auto)'
      }}>


        <Grid item gridColumn={{ sm: "span 1" }} gridRow={{ sm: "span 2" }} >
          <ProfileCard
            {...user}
            onEdit={() => { }}
          />
        </Grid>

        <Grid item gridColumn={{ sm: "span 2" }}  >
          <DonateChatCard />
        </Grid>

        <Grid item  >
          <SlidesCard />
        </Grid>

        <Grid item gridColumn={{ sm: "span 2" }} gridRow={{ sm: "span 4" }}>
          <Grid sx={{ mb: 3 }}>
            <Grid item gridColumn={{ sm: "span 2" }} gridRow={{ sm: "span 2" }} >
              <InfoCard />
            </Grid>
          </Grid>
          <Grid item gridColumn={{ sm: "span 2" }} gridRow={{ sm: "span 2" }} >
            <ROIChart />
          </Grid>

        </Grid>

        <Grid item >
          <SocialMediaCard />
        </Grid>

        <Grid item gridColumn={{ sm: "span 1" }} >

          <BetsCard
            totalBets={0}
            openBets={400} />
        </Grid>


        <Grid item gridColumn={{ sm: "span 1" }} gridRow={{ sm: "span 1" }} >
          <ConnectionsCard />
        </Grid>

        <Grid item>
          {/* <Box p={10} width="100%" height="100%" bgcolor="secondary.light" >Box 8</Box> */}
          <AchievementsCard
            achievements="Three Stras"
          />
        </Grid>

      </Grid>

    </PageContainer >
  );
};

