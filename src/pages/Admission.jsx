import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center sm:mt-24">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://example.com"
        className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 248 204"
          className="h-5 w-5 text-[#1d9bf0]"
        >
          <path
            fill="currentColor"
            d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
          />
        </svg>
        <p className="text-sm font-semibold text-[#1d9bf0]">Introducing New Feature</p>
      </a>

      <h1 className="mt-8 max-w-sm bg-gradient-to-br from-gray-500 via-teal-500 to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
        Admission Open Now
      </h1>

      <span className="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-800">
        Join us for a world-class education experience! Enroll today to secure your future.
      </span>

      <div className="mt-12">
        <Link
          to="https://admission-delta.vercel.app/admission"
          target='blank'
          className="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-500 hover:bg-teal-600 transition-all"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default AdmissionPage;
