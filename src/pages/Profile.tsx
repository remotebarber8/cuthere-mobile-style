
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { User, MapPin, Phone, Star, LogOut, Edit } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const ProfilePage = () => {
  const { user, profile, signOut, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "Test User", // Default value since authentication is bypassed
    phone: "555-1234", // Default value since authentication is bypassed
  });
  const navigate = useNavigate();
  
  const handleUpdateProfile = async () => {
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    setIsEditing(false);
  };
  
  // Create mock data since authentication is bypassed
  const mockProfile = {
    role: 'user',
    full_name: 'Test User',
    phone: '555-1234',
  };
  
  const renderRoleSpecificContent = () => {
    // Using mock profile since authentication is bypassed
    const role = mockProfile.role;
    
    switch (role) {
      case 'barber':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
            <h2 className="font-medium mb-4">Barber Dashboard</h2>
            <Button onClick={() => navigate('/barber/bookings')} className="w-full mb-2">
              View Bookings
            </Button>
            <Button onClick={() => navigate('/barber/availability')} className="w-full">
              Manage Availability
            </Button>
          </div>
        );
        
      case 'admin':
        return (
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
            <h2 className="font-medium mb-4">Admin Dashboard</h2>
            <Button onClick={() => navigate('/admin/users')} className="w-full mb-2">
              Manage Users
            </Button>
            <Button onClick={() => navigate('/admin/barbers')} className="w-full mb-2">
              Manage Barbers
            </Button>
            <Button onClick={() => navigate('/admin/bookings')} className="w-full">
              View All Bookings
            </Button>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-6 font-poppins">Profile</h1>
        
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <User size={32} className="text-gray-500" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">{mockProfile.full_name || "Test User"}</h2>
              <p className="text-gray-600 text-sm">user@example.com</p>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{mockProfile.role || "user"}</span>
            </div>
          </div>
          
          {mockProfile.phone && (
            <div className="flex items-center mb-3">
              <Phone size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">{mockProfile.phone}</span>
            </div>
          )}
          
          <Button 
            variant="outline" 
            className="w-full mt-4" 
            onClick={() => setIsEditing(true)}
          >
            <Edit size={16} className="mr-2" />
            Edit Profile
          </Button>
        </div>
        
        {renderRoleSpecificContent()}
        
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Saved Addresses</h2>
            <button className="text-primary text-sm font-medium">Add New</button>
          </div>
          
          <div className="flex mb-4">
            <div className="mr-3">
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-gray-500" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm">Home</h3>
              <p className="text-gray-600 text-sm">123 Main Street, Apartment 4B, New York</p>
            </div>
          </div>
          
          <div className="flex mb-4">
            <div className="mr-3">
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin size={18} className="text-gray-500" />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm">Work</h3>
              <p className="text-gray-600 text-sm">456 Park Avenue, 8th Floor, New York</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button className="bg-white w-full py-3 px-4 rounded-lg border border-gray-200 text-left font-medium">
            Help & Support
          </button>
          <button className="bg-white w-full py-3 px-4 rounded-lg border border-gray-200 text-left font-medium">
            Privacy Policy
          </button>
          <button className="bg-white w-full py-3 px-4 rounded-lg border border-gray-200 text-left font-medium">
            Terms & Conditions
          </button>
          <button 
            className="w-full py-3 px-4 rounded-lg text-left font-medium flex items-center text-red-500"
            onClick={() => navigate('/auth')}
          >
            <LogOut size={16} className="mr-2" />
            Go to Login Page
          </button>
        </div>
      </div>
      
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right col-span-1">Full Name</label>
              <Input 
                value={formData.full_name} 
                onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right col-span-1">Phone</label>
              <Input 
                value={formData.phone} 
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateProfile}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ProfilePage;
