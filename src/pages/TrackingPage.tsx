
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import OrderStatus from "../components/tracking/OrderStatus";
import BarberInfo from "../components/tracking/BarberInfo";
import SOSButton from "../components/tracking/SOSButton";

const TrackingPage = () => {
  const { id } = useParams<{ id: string }>();
  const [orderStatus, setOrderStatus] = useState<
    "confirmed" | "assigned" | "on_the_way" | "arrived" | "completed"
  >("on_the_way");
  
  return (
    <Layout showFooter={false}>
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-6 font-poppins">Order Tracking</h1>
        
        <OrderStatus status={orderStatus} eta="15" />
        
        <BarberInfo 
          id="1"
          name="Rajesh Kumar"
          image="https://images.unsplash.com/photo-1584516150794-3d9e7e9f4511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          phone="+91 98765 43210"
        />
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <h2 className="font-medium mb-4">Booking Details</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Service</span>
              <span>Haircut</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date & Time</span>
              <span>Today, 12:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Address</span>
              <span className="text-right">123 Main Street, Apartment 4B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment</span>
              <span>Cash on Delivery</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Amount</span>
              <span>₹319</span>
            </div>
          </div>
        </div>
        
        <SOSButton />
      </div>
    </Layout>
  );
};

export default TrackingPage;
