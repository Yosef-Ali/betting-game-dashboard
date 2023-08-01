import React from "react";
import { ThemedLayoutContextProvider } from "@refinedev/mui";
import { ThemedHeaderV2 as DefaultHeader } from "./header";
import { ThemedSiderV2 as DefaultSider } from "./sider";
import Box from "@mui/material/Box";
import type { RefineThemedLayoutV2Props } from "@refinedev/mui";
import { Container } from "@mui/material";

export const ThemedLayoutV2: React.FC<RefineThemedLayoutV2Props> = ({
  Sider,
  Header,
  Title,
  Footer,
  OffLayoutArea,
  children,
  initialSiderCollapsed,
}) => {
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;

  return (
    <ThemedLayoutContextProvider initialSiderCollapsed={initialSiderCollapsed}>
      <Box display="flex" flexDirection="row">
        <SiderToRender Title={Title} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: "100vh",
          }}
        >
          <HeaderToRender />
          {/* <Container sx={{
            paddingTop: "20px",
            // maxWidth: '1400px',
          }}
          > */}
          <Box
            component="main"
            sx={{
              p: { xs: 2, md: 4, lg: 8 },
              flexGrow: 1,
              bgcolor: (theme) => theme.palette.background.default,

            }}
          >
            {children}
          </Box>
          {/* </Container> */}
          {Footer && <Footer />}
        </Box>
        {OffLayoutArea && <OffLayoutArea />}
      </Box>
    </ThemedLayoutContextProvider>
  );
};
