
import { ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileHeaderProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
}

export default function ProfileHeader({ 
  name, image, rating, reviews, experience 
}: ProfileHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="h-56">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full bg-white/30 backdrop-blur-sm"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
      </div>
      
      <div className="bg-white rounded-t-3xl -mt-6 relative p-6">
        <h1 className="text-xl font-semibold font-poppins">{name}</h1>
        
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-gray-400 mx-2">•</span>
          <span className="text-sm text-gray-600">{reviews} reviews</span>
        </div>
        
        <p className="text-sm text-gray-600 mt-2">
          {experience} years of experience
        </p>
      </div>
    </div>
  );
}
