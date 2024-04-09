import ResidentialIMG1 from '../assets/apartment1.jpg';
import ResidentialIMG2 from '../assets/townhose1.jpg';
import ResidentialIMG3 from '../assets/signle_house1.jpg';
import { FaBath, FaBed } from 'react-icons/fa';
const Residentials = () => {
  return (
    <div>
      <div className="text-center mt-40 mb-20">
        <h2 className="text-2xl font-bold text-[#1D5D9B] mb-1">PROPERTIES</h2>
        <h3 className="text-4xl font-bold">
          Explore Our Latest & Featured Properties
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Residential Item 1 */}
        <div className="py-5 relative rounded-xl px-4 border border-[#1D5D9B] hover:border-transparent hover:shadow-custom duration-500 hover:duration-500">
          <figure>
            <img className="rounded-lg" src={ResidentialIMG1} alt="" />
          </figure>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#1D5D9B] mb-2">
              Modern Apartment in Downtown
            </h2>
            <span className="text-xl font-medium text-gray-500">
              Categori: Apartments
            </span>

            <div className="flex justify-between mt-5">
              <p className="flex items-center gap-3 text-lg">
                <FaBed size={20} className="text-[#1D5D9B]" />
                <span>2 Bed Room</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <FaBath size={20} className="text-[#1D5D9B]" />
                <span>2 Bath Room</span>
              </p>
            </div>

            <div className="flex justify-between my-5">
              <span className="text-lg font-normal text-gray-400">
                Price $800,000
              </span>
              <span className="text-lg font-normal text-gray-400">
                Area 600 sq ft
              </span>
            </div>

            <div className="flex justify-center mt-5">
              <button className="text-xl font-bold py-3 text-black hover:text-white rounded-full px-7 border border-[#1D5D9B] hover:bg-[#1D5D9B] duration-1000">
                View Property
              </button>
            </div>
          </div>

          <div className="absolute top-0 -right-7 rotate-[30deg]">
            <p className="text-xl font-bold text-white py-2 px-7 bg-[#1D5D9B] rounded-full">
              For Sale
            </p>
          </div>
        </div>


        {/* Residential Item 2 */}
        <div className="py-5 relative rounded-xl px-4 border border-[#1D5D9B] hover:border-transparent hover:shadow-custom duration-500 hover:duration-500">
          <figure>
            <img className="rounded-lg" src={ResidentialIMG2} alt="" />
          </figure>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#1D5D9B] mb-2">
              Modern Apartment in Downtown
            </h2>
            <span className="text-xl font-medium text-gray-500">
              Categori: Apartments
            </span>

            <div className="flex justify-between mt-5">
              <p className="flex items-center gap-3 text-lg">
                <FaBed size={20} className="text-[#1D5D9B]" />
                <span>2 Bed Room</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <FaBath size={20} className="text-[#1D5D9B]" />
                <span>2 Bath Room</span>
              </p>
            </div>

            <div className="flex justify-between my-5">
              <span className="text-lg font-normal text-gray-400">
                Price $800,000
              </span>
              <span className="text-lg font-normal text-gray-400">
                Area 600 sq ft
              </span>
            </div>

            <div className="flex justify-center mt-5">
              <button className="text-xl font-bold py-3 text-black hover:text-white rounded-full px-7 border border-[#1D5D9B] hover:bg-[#1D5D9B] duration-1000">
                View Property
              </button>
            </div>
          </div>

          <div className="absolute top-0 -right-7 rotate-[30deg]">
            <p className="text-xl font-bold text-white py-2 px-7 bg-[#1D5D9B] rounded-full">
              For Sale
            </p>
          </div>
        </div>


        {/* Residential Item 3 */}
        <div className="py-5 relative rounded-xl px-4 border border-[#1D5D9B] hover:border-transparent hover:shadow-custom duration-500 hover:duration-500">
          <figure>
            <img className="rounded-lg" src={ResidentialIMG3} alt="" />
          </figure>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#1D5D9B] mb-2">
              Modern Apartment in Downtown
            </h2>
            <span className="text-xl font-medium text-gray-500">
              Categori: Apartments
            </span>

            <div className="flex justify-between mt-5">
              <p className="flex items-center gap-3 text-lg">
                <FaBed size={20} className="text-[#1D5D9B]" />
                <span>2 Bed Room</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <FaBath size={20} className="text-[#1D5D9B]" />
                <span>2 Bath Room</span>
              </p>
            </div>

            <div className="flex justify-between my-5">
              <span className="text-lg font-normal text-gray-400">
                Price $800,000
              </span>
              <span className="text-lg font-normal text-gray-400">
                Area 600 sq ft
              </span>
            </div>

            <div className="flex justify-center mt-5">
              <button className="text-xl font-bold py-3 text-black hover:text-white rounded-full px-7 border border-[#1D5D9B] hover:bg-[#1D5D9B] duration-1000">
                View Property
              </button>
            </div>
          </div>

          <div className="absolute top-0 -right-7 rotate-[30deg]">
            <p className="text-xl font-bold text-white py-2 px-7 bg-[#1D5D9B] rounded-full">
              For Sale
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Residentials