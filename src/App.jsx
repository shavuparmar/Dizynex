import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Backgroundimg from "./assets/Background.png";
import aboutImg from "./assets/About.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import projectImg from "./assets/Projects.png";
import contactImg from "./assets/contact.jpg";
import Logo from "./assets/Logo.png"
const serviceIcons = [icon1, icon2, icon3, icon4, icon5];

export default function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#0d0d1f] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between  p-6 bg-white text-black shadow-md">
        <div className="text-xl font-bold">    <img src={Logo} alt="Logo" className="w-36 h-auto object-contain" />  </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Service</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white text-black p-4">
          <a href="#" className="block py-2 hover:text-blue-600">Home</a>
          <a href="#about" className="block py-2 hover:text-blue-600">About</a>
          <a href="#services" className="block py-2 hover:text-blue-600">Service</a>
          <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
        </nav>
      )}

      {/* Hero Section */}
      <section
        className="relative p-35 flex flex-col lg:flex-row items-center justify-between bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${Backgroundimg})`,
          height: '810px',
          width: "auto"
        }}
      >
        <div className="max-w-xl bg-opacity-60 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Crafting Interfaces<br />Shaping Experiences
          </h1>
          <p className="mb-6 text-gray-300">
            At DIZYNEX, we craft cutting-edge web experiences, stunning graphics, intuitive UI/UX, and bold poster designs.
            Your brand’s visual identity — elevated with precision and creativity.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Explore Work</button>
            <button className="bg-white text-black px-5 py-2 rounded mt-2 hover:bg-gray-200">Let's Build Together</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 flex flex-col md:flex-row items-center gap-10 bg-[#10102a]" data-aos="fade-up">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 leading-loose">
            At DIZYNEX, design is more than visuals — it's an experience. We're a creative studio dedicated to crafting modern
            websites, intuitive user interfaces, striking graphic designs, and impactful posters that resonate with your audience.
            We combine aesthetics with purpose, ensuring every design tells a story, captures attention, and delivers results.
          </p>
        </div>
        <img src={aboutImg} alt="About Us" className="rounded-lg md:w-1/2 mt-6 md:mt-0 w-full" />
      </section>

      {/* Services */}
      <section id="services" className="p-10 bg-[#1a1a33]" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-10">Service</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Web Development', 'UI Design', 'Poster Design', 'Web Design', 'Web Design'].map((service, i) => (
            <div key={i} className="bg-[#2a2a4d] p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <img src={serviceIcons[i]} alt={service} className="mx-auto mb-4 h-12" />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-300">
                Modern, responsive, and fast-loading websites built to impress and convert.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="p-10 bg-[#10102a]" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#2a2a4d] rounded-lg overflow-hidden">
              <img src={projectImg} alt="Project" className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Portfolio</h3>
                <p className="text-sm text-gray-300 mb-3">This project showcases your skill and talent.</p>
                <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 bg-#88AAb">Visit Projects</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 flex flex-col md:flex-row bg-[#1a1a33] gap-6" data-aos="fade-up">
        <img src={contactImg} alt="Contact" className="md:w-1/2 rounded-lg w-full" />
        <div className="md:w-1/2 md:pl-10 w-full">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-[#4a4a6a] text-white" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-[#4a4a6a] text-white" />
            <input type="text" placeholder="Your Number" className="w-full p-2 rounded bg-[#4a4a6a] text-white" />
            <textarea placeholder="Message" className="w-full p-2 rounded bg-[#4a4a6a] text-white" rows="4" />
            <button className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-[#2a2a4d] text-gray-300 text-sm px-6 py-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
    {/* Logo and Branding */}
    <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0 gap-3">
      <img src={Logo} alt="DIZYNEX Logo" className="w-36 h-auto" />
      <span className="text-xl font-bold text-white tracking-wide"></span>
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
      <a href="/about" className="hover:text-white transition-colors">About</a>
      <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
      <a href="/services" className="hover:text-white transition-colors">Services</a>
      <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
    </nav>

    {/* Footer Copyright */}
    <div className="text-center md:text-right text-gray-400 text-xs">
      © 2025 — Built with pixels & passion by <a href="https://twitter.com/shavuparmar" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@shavuparmar</a>
    </div>
  </div>
</footer>


    </div>
  );
}
