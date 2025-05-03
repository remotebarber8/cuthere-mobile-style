
import { Home, User, Calendar, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10 shadow-lg">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-primary' : 'text-gray-500'}`}>
          <div className={`p-1 rounded-full ${isActive('/') ? 'bg-primary/10' : ''}`}>
            <Home size={22} />
          </div>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/bookings" className={`flex flex-col items-center ${isActive('/bookings') ? 'text-primary' : 'text-gray-500'}`}>
          <div className={`p-1 rounded-full ${isActive('/bookings') ? 'bg-primary/10' : ''}`}>
            <Calendar size={22} />
          </div>
          <span className="text-xs mt-1">Bookings</span>
        </Link>
        <Link to="/barber/1" className={`flex flex-col items-center ${isActive('/barber/1') ? 'text-primary' : 'text-gray-500'}`}>
          <div className={`p-1 rounded-full ${isActive('/barber/1') ? 'bg-primary/10' : ''}`}>
            <Heart size={22} />
          </div>
          <span className="text-xs mt-1">Favorites</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-primary' : 'text-gray-500'}`}>
          <div className={`p-1 rounded-full ${isActive('/profile') ? 'bg-primary/10' : ''}`}>
            <User size={22} />
          </div>
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </footer>
  );
}
