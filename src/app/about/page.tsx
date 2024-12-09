import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-20 bg-white text-black">
        <h2 className="m-2 text-2xl font-bold">About Us</h2>
        <p>At Morent, we are dedicated to providing a seamless and convenient car rental experience. Whether you need a reliable vehicle for a family vacation, a business trip, or just a weekend getaway, we have a wide range of cars to suit your needs. Our fleet includes everything from compact cars to luxury vehicles, all well-maintained and ready to hit the road. With a commitment to excellent customer service, we ensure that your rental experience is smooth and hassle-free. Enjoy competitive prices, flexible rental terms, and convenient locations. Trust us to provide you with a reliable ride for every journey..</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
