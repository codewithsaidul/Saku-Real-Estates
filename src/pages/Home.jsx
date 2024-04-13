import { Helmet } from "react-helmet-async";
import About from "../components/About";
import Banner from "../components/Banner";
// import Residentials from "../components/Residentials";
import { useLoaderData } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import ResidentialProperty from "../components/ResidentialProperty";
// import BannerImg from '../assets/building.jpg'

const Home = () => {

  const residentials = useLoaderData();

  return (
    <div id="#home" className="w-full px-5 max-w-[1170px] mx-auto">
      <Helmet>
        <title>Saku Estates || Home</title>
      </Helmet>
      <div className="mt-10">
        <Banner />
      </div>

      <div className="mt-20 mb-20">
        <About />

        <div className="mt-20">
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="text-center mt-40 mb-20"
          >
            <h2
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="text-2xl font-bold text-[#1D5D9B] mb-1"
            >
              PROPERTIES
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="text-4xl font-bold"
            >
              Explore Our Latest & Featured Properties
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Residential Item 1 */}

            {residentials.map((residential) => (
              <ResidentialProperty
                key={residential.id}
                residential={residential}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Home