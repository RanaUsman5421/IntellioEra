import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading || user) return undefined;

    const protectRoute = () => {
      const hash = window.location.hash || "#/";
      const isAuthRoute = hash === "#/login" || hash === "#/signup";

      if (!isAuthRoute) window.location.hash = "#/login";
    };

    protectRoute();
    window.addEventListener("hashchange", protectRoute);

    return () => window.removeEventListener("hashchange", protectRoute);
  }, [loading, user]);

  // The legacy experience initializes elements across every page once. Keep the
  // protected page mounted and enforce access at the hash-router boundary so
  // those elements are never missing or replaced after initialization.
  return children;
}

export default ProtectedRoutes;
