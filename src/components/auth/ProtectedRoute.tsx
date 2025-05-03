
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles?: string[];
}

// Temporarily disabled authentication check to allow access
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Authentication is temporarily bypassed
  return <>{children}</>;
};

export default ProtectedRoute;
