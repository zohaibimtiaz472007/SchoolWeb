import React from 'react';

const AboutUs = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto py-10">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Our Company" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About Us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
            voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
