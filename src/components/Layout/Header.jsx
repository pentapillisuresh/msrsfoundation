import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from '../Common/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SHORT NAVBAR
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CSR PROJECTS', path: '/csr-projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* LOGO - MSRS TEXT ONLY */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 group">
            <div className="flex flex-col">
            <img 
  src="/images/msrs.png" 
  alt="MSRS Logo"
  className="w-10 h-10 md:w-12 md:h-12 object-contain"
/>
            </div>
            <div className="hidden md:block ml-2 pl-2 border-l-2 border-secondary/30">
              <p className="text-xs text-dark/80 font-medium">MAHA SHREE RUDRA</p>
              <p className="text-[10px] text-secondary">SAMSTHANAM FOUNDATION</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center space-x-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-dark hover:text-secondary font-semibold whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-secondary' : ''
                  }`
                }
              >
                {link.name}
                {({ isActive }) => isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
                )}
              </NavLink>
            ))}

            {/* GET INVOLVED */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-dark hover:text-secondary font-semibold transition-colors duration-300">
                <span>GET INVOLVED</span>
                <FiChevronDown className={`text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-2 animate-fade-in border border-gray-100">
                  <Link 
                    to="/get-involved#individual" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Individual Support</div>
                    <div className="text-xs text-gray-500">Make a personal contribution</div>
                  </Link>
                  <Link 
                    to="/get-involved#corporate" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Corporate Partnership</div>
                    <div className="text-xs text-gray-500">Collaborate for CSR initiatives</div>
                  </Link>
                  <Link 
                    to="/get-involved#volunteer" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Volunteer & Internship</div>
                    <div className="text-xs text-gray-500">Join our mission</div>
                  </Link>
                </div>
              )}
            </div>

            {/* EXPLORE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button className="flex items-center space-x-1 text-dark hover:text-secondary font-semibold transition-colors duration-300">
                <span>EXPLORE</span>
                <FiChevronDown className={`text-sm transition-transform duration-300 ${exploreOpen ? 'rotate-180' : ''}`} />
              </button>

              {exploreOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-2 animate-fade-in border border-gray-100">
                  <Link 
                    to="/events" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Events & Initiatives</div>
                    <div className="text-xs text-gray-500">Upcoming events and campaigns</div>
                  </Link>
                  <Link 
                    to="/knowledge-hub" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Knowledge Hub</div>
                    <div className="text-xs text-gray-500">Reports, research & case studies</div>
                  </Link>
                  <Link 
                    to="/board-management" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Board & Management</div>
                    <div className="text-xs text-gray-500">Our leadership team</div>
                  </Link>
                  <Link 
                    to="/digital-media" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Digital Media</div>
                    <div className="text-xs text-gray-500">Videos, photos & social media</div>
                  </Link>
                  <Link 
                    to="/certificates" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Statutory Certificates</div>
                    <div className="text-xs text-gray-500">Government approvals & registrations</div>
                  </Link>
                  <Link 
                    to="/compliance" 
                    className="block px-5 py-3 hover:bg-primary transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="font-semibold text-dark group-hover:text-secondary">Compliance & Governance</div>
                    <div className="text-xs text-gray-500">Legal & regulatory compliance</div>
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* CTA BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <Button to="/donate" variant="primary" size="sm">
              DONATE
            </Button>
            <Button to="/schedule-meeting" variant="secondary" size="sm">
              MEETING
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="xl:hidden w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className="text-2xl text-dark" /> : <FiMenu className="text-2xl text-dark" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="xl:hidden mt-4 pb-6 animate-slide-up max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-4">
            <div className="flex flex-col space-y-3">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive ? 'bg-secondary text-white' : 'text-dark hover:bg-secondary/10'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* GET INVOLVED - Mobile */}
              <div className="pt-2">
                <div className="font-semibold text-dark mb-2 px-4">GET INVOLVED</div>
                <div className="ml-4 space-y-2 border-l-2 border-secondary pl-4">
                  <Link 
                    to="/get-involved#individual" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Individual Support
                  </Link>
                  <Link 
                    to="/get-involved#corporate" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Corporate Partnership
                  </Link>
                  <Link 
                    to="/get-involved#volunteer" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Volunteer & Internship
                  </Link>
                </div>
              </div>

              {/* EXPLORE - Mobile */}
              <div className="pt-2">
                <div className="font-semibold text-dark mb-2 px-4">EXPLORE</div>
                <div className="ml-4 space-y-2 border-l-2 border-secondary pl-4">
                  <Link 
                    to="/events" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Events & Initiatives
                  </Link>
                  <Link 
                    to="/knowledge-hub" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Knowledge Hub
                  </Link>
                  <Link 
                    to="/board-management" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Board & Management
                  </Link>
                  <Link 
                    to="/digital-media" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Digital Media
                  </Link>
                  <Link 
                    to="/certificates" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Statutory Certificates
                  </Link>
                  <Link 
                    to="/compliance" 
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-dark hover:bg-secondary/10 transition-all"
                  >
                    Compliance & Governance
                  </Link>
                </div>
              </div>

              {/* BUTTONS - Mobile */}
              <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-gray-200">
                <Button to="/donate" variant="primary" fullWidth size="md">
                  DONATE NOW
                </Button>
                <Button to="/schedule-meeting" variant="secondary" fullWidth size="md">
                  SCHEDULE MEETING
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;