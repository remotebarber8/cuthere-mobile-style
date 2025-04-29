
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Index from "./pages/Index";
import BarberProfile from "./pages/BarberProfile";
import BookingPage from "./pages/BookingPage";
import TrackingPage from "./pages/TrackingPage";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import BarberManagement from "./pages/admin/BarberManagement";

// Barber pages
import BarberDashboard from "./pages/barber/BarberDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/barber/:id" element={<BarberProfile />} />
            
            {/* Protected routes */}
            <Route 
              path="/booking/:id" 
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/tracking/:id" 
              element={
                <ProtectedRoute>
                  <TrackingPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/bookings" 
              element={
                <ProtectedRoute>
                  <Bookings />
                </ProtectedRoute>
              } 
            />
            <Route path="/profile" element={<Profile />} />
            
            {/* Admin routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute requiredRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/barbers" 
              element={
                <ProtectedRoute requiredRoles={['admin']}>
                  <BarberManagement />
                </ProtectedRoute>
              } 
            />
            
            {/* Barber routes */}
            <Route 
              path="/barber-dashboard" 
              element={
                <ProtectedRoute requiredRoles={['barber']}>
                  <BarberDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
