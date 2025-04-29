
interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  isSelected: boolean;
}

interface PaymentSelectorProps {
  methods: PaymentMethod[];
  onSelect: (id: string) => void;
}

export default function PaymentSelector({
  methods,
  onSelect
}: PaymentSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="font-medium mb-3">Payment Method</h2>
      
      <div className="space-y-3">
        {methods.map((method) => (
          <div 
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`border rounded-lg p-4 flex items-center cursor-pointer ${
              method.isSelected ? "border-primary bg-primary/5" : "border-gray-200"
            }`}
          >
            <img 
              src={method.icon} 
              alt={method.name} 
              className="w-8 h-8 mr-3" 
            />
            <span className="font-medium">{method.name}</span>
            <div className="ml-auto">
              <div className={`w-5 h-5 rounded-full border ${
                method.isSelected ? "border-primary" : "border-gray-300"
              }`}>
                {method.isSelected && (
                  <div className="w-3 h-3 bg-primary rounded-full m-auto mt-1"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
