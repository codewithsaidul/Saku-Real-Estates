import { CiCircleCheck } from 'react-icons/ci';
import AboutImg from '../assets/banner5.jpg'
const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 mb-16">
        <figure className="w-full h-96 relative z-10">
          <img className="rounded-[300px_300px_30px_0] h-[400px] z-10" src={AboutImg} alt="" />
        </figure>

        <div className=''>
          <h2 className='text-3xl font-bold text-[#1D5D9B] mb-4'>About</h2>

          <div>
            <h3 className='text-2xl font-bold text-black mb-3'>Experts Forecasts And Insights Expected Trends</h3>
            <p className='text-lg font-normal text-gray-400 mb-5'>
              Realco Real Estate Company we understand that real estate
              transactions are not just about properties they are about people
              and their dreams. That&apos;s why we take the time to listen to
              your unique needs and aspirations
            </p>

            <ul className='flex flex-col gap-5'>
              <li className='flex items-center text-gray-400 font-medium'> <CiCircleCheck size={24} className='mr-3 text-[#1D5D9B] font-semibold'/> Special Security Services</li>
              <li className='flex items-center text-gray-400 font-medium'> <CiCircleCheck size={24} className='mr-3 text-[#1D5D9B] font-semibold'/> 24/7 Support Services</li>
              <li className='flex items-center text-gray-400 font-medium'> <CiCircleCheck size={24} className='mr-3 text-[#1D5D9B] font-semibold'/> Best Architecture Designer Hiring</li>
              <li className='flex items-center text-gray-400 font-medium'> <CiCircleCheck size={24} className='mr-3 text-[#1D5D9B] font-semibold'/> Easy To Payment System</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About