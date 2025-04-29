
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <ProtectedRoute requiredRoles={['admin']}>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all users in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/users')} className="w-full">
                  View All Users
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Barber Management</CardTitle>
                <CardDescription>Approve and manage barbers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/barbers')} className="w-full">
                  Manage Barbers
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Booking Overview</CardTitle>
                <CardDescription>View and manage all bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/bookings')} className="w-full">
                  View All Bookings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
