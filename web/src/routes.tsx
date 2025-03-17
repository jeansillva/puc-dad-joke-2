import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useAuthWithRedux } from "./hooks/useAuthwithRedux";

export function RequireAuth({ children }: { children: ReactNode }) {
  const { user } = useAuthWithRedux();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
