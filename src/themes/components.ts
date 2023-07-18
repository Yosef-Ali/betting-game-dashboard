import { Components } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // This line will remove the disableRipple effect
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
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
      elevation: 0,
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
};
