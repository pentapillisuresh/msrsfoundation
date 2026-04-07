import React, { useState } from 'react';
import { FiUsers, FiClock, FiHeart, FiAward, FiCheckCircle, FiSend, FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiBriefcase, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import Button from '../Common/Button';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
    address: '', linkedin: '', applicationType: '', preferredMode: '',
    areasOfInterest: [], qualification: '', occupation: '', skills: '',
    experience: '', startDate: '', duration: '', hoursPerWeek: '',
    motivation: '', contribution: '', feedback: '', declaration: false, rules: false
  });

  const areasList = [
    'Education & Teaching Support', 'Rural Development Programs', 'Women Empowerment Initiatives',
    'Health & Awareness Campaigns', 'Spiritual & Cultural Programs', 'CSR Project Execution',
    'Digital Media & Content Creation', 'Fundraising & Partnerships', 'Administration & Operations'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'declaration' || name === 'rules') {
        setFormData({ ...formData, [name]: checked });
      } else if (name === 'areasOfInterest') {
        const areas = [...formData.areasOfInterest];
        if (checked) areas.push(value);
        else {
          const index = areas.indexOf(value);
          if (index > -1) areas.splice(index, 1);
        }
        setFormData({ ...formData, areasOfInterest: areas });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Application:', formData);
    alert('Thank you for applying! Our team will contact you soon.');
  };

  return (
    <div>
      {/* Banner Section with 300px height */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/90 z-10"></div>
        <img 
          src="/images/volunteer-banner.jpg" 
          alt="Volunteer Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=300&fit=crop";
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Join Our Mission</h1>
            <p className="text-lg text-white/90">Your Time. Their Future. - Engage with us through volunteering and internships</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-gray-600 mt-2">Active Volunteers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-gray-600 mt-2">Hours Donated</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-gray-600 mt-2">Interns Trained</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-gray-600 mt-2">Satisfaction Rate</div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <FiHeart className="text-4xl text-secondary mx-auto mb-3" />
              <h4 className="font-bold text-dark mb-2">Make an Impact</h4>
              <p className="text-sm text-gray-600">Directly contribute to social change</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center">
              <FiUsers className="text-4xl text-secondary mx-auto mb-3" />
              <h4 className="font-bold text-dark mb-2">Build Network</h4>
              <p className="text-sm text-gray-600">Connect with like-minded people</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <FiAward className="text-4xl text-secondary mx-auto mb-3" />
              <h4 className="font-bold text-dark mb-2">Certificate</h4>
              <p className="text-sm text-gray-600">Get recognition for your service</p>
            </div>
          </div>

          {/* Application Form */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-4 font-heading">Apply Now</h3>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Fill out the form below to begin your journey with MSRS Foundation
            </p>

            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-white rounded-2xl p-8 shadow-xl">
              {/* Section 1: Personal Information */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiUser className="mr-2 text-secondary" /> Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="fullName" placeholder="Full Name *" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <input type="date" name="dateOfBirth" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <select name="gender" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}>
                    <option value="">Gender *</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <input type="tel" name="phone" placeholder="Phone Number *" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email Address *" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <input type="text" name="address" placeholder="Address (City, State, Country) *" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <input type="url" name="linkedin" placeholder="LinkedIn Profile (Optional)" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all md:col-span-2" onChange={handleChange} />
                </div>
              </div>

              {/* Section 2: Application Type */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiBriefcase className="mr-2 text-secondary" /> Application Type
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select name="applicationType" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}>
                    <option value="">Applying As *</option>
                    <option>Volunteer</option>
                    <option>Intern</option>
                  </select>
                  <select name="preferredMode" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}>
                    <option value="">Preferred Mode *</option>
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Section 3: Areas of Interest */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiTrendingUp className="mr-2 text-secondary" /> Areas of Interest
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {areasList.map((area, idx) => (
                    <label key={idx} className="flex items-center space-x-2 p-2 hover:bg-primary rounded-lg transition-all cursor-pointer">
                      <input type="checkbox" name="areasOfInterest" value={area} onChange={handleChange} className="rounded text-secondary focus:ring-secondary" />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Skills & Experience */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiBookOpen className="mr-2 text-secondary" /> Skills & Experience
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="qualification" placeholder="Educational Qualification *" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <input type="text" name="occupation" placeholder="Current Occupation" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <textarea name="skills" placeholder="Relevant Skills (e.g., Teaching, Design, Management, Social Work, IT) *" rows="3" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all md:col-span-2" onChange={handleChange}></textarea>
                  <textarea name="experience" placeholder="Previous Volunteer/Work Experience (if any)" rows="3" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all md:col-span-2" onChange={handleChange}></textarea>
                </div>
              </div>

              {/* Section 5: Availability */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiClock className="mr-2 text-secondary" /> Availability
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" name="startDate" required className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange} />
                  <select name="duration" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}>
                    <option value="">Duration *</option>
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>More than 6 Months</option>
                  </select>
                  <select name="hoursPerWeek" className="p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all md:col-span-2" onChange={handleChange}>
                    <option value="">Hours per Week *</option>
                    <option>5–10 hrs</option>
                    <option>10–20 hrs</option>
                    <option>20+ hrs</option>
                  </select>
                </div>
              </div>

              {/* Section 6: Motivation Statement */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary flex items-center">
                  <FiHeart className="mr-2 text-secondary" /> Motivation Statement
                </h4>
                <div className="space-y-4">
                  <textarea name="motivation" placeholder="Why do you want to join MSRS Foundation? *" rows="3" required className="w-full p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}></textarea>
                  <textarea name="contribution" placeholder="How can you contribute to our mission? *" rows="3" required className="w-full p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}></textarea>
                </div>
              </div>

              {/* Section 7: Feedback */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Feedback & Suggestions</h4>
                <textarea name="feedback" placeholder="Any feedback or suggestions for us?" rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" onChange={handleChange}></textarea>
              </div>

              {/* Section 8: Declaration */}
              <div className="mb-8 space-y-3 p-4 bg-primary rounded-xl">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" name="declaration" onChange={handleChange} className="w-5 h-5 rounded text-secondary focus:ring-secondary" />
                  <span className="text-gray-700">I hereby declare that the information provided is true and correct.</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" name="rules" onChange={handleChange} className="w-5 h-5 rounded text-secondary focus:ring-secondary" />
                  <span className="text-gray-700">I agree to abide by the rules and values of the Foundation.</span>
                </label>
              </div>

              <Button type="submit" variant="primary" fullWidth size="lg" className="flex items-center justify-center space-x-2">
                <FiSend className="mr-2" /> Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForm;