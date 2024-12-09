// components/CarCard.tsx
import Image from "next/image";

interface CarCardProps {
  name: string;
  price: number;
  image: string; // Path to the image
  mileage: string; // Mileage, e.g., "70L"
  fuelType: string; // Fuel type, e.g., "Manual"
  capacity: string; // Seating capacity, e.g., "6 People"
}

const CarCard = ({ name, price, image, mileage, fuelType, capacity }: CarCardProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white transition hover:shadow-lg">
      {/* Car Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Car Image */}
      <div className="relative w-full h-40 mt-2">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>

      {/* Car Details */}
      <div className="mt-4">
        {/* Price */}
        <p className="text-xl font-bold text-gray-800">${price}/day</p>
        {/* Additional Info */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <p>🛢 {mileage}</p>
          <p>⚙️ {fuelType}</p>
          <p>👥 {capacity}</p>
        </div>
      </div>

      {/* Rent Button */}
      <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-blue-600">
        Rent Now
      </button>
    </div>
  );
};

export default CarCard;
