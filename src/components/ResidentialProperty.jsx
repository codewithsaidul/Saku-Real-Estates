
import PropTypes from 'prop-types'
import { FaBath, FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResidentialProperty = ({residential}) => {
    const {
      id,
      estate_title,
      image_url,
      segment_name,
      price,
      status,
      area,
      bedrooms,
      bathrooms,
    } = residential;
  return (
    <div className="py-5 relative rounded-xl px-4 border border-[#1D5D9B] hover:border-transparent hover:shadow-custom duration-500 hover:duration-500">
      <figure>
        <img className="rounded-lg" src={image_url} alt="" />
      </figure>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-[#1D5D9B] mb-2">
          {estate_title}
        </h2>
        <span className="text-xl font-medium text-gray-500">
          Categori: {segment_name}
        </span>

        <div className="flex justify-between mt-5">
          <p className="flex items-center gap-3 text-lg">
            <FaBed size={20} className="text-[#1D5D9B]" />
            <span>{bedrooms} Bed Room</span>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <FaBath size={20} className="text-[#1D5D9B]" />
            <span>{bathrooms} Bath Room</span>
          </p>
        </div>

        <div className="flex justify-between my-5">
          <span className="text-lg font-normal text-gray-400">
            Price {price}
          </span>
          <span className="text-lg font-normal text-gray-400">Area {area}</span>
        </div>

        <div className="flex justify-center mt-5">
          <Link to={`/estates/${id}`}>
            <button className="text-xl font-bold py-3 text-black hover:text-white rounded-full px-7 border border-[#1D5D9B] hover:bg-[#1D5D9B] duration-1000">
              View Property
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute top-0 -right-5 rotate-[30deg]">
        <p className="text-xl font-bold text-white py-2 px-7 bg-[#1D5D9B] rounded-full">
          For {status}
        </p>
      </div>
    </div>
  );
}

ResidentialProperty.propTypes = {
    residential: PropTypes.object
}

export default ResidentialProperty