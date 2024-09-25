import React from 'react';

const ContactUsSection = () => {
  return (
    <section className="px-4 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            We’d love to hear from you. Reach out to us for any queries or information.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Our Address</h3>
            <p className="mt-2 text-gray-500">123 Academy Street, City, Country</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">Get in Touch</h3>
            <p className="mt-2 text-gray-500">
              Phone: <a href="tel:+1234567890" className="text-indigo-600">+923706419327</a>
            </p>
            <p className="mt-2 text-gray-500">
              Email: <a href="mailto:info@futureleadersacademy.com" className="text-indigo-600">zohaibimtiaz447@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
