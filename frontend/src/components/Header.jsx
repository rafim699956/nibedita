import { Link, NavLink } from "react-router";
import logo from "../assets/images/sitelogo.png";

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
  return (
    <header className="py-5 bg-white">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <Link>
            <img className="w-[9.282rem]" src={logo} alt="site logo" />
          </Link>
          <nav className="flex items-center justify-end grow">
            <ul className="flex items-center">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
