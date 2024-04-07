// import { Link } from "react-router-dom";

import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 bg-black text-white">
      <footer className="max-w-[1170px] mx-auto py-20 px-4 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="mt-5">
            <h1 className="text-3xl md:text-5xl font-bold mb-7">
              SakuBliss Estates
            </h1>
            <p className="text-lg font-medium text-gray-500 w-full md:w-[500px]">
              SakuBliss Estates is a wonderful choice! It&apos;s memorable,
              elegant, and evokes a sense of comfort and contentment. With this
              name, potential visitors will likely anticipate finding luxurious
              and peaceful living spaces on your website.
            </p>

            <div className="mt-3 flex gap-x-5 justify-center md:justify-start">
              <a
                href="https://facebook.com/codewithsaidulwr"
                target="_blank"
                className="text-[#1D5D9B] font-bold border border-[#1D5D9B] p-5 rounded-full hover:text-white hover:bg-[#1D5D9B] duration-1000"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/codewithsaidul"
                target="_blank"
                className="text-[#1D5D9B] font-bold border border-[#1D5D9B] p-5 rounded-full hover:text-white hover:bg-[#1D5D9B] duration-1000"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/codewithsaidul"
                target="_blank"
                className="text-[#1D5D9B] font-bold border border-[#1D5D9B] p-5 rounded-full hover:text-white hover:bg-[#1D5D9B] duration-1000"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://github.com/codewithsaidul"
                target="_blank"
                className="text-[#1D5D9B] font-bold border border-[#1D5D9B] p-5 rounded-full hover:text-white hover:bg-[#1D5D9B] duration-1000"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-3 border-b pb-2">
              Company
            </h2>

            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href="#home"
                  className="text-lg text-slate-300 font-medium hover:text-[#1D5D9B] hover:font-bold duration-1000 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-slate-300 font-medium hover:text-[#1D5D9B] hover:font-bold duration-1000 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="text-lg text-slate-300 font-medium hover:text-[#1D5D9B] hover:font-bold duration-1000 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg text-slate-300 font-medium hover:text-[#1D5D9B] hover:font-bold duration-1000 cursor-pointer"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-8">Newsletter</h2>

            <div>
              <div className="pl-3 bg-gray-300 rounded-full flex justify-between">
                <input
                  type="text"
                  placeholder="Subscribed"
                  className="border-0 outline-none bg-transparent text-slate-600 font-medium"
                />
                <button className="py-3 px-7 bg-[#1D5D9B] font-bold rounded-[0_8px_8px_0]">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-500 font-medium mt-5">
                *Subscribe to our newsletter to receive early discount offers,
                updates and new products info.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-normal text-center mt-10 pt-10">&copy; 2023 Saku Estates by CodeWithSaidul</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
