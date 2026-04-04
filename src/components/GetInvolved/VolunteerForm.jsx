import React, { useState } from 'react';
import Button from '../Common/Button';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', dateOfBirth: '', gender: '', phone: '', email: '',
    address: '', linkedin: '', applicationType: '', preferredMode: '',
    areasOfInterest: [], qualification: '', occupation: '', skills: '',
    experience: '', startDate: '', duration: '', hoursPerWeek: '',
    motivation: '', contribution: '', feedback: '', declaration: false
  });

  const areasList = [
    'Education & Teaching Support', 'Rural Development Programs', 'Women Empowerment Initiatives',
    'Health & Awareness Campaigns', 'Spiritual & Cultural Programs', 'CSR Project Execution',
    'Digital Media & Content Creation', 'Fundraising & Partnerships', 'Administration & Operations'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'declaration') {
        setFormData({ ...formData, declaration: checked });
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
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-dark mb-4">Join Our Mission</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your Time. Their Future. - Engage with us through volunteering and internships to contribute your skills.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-white rounded-2xl p-8 shadow-xl">
        {/* Section 1: Personal Information */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <input type="date" name="dateOfBirth" placeholder="Date of Birth *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <select name="gender" className="p-3 border rounded-lg" onChange={handleChange}>
              <option value="">Gender *</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="tel" name="phone" placeholder="Phone Number *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <input type="text" name="address" placeholder="Address (City, State, Country) *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile (Optional)" className="p-3 border rounded-lg" onChange={handleChange} />
          </div>
        </div>

        {/* Section 2: Application Type */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Application Type</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="applicationType" className="p-3 border rounded-lg" onChange={handleChange}>
              <option value="">Applying As *</option>
              <option>Volunteer</option>
              <option>Intern</option>
            </select>
            <select name="preferredMode" className="p-3 border rounded-lg" onChange={handleChange}>
              <option value="">Preferred Mode *</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>

        {/* Section 3: Areas of Interest */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Areas of Interest</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {areasList.map((area, idx) => (
              <label key={idx} className="flex items-center space-x-2">
                <input type="checkbox" name="areasOfInterest" value={area} onChange={handleChange} className="rounded" />
                <span>{area}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 4: Skills & Experience */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Skills & Experience</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="qualification" placeholder="Educational Qualification *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <input type="text" name="occupation" placeholder="Current Occupation" className="p-3 border rounded-lg" onChange={handleChange} />
            <textarea name="skills" placeholder="Relevant Skills (e.g., Teaching, Design, Management, Social Work, IT) *" rows="3" className="p-3 border rounded-lg md:col-span-2" onChange={handleChange}></textarea>
            <textarea name="experience" placeholder="Previous Volunteer/Work Experience (if any)" rows="3" className="p-3 border rounded-lg md:col-span-2" onChange={handleChange}></textarea>
          </div>
        </div>

        {/* Section 5: Availability */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Availability</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" name="startDate" placeholder="Available From (Start Date) *" required className="p-3 border rounded-lg" onChange={handleChange} />
            <select name="duration" className="p-3 border rounded-lg" onChange={handleChange}>
              <option value="">Duration *</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>More than 6 Months</option>
            </select>
            <select name="hoursPerWeek" className="p-3 border rounded-lg" onChange={handleChange}>
              <option value="">Hours per Week *</option>
              <option>5–10 hrs</option>
              <option>10–20 hrs</option>
              <option>20+ hrs</option>
            </select>
          </div>
        </div>

        {/* Section 6: Motivation Statement */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Motivation Statement</h4>
          <textarea name="motivation" placeholder="Why do you want to join MSRS Foundation? *" rows="3" required className="w-full p-3 border rounded-lg mb-4" onChange={handleChange}></textarea>
          <textarea name="contribution" placeholder="How can you contribute to our mission? *" rows="3" required className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
        </div>

        {/* Section 7: Feedback */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Feedback & Suggestions</h4>
          <textarea name="feedback" placeholder="Any feedback or suggestions for us?" rows="3" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
        </div>

        {/* Section 8: Declaration */}
        <div className="mb-8 space-y-2">
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="declaration" onChange={handleChange} className="w-5 h-5" />
            <span>I hereby declare that the information provided is true and correct.</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" name="rules" onChange={handleChange} className="w-5 h-5" />
            <span>I agree to abide by the rules and values of the Foundation.</span>
          </label>
        </div>

        <Button type="submit" variant="primary" fullWidth size="lg">
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default VolunteerForm;