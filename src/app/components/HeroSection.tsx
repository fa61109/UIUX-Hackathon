import Image from "next/image"; 

const HeroSection = () => {
  return (
    <div className="bg-blue-100 py-10 text-center">
      
      <div className="mt-8 flex flex-col items-center md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="relative w-full max-w-xs md:max-w-sm">
          <Image
            src="/images/ads.png" 
            alt="Car Image"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="relative w-full max-w-xs md:max-w-sm">
          <Image
            src="/images/Adshero.png" 
            alt="Car Image Detail"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-6 md:space-y-0">

          <div className="bg-white p-2 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-semibold text-blue-600 mb-4 text-center" >Pickup Location</h3>
            
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="w-full px-4 py-2 mb-4 text-black border border-gray-300 rounded-lg"
            />

            <input
              type="date"
              className="w-full px-4 py-2 mb-4 text-black border border-gray-300 rounded-lg"
            />

            <input
              type="time"
              className="w-full px-4 py-2 mb-4 text-black border border-gray-300 rounded-lg"
            />
          </div>

          <div className="bg-white p-2 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Drop-off Location</h3>
            
            <input
              type="text"
              placeholder="Enter Drop-off Location"
              className="w-full px-4 py-2 mb-4 text-black border border-gray-300 rounded-lg"
            />

            <input
              type="date"
              className="w-full px-4 py-2 mb-4 text-black border border-gray-300 rounded-lg"
            />

            <input
              type="time"
              className="w-full px-4 py-2 mb-4 border text-black border-gray-300 rounded-lg"
            />
          </div>

        </div>

        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
