import About from "../components/About";
import Banner from "../components/Banner";
import Residentials from "../components/Residentials";
// import BannerImg from '../assets/building.jpg'

const Home = () => {
  return (
    <div id="#home" className="w-full max-w-[1170px] mx-auto">
      <div className="mt-10">
        <Banner />
      </div>

      <div className="mt-20 mb-20">
        <About />

        <div className="mt-20">
          <Residentials />
        </div>
      </div>
    </div>
  );
}

export default Home