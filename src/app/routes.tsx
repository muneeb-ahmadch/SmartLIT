import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { Projects } from "./pages/Projects";
import { BrandsTechnologyPage } from "./pages/BrandsTechnologyPage";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/solutions",
        Component: Solutions,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/brands-technology",
        Component: BrandsTechnologyPage,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
