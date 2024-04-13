import { Swiper, SwiperSlide } from "swiper/react";
import BannerImg1 from "../assets/banner1.jpg";
import BannerImg2 from "../assets/banner2.jpg";
import BannerImg3 from "../assets/banner3.jpg";
import BannerImg4 from "../assets/banner4.jpg";
import BannerImg5 from "../assets/banner5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
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
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg1}
              alt=""
            />
            <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold text-white mb-3"
            >
              Real State Company
            </p>
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-3xl md:text-6xl font-bold text-white mb-5 w-full md:w-[600px] mx-auto"
            >
              Creative Style For Your Next Home
            </h1>

            <button
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000"
            >
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
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg2}
              alt=""
            />
            <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold text-white mb-3"
            >
              Real State Company
            </p>
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-3xl md:text-6xl font-bold text-white mb-5 w-full md:w-[600px] mx-auto"
            >
              Saku Estates: Your Gateway to Serenity
            </h1>

            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000"
            >
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
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg3}
              alt=""
            />
            <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold text-white mb-3"
            >
              Real State Company
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-3xl md:text-6xl font-bold text-white mb-5 w-full md:w-[600px] mx-auto"
            >
              Discover Tranquility at Saku Estates
            </h1>

            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000"
            >
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
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg4}
              alt=""
            />
            <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold text-white mb-3"
            >
              Real State Company
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-3xl md:text-6xl font-bold text-white mb-5 w-full md:w-[600px] mx-auto"
            >
              Saku Estates: Where Luxury Meets Serenity
            </h1>

            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000"
            >
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
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="h-[300px] md:h-[600px] rounded-lg"
              src={BannerImg5}
              alt=""
            />
            <div className="hero-overlay bg-opacity-80 rounded-lg"></div>
          </figure>

          <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold text-white mb-3"
            >
              Real State Company
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-3xl md:text-6xl font-bold text-white mb-5 w-full md:w-[600px] mx-auto"
            >
              Experience Blissful Living at Saku Estates
            </h1>

            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="py-2 px-5 border border-[#1D5D9B]  text-white bg-transparent hover:bg-[#1D5D9B] rounded-full duration-1000"
            >
              Explore Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
