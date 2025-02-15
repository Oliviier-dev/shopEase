import { Link } from "react-router-dom";
import AppStore from '../assets/AppStore.png';
import GooglePlay from '../assets/GooglePlay.png';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const shopLinks = [
    { text: 'Everything', href: 'shop' },
    { text: 'Widgets', href: 'widgets' },
    { text: 'Clothes', href: 'clothes' },
  ];

  const accountLinks = [
    { text: 'Login', href: 'login' },
    { text: 'Register', href: 'signup' },
  ];

  const quickLinks = [
    { text: 'Books', href: 'books' },
    { text: 'Careers', href: 'careers' },
    { text: 'Blog', href: 'blog' },
  ];

  return (
    <div className="bg-white py-8 font-outfit text-black border-t-2">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
          <div className="col-span-1 flex items-center justify-start">
            <Link to="/" className="text-3xl font-bold text-black">
              shopEase
            </Link>
          </div>

          <FooterLinks title="Account" links={accountLinks} />
          <FooterLinks title="Shop" links={shopLinks} />
          <FooterLinks title="Quick Links" links={quickLinks} />

          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-lg font-semibold mb-4">Download Our App</h1>
            <div className="flex gap-4">
              <a href="appstore" aria-label="Download on the App Store">
                <img
                  src={AppStore}
                  alt="Download on the App Store"
                  className="w-24 sm:w-32"
                />
              </a>
              <a href="googleplay" aria-label="Get it on Google Play">
                <img
                  src={GooglePlay}
                  alt="Get it on Google Play"
                  className="w-24 sm:w-32"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6">
          <p className="text-xs text-gray-600 text-center">
            &copy; shopEase 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;