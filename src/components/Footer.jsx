import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-black py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-white">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold">2030 Tech</h1>
            <p className="mt-2 text-gray-300">
              Shaping the future of technology through innovation and education.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row">
            <div className="mr-10">
              <h2 className="font-semibold text-lg">Quick Links</h2>
              <ul className="mt-2 space-y-1">
                <li><Link to="/about" className="hover:text-teal-400">About Us</Link></li>
                <li><Link to="/admission" className="hover:text-teal-400">Admissions</Link></li>
                <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Follow Us</h2>
              <ul className="mt-2 flex space-x-4">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2.5a15.5 15.5 0 00-9 2.5 15.5 15.5 0 00-9 14.5h3.5a12 12 0 0112-12h3.5a15.5 15.5 0 00-1.5-3.5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22.46 6c-.77.35-1.6.58-2.47.68.89-.53 1.57-1.36 1.89-2.36-.83.49-1.75.84-2.73 1.03-.78-.83-1.89-1.34-3.12-1.34-2.35 0-4.26 1.91-4.26 4.26 0 .33.04.65.1.96-3.54-.18-6.68-1.87-8.77-4.43-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.79 1.88 3.55-.69-.02-1.34-.21-1.91-.53v.05c0 2.06 1.46 3.79 3.39 4.18-.36.1-.73.15-1.11.15-.27 0-.53-.02-.79-.07.53 1.66 2.07 2.87 3.89 2.9-1.43 1.12-3.23 1.79-5.2 1.79-.34 0-.67-.02-1-.07 1.85 1.18 4.04 1.87 6.39 1.87 7.66 0 11.87-6.36 11.87-11.87 0-.18 0-.36-.01-.54A8.54 8.54 0 0022.46 6z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0 6 6 0 0012 0zM16 18a6 6 0 01-12 0 6 6 0 0112 0zM20 8a6 6 0 00-4 10.46 6 6 0 004-10.46z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-300">
          <p>© 2024 2030 Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
