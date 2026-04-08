import React, { useState } from 'react';
import { FiX, FiCheckCircle, FiShield, FiPhone, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';
import { FaCertificate, FaUser, FaRegFlag } from 'react-icons/fa';

const VerificationPopup = ({ onClose, onSuccess, isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    isIndian: true,
    countryName: '',
    state: '',
    district: '',
    otp: '',
    isOtpVerified: false
  });
  const [generatedOtp, setGeneratedOtp] = useState('');

  const indiaData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}\n(This is a demo - in production, this would be sent via SMS to ${formData.phone})`);
  };

  const verifyOtp = () => {
    if (formData.otp === generatedOtp) {
      setFormData(prev => ({ ...prev, isOtpVerified: true }));
      alert('OTP verified successfully!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (!formData.isIndian && !formData.countryName) {
      alert('Please enter your country name');
      return;
    }
    
    if (formData.isIndian && (!formData.state || !formData.district)) {
      alert('Please select state and district');
      return;
    }
    
    if (!formData.isOtpVerified) {
      alert('Please verify your phone number with OTP');
      return;
    }
    
    const userData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      isIndian: formData.isIndian,
      countryName: formData.countryName,
      state: formData.state,
      district: formData.district,
      verifiedAt: new Date().toISOString()
    };
    
    localStorage.setItem('msrs_verified_user', JSON.stringify(userData));
    onSuccess(userData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[1000] flex items-center justify-center animate-fadeIn p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleUp">
        <div className="bg-gradient-to-r from-[#667A62] to-[#4A5C46] p-5 text-white sticky top-0 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <FaCertificate className="text-2xl" />
            <div>
              <h3 className="text-lg font-bold">Verify Your Identity</h3>
              <p className="text-xs opacity-90">Please complete verification to view reports</p>
            </div>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
            <FiX size={16} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
              <FaUser className="inline mr-2 text-[#667A62]" size={14} />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
              <FiPhone className="inline mr-2 text-[#667A62]" size={14} />
              Phone Number *
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                required
              />
              {!formData.isOtpVerified && (
                <button
                  type="button"
                  onClick={sendOtp}
                  className="px-4 py-2 bg-[#667A62] text-white rounded-lg hover:bg-[#4A5C46] transition text-sm font-semibold whitespace-nowrap"
                >
                  Send OTP
                </button>
              )}
            </div>
          </div>
          
          {!formData.isOtpVerified && generatedOtp && (
            <div>
              <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">Enter OTP</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-semibold"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}
          
          {formData.isOtpVerified && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
              <p className="text-green-600 text-sm font-semibold">✓ Phone number verified successfully!</p>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
              <FiMail className="inline mr-2 text-[#667A62]" size={14} />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
              <FaRegFlag className="inline mr-2 text-[#667A62]" size={14} />
              Are you an Indian citizen? *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isIndian"
                  value="true"
                  checked={formData.isIndian === true}
                  onChange={() => setFormData(prev => ({ ...prev, isIndian: true, countryName: '' }))}
                  className="w-4 h-4 text-[#667A62] cursor-pointer"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isIndian"
                  value="false"
                  checked={formData.isIndian === false}
                  onChange={() => setFormData(prev => ({ ...prev, isIndian: false, state: '', district: '' }))}
                  className="w-4 h-4 text-[#667A62] cursor-pointer"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
          
          {!formData.isIndian && (
            <div>
              <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                <FiGlobe className="inline mr-2 text-[#667A62]" size={14} />
                Country Name *
              </label>
              <input
                type="text"
                name="countryName"
                value={formData.countryName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                placeholder="Enter your country name"
                required={!formData.isIndian}
              />
            </div>
          )}
          
          {formData.isIndian && (
            <>
              <div>
                <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                  <FiMapPin className="inline mr-2 text-[#667A62]" size={14} />
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                  required={formData.isIndian}
                >
                  <option value="">Select State</option>
                  {Object.keys(indiaData).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              {formData.state && (
                <div>
                  <label className="block text-sm font-semibold text-[#2C3E2B] mb-2">
                    <FiMapPin className="inline mr-2 text-[#667A62]" size={14} />
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#667A62]"
                    required={formData.isIndian}
                  >
                    <option value="">Select District</option>
                    {indiaData[formData.state]?.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}
          
          <button
            type="submit"
            disabled={!formData.isOtpVerified}
            className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              formData.isOtpVerified
                ? 'bg-[#667A62] text-white hover:bg-[#4A5C46] transform hover:scale-[1.02]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <FiCheckCircle size={18} /> Verify & Access Reports
          </button>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <FiShield className="text-blue-600" />
              <span className="text-xs font-semibold text-blue-800">Verification Benefits:</span>
            </div>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>✓ One-time verification only</li>
              <li>✓ Secure access to all reports</li>
              <li>✓ Your data is stored locally for convenience</li>
              <li>✓ No need to verify again on next visit</li>
            </ul>
          </div>
        </form>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease; }
        .animate-scaleUp { animation: scaleUp 0.3s ease; }
      `}</style>
    </div>
  );
};

export default VerificationPopup;