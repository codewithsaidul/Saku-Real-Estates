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
            Cozy Countryside Cottage
          </h1>
          <p className="text-xl font-semibold text-gray-600 mt-2">
            Category: Senior living communities
          </p>

          <p className="text-base font-normal text-gray-400 my-3">
            Escape to the tranquility of the countryside in this charming
            cottage nestled amidst rolling hills and scenic landscapes. Step
            inside and be greeted by a cozy living space adorned with rustic
            touches and warm wood accents. The heart of the home is the spacious
            living room, where you can curl up by the fireplace with a good book
            or gather with loved ones for movie night. The well-appointed
            kitchen features modern appliances and ample counter space, making
            meal prep a breeze. Retreat to the comfort of the master bedroom,
            complete with a plush bed and ensuite bathroom with a luxurious
            soaking tub. Outside, you&apos;ll find a sprawling garden oasis,
            perfect for enjoying morning coffee or hosting al fresco dinners
            with friends. With its peaceful setting and charming character, this
            countryside cottage offers the perfect escape from the hustle and
            bustle of city life.
          </p>

          <div className="flex flex-col md:flex-row md:items-center items-start gap-y-5 md:gap-x-10 mt-3">
            <div className='flex gap-x-3'>
              <p className="flex  gap-x-2 items-center text-lg font-medium text-gray-400">
                <FaBed size={20} className="text-[#1D5D9B]" />
                <span>2 Bed Room</span>
              </p>
              <p className="flex gap-x-2 items-center text-lg font-medium text-gray-400">
                <FaBath size={20} className="text-[#1D5D9B]" />
                <span>2 Bath Room</span>
              </p>
            </div>

            <p className="text-xl font-semibold text-[#1D5D9B]">
              Area 1200 sq ft
            </p>
          </div>

          <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-12 mt-7">
            <p className="text-xl font-semibold text-slate-600">
              Price: $400,000
            </p>
            <span className="flex gap-x-5 items-center text-base sm:text-xl font-semibold text-slate-600">
              Location :
              <span className="flex items-center gap-2">
                <FaLocationDot />
                Rural Area, Outskirts of City XYZ
              </span>
            </span>
          </div>

          <div className="mt-7 flex gap-x-3 items-center">
            <h2 className="text-xl font-semibold">Facilities: </h2>

            <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-2">
              <span className="text-base font-normal text-gray-400">
                fireplace
              </span>
              <span className="text-base font-normal text-gray-400">
                garden
              </span>
              <span className="text-base font-normal text-gray-400">deck</span>
              <span className="text-base font-normal text-gray-400">
                BBQ area
              </span>
              <span className="text-base font-normal text-gray-400">pond</span>
            </div>
          </div>
          <div className="absolute top-6 -left-12 -rotate-45">
            <p className="text-xl font-semibold text-white py-2 px-12 bg-[#1D5D9B] rounded-full">
              For Sale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialDetails