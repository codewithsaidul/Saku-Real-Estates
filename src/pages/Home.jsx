import { Helmet } from "react-helmet-async";
import About from "../components/About";
import Banner from "../components/Banner";
import Residentials from "../components/Residentials";
import Testimonial from "../components/Testimonial";
// import BannerImg from '../assets/building.jpg'

const Home = () => {
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
          <Residentials />
        </div>


        <div className="mt-20">
          <Testimonial />
        </div>

       
      </div>
    </div>
  );
}

export default Home