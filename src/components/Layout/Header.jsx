import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiCalendar } from 'react-icons/fi';
import Button from '../Common/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'EVENTS', path: '/events' }, // Add Events link
    { name: 'CSR PROJECTS', path: '/csr-projects' },
    { name: 'COMPLIANCE', path: '/compliance' },
    { name: 'BOARD', path: '/board-management' },
    { name: 'KNOWLEDGE HUB', path: '/knowledge-hub' },
    { name: 'MEDIA', path: '/digital-media' },
    { name: 'CERTIFICATES', path: '/certificates' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-primary/95 py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MSRS</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-dark">MAHA SHREE RUDRA</h1>
              <p className="text-xs text-secondary">SAMSTHANAM FOUNDATION</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-dark hover:text-secondary transition-colors duration-300 font-medium whitespace-nowrap ${
                    isActive ? 'text-secondary border-b-2 border-secondary' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Get Involved Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center space-x-1 text-dark hover:text-secondary transition-colors duration-300 font-medium whitespace-nowrap"
              >
                <span>GET INVOLVED</span>
                <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 animate-fade-in border border-gray-100"
                >
                  <Link to="/get-involved#individual" className="block px-5 py-3 hover:bg-primary transition-colors">
                    <div className="font-semibold">Individual Support</div>
                    <div className="text-xs text-gray-500">Make a personal contribution</div>
                  </Link>
                  <Link to="/get-involved#corporate" className="block px-5 py-3 hover:bg-primary transition-colors">
                    <div className="font-semibold">Corporate Partnership</div>
                    <div className="text-xs text-gray-500">Collaborate for CSR initiatives</div>
                  </Link>
                  <Link to="/get-involved#volunteer" className="block px-5 py-3 hover:bg-primary transition-colors">
                    <div className="font-semibold">Volunteer & Internship</div>
                    <div className="text-xs text-gray-500">Join our mission</div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button to="/donate" variant="primary" size="sm">
              DONATE
            </Button>
            <Button to="/schedule-meeting" variant="secondary" size="sm">
              MEETING
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden mt-4 pb-4 animate-slide-up max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-dark hover:text-secondary transition-colors py-2"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2">
                <div className="font-semibold text-dark mb-2">GET INVOLVED</div>
                <div className="ml-4 space-y-2">
                  <Link to="/get-involved#individual" className="block text-dark hover:text-secondary py-1">
                    Individual Support
                  </Link>
                  <Link to="/get-involved#corporate" className="block text-dark hover:text-secondary py-1">
                    Corporate Partnership
                  </Link>
                  <Link to="/get-involved#volunteer" className="block text-dark hover:text-secondary py-1">
                    Volunteer & Internship
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button to="/donate" variant="primary" fullWidth>
                  DONATE NOW
                </Button>
                <Button to="/schedule-meeting" variant="secondary" fullWidth>
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