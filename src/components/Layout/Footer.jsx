import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-bold">MSRS</span>
              </div>
              <div>
                <h3 className="font-bold">MAHA SHREE RUDRA</h3>
                <p className="text-sm">SAMSTHANAM FOUNDATION</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Committed to Excellence in Service, Transparency in Governance, and Impact in Action.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/csr-projects" className="text-gray-400 hover:text-secondary transition-colors">CSR Projects</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-secondary transition-colors">Donate Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-1 text-secondary" />
                <span className="text-gray-400 text-sm">Registered Office Address, City, State - PIN Code</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-secondary" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-secondary" />
                <span className="text-gray-400">msrsfoundation2025@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <FiYoutube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 MAHA SHREE RUDRA SAMSTHANAM FOUNDATION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;