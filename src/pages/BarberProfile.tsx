
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProfileHeader from "../components/barber/ProfileHeader";
import ServiceItem from "../components/barber/ServiceItem";
import ReviewItem from "../components/barber/ReviewItem";

const barberData = {
  id: "1",
  name: "Rajesh Kumar",
  image: "https://images.unsplash.com/photo-1584516150794-3d9e7e9f4511?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  rating: 4.8,
  reviews: 124,
  experience: "8",
  bio: "Professional barber with experience in modern styles, classic cuts, and beard grooming. Specializing in fade haircuts and razor shaves.",
  services: [
    { id: "1", name: "Haircut", price: 299, duration: "30 min" },
    { id: "2", name: "Beard Trim", price: 149, duration: "15 min" },
    { id: "3", name: "Hair + Beard", price: 399, duration: "45 min", description: "Haircut and beard grooming combo" },
    { id: "4", name: "Hair Color", price: 599, duration: "60 min" },
    { id: "5", name: "Shave", price: 199, duration: "20 min" },
  ],
  reviewList: [
    { 
      id: "1", 
      name: "Rahul Sharma", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", 
      rating: 5, 
      date: "2 days ago",
      comment: "Absolutely amazing service! Rajesh was on time and gave me the perfect haircut. Will definitely book again." 
    },
    { 
      id: "2", 
      name: "Priya Singh", 
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", 
      rating: 4, 
      date: "1 week ago",
      comment: "Very good service. My husband was very happy with his haircut. Clean equipment and professional approach." 
    },
    { 
      id: "3", 
      name: "Karan Patel", 
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", 
      rating: 5, 
      date: "2 weeks ago",
      comment: "Great experience. He arrived on time and was very friendly. The haircut was exactly what I wanted." 
    },
  ]
};

const BarberProfile = () => {
  const [activeTab, setActiveTab] = useState<"about" | "services" | "reviews">("services");
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch data based on the id
  
  return (
    <Layout showFooter={false}>
      <div className="pb-20">
        <ProfileHeader 
          name={barberData.name}
          image={barberData.image}
          rating={barberData.rating}
          reviews={barberData.reviews}
          experience={barberData.experience}
        />
        
        <div className="bg-white border-b border-gray-100">
          <div className="flex">
            {["about", "services", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 py-4 text-center font-medium ${
                  activeTab === tab 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4">
          {activeTab === "about" && (
            <div>
              <h2 className="font-medium mb-3">About</h2>
              <p className="text-gray-600">{barberData.bio}</p>
            </div>
          )}
          
          {activeTab === "services" && (
            <div>
              <h2 className="font-medium mb-3">Services</h2>
              <div className="bg-white rounded-lg border border-gray-200 divide-y">
                {barberData.services.map(service => (
                  <ServiceItem 
                    key={service.id}
                    name={service.name}
                    price={service.price}
                    duration={service.duration}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <h2 className="font-medium mb-3">Reviews</h2>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                {barberData.reviewList.map(review => (
                  <ReviewItem 
                    key={review.id}
                    name={review.name}
                    avatar={review.avatar}
                    rating={review.rating}
                    date={review.date}
                    comment={review.comment}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button 
            className="bg-primary text-white w-full py-3 rounded-lg font-medium"
            onClick={() => window.location.href = `/booking/${id}`}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default BarberProfile;
