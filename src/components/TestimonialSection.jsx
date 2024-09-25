import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">What Our Students Say</h2>
          <p className="text-gray-600 mt-4">Hear from some of our successful graduates and their experiences at our academy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-500">"Future Leaders Academy helped me achieve my goals and prepared me for a successful career."</p>
            <h4 className="mt-4 font-semibold text-indigo-600">— Usama</h4>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-500">"The support from the teachers and staff was incredible throughout my journey."</p>
            <h4 className="mt-4 font-semibold text-indigo-600">— Shahzad Zia</h4>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-500">"A great learning environment with excellent facilities. Highly recommended!"</p>
            <h4 className="mt-4 font-semibold text-indigo-600">— Zohaib Imtiaz</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
