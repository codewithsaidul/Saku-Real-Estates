import { Link } from 'react-router-dom';
import NotFoundImg from '../assets/banner1.jpg'

const NotFoun = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${NotFoundImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">404</h1>
          <h3 className="mb-5 text-5xl font-bold">Page Not Found.</h3>
          <p className="mb-5 text-gray-400 font-medium">
            Sorry, the page you are looking for doesn’t exist. Go out, take a
            run around the block, or tap the button below.
          </p>
          <Link to="/">
            <button className="py-3 px-8 bg-transparent border border-[#1D5D9B] rounded-full hover:bg-[#1D5D9B] duration-1000">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoun