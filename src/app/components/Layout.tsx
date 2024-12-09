import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode; // Yeh specify karta hai ki Layout ke andar koi bhi React component aa sakta hai
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
