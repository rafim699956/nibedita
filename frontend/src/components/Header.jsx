import { Link, NavLink } from "react-router";
import logo from "../assets/images/sitelogo.png";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  const links = [
    {
      id: 1,
      label: "home",
      path: "/",
    },
    {
      id: 2,
      label: "about",
      path: "/about",
    },
    {
      id: 3,
      label: "services",
      path: "/services",
      submenu: [
        {
          id: 1,
          label: "Maternal and Child Health Center",
          path: "/maternal-and-child-health-center",
        },
        {
          id: 2,
          label: "Mental Health Center",
          path: "/mental-health-center",
        },
        {
          id: 3,
          label: "Physiotherapy Center (Coming soon)",
          path: "/physiotherapy-center",
        },
        {
          id: 4,
          label: "Catering Service",
          path: "/catering-service",
        },
      ],
    },
    {
      id: 4,
      label: "news & events",
      path: "/news",
    },
    {
      id: 5,
      label: "career",
      path: "/career",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-5 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/">
            <img className="w-[9.282rem]" src={logo} alt="site logo" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded border border-primary-100 cursor-pointer lg:hidden"
          >
            <MdMenu className="text-2xl" />
          </button>
          <nav
            className={`${
              isMenuOpen
                ? "flex flex-col lg:flex-row gap-4 min-h-25"
                : "hidden lg:flex h-0 lg:h-auto overflow-hidden"
            }  lg:items-center lg:justify-end grow basis-full lg:basis-auto transition-all duration-300 ease-linear`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto">
              {links.map((link) => (
                <li key={link.id} className="flex items-center relative">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3.5 py-[0.688rem] capitalize leading-6.5 font-medium relative transition-all ease-linear duration-300 hover:text-primary-600 ${
                        isActive ? "text-primary-600" : "text-primary-950"
                      } ${
                        link.submenu
                          ? "flex items-center flex-row-reverse sabmenu"
                          : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {/* {link.submenu && (
                    <ul className="absolute top-0 max-w-83 w-83 border text-border bg-white rounded-lg space-y-1 z-20 divide-y divide-border">
                      {link.submenu &&
                        link.submenu.map((menu) => (
                          <li key={menu.id}>
                            <Link className="py-3 px-5 text-lg leading-7 font-medium text-secondary-800" to={menu.path}>{menu.label}</Link>
                          </li>
                        ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
            <div className="w-full h-0.5 lg:w-0.5 lg:h-8 bg-border lg:ml-4.5 lg:mr-8"></div>
            <div>
              <Link
                className="py-3 px-6 bg-primary-600 rounded-full inline-flex items-center gap-2 text-white font-medium text-base"
                to="/contact-us"
              >
                Contact Us <FaArrowRightLong className="text-2xl" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
