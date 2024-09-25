import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4">Explore the key features that make our academy the perfect choice for your education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Experienced Faculty</h3>
            <p className="mt-2 text-gray-500">Our qualified teachers ensure an excellent academic environment.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Modern Classrooms</h3>
            <p className="mt-2 text-gray-500">State-of-the-art classrooms equipped with the latest learning technologies.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Comprehensive Curriculum</h3>
            <p className="mt-2 text-gray-500">We offer a wide variety of courses to help students succeed in their careers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
