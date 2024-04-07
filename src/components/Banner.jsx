import { Swiper, SwiperSlide } from "swiper/react";
import BannerImg1 from "../assets/banner1.jpg";
import BannerImg2 from "../assets/banner2.jpg";
import BannerImg3 from "../assets/banner3.jpg";
import BannerImg4 from "../assets/banner4.jpg";
import BannerImg5 from "../assets/banner5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {/* Banner Slider One */}
      <SwiperSlide>
        <div className="relative">
          <figure className="w-full hero rounded-lg">
            <img
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg1}
              alt=""
            />
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10 md:text-left">
            <p className="text-lg font-semibold text-white mb-3">
              Real State Company
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-5 md:w-[600px]">
              Creative Style For Your Next Home
            </h1>

            <button className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Banner Slider Two */}
      <SwiperSlide>
        <div className="relative">
          <figure className="w-full hero rounded-lg">
            <img
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg2}
              alt=""
            />
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10 md:text-left">
            <p className="text-lg font-semibold text-white mb-3">
              Real State Company
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-5 md:w-[600px]">
              SakuBliss Estates: Your Gateway to Serenity
            </h1>

            <button className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Banner Slider Three */}
      <SwiperSlide>
        <div className="relative">
          <figure className="w-full hero rounded-lg">
            <img
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg3}
              alt=""
            />
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10 md:text-left">
            <p className="text-lg font-semibold text-white mb-3">
              Real State Company
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-5 md:w-[600px]">
              Discover Tranquility at SakuBliss Estates
            </h1>

            <button className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Banner Slider Four */}
      <SwiperSlide>
        <div className="relative">
          <figure className="w-full hero rounded-lg">
            <img
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg4}
              alt=""
            />
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10 md:text-left">
            <p className="text-lg font-semibold text-white mb-3">
              Real State Company
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-5 md:w-[600px]">
              SakuBliss Estates: Where Luxury Meets Serenity
            </h1>

            <button className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* Banner Slider Five */}
      <SwiperSlide>
        <div className="relative">
          <figure className="w-full hero rounded-lg">
            <img
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg5}
              alt=""
            />
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10 md:text-left">
            <p className="text-lg font-semibold text-white mb-3">
              Real State Company
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-5 md:w-[600px]">
              Experience Blissful Living at SakuBliss Estates
            </h1>

            <button className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000">
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
