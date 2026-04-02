import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function RouteScrollManager() {
  const location = useLocation();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    if (location.hash) {
      return;
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}
