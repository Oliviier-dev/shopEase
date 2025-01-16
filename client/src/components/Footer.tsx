import logoImage from '../assets/Group 1000006017.png';
import AppStore from '../assets/AppStore.png';
import GooglePlay from '../assets/GooglePlay.png';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const supportLinks = [
    { text: 'Help Center', href: '#' },
    { text: 'Contact Us', href: '#' },
    { text: 'FAQs', href: '#' },
  ];

  const accountLinks = [
    { text: 'Login', href: '#' },
    { text: 'Register', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];

  const quickLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Blog', href: '#' },
  ];

  return (
    <div className="bg-black py-4 font-outfit text-white">
      <div className="flex justify-between max-tablet:flex-wrap max-tablet:gap-12 px-12">
        {/* Logo Section */}
        <div>
          <img
            src={logoImage}
            alt="Company Logo"
            className="w-24"
          />
        </div>

        {/* Links Section */}
        <div className="flex gap-20 items-baseline max-tablet:flex-wrap">
          <FooterLinks title="Support" links={supportLinks} />
          <FooterLinks title="Account" links={accountLinks} />
          <FooterLinks title="Quick Links" links={quickLinks} />

          <div className="pt-4">
            <h1 className="text-lg font-semibold">Download Our App</h1>
            <div className="pt-4 flex gap-4">
              <a href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
                <img src={AppStore} alt="Download on the App Store" className="w-24" />
              </a>
              <a href="https://play.google.com/store" aria-label="Get it on Google Play">
                <img src={GooglePlay} alt="Get it on Google Play" className="w-24" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 p-0 mt-4">
        <p className="text-xs text-slate-200 text-center py-6">
          &copy; shopEase 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
