import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Bytelight</h2>
          <p className="text-sm opacity-80 leading-relaxed">
            Empowering businesses with cutting-edge solutions. Let Bytelight guide your digital transformation journey with expertise and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            {["About Us", "Services", "Portfolio", "Careers", "Blog"].map((item) => (
              <li
                key={item}
                className="text-sm cursor-pointer hover:text-yellow-400 transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Resources</h2>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms of Service", "FAQs", "Contact Us", "Support"].map((item) => (
              <li
                key={item}
                className="text-sm cursor-pointer hover:text-yellow-400 transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-sm opacity-80 mb-4">
            123 Innovation Lane, Tech City, CA 94016
          </p>
          <p className="text-sm opacity-80 mb-4">
            Email:{" "}
            <a
              href="mailto:info@bytelight.com"
              className="hover:text-yellow-400"
            >
              info@bytelight.com
            </a>
          </p>
          <p className="text-sm opacity-80">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-yellow-400"
            >
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      {/* Divider and Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="w-[85%] mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © 2024 Bytelight. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {["facebook", "twitter", "linkedin", "github"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-all"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
