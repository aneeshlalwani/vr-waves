import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index.jsx";

const Navbar = () => {
  // UseSTATE for HUMBURGER MENU
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  // Function For Toggling Menu
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
              <span className="text-xl tracking-tight">VRWaves</span>
            </div>
            {/* NAVIGATIONS UNODERED LIST */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            {/* Buttons */}
            <div className="hidden lg:flex justify-center items-center space-x-12">
              <a href="#" className="border rounded-md py-2 px-3">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-3"
              >
                Create an Account
              </a>
            </div>
            {/* DRAWER MENU ITEMS */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavBar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-2 px-3"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
