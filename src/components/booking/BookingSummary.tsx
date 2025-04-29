
interface BookingSummaryProps {
  barberName: string;
  serviceName: string;
  servicePrice: number;
  serviceFee: number;
  total: number;
}

export default function BookingSummary({
  barberName,
  serviceName,
  servicePrice,
  serviceFee,
  total,
}: BookingSummaryProps) {
  return (
    <div className="mb-6">
      <h2 className="font-medium mb-3">Booking Summary</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-medium mb-2">{serviceName} with {barberName}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service price</span>
            <span>₹{servicePrice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Service fee</span>
            <span>₹{serviceFee}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-semibold">₹{total}</span>
        </div>
      </div>
    </div>
  );
}
