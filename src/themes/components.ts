import { Components } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // This line will remove the disableRipple effect
    },
  },
  // MuiListItemButton: {
  //   styleOverrides: {
  //     root: {
  //       "&.Mui-selected": {
  //         backgroundColor: "#141414",
  //       },
  //     },
  //   },
  // },
  MuiPaper: {
    defaultProps: {
      elevation: 1,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        padding: "10px 20px",
      },
      contained: {
        boxShadow: "none",
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 3,
      color: "default",
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRight: 0,
      },
    },
  },
  // MuiCard: {
  //   styleOverrides: {
  //     root: {
  //       boxShadow: "none",
  //     },
  //   },
  // },
};
