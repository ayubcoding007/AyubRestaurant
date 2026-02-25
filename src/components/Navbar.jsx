import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import {
  Calendar,
  LogOut,
  Package,
  ShoppingCart,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser, axios, cartCount } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("/api/auth/logout");
      if (data.success) {
        setUser(null);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-cyan-50 shadow-md sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left - Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-blue-600"
            >
              <img src="./logo.png" alt="logo" className="w-8 h-8" />
              <h4 className="whitespace-nowrap">
                <span className="text-orange-500">Ayub</span>Restaurant
              </h4>
            </Link>
          </div>

          {/* Center - Menu Items (Desktop only) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-blue-600 font-medium">
              Menus
            </Link>
            <Link to="/book-table" className="text-gray-700 hover:text-blue-600 font-medium">
              Book Table
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount > 0 ? cartCount : 0}
              </span>
            </button>

            {/* Profile Desktop */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative">
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                    onClick={() => setIsProfileOpen(!isProfileOpen)} //  ADD (mobile safety)
                  >
                    <UserCircle size={30} />
                  </button>

                  {isProfileOpen && (
                    <div
                      onMouseEnter={() => setIsProfileOpen(true)}
                      onMouseLeave={() => setIsProfileOpen(false)}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      <Link to="/my-bookings" className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <Calendar size={18} className="mr-3" />
                        My Bookings
                      </Link>
                      <Link to="/my-orders" className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <Package size={18} className="mr-3" />
                        My Orders
                      </Link>
                      <button onClick={logout} className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50">
                        <LogOut size={18} className="mr-3" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menus</Link>

              {/* ✅ FIX: Book Table added */}
              <Link to="/book-table" onClick={() => setIsMenuOpen(false)}>
                Book Table
              </Link>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

              {user ? (
                <div className="relative">
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                    onClick={() => setIsProfileOpen(!isProfileOpen)} //  mobile tap
                  >
                    <UserCircle size={30} />
                  </button>

                  {isProfileOpen && (
                    <div className="mt-2 bg-white rounded-lg shadow-lg py-2">
                      <Link to="/my-bookings">My Bookings</Link>
                      <Link to="/my-orders">My Orders</Link>
                      <button onClick={logout} className="text-red-600 text-left">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/login");
                  }}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;