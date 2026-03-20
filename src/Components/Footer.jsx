import logo from "../assets/logo1.png";
import footerbg from "../assets/24.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <div className="bg-[#F4F0E6] py-12 px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-16">

          {/* Left Side */}
          <div>
            <img src={logo} alt="logo" className="w-16 h-16 mb-4" />
            <h2 className="text-3xl font-bold text-[#331A00] mb-4" style={{ fontFamily: "cursive" }}>
              Espresso Emporium
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Always ready to be your friend. Come & Contact with us to share your
              memorable moments, to share with your best companion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <button className="border border-[#331A00] p-2 rounded text-[#331A00] hover:bg-[#331A00] hover:text-white transition">
                <FaFacebookF />
              </button>
              <button className="border border-[#331A00] p-2 rounded text-[#331A00] hover:bg-[#331A00] hover:text-white transition">
                <FaTwitter />
              </button>
              <button className="border border-[#331A00] p-2 rounded text-[#331A00] hover:bg-[#331A00] hover:text-white transition">
                <FaInstagram />
              </button>
              <button className="border border-[#331A00] p-2 rounded text-[#331A00] hover:bg-[#331A00] hover:text-white transition">
                <FaLinkedinIn />
              </button>
            </div>

            {/* Get in Touch */}
            <h3 className="text-2xl font-bold text-[#331A00] mb-4" style={{ fontFamily: "cursive" }}>
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <MdPhone className="text-[#331A00] text-lg" /> +88 01533 333 333
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-[#331A00] text-lg" /> info@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-[#331A00] text-lg" /> 72. Wall street, King Road, Dhaka
              </p>
            </div>
          </div>

          {/* Right Side - Connect Form */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#331A00] mb-3" style={{ fontFamily: "cursive" }}>
              Connect with Us
            </h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none bg-white"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded border border-gray-300 text-sm focus:outline-none bg-white resize-none"
              />
              <button className="self-start px-6 py-2 border border-[#331A00] rounded-full text-[#331A00] text-sm hover:bg-[#331A00] hover:text-white transition">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" text-center py-3" style={{ backgroundImage: `url(${footerbg})` }}>
        <p className="text-white text-sm">
          Copyright Espresso Emporium | All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;