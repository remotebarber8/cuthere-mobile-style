
interface ServiceItemProps {
  name: string;
  price: number;
  duration: string;
  description?: string;
}

export default function ServiceItem({ 
  name, price, duration, description
}: ServiceItemProps) {
  return (
    <div className="border-b border-gray-100 py-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium">{name}</h3>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
          <p className="text-xs text-gray-500 mt-1">{duration}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">₹{price}</p>
        </div>
      </div>
    </div>
  );
}
