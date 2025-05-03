
import { useState } from "react";
import Layout from "../components/layout/Layout";
import LocationBar from "../components/home/LocationBar";
import SearchBar from "../components/home/SearchBar";
import BarberCard from "../components/home/BarberCard";
import ServiceCard from "../components/home/ServiceCard";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const services = [
  { 
    id: "1", 
    title: "Haircut",
    price: "₹199",
    icon: "/placeholder.svg" 
  },
  { 
    id: "2", 
    title: "Beard Trim",
    price: "₹149",
    icon: "/placeholder.svg" 
  },
  { 
    id: "3", 
    title: "Shave",
    price: "₹129",
    icon: "/placeholder.svg" 
  },
  { 
    id: "4", 
    title: "Hair Color",
    price: "₹399",
    icon: "/placeholder.svg" 
  },
];

const barbers = [
  {
    id: "1",
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1584516150794-3d9e7e9f4511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 124,
    distance: "2.3 km",
    eta: "15"
  },
  {
    id: "2",
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviews: 98,
    distance: "1.8 km",
    eta: "10"
  },
  {
    id: "3",
    name: "Amit Patel",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviews: 210,
    distance: "3.5 km",
    eta: "20"
  }
];

const Index = () => {
  const showPromoToast = () => {
    toast({
      title: "Special Offer!",
      description: "Get 20% off on your first haircut! Use code: NEWCUT",
    });
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-poppins">Hello there! 👋</h1>
          <p className="text-gray-600">Ready for a fresh new look today?</p>
        </div>
        
        <LocationBar />
        <SearchBar />

        {/* Promotion Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg mb-6 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-primary">Weekend Special!</h3>
              <p className="text-sm">Get 20% off on all services</p>
            </div>
            <Button size="sm" onClick={showPromoToast}>View Offer</Button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold font-poppins">Services</h2>
            <button className="text-primary text-sm font-medium">View all</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                price={service.price}
                icon={service.icon}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold font-poppins">Popular Barbers</h2>
            <button className="text-primary text-sm font-medium">View all</button>
          </div>
          
          {barbers.map(barber => (
            <BarberCard 
              key={barber.id}
              id={barber.id}
              name={barber.name}
              image={barber.image}
              rating={barber.rating}
              reviews={barber.reviews}
              distance={barber.distance}
              eta={barber.eta}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
