
// import { FaBath, FaBed } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";
import ResidentialProperty from './ResidentialProperty';
import { Helmet } from "react-helmet-async";



const Residentials = () => {
  const residentials = useLoaderData();
 
  return (
    <div className="max-w-[1170px] w-full mx-auto px-5">
      <Helmet>
        <title>Saku Estates || Estates</title>
      </Helmet>
      <div className="text-center mt-40 mb-20">
        <h2 className="text-2xl font-bold text-[#1D5D9B] mb-1">PROPERTIES</h2>
        <h3 className="text-4xl font-bold">
          Explore Our Latest & Featured Properties
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Residential Item 1 */}

        {residentials.map((residential) => (
          <ResidentialProperty key={residential.id} residential={residential} />
        ))}
      </div>
    </div>
  );
}

export default Residentials