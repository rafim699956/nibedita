import React, { useState } from "react";
import { CiLocationOn, CiMail, CiShare2 } from "react-icons/ci";
import { FaPhoneAlt, FaYoutube } from "react-icons/fa";
import {
  FaArrowRightLong,
  FaSquareXTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addFromData } from "../features/contactusSection/contactusSlice";
import { IoLogoFacebook } from "react-icons/io";

const ContactUsSection = () => {
  const data = useSelector((state) => state.contactus);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addFromData({
        id: crypto.randomUUID(),
        name,
        email,
        subject,
        message,
      })
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <section className="bg-primary-600">
      <div className="lg:max-w-291! container space-y-6 md:space-y-10 lg:space-y-14">
        <div className="max-w-195.5 mx-auto text-center space-y-4">
          <h2 className="text-white">{data.sectionTitle}</h2>
          <p className="text-white text-xl leading-8">{data.sectionDes}</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:justify-between">
            <div className="bg-white p-6 pb-8 md:p-8 md:pb-9 lg:p-10 lg:pb-12 border border-[#E0C3E4] rounded-xl inline-flex flex-col gap-6 w-full lg:max-w-163.5 lg:flex-1">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fName">Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Type your full name"
                      id="fName"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Type your email address"
                      id="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="Type your subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="min-h-39.5 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                    id="message"
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
              </form>
            </div>
            <div className="bg-white py-8 px-4 lg:py-10 lg:px-6 rounded-xl border border-[#E0C3E4] w-full lg:flex-1 lg:max-w-113.5 divide-y divider-[#E5E5E5] space-y-5">
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
              <div className="px-4 pb-5 space-y-4">
                <CiShare2 className="text-2xl text-primary-600" />
                <div className="space-y-1">
                  <h6>Social Media</h6>
                  <div className="flex items-center gap-3">
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      to="/"
                    >
                      <IoLogoFacebook />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      to="/"
                    >
                      <FaSquareXTwitter />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      to="/"
                    >
                      <FaYoutube />
                    </Link>
                    <Link
                      className="border border-border p-[0.563rem] flex items-center justify-center transition-all duration-300 ease-linear transform hover:-translate-y-1"
                      to="/"
                    >
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5802250977913!2d90.43197577589736!3d23.76234418831673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a76b70127%3A0x1551dab4feda6614!2sConcerned%20Women%20For%20Family%20Development%20(CWFD)!5e0!3m2!1sen!2sbd!4v1766406899203!5m2!1sen!2sbd"
              width="100%"
              height="460"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
