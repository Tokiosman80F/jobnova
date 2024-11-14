import { NavLink } from "react-router-dom";
import logo from "../assets/images/home/logo.png";
// Reusable NavItem Component
const NavItem = ({ to, children }) => (
  <li className="">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-600 font-semibold  pb-1" : "text-gray-700 "
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navbar = () => {
  return (
    <div className="bg-base-100 font-semibold uppercase">
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavItem to="/">Home</NavItem>
              <NavItem to="/jobs">Jobs</NavItem>
              <NavItem to="/candidates">Candidates</NavItem>
            </ul>
          </div>
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="" className="" />
          </NavLink>
        </div>

        {/* Navbar Center (for larger screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/jobs">Jobs</NavItem>
            <NavItem to="/candidates">Candidates</NavItem>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Login Button */}
          <NavLink
            to="/login"
            className=" mr-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Login
          </NavLink>
          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">Settings</NavLink>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
