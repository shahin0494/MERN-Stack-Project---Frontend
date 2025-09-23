import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-18 ">
        {/* About Section */}
        <div  >
          <h2 className="text-lg font-semibold mb-4">ABOUT US</h2>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate dolorem veniam deserunt quisquam eius ad hic maxime dicta
            ipsum nemo itaque necessitatibus quas nobis, illum voluptate,
            pariatur recusandae alias harum!
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">NEWSLETTER</h2>
          <p className="text-sm text-gray-300 mb-3">
            Stay updated with our latest trends
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md text-black border bg-gray-500 focus:outline-none"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md text-black font-bold">
              →
            </button>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">FOLLOW US</h2>
          <p className="text-sm text-gray-300 mb-3">Let us be social</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <p className="text-center text-sm text-gray-400">
          Copyright © 2023 All rights reserved | This website is made with{" "}
          <span className="text-yellow-400">♥</span> by Shahin
        </p>
      </div>
    </footer>

    
  );
};

export default Footer;