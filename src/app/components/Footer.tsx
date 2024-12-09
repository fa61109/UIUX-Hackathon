const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 ">MORENT</h3>
            <p className="text-sm text-black">
              We provide the best car rental services tailored to your needs. Rent your dream car today and experience the journey of a lifetime.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-black hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-black  hover:text-white">
                Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-black  hover:text-white">
                  Pricing 3
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-black   hover:text-white">
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Faizan Elahi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
