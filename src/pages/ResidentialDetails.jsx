import { FaBath, FaBed } from 'react-icons/fa';
// import ResientialBannerIMG from '../assets/apartment1.jpg'
import { FaLocationDot } from 'react-icons/fa6';
import { useLoaderData, useParams } from "react-router-dom";


const ResidentialDetails = () => {

    const residentials = useLoaderData();
    const {id} = useParams();

    
    const residentailId = parseInt(id)

    const residential = residentials.find(
      (resident) => resident.id === residentailId
    );

  return (
    <div className="max-w-[1170px] mx-auto px-5">
      <div className="relative mt-10">
        <figure className="hero">
          <img
            className="w-full h-96 rounded-lg"
            src={residential.image_url}
            alt="image"
          />
          <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
        </figure>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D5D9B] mt-5">
            {residential.estate_title}
          </h1>
          <p className="text-xl font-semibold text-gray-600 mt-2">
            Category: {residential.segment_name}
          </p>

          <p className="text-base font-normal text-gray-400 my-3">
            {residential.description}
          </p>

          <div className="flex flex-col md:flex-row md:items-center items-start gap-y-5 md:gap-x-10 mt-3">
            <div className="flex gap-x-3">
              <p className="flex  gap-x-2 items-center text-lg font-medium text-gray-400">
                <FaBed size={20} className="text-[#1D5D9B]" />
                <span>{residential.bedrooms} Bed Room</span>
              </p>
              <p className="flex gap-x-2 items-center text-lg font-medium text-gray-400">
                <FaBath size={20} className="text-[#1D5D9B]" />
                <span>{residential.bathrooms} Bath Room</span>
              </p>
            </div>

            <p className="text-xl font-semibold text-[#1D5D9B]">
              Area {residential.area}
            </p>
          </div>

          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-12 mt-7">
            <p className="text-xl font-semibold text-slate-600">
              Price: {residential.price}
            </p>
            <span className="flex gap-x-5 items-center text-base sm:text-xl font-semibold text-slate-600">
              Location :
              <span className="flex items-center gap-2">
                <FaLocationDot />
                {residential.location}
              </span>
            </span>
          </div>

          <div className="mt-7 flex gap-x-3 items-center">
            <h2 className="text-xl font-semibold">Facilities: </h2>

            <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2">
              <span className="text-base font-normal text-gray-400">
                {residential.facilities[0]}
              </span>
              <span className="text-base font-normal text-gray-400">
                {residential.facilities[1]}
              </span>
              <span className="text-base font-normal text-gray-400">
                {residential.facilities[2]}
              </span>
              <span className="text-base font-normal text-gray-400">
                {residential.facilities[3]}
              </span>
              <span className="text-base font-normal text-gray-400">
                {residential.facilities[4]}
              </span>
            </div>
          </div>
          <div className="absolute top-6 -left-12 -rotate-45">
            <p className="text-xl font-semibold text-white py-2 px-12 bg-[#1D5D9B] rounded-full">
              For {residential.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialDetails