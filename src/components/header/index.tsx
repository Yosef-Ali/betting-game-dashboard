import { DarkModeOutlined, LightModeOutlined, Search } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Avatar,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import i18n from "i18next";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";
import { Theme } from "@mui/material/styles";
import { tokens } from "../../themes/tokens";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky = true,
}) => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity<IUser>();

  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();
  const trigger = useScrollTrigger();
  // const { palette } = useTheme();
  const theme = useTheme();
  const { palette } = theme as Theme;

  console.log('palette', palette)



  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]


  return (
    <AppBar position={sticky ? "sticky" : "relative"} color="transparent" elevation={1}>
      <Toolbar sx={{
        background: trigger ? `${palette.background.default}` : 'transparent',
        transition: 'background 0.5s',
        filter: trigger ? 'blur(8px)' : 'none'
      }}>
        <Stack direction="row" width="100%" alignItems="center" >
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-start"
            alignItems="center"
            gap="16px"
          >
            <HamburgerMenu />
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" flex={1}>
                <Autocomplete
                  freeSolo
                  options={top100Films}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      sx={{ width: 300 }}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            gap="16px"
          >
            <FormControl sx={{ minWidth: 64 }}>
              <Select
                disableUnderline
                defaultValue={currentLocale}
                inputProps={{ "aria-label": "Without label" }}
                variant="standard"
                sx={{
                  color: "inherit",
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                  },
                  "& .MuiStack-root > .MuiTypography-root": {
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  },
                }}
              >
                {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                  // @ts-ignore
                  <MenuItem
                    selected={currentLocale === lang}
                    key={lang}
                    defaultValue={lang}
                    onClick={() => {
                      changeLanguage(lang);
                    }}
                    value={lang}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          width: "24px",
                          height: "24px",
                          marginRight: "5px",
                        }}
                        src={`/images/flags/${lang}.svg`}
                      />
                      <Typography>
                        {lang === "en" ? "English" : "German"}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton
              color="inherit"
              onClick={() => {
                setMode();
              }}
            >
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>


            <Stack
              direction="row"
              gap="16px"
              alignItems="center"
              justifyContent="center"
            >
              {user?.name && (
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline-block",
                    },
                  }}
                  variant="subtitle2"
                >
                  {user?.name}
                </Typography>
              )}
              <Avatar src="https://i.pravatar.cc/120?img=1" sx={{ width: 36, height: 36 }} alt="Remy Sharp" />
            </Stack>

          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
