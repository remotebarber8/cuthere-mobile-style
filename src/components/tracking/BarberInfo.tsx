
import { Phone, MessageCircle } from "lucide-react";

interface BarberInfoProps {
  id: string;
  name: string;
  image: string;
  phone: string;
}

export default function BarberInfo({ 
  id, name, image, phone 
}: BarberInfoProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <h2 className="font-medium mb-4">Barber Information</h2>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full mr-4 object-cover" 
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{phone}</p>
        </div>
      </div>
      
      <div className="flex mt-4">
        <button className="flex-1 bg-primary text-white py-2 rounded-md flex items-center justify-center mr-2">
          <Phone size={18} className="mr-2" />
          Call
        </button>
        <button className="flex-1 border border-primary text-primary py-2 rounded-md flex items-center justify-center">
          <MessageCircle size={18} className="mr-2" />
          Chat
        </button>
      </div>
    </div>
  );
}
