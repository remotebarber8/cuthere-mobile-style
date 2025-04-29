
import { MapPin } from "lucide-react";

export default function LocationBar() {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-3 mb-4">
      <div className="flex items-center">
        <MapPin size={20} className="text-primary mr-2" />
        <div>
          <p className="text-sm text-gray-600">Current Location</p>
          <p className="font-medium">New York, NY</p>
        </div>
      </div>
      <button className="text-primary text-sm font-medium">Change</button>
    </div>
  );
}
