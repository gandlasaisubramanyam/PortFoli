import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nuf8dr3",
        "template_oxpg0pa",
        form.current,
        "lPTjjb0dMgxUTP2VS"
      )
      .then(
        (result) => {
          toast.success("message sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section name="contact" className="w-full h-full bg-[#0a192f] py-4">
      <Toaster />
      <div className="pb-8  md:text-center lg:text-center">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contact
        </p>
        <div className="text-center grid justify-center mt-5">
          <h5 className="text-gray-300 text-xl flex py-3">
            <HiOutlineMail size={30} />
            <span className="px-2">gandlasai999@gmail.com </span>
          </h5>
          <h5 className="text-gray-300 text-xl flex">
            <FaPhoneVolume size={30} />
            <span className="px-2">6300002787</span>
          </h5>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[600px] w-full"
        >
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;