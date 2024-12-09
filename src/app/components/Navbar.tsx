import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MORENT
          <input
            type="text"
            placeholder="Search Something Here..."
            className="px-1 py-1 gap-5 right-4 border gray-600 text-sm items-center font-light rounded-sm" />
      </Link>
<div className="flex space-x-4">
  <Link href="/" className="text-gray-700 hover:text-blue-600">
    Home
  </Link>
  <Link href="/contact" className="text-gray-700 hover:text-blue-600">
    Contact
  </Link>
  <Link href="/about" className="text-gray-700 hover:text-blue-600">
    About
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
