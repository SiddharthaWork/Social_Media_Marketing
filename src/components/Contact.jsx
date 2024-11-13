import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0D0D17] min-h-[30vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24 flex justify-end ">
        <div className="max-w-3xl space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            What can we do for you?
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            We would be happy to discuss the project with you in person
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-white text-lg md:text-xl text-left">Call us on</span>
              <a
                href="tel:+9779802346665"
                className="text-white text-xl md:text-xl hover:text-blue-400 transition-colors"
              >
                +977 9802346665
              </a>
            </div>
            <button
              size="sm"
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white rounded-md px-8 py-4 text-lg"
            >
              Drop in a message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
