import React, { useState } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiHeart, FiCopy, FiCheck } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("msrsfoundation@okhdfcbank");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const upiQrCodeUrl = "./images/qr.png";

  return (
    <footer className="bg-[#EAF3E6] text-[#5C6F5C] pt-20 pb-10 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Top Section: 5-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/msrs.png" 
                alt="MSRS Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#5C6F5C] tracking-tight">MSRS Foundation</h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-[#5C6F5C]/70">
              Committed to Excellence in Service, Transparency in Governance, and Impact in Action.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#d1a284]/20 flex items-center justify-center text-[#5C6F5C] hover:bg-[#d1a284] hover:text-white transition-all duration-300">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#d1a284]/20 flex items-center justify-center text-[#5C6F5C] hover:bg-[#d1a284] hover:text-white transition-all duration-300">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#d1a284]/20 flex items-center justify-center text-[#5C6F5C] hover:bg-[#d1a284] hover:text-white transition-all duration-300">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#5C6F5C] font-semibold mb-6">Social Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Rural Development</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Education For All</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Health Initiatives</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Environmental Care</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#5C6F5C] font-semibold mb-6">Foundation</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">CSR Projects</li>
              <li className="hover:text-[#d1a284] cursor-pointer transition-colors">Media Gallery</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#5C6F5C] font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#d1a284] transition-colors flex items-center gap-2">
                <span>📍</span> Vizag, Andhra Pradesh
              </li>
              <li className="hover:text-[#d1a284] transition-colors flex items-center gap-2">
                <span>📞</span> +91 XXXXX XXXXX
              </li>
              <li className="hover:text-[#d1a284] transition-colors flex items-center gap-2">
                <span>✉️</span> info@msrsfoundation.org
              </li>
              <li className="hover:text-[#d1a284] transition-colors flex items-center gap-2">
                <span>⏰</span> Mon – Sat: 9AM – 6PM
              </li>
            </ul>
          </div>

          {/* Column 5 - Donation Section */}
          <div>
            <h4 className="text-[#5C6F5C] font-semibold mb-6 flex items-center gap-2">
              <FiHeart className="text-[#d1a284]" />
              Donate Now
            </h4>
            
            {/* UPI QR Code */}
            <div className="bg-white p-3 rounded-xl mb-4 inline-block shadow-lg">
              <img 
                src={upiQrCodeUrl}
                alt="UPI QR Code" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            <button className="w-full bg-[#d1a284] hover:bg-[#c4926e] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm flex items-center justify-center gap-2">
              <FiHeart size={16} />
              Donate Now
            </button>
            
            <p className="text-xs text-[#5C6F5C] mt-3 text-center">
              ✓ 80G Tax Exemption Available
            </p>
          </div>
        </div>

        {/* Background Watermark */}
        <div className="absolute bottom-16 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <h1 className="text-[18vw] font-black text-[#5C6F5C] whitespace-nowrap leading-none tracking-tighter text-center">
            MSRS 
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d1a284]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#5C6F5C]/60">
          <p>© {currentYear} MSRS Foundation. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#d1a284] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[#d1a284] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d1a284] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;