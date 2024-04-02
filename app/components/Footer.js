import React from "react";

const Footer = () => {
  return (
    <div id="contact-section" className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-5">
        <span className="text-2xl mr-2">3.</span> Contact
      </h1>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'm here to listen :)
          </p>
          <div className="flex justify-center">
            <a href="mailto:pramram.18@gmail.com">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Say Hello!
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
