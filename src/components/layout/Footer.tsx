
import { Home, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-primary">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/bookings" className="flex flex-col items-center text-gray-500">
          <Calendar size={24} />
          <span className="text-xs mt-1">Bookings</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-500">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </footer>
  );
}
