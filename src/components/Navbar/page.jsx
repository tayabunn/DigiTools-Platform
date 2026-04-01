import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="section-container flex w-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <div className="flex-1 flex items-center ml-2">
              <img src="./public/DigiTools.png" className="w-24" alt="DigiTools Logo" />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center gap-6">
              <a className="btn-sm font-semibold cursor-pointer hover:text-primary transition-colors">Products</a>
              <a className="btn-sm font-semibold cursor-pointer hover:text-primary transition-colors">Features</a>
              <a className="btn-sm font-semibold cursor-pointer hover:text-primary transition-colors">Pricing</a>
              <a className="btn-sm font-semibold cursor-pointer hover:text-primary transition-colors">Testimonials</a>
              <a className="btn-sm font-semibold cursor-pointer hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>

          <div className="navbar-end gap-2">
            <button className="btn btn-ghost btn-circle">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <a className="btn btn-ghost font-bold hidden md:inline-flex">Log in</a>
            <a className="btn btn-primary rounded-full px-6 font-bold hidden sm:inline-flex">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;