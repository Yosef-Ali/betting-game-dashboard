import { Refine } from "@refinedev/core";
import { Avatar, CssBaseline, GlobalStyles } from "@mui/material";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,

  RefineThemes,
} from "@refinedev/mui";

import routerBindings, {
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { AccountCircleOutlined, CasinoOutlined, ChromeReaderMode, Dashboard, LeaderboardOutlined, SportsHandballOutlined, StarBorderOutlined } from "@mui/icons-material";
import { DashboardPage } from "./pages/dashboard";
import { ThemedLayoutV2 } from "./components/themedLayout";
import { ThemedSiderV2 } from "./components/themedLayout/sider";
import { ThemedTitleV2 } from "./components/themedLayout/title";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
              notificationProvider={notificationProvider}
              i18nProvider={i18nProvider}
              routerProvider={routerBindings}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: {
                    label: "Dashboard",
                    icon: <Dashboard color="secondary" />,
                    description: "Welcome to your dashboard",
                  },
                },
                {
                  name: "recent_bets",
                  list: "/recent_bets",
                  show: "/recent_bets/:id",
                  meta: {
                    label: "Recent Bet",
                    icon: <CasinoOutlined color="secondary" />,
                    description: "Recent Bet Description",
                  },
                },

                {
                  name: "active_bets",
                  list: "/active_bets",
                  show: "/active_bets/:id",
                  meta: {
                    label: "Active Bet",
                    icon: <SportsHandballOutlined color="secondary" />,
                    description: "Active Bet currently played",
                  },
                },
                {
                  name: "top_games",
                  list: "/top_games",
                  show: "/top_games/:id",
                  meta: {
                    label: "Top Game",
                    icon: <LeaderboardOutlined color="secondary" />,
                    description: "List of top games ",
                  },
                },
                {
                  name: "account_summary",
                  list: "/account_summary",
                  show: "/account_summary/:id",
                  meta: {
                    label: "Account Summary",
                    icon: <ChromeReaderMode color="secondary" />,
                    description: "Your account summary info here",
                  },
                },
                // {
                //   name: "blog_posts",
                //   list: "/blog-posts",
                //   create: "/blog-posts/create",
                //   edit: "/blog-posts/edit/:id",
                //   show: "/blog-posts/show/:id",
                //   meta: {
                //     canDelete: true,
                //   },
                // },
                // {
                //   name: "categories",
                //   list: "/categories",
                //   create: "/categories/create",
                //   edit: "/categories/edit/:id",
                //   show: "/categories/show/:id",
                //   meta: {
                //     canDelete: true,
                //   },
                // },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2
                      Header={() => <Header sticky />}
                      Sider={() => <ThemedSiderV2 />}
                      Title={({ collapsed }) => (
                        <ThemedTitleV2
                          collapsed={collapsed}
                          text="John Doe"
                          icon={<Avatar />}
                        />
                      )}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  }
                >
                  <Route index element={<DashboardPage />} />
                  {/* <Route
                    index
                    element={<NavigateToResource resource="blog_posts" />}
                  /> */}
                  <Route path="/recent_bets">
                    <Route index element={"RecentBets"} />
                    <Route path="show/:id" element={""} />
                  </Route>
                  <Route path="/active_bets">
                    <Route index element={"ActiveBets"} />
                    <Route path="show/:id" element={""} />
                  </Route>
                  <Route path="/top_games">
                    <Route index element={"TopGames"} />
                    <Route path="show/:id" element={""} />
                  </Route>
                  <Route path="/account_summary">
                    <Route index element={"AccountSummary"} />
                    <Route path="show/:id" element={""} />
                  </Route>



                  <Route path="/blog-posts">
                    <Route index element={<BlogPostList />} />
                    <Route path="create" element={<BlogPostCreate />} />
                    <Route path="edit/:id" element={<BlogPostEdit />} />
                    <Route path="show/:id" element={<BlogPostShow />} />
                  </Route>
                  <Route path="/categories">
                    <Route index element={<CategoryList />} />
                    <Route path="create" element={<CategoryCreate />} />
                    <Route path="edit/:id" element={<CategoryEdit />} />
                    <Route path="show/:id" element={<CategoryShow />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
