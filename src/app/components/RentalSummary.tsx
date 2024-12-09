interface RentalSummaryProps {
    name: string; // Car ka naam
    image: string; // Car ki image URL
    pricePerDay: number; // Price per day
    rentalDays: number; // Total number of days for rental
  }
  
  const RentalSummary: React.FC<RentalSummaryProps> = ({
    name,
    image,
    pricePerDay,
    rentalDays,
  }) => {
    const totalPrice = pricePerDay * rentalDays;
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
        {/* Car Details */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600">${pricePerDay}/day</p>
          </div>
        </div>
        {/* Rental Days and Price */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Days:</p>
            <p className="font-bold">{rentalDays}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Price per Day:</p>
            <p className="font-bold">${pricePerDay}</p>
          </div>
        </div>
        {/* Total Price */}
        <div className="flex justify-between text-lg font-bold">
          <p>Total Price:</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    );
  };
  
  export default RentalSummary;
  