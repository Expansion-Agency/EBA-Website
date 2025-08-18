import React from "react";
import GetInTouch from "./getInTouch";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="">
      <GetInTouch />
      <div className="flex flex-col justify-center my-10 md:my-20 md:w-1/2 mx-6 md:mx-auto">
        <h1 className="text-4xl md:text-8xl max-w-2xl text-left mb-2">
          {"We'd love to hear from you!"}
        </h1>
        <p className="max-w-lg">
          Whether you have a project in mind, want to collaborate, or just have
          a question, feel free to reach out. Our team is ready to help.
        </p>
        <form className="flex flex-col gap-3 md:gap-6 mt-10 md:mt-20">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border rounded-full p-4 md:w-xl"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="border rounded-full p-4 md:w-xl"
          />
          <textarea
            name="msg"
            id="msg"
            placeholder="Write your message"
            className="border md:w-xl h-50 rounded-3xl p-4 mb-2"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 p-3 bg-purple-200 hover:bg-purple-100 transform ease-in-out duration-200 w-30 rounded-full cursor-pointer text-black font-black uppercase"
          >
            Send <IoIosSend size={22} />
          </button>
        </form>
      </div>
      <section className="flex flex-col md:flex-row justify-between gap-2 md:mt-40 my-20 px-6 md:px-20">
        <div>
          <h3 className="font-semibold text-lg mb-2">Our Office</h3>
          <div className="flex flex-col">
            <p className="text-gray-700">Expansion Branding Agency</p>
            <p className="text-gray-700">Alf Maskan, Cairo, Egypt</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <a
            href="tel:+2012345678"
            className="text-gray-700 hover:text-purple-500"
          >
            +20 123 456 78
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <a
            href="mailto:expansionbrandingagency@gmail.com"
            className="text-gray-700 hover:text-purple-500"
          >
            expansionbrandingagency@gmail.com
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 items-center">
            {/* Add your social icons here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
