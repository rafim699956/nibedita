import { Link, useLocation } from "react-router";
import footerLogo from "../assets/images/footerlogo.png";
import footerShape from "../assets/images/footershape.png";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={`${
        pathname == "/" ? "bg-primary-600" : "bg-transparent"
      } relative z-10 before:content-[""] before:absolute before:inset-0 before:bg-secondary-800 before:-z-10 before:rounded-tl-4xl lg:before:rounded-tl-[5rem] before:rounded-tr-4xl lg:before:rounded-tr-[5rem]`}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-[27.88%] w-full bg-no-repeat bg-center bg-cover -z-10"
        style={{ backgroundImage: `url(${footerShape})` }}
      ></div>
      <div className="container pt-10 md:pt-16 lg:pt-24 pb-8 md:pb-12 lg:pb-17.5 flex flex-col lg:flex-row gap-8 justify-between">
        <div className="space-y-4 md:space-y-6 lg:space-y-7.5 lg:max-w-[28.813rem]">
          <div>
            <Link to="/">
              <img
                className="inline-block object-cover w-[8.552rem]"
                src={footerLogo}
                alt="logo"
              />
            </Link>
          </div>
          <p className="text-[#E5E5E5] text-base leading-6.5">
            Dedicated to improving community well-being, we focus on
            foundational aspects like health and gender equality. By empowering
            women at the ground level, we aim to build stronger families and a
            more equitable society.
          </p>
          <div className="pt-2.5 flex items-center gap-4">
            <Link
              to=""
              className="inline-flex items-center justify-center text-white lg:text-2xl size-8 lg:size-12 rounded-full border border-[#737373] bg-secondary-700 transition-all duration-300 ease-linear transform hover:-translate-y-2"
            >
              <FaFacebookF />
            </Link>
            <Link
              to=""
              className="inline-flex items-center justify-center text-white lg:text-lg size-8 lg:size-12 rounded-full border border-[#737373] bg-secondary-700 transition-all duration-300 ease-linear transform hover:-translate-y-2"
            >
              <BsTwitterX />
            </Link>
            <Link
              to=""
              className="inline-flex items-center justify-center text-white lg:text-2xl size-8 lg:size-12 rounded-full border border-[#737373] bg-secondary-700 transition-all duration-300 ease-linear transform hover:-translate-y-2"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className="lg:pt-7.5 flex flex-wrap gap-6">
          <div className="space-y-4 md:space-y-6 lg:space-y-8 min-w-42.5">
            <h6 className="text-white">Our services</h6>
            <ul className="space-y-2 lg:space-y-4">
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Canteen
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6 lg:space-y-8 min-w-42.5">
            <h6 className="text-white">Quick links</h6>
            <ul className="space-y-2 lg:space-y-4">
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6 lg:space-y-8 min-w-42.5">
            <h6 className="text-white">Company</h6>
            <ul className="space-y-2 lg:space-y-4">
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link className="text-base leading-6.5 text-[#E5E5E5]" to="">
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-t-secondary-700 py-9">
        <div className="container">
          <p className="text-center text-white text-base">
            copyright © 2025{" "}
            <Link className="text-white" to="/">
              Nebedita
            </Link>{" "}
            all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
