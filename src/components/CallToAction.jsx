import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="px-4 py-24 bg-indigo-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white">Ready to Join Future Leaders Academy?</h2>
        <p className="mt-4 text-white text-lg">Take the first step toward a brighter future by enrolling with us today.</p>
        <div className="mt-8">
          <Link to="https://admission-delta.vercel.app/admission" target='blank' className="px-6 py-3 text-lg bg-white text-indigo-600 rounded-md hover:bg-gray-200">Enroll Now</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
