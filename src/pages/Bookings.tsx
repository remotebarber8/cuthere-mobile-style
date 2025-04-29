
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { Clock, Check, X } from "lucide-react";

const bookings = [
  {
    id: "123",
    barberName: "Rajesh Kumar",
    serviceName: "Haircut",
    date: "Today, 12:00 PM",
    status: "ongoing",
    price: "₹319",
    image: "https://images.unsplash.com/photo-1584516150794-3d9e7e9f4511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "122",
    barberName: "Vikram Singh",
    serviceName: "Hair + Beard",
    date: "Yesterday, 3:00 PM",
    status: "completed",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "121",
    barberName: "Amit Patel",
    serviceName: "Haircut",
    date: "22 Apr, 11:00 AM",
    status: "cancelled",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const BookingCard = ({ booking }: { booking: typeof bookings[0] }) => {
  const getStatusIcon = () => {
    switch (booking.status) {
      case "ongoing":
        return <Clock size={16} className="mr-1 text-primary" />;
      case "completed":
        return <Check size={16} className="mr-1 text-accent" />;
      case "cancelled":
        return <X size={16} className="mr-1 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = () => {
    switch (booking.status) {
      case "ongoing":
        return "Ongoing";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return booking.status;
    }
  };
  
  const getStatusClass = () => {
    switch (booking.status) {
      case "ongoing":
        return "text-primary bg-primary/10";
      case "completed":
        return "text-accent bg-accent/10";
      case "cancelled":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };
  
  return (
    <Link to={booking.status === "ongoing" ? `/tracking/${booking.id}` : "#"}>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="flex">
          <img 
            src={booking.image} 
            alt={booking.barberName} 
            className="w-16 h-16 rounded-lg object-cover mr-3" 
          />
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">{booking.serviceName}</h3>
              <span className="font-medium">{booking.price}</span>
            </div>
            <p className="text-sm text-gray-600">{booking.barberName}</p>
            <p className="text-xs text-gray-500 mt-1">{booking.date}</p>
            
            <div className="flex items-center mt-2">
              <span className={`text-xs px-2 py-1 rounded-full flex items-center ${getStatusClass()}`}>
                {getStatusIcon()}
                {getStatusText()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BookingsPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-xl font-semibold font-poppins">Your Bookings</h1>
        </div>
        
        {bookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </Layout>
  );
};

export default BookingsPage;
