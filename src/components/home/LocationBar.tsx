
import { MapPin } from "lucide-react";

export default function LocationBar() {
  return (
    <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 p-3 mb-6">
      <div className="p-1 bg-primary/10 rounded-full">
        <MapPin size={16} className="text-primary" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium">Deliver to</p>
        <p className="text-xs text-gray-500">123 Main Street, Apartment 4B</p>
      </div>
      <button className="ml-auto text-xs font-medium text-primary">Change</button>
    </div>
  );
}
