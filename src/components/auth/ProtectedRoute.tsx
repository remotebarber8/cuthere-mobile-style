
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: string[];
}

const ProtectedRoute = ({ children, requiredRoles = [] }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in but doesn't have required role
    if (user && profile && requiredRoles.length > 0 && !requiredRoles.includes(profile.role)) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive"
      });
    }
  }, [user, profile, requiredRoles]);

  // Show nothing while loading
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Check role requirements if specified
  if (profile && requiredRoles.length > 0 && !requiredRoles.includes(profile.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
