
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface BarberCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  eta: string;
}

export default function BarberCard({ 
  id, name, image, rating, reviews, distance, eta 
}: BarberCardProps) {
  return (
    <Link to={`/barber/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="flex items-center">
              <p className="text-white font-semibold">{name}</p>
              <div className="ml-auto flex items-center bg-white/30 backdrop-blur-sm py-1 px-2 rounded-full">
                <Star size={14} className="text-yellow-400 mr-1" />
                <span className="text-white text-xs font-medium">{rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">{reviews} happy customers</p>
              <p className="text-xs text-gray-500">Only {distance} away</p>
            </div>
            <div className="flex items-center">
              <div className="text-xs bg-accent/10 text-accent py-1 px-2 rounded-full font-medium">
                {eta} mins
              </div>
            </div>
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md mt-3 text-sm font-medium hover:bg-primary/90 transition-colors">
            Book now
          </button>
        </div>
      </div>
    </Link>
  );
}
