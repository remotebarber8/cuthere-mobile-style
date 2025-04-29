
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

interface BarberData {
  id: string;
  experience_years: number;
  bio: string | null;
  is_verified: boolean;
  is_available: boolean;
  hourly_rate: number;
}

const BarberDashboard = () => {
  const [barberData, setBarberData] = useState<BarberData | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchBarberData();
    }
  }, [user]);

  const fetchBarberData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('barbers')
        .select('*')
        .eq('id', user!.id)
        .single();

      if (error) throw error;
      setBarberData(data as BarberData);
    } catch (error: any) {
      toast({
        title: "Error fetching barber data",
        description: error.message,
        variant: "destructive"
      });
      console.error("Error fetching barber data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAvailability = async () => {
    if (!barberData) return;
    
    try {
      const { error } = await supabase
        .from('barbers')
        .update({ is_available: !barberData.is_available })
        .eq('id', barberData.id);

      if (error) throw error;
      
      setBarberData({
        ...barberData,
        is_available: !barberData.is_available
      });
      
      toast({
        title: "Status updated",
        description: `You are now ${!barberData.is_available ? 'available' : 'unavailable'} for bookings.`,
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive"
      });
      console.error("Error updating availability:", error);
    }
  };

  return (
    <ProtectedRoute requiredRoles={['barber']}>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-6">Barber Dashboard</h1>
          
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : barberData ? (
            <div className="grid grid-cols-1 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Status</CardTitle>
                  <CardDescription>Control your availability for bookings</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Currently: </p>
                    <span className={`text-lg ${barberData.is_available ? 'text-green-500' : 'text-red-500'}`}>
                      {barberData.is_available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={barberData.is_available}
                      onCheckedChange={toggleAvailability}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <CardDescription>View and manage your appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    View Bookings
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                  <CardDescription>Your profile information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span>{barberData.experience_years} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Hourly Rate:</span>
                      <span>${barberData.hourly_rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className={barberData.is_verified ? 'text-green-500' : 'text-red-500'}>
                        {barberData.is_verified ? 'Verified' : 'Not Verified'}
                      </span>
                    </div>
                    <div className="pt-2">
                      <Button variant="outline" className="w-full">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-10">No barber data found</div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default BarberDashboard;
