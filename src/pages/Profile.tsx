
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { User, MapPin, Phone, Star, LogOut } from "lucide-react";

const ProfilePage = () => {
  const [user] = useState({
    name: "Adam Smith",
    email: "adam.smith@example.com",
    phone: "+1 123-456-7890",
    addresses: [
      { id: "1", title: "Home", address: "123 Main Street, Apartment 4B, New York" },
      { id: "2", title: "Work", address: "456 Park Avenue, 8th Floor, New York" }
    ],
    totalBookings: 8
  });
  
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
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-3">
            <Phone size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-700">{user.phone}</span>
          </div>
          
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-2" />
            <span className="text-gray-700">{user.totalBookings} bookings completed</span>
          </div>
          
          <button className="w-full mt-4 border border-primary text-primary py-2 rounded-lg font-medium">
            Edit Profile
          </button>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">Saved Addresses</h2>
            <button className="text-primary text-sm font-medium">Add New</button>
          </div>
          
          {user.addresses.map(address => (
            <div key={address.id} className="flex mb-4 last:mb-0">
              <div className="mr-3">
                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-gray-500" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm">{address.title}</h3>
                <p className="text-gray-600 text-sm">{address.address}</p>
              </div>
            </div>
          ))}
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
          <button className="w-full py-3 px-4 rounded-lg text-left font-medium flex items-center text-red-500">
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
