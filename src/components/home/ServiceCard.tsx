
interface ServiceCardProps {
  title: string;
  price: string;
  icon: string;
}

export default function ServiceCard({ title, price, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col items-center">
      <div className="bg-primary/10 p-3 rounded-full mb-3">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-gray-500 text-xs mt-1">From {price}</p>
    </div>
  );
}
