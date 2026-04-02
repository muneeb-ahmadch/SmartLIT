import { Outlet } from "react-router";
import { RouteScrollManager } from "./RouteScrollManager";

export function RootLayout() {
  return (
    <>
      <RouteScrollManager />
      <Outlet />
    </>
  );
}
