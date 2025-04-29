
import { MapPin } from "lucide-react";

interface Address {
  id: string;
  title: string;
  address: string;
  isSelected: boolean;
}

interface AddressSelectorProps {
  addresses: Address[];
  onSelect: (id: string) => void;
}

export default function AddressSelector({ 
  addresses, onSelect 
}: AddressSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="font-medium mb-3">Select Address</h2>
      
      <div className="space-y-3">
        {addresses.map((address) => (
          <div 
            key={address.id}
            onClick={() => onSelect(address.id)}
            className={`border rounded-lg p-4 flex items-start cursor-pointer ${
              address.isSelected 
                ? "border-primary bg-primary/5" 
                : "border-gray-200"
            }`}
          >
            <div className={`p-2 rounded-full mr-3 ${
              address.isSelected 
                ? "bg-primary/10" 
                : "bg-gray-100"
            }`}>
              <MapPin size={18} className={address.isSelected ? "text-primary" : "text-gray-500"} />
            </div>
            <div>
              <h3 className="font-medium">{address.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{address.address}</p>
            </div>
            <div className="ml-auto">
              <div className={`w-5 h-5 rounded-full border ${
                address.isSelected 
                  ? "border-primary" 
                  : "border-gray-300"
              }`}>
                {address.isSelected && (
                  <div className="w-3 h-3 bg-primary rounded-full m-auto mt-1"></div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <button className="flex items-center text-primary font-medium">
          <span className="mr-1">+</span> Add new address
        </button>
      </div>
    </div>
  );
}
