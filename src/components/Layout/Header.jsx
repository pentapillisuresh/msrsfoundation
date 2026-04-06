import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiHeart, FiCalendar, FiUsers, FiBriefcase, FiBookOpen, FiAward, FiShield, FiVideo, FiTrendingUp } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  
  const dropdownTimeoutRef = useRef(null);
  const exploreTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleExploreEnter = () => {
    if (exploreTimeoutRef.current) clearTimeout(exploreTimeoutRef.current);
    setExploreOpen(true);
  };

  const handleExploreLeave = () => {
    exploreTimeoutRef.current = setTimeout(() => {
      setExploreOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (exploreTimeoutRef.current) clearTimeout(exploreTimeoutRef.current);
    };
  }, []);

  // Navigation items with proper title casing (first letter capital, remaining small)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'CSR Projects', path: '/csr-projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        
        .font-heading {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-white shadow-xl py-2' 
            : 'bg-transparent py-5'
        }`}
        style={{ height: scrolled ? '70px' : '80px' }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">

            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/msrs.png" 
                  alt="MSRS Logo"
                  className={`relative w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 group-hover:scale-105 ${
                    !scrolled ? 'brightness-0 invert' : ''
                  }`}
                />
              </div>
              <div className="hidden md:block">
                <p className={`font-heading text-base font-bold tracking-wide leading-tight transition-colors duration-300 ${
                  !scrolled ? 'text-white' : 'text-gray-800'
                }`}>
                  MAHA SHREE RUDRA
                </p>
                <p className="font-body text-[10px] font-semibold text-secondary tracking-wider">
                  SAMSTHANAM FOUNDATION
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden xl:flex items-center space-x-6 h-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative font-body font-semibold text-sm tracking-wide transition-all duration-300 flex items-center h-full ${
                      isActive 
                        ? 'text-secondary' 
                        : !scrolled 
                          ? 'text-white hover:text-secondary' 
                          : 'text-gray-700 hover:text-secondary'
                    }`
                  }
                >
                  {link.name}
                  {({ isActive }) => isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
                  )}
                </NavLink>
              ))}

              {/* GET INVOLVED DROPDOWN */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button className={`flex items-center space-x-1.5 font-body font-semibold text-sm tracking-wide transition-all duration-300 group ${
                  !scrolled ? 'text-white hover:text-secondary' : 'text-gray-700 hover:text-secondary'
                }`}>
                  <span>Get Involved</span>
                  <FiChevronDown className={`text-sm transition-all duration-300 ${dropdownOpen ? 'rotate-180 text-secondary' : 'group-hover:text-secondary'}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 overflow-hidden z-50">
                    <Link 
                      to="/get-involved#individual" 
                      className="flex items-start gap-3 px-5 py-3 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiHeart className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Individual Support</div>
                        <div className="font-body text-xs text-gray-500">Make a personal contribution</div>
                      </div>
                    </Link>
                    <Link 
                      to="/get-involved#corporate" 
                      className="flex items-start gap-3 px-5 py-3 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiBriefcase className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Corporate Partnership</div>
                        <div className="font-body text-xs text-gray-500">Collaborate for CSR initiatives</div>
                      </div>
                    </Link>
                    <Link 
                      to="/get-involved#volunteer" 
                      className="flex items-start gap-3 px-5 py-3 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiUsers className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Volunteer & Internship</div>
                        <div className="font-body text-xs text-gray-500">Join our mission</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* EXPLORE DROPDOWN */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleExploreEnter}
                onMouseLeave={handleExploreLeave}
              >
                <button className={`flex items-center space-x-1.5 font-body font-semibold text-sm tracking-wide transition-all duration-300 group ${
                  !scrolled ? 'text-white hover:text-secondary' : 'text-gray-700 hover:text-secondary'
                }`}>
                  <span>Explore</span>
                  <FiChevronDown className={`text-sm transition-all duration-300 ${exploreOpen ? 'rotate-180 text-secondary' : 'group-hover:text-secondary'}`} />
                </button>

                {exploreOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 overflow-hidden z-50">
                    <Link 
                      to="/events" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiCalendar className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Events & Initiatives</div>
                        <div className="font-body text-xs text-gray-500">Upcoming events and campaigns</div>
                      </div>
                    </Link>
                    <Link 
                      to="/knowledge-hub" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiBookOpen className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Knowledge Hub</div>
                        <div className="font-body text-xs text-gray-500">Reports, research & case studies</div>
                      </div>
                    </Link>
                    <Link 
                      to="/board-management" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiTrendingUp className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Board & Management</div>
                        <div className="font-body text-xs text-gray-500">Our leadership team</div>
                      </div>
                    </Link>
                    <Link 
                      to="/digital-media" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiVideo className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Digital Media</div>
                        <div className="font-body text-xs text-gray-500">Videos, photos & social media</div>
                      </div>
                    </Link>
                    <Link 
                      to="/certificates" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiAward className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Statutory Certificates</div>
                        <div className="font-body text-xs text-gray-500">Government approvals & registrations</div>
                      </div>
                    </Link>
                    <Link 
                      to="/compliance" 
                      className="flex items-start gap-3 px-5 py-2.5 hover:bg-primary transition-all duration-300 group"
                      onClick={() => setExploreOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <FiShield className="text-secondary text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-body font-semibold text-gray-800 group-hover:text-secondary transition-colors">Compliance & Governance</div>
                        <div className="font-body text-xs text-gray-500">Legal & regulatory compliance</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA BUTTONS - Fixed alignment for Login button */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                to="/donate"
                className="px-4 py-1.5 rounded-full bg-secondary text-white font-body font-semibold text-xs tracking-wide transition-all duration-300 hover:bg-secondary/90 hover:shadow-md hover:scale-105 active:scale-95"
              >
                DONATE
              </Link>
              <Link 
                to="/schedule-meeting"
                className={`px-4 py-1.5 rounded-full border-2 font-body font-semibold text-xs tracking-wide transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 ${
                  !scrolled 
                    ? 'border-white text-white hover:bg-white hover:text-secondary' 
                    : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                MEETING
              </Link>
              <Link 
                to="/login"
                className={`px-4 py-1.5 rounded-full font-body font-semibold text-xs tracking-wide transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 ${
                  !scrolled 
                    ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30' 
                    : 'bg-primary/80 text-gray-800 hover:bg-primary border border-gray-200'
                }`}
              >
                Login
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className={`xl:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                !scrolled 
                  ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white' 
                  : 'bg-primary hover:bg-primary/80 text-gray-800'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 
                <FiX className="text-xl" /> : 
                <FiMenu className="text-xl" />
              }
            </button>
          </div>

          {/* MOBILE MENU */}
          <div 
            className={`xl:hidden transition-all duration-400 ease-out transform overflow-hidden ${
              isOpen ? 'max-h-[85vh] opacity-100 translate-y-0 mt-4' : 'max-h-0 opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white rounded-xl shadow-2xl p-5 border border-gray-100">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'bg-secondary text-white' 
                          : 'text-gray-800 hover:bg-primary'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* GET INVOLVED - Mobile */}
                <div className="pt-3">
                  <div className="font-body font-bold text-secondary mb-2 px-4 flex items-center gap-2">
                    <FiHeart className="text-sm" /> Get Involved
                  </div>
                  <div className="ml-4 space-y-2 border-l-2 border-secondary/30 pl-4">
                    <Link 
                      to="/get-involved#individual" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiHeart className="text-secondary text-sm" /> Individual Support
                    </Link>
                    <Link 
                      to="/get-involved#corporate" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiBriefcase className="text-secondary text-sm" /> Corporate Partnership
                    </Link>
                    <Link 
                      to="/get-involved#volunteer" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiUsers className="text-secondary text-sm" /> Volunteer & Internship
                    </Link>
                  </div>
                </div>

                {/* EXPLORE - Mobile */}
                <div className="pt-3">
                  <div className="font-body font-bold text-secondary mb-2 px-4 flex items-center gap-2">
                    <FiBookOpen className="text-sm" /> Explore
                  </div>
                  <div className="ml-4 space-y-2 border-l-2 border-secondary/30 pl-4">
                    <Link 
                      to="/events" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiCalendar className="text-secondary text-sm" /> Events & Initiatives
                    </Link>
                    <Link 
                      to="/knowledge-hub" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiBookOpen className="text-secondary text-sm" /> Knowledge Hub
                    </Link>
                    <Link 
                      to="/board-management" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiTrendingUp className="text-secondary text-sm" /> Board & Management
                    </Link>
                    <Link 
                      to="/digital-media" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiVideo className="text-secondary text-sm" /> Digital Media
                    </Link>
                    <Link 
                      to="/certificates" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiAward className="text-secondary text-sm" /> Statutory Certificates
                    </Link>
                    <Link 
                      to="/compliance" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-800 hover:bg-primary transition-all duration-300 font-body text-sm"
                    >
                      <FiShield className="text-secondary text-sm" /> Compliance & Governance
                    </Link>
                  </div>
                </div>

                {/* BUTTONS - Mobile */}
                <div className="flex flex-col space-y-3 pt-5 mt-3 border-t border-gray-200">
                  <Link 
                    to="/donate" 
                    onClick={() => setIsOpen(false)}
                    className="text-center px-5 py-2.5 rounded-full bg-secondary text-white font-body font-semibold text-sm transition-all duration-300 hover:bg-secondary/90 shadow-md"
                  >
                    DONATE NOW
                  </Link>
                  <Link 
                    to="/schedule-meeting" 
                    onClick={() => setIsOpen(false)}
                    className="text-center px-5 py-2.5 rounded-full border-2 border-secondary text-secondary font-body font-semibold text-sm transition-all duration-300 hover:bg-secondary hover:text-white"
                  >
                    SCHEDULE MEETING
                  </Link>
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="text-center px-5 py-2.5 rounded-full bg-primary/80 text-gray-800 font-body font-semibold text-sm transition-all duration-300 hover:bg-primary border border-gray-200"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;