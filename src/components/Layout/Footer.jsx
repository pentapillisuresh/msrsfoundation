import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiFacebook, 
  FiInstagram, 
  FiLinkedin, 
  FiHeart, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiExternalLink
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const upiQrCodeUrl = "./images/qr.png";

  return (
    <footer className="bg-[#EAF3E6] text-[#2D3A2D] pt-20 pb-8 relative overflow-hidden font-sans border-t border-[#5C6F5C]/10">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/images/msrs.png" alt="MSRS Logo" className="w-12 h-12 object-contain" />
              <h2 className="text-xl font-bold text-[#5C6F5C] tracking-tight leading-tight">
                MSRS<br/>Foundation
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#5C6F5C]/70 italic">
              "Excellence in Service, Transparency in Governance."
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FiInstagram, FiLinkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full border border-[#5C6F5C]/20 flex items-center justify-center text-[#5C6F5C] hover:bg-[#5C6F5C] hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Core Pages) */}
          <div>
            <h4 className="text-[#5C6F5C] text-xs font-bold uppercase tracking-[0.2em] mb-7">Navigation</h4>
            <ul className="grid grid-cols-1 gap-4">
              <li><Link to="/" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> Home</Link></li>
              <li><Link to="/about" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> About Us</Link></li>
              <li><Link to="/csr-projects" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> CSR Projects</Link></li>
              <li><Link to="/events" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> Events & Initiatives</Link></li>
              <li><Link to="/digital-media" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> Digital Media</Link></li>
              <li><Link to="/knowledge-hub" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all flex items-center gap-2 group"><FiArrowRight className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-xs" /> Knowledge Hub</Link></li>
            </ul>
          </div>

          {/* Column 3: Governance & Get Involved */}
          <div>
            <h4 className="text-[#5C6F5C] text-xs font-bold uppercase tracking-[0.2em] mb-7">Governance & Action</h4>
            <ul className="space-y-4">
              <li><Link to="/compliance" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all">Compliance & Governance</Link></li>
              <li><Link to="/board-management" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all">Board Management</Link></li>
              <li><Link to="/certificates" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all">Statutory Certificates</Link></li>
              <li><Link to="/audit-reports" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] transition-all">Audit Reports</Link></li>
              <div className="pt-2 border-t border-[#5C6F5C]/10 mt-2">
                <li><Link to="/get-involved/volunteer" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] font-semibold flex items-center gap-1">Volunteer <FiExternalLink size={12}/></Link></li>
                <li><Link to="/get-involved/corporate" className="text-sm text-[#5C6F5C]/70 hover:text-[#5C6F5C] font-semibold flex items-center gap-1">Corporate Partnership <FiExternalLink size={12}/></Link></li>
              </div>
            </ul>
          </div>

          {/* Column 4: Contact & Donate */}
          <div className="lg:border-l lg:border-[#5C6F5C]/10 lg:pl-12">
            <h4 className="text-[#5C6F5C] text-xs font-bold uppercase tracking-[0.2em] mb-7">Contact Support</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#5C6F5C]/80">
                <FiPhone className="text-[#5C6F5C]" /> <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5C6F5C]/80">
                <FiMail className="text-[#5C6F5C]" /> <span>info@msrsfoundation.org</span>
              </div>
            </div>

            <div className="bg-white/50 p-4 rounded-2xl border border-white shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <img src={upiQrCodeUrl} alt="QR" className="w-20 h-20 object-contain rounded-lg bg-white p-1" />
                <div className="text-right">
                  <p className="text-[10px] text-[#5C6F5C]/50 leading-tight uppercase font-bold">Secure<br/>Donation</p>
                  <FiHeart className="inline-block text-[#5C6F5C] mt-2" size={20} />
                </div>
              </div>
              <button 
                onClick={() => navigate('/donate')}
                className="w-full bg-[#5C6F5C] hover:bg-[#3d4b3d] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                DONATE NOW
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5C6F5C]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-[0.2em] text-[#5C6F5C]/40 uppercase">
            © {currentYear} MSRS Foundation • All Rights Reserved
          </p>
          
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.1em] text-[#5C6F5C]/60 uppercase">
            <Link to="/contact" className="hover:text-[#5C6F5C] transition-colors">Get In Touch</Link>
            <Link to="/schedule-meeting" className="hover:text-[#5C6F5C] transition-colors">Schedule Meeting</Link>
            <Link to="/get-involved/individual" className="hover:text-[#5C6F5C] transition-colors">Individual Support</Link>
          </div>
        </div>
      </div>

      {/* Subtle Background Mark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[12vw] font-black text-[#5C6F5C] whitespace-nowrap text-center">MSRS</h1>
      </div>
    </footer>
  );
};

export default Footer;