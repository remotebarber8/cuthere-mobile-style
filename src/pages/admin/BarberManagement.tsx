
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Check, X } from "lucide-react";

interface BarberData {
  id: string;
  experience_years: number;
  bio: string | null;
  is_verified: boolean;
  is_available: boolean;
  profile: {
    full_name: string | null;
    email: string;
    phone: string | null;
  };
}

const BarberManagement = () => {
  const [barbers, setBarbers] = useState<BarberData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBarbers();
  }, []);

  const fetchBarbers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('barbers')
        .select(`
          id,
          experience_years,
          bio,
          is_verified,
          is_available,
          profile:profiles(full_name, email, phone)
        `);

      if (error) throw error;
      setBarbers(data as BarberData[]);
    } catch (error: any) {
      toast({
        title: "Error fetching barbers",
        description: error.message,
        variant: "destructive"
      });
      console.error("Error fetching barbers:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVerification = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('barbers')
        .update({ is_verified: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      setBarbers(barbers.map(barber => 
        barber.id === id ? { ...barber, is_verified: !currentStatus } : barber
      ));
      
      toast({
        title: "Barber updated",
        description: `Barber ${!currentStatus ? 'verified' : 'unverified'} successfully.`,
      });
    } catch (error: any) {
      toast({
        title: "Error updating barber",
        description: error.message,
        variant: "destructive"
      });
      console.error("Error updating barber:", error);
    }
  };

  return (
    <ProtectedRoute requiredRoles={['admin']}>
      <Layout>
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-6">Barber Management</h1>
          
          {loading ? (
            <div className="text-center py-10">Loading barbers...</div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {barbers.length > 0 ? (
                    barbers.map((barber) => (
                      <TableRow key={barber.id}>
                        <TableCell>{barber.profile.full_name || 'N/A'}</TableCell>
                        <TableCell>{barber.profile.email}</TableCell>
                        <TableCell>{barber.experience_years} years</TableCell>
                        <TableCell>
                          {barber.is_verified ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </TableCell>
                        <TableCell>
                          {barber.is_available ? (
                            <span className="text-green-500">Yes</span>
                          ) : (
                            <span className="text-red-500">No</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">Verify:</span>
                            <Switch 
                              checked={barber.is_verified}
                              onCheckedChange={() => toggleVerification(barber.id, barber.is_verified)}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        No barbers found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default BarberManagement;
