import logoImage from '../assets/Group 1000006017.png';
import AppStore from '../assets/AppStore.png';
import GooglePlay from '../assets/GooglePlay.png';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const shopLinks = [
    { text: 'Everything', href: 'shop' },
    { text: 'Accessories', href: 'accessories' },
    { text: 'Clothes', href: 'clothes' },
  ];

  const accountLinks = [
    { text: 'Login', href: 'login' },
    { text: 'Register', href: 'signup' },
  ];

  const quickLinks = [
    { text: 'Books', href: 'books' },
    { text: 'Careers', href: '#' },
    { text: 'Blog', href: '#' },
  ];

  return (
    <div className="bg-black py-8 font-outfit text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
          {/* Logo Section */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 hidden sm:block">
            <img
              src={logoImage}
              alt="Company Logo"
              className="w-24 sm:w-32 lg:w-40"
            />
          </div>

          {/* Links Section */}
          <FooterLinks title="Account" links={accountLinks} />
          <FooterLinks title="Shop" links={shopLinks} />
          <FooterLinks title="Quick Links" links={quickLinks} />

          {/* Download App Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-lg font-semibold mb-4">Download Our App</h1>
            <div className="flex gap-4">
              <a href="#" aria-label="Download on the App Store">
                <img
                  src={AppStore}
                  alt="Download on the App Store"
                  className="w-24 sm:w-32"
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img
                  src={GooglePlay}
                  alt="Get it on Google Play"
                  className="w-24 sm:w-32"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <p className="text-xs text-slate-200 text-center">
            &copy; shopEase 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
