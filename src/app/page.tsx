import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CarCard from "./components/CarCard";

const HomePage = () => {
  const carData = [
    {
      name: "Koenigsegg",
      price: 50,
      image: "/images/car.png",
      mileage: "90L",
      fuelType: "Manual",
      capacity: "2 People",
    },
    {
      name: "Nissan GT-R",
      price: 80,
      image: "/images/nissan.png",
      mileage: "80L",
      fuelType: "Manual",
      capacity: "5 People",
    },
    {
      name: "Rolls-Royce",
      price: 96,
      image: "/images/rollsroyce.png",
      mileage: "80L",
      fuelType: "Manual",
      capacity: "4 People",
    },
    
    {
      name: "All New Rush",
      price: 72,
      image: "/images/allnewrush.png",
      mileage: "70L",
      fuelType: "Manual",
      capacity: "6 People",
    },
    {
      name: "CR-V",
      price: 80,
      image: "/images/crv.png",
      mileage: "80L",
      fuelType: "Manual",
      capacity: "6 People",
    },
    {
      name: "All New Terios",
      price: 74,
      image: "/images/All New Terios.png",
      mileage: "90L",
      fuelType: "Automatic",
      capacity: "6 People",
    },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="text-left px-1 bg-white">
        <h2 className="item-left w-[132px] h-[44px] font-semibold text-gray-500">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-white w-full">
          {carData.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              price={car.price}
              image={car.image}
              mileage={car.mileage}
              fuelType={car.fuelType}
              capacity={car.capacity}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
