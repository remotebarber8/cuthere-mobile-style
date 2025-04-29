
import { Star } from "lucide-react";

interface ReviewItemProps {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export default function ReviewItem({
  name, avatar, rating, date, comment
}: ReviewItemProps) {
  return (
    <div className="py-4 border-b border-gray-100">
      <div className="flex items-center mb-2">
        <img 
          src={avatar} 
          alt={name} 
          className="w-10 h-10 rounded-full mr-3" 
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < rating ? "text-yellow-400" : "text-gray-300"}
                  fill={i < rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600">{comment}</p>
    </div>
  );
}
