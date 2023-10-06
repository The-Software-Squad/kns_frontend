import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/footer";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      {/* header */}
      <div className=" font-montserrat text-center">
        <div className="py-20 flex flex-col items-center justify-center">
          <h1 className="text-center text-7xl lg:text-9xl font-black">
            Contact us
          </h1>
          <p className="my-5 text-xl font-semibold text-gray-400 w-[60%]">
            feel free to contact us for any questions or inquiries. We will get
            in touch with you as soon as possible.
          </p>
        </div>
      </div>
      {/* content */}
      <div className="px-20 flex items-center justify-center ">
        <form className=" w-[90%] lg:w-[50%]" action="" method="post">
          <input
            type="text"
            name="name"
            id="name"
            className="outline-none border-2 border-gray-400 w-full  py-4 px-6 "
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none border-2 border-gray-400 w-full  py-4 px-6 "
            placeholder="Your email"
            required
          />
          <input
            type="number"
            name="phone number"
            id="phoneNumber"
            className="outline-none border-2 border-gray-400 w-full  py-4 px-6 "
            placeholder="Your phone number"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="outline-none border-2 border-gray-400 w-full  py-4 px-6  rounded-xl m-2"
            placeholder="Enter your message here..."
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-xl text-white py-4 px-6 rounded-xl w-full m-2"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
