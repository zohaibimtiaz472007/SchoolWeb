import { motion } from "framer-motion";
import Team from "../components/Team";
import AboutUs from "../components/AboutUs";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
     
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-black py-16">
      {/* Scrolling News Bar */}
      <div className="absolute top-0 w-full overflow-hidden bg-gray-900">
        <div className="flex animate-scroll whitespace-nowrap py-3 text-white">
          <p className="mx-4 text-lg font-semibold">Welcome to the Future of Tech — 2030 and Beyond!</p>
          <p className="mx-4 text-lg font-semibold">Innovating with AI & Blockchain | Cybersecurity Evolution</p>
          <p className="mx-4 text-lg font-semibold">Empowering the Next Generation | Global Digital Transformation</p>
        </div>
      </div>

      {/* About Content */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us: Shaping the Future
      </motion.h2>

      <motion.p
        className="mt-8 max-w-2xl text-center text-xl leading-relaxed text-gray-300"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        At 2030 Tech, we push the boundaries of innovation. Our cutting-edge solutions are crafted to address the
        challenges of tomorrow, from AI to quantum computing. Join us as we embark on this journey to shape the future
        of technology.
      </motion.p>

      <motion.div
        className="mt-12 flex gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link to={'https://admission-delta.vercel.app/learnMore'} target="blank" className="px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition-all">
          Learn More
        </Link>
        <Link to={'https://admission-delta.vercel.app/admission'} className="px-6 py-2 rounded-full bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all">
          Join Us
        </Link>
      </motion.div>

    </section>

    {/* <Team /> */}
    <AboutUs/>
   
    </>
  );
};

export default AboutSection;
