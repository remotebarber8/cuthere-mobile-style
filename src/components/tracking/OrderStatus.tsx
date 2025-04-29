
import { Check } from "lucide-react";

interface OrderStatusProps {
  status: "confirmed" | "assigned" | "on_the_way" | "arrived" | "completed";
  eta?: string;
}

export default function OrderStatus({ status, eta }: OrderStatusProps) {
  const statuses = [
    { key: "confirmed", label: "Booking Confirmed" },
    { key: "assigned", label: "Barber Assigned" },
    { key: "on_the_way", label: "On The Way" },
    { key: "arrived", label: "Arrived" },
    { key: "completed", label: "Completed" },
  ];
  
  // Find active status index
  const activeIndex = statuses.findIndex(s => s.key === status);
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <h2 className="font-medium mb-4">Order Status</h2>
      
      <div className="space-y-6">
        {statuses.map((item, index) => {
          const isActive = index <= activeIndex;
          const isCurrent = index === activeIndex;
          
          return (
            <div key={item.key} className="flex">
              <div className="mr-4 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive ? "bg-primary" : "bg-gray-200"
                }`}>
                  {isActive && <Check size={16} className="text-white" />}
                </div>
                
                {index < statuses.length - 1 && (
                  <div className={`absolute top-8 left-4 w-[2px] h-[calc(100%+8px)] -ml-[1px] ${
                    index < activeIndex ? "bg-primary" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
              
              <div className="flex-1 pb-6">
                <p className={`font-medium ${isCurrent ? "text-primary" : ""}`}>
                  {item.label}
                </p>
                
                {isCurrent && status === "on_the_way" && eta && (
                  <p className="text-sm text-gray-600 mt-1">
                    Your barber will arrive in approximately {eta} minutes
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
