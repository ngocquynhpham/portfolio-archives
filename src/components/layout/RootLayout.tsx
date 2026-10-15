import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Toggles `theme-subpage` on <html> for all routes except the landing homepage (`/`).
 * Shared palette: primary #0CA16E, text #1E293B, white surfaces.
 */
export default function RootLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("theme-subpage", !isHome);
    return () => document.documentElement.classList.remove("theme-subpage");
  }, [isHome]);

  return <Outlet key={pathname} />;
}
