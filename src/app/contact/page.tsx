import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-20 bg-white">
        <h2 className="m-10 text-2xl font-bold text-blue-600">Contact Us</h2>
        <p className=" text-black ">Feel free to reach us at fa61109@gmail.com or call us at 03002395263.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
