import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const ContactUsSection = () => {
  const data = useSelector((state) => state.contactus);
  console.log(data);
  return (
    <section className="bg-primary-600">
      <div className="lg:max-w-291! container space-y-6 md:space-y-10 lg:space-y-14">
        <div className="max-w-195.5 mx-auto text-center space-y-4">
          <h2 className="text-white">{data.sectionTitle}</h2>
          <p className="text-white text-xl leading-8">{data.sectionDes}</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="bg-white p-6 pb-8 md:p-8 md:pb-9 lg:p-10 lg:pb-12 border border-[#E0C3E4] rounded-xl inline-flex flex-col gap-6 w-full lg:w-[57.37%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Type your full name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder="Type your email address" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="">Subject</label>
              <input type="text" placeholder="Type your subject" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="">Your Message</label>
              <textarea
                className="min-h-39.5 resize-none"
                name=""
                id=""
                placeholder="Type your message"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                className="py-6 px-8 rounded-full bg-primary-600 text-white cursor-pointer flex items-center gap-2 text-lg leading-none font-semibold"
                type="submit"
              >
                Send Message <FaArrowRightLong className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="bg-white py-8 px-4 lg:py-10 lg:px-6 rounded-xl border border-[#E0C3E4] w-full lg:w-[32.81%] divide-y divider-[#E5E5E5] space-y-5">
            <div className="px-4 pb-5 space-y-4">
              <CiLocationOn className="text-2xl text-primary-600" />
              <div className="space-y-1">
                <h6>Our Address</h6>
                <address>{data.address}</address>
              </div>
            </div>
            <div className="px-4 pb-5 space-y-4">
              <FaPhoneAlt className="text-2xl text-primary-600" />
              <div className="space-y-1">
                <h6>Contact Number</h6>
                <Link to={`tel:${data.contactNum}`}>{data.contactNum}</Link>
              </div>
            </div>
            <div className="px-4 pb-5 space-y-4">
              <CiMail className="text-2xl text-primary-600" />
              <div className="space-y-1">
                <h6>Our Email</h6>
                <Link to={`tel:${data.contactNum}`}>{data.ourEmail}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
