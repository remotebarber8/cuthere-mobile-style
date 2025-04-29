
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AddressSelector from "../components/booking/AddressSelector";
import TimeSelector from "../components/booking/TimeSelector";
import BookingSummary from "../components/booking/BookingSummary";
import PaymentSelector from "../components/booking/PaymentSelector";

const addresses = [
  { 
    id: "1", 
    title: "Home", 
    address: "123 Main Street, Apartment 4B, New York, NY 10001",
    isSelected: true
  },
  { 
    id: "2", 
    title: "Work", 
    address: "456 Park Avenue, 8th Floor, New York, NY 10022",
    isSelected: false
  },
];

const paymentMethods = [
  {
    id: "cash",
    name: "Cash on Delivery",
    icon: "/placeholder.svg",
    isSelected: true
  },
  {
    id: "upi",
    name: "UPI",
    icon: "/placeholder.svg",
    isSelected: false
  },
  {
    id: "wallet",
    name: "Wallet",
    icon: "/placeholder.svg",
    isSelected: false
  }
];

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [selectedPayment, setSelectedPayment] = useState("cash");
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  
  const handleAddressSelect = (id: string) => {
    setSelectedAddress(id);
  };
  
  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleBookNow = () => {
    // In a real app, we would send a booking request to the server
    window.location.href = `/tracking/123`;
  };
  
  const updatedAddresses = addresses.map(addr => ({
    ...addr,
    isSelected: addr.id === selectedAddress
  }));
  
  const updatedPaymentMethods = paymentMethods.map(method => ({
    ...method,
    isSelected: method.id === selectedPayment
  }));
  
  return (
    <Layout showFooter={false}>
      <div className="p-4 pb-24">
        <h1 className="text-xl font-semibold mb-6 font-poppins">Book Appointment</h1>
        
        <AddressSelector 
          addresses={updatedAddresses} 
          onSelect={handleAddressSelect} 
        />
        
        <TimeSelector onSelectTime={handleTimeSelect} />
        
        <BookingSummary 
          barberName="Rajesh Kumar"
          serviceName="Haircut"
          servicePrice={299}
          serviceFee={20}
          total={319}
        />
        
        <PaymentSelector 
          methods={updatedPaymentMethods}
          onSelect={handlePaymentSelect}
        />
        
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button 
            className="bg-primary text-white w-full py-3 rounded-lg font-medium"
            onClick={handleBookNow}
          >
            Book Now • ₹319
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default BookingPage;
