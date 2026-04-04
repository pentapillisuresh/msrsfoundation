import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import Button from '../Common/Button';

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    cinNumber: '',
    industryType: '',
    website: '',
    csrNumber: '',
    panNumber: '',
    contactName: '',
    designation: '',
    email: '',
    mobile: '',
    officeAddress: '',
    csrInterests: [],
    proposedBudget: '',
    projectType: '',
    projectLocation: '',
    timeline: '',
    meetingMode: '',
    preferredDate: '',
    preferredTime: '',
    alternateDateTime: '',
    purpose: '',
    expectations: '',
    declaration: false
  });

  const csrInterestsList = [
    'Education Development', 'Healthcare & Medical Support', 'Rural Development',
    'Women Empowerment', 'Environmental Sustainability', 'Skill Development',
    'Disaster Relief', 'Spiritual & Cultural Programs'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'declaration') {
        setFormData({ ...formData, declaration: checked });
      } else {
        const interests = [...formData.csrInterests];
        if (checked) {
          interests.push(value);
        } else {
          const index = interests.indexOf(value);
          if (index > -1) interests.splice(index, 1);
        }
        setFormData({ ...formData, csrInterests: interests });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Meeting request submitted successfully! We will contact you soon.');
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Schedule a Meeting"
        subtitle="Let's Build Impact Together."
        description="Schedule a discussion with our team to explore CSR collaborations, funding opportunities, and project alignment."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary to-white rounded-2xl p-8 shadow-xl">
            {/* Section 1: Company Details */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="companyName" placeholder="Company Name *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="cinNumber" placeholder="CIN Number" className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="industryType" placeholder="Industry Type *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="url" name="website" placeholder="Website URL" className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="csrNumber" placeholder="CSR Registration Number *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="panNumber" placeholder="PAN Number *" required className="p-3 border rounded-lg" onChange={handleChange} />
              </div>
            </div>

            {/* Section 2: Contact Person Details */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Contact Person Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="contactName" placeholder="Full Name *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="designation" placeholder="Designation *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="email" name="email" placeholder="Official Email ID *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="tel" name="mobile" placeholder="Mobile Number *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="officeAddress" placeholder="Office Address *" required className="p-3 border rounded-lg md:col-span-2" onChange={handleChange} />
              </div>
            </div>

            {/* Section 3: CSR Interest Details */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">CSR Interest Details</h3>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Area of CSR Interest *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {csrInterestsList.map((interest, idx) => (
                    <label key={idx} className="flex items-center space-x-2">
                      <input type="checkbox" value={interest} onChange={handleChange} className="rounded" />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Funding Intent */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Funding Intent</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="number" name="proposedBudget" placeholder="Proposed CSR Budget (₹) *" required className="p-3 border rounded-lg" onChange={handleChange} />
                <select name="projectType" className="p-3 border rounded-lg" onChange={handleChange}>
                  <option value="">Preferred Project Type *</option>
                  <option>Ongoing Projects</option>
                  <option>New Project Collaboration</option>
                  <option>Sponsorship-Based Initiative</option>
                </select>
                <input type="text" name="projectLocation" placeholder="Preferred Project Location *" className="p-3 border rounded-lg" onChange={handleChange} />
                <select name="timeline" className="p-3 border rounded-lg" onChange={handleChange}>
                  <option value="">Timeline for CSR Activity *</option>
                  <option>Immediate (0–3 Months)</option>
                  <option>Short Term (3–6 Months)</option>
                  <option>Long Term (6–12 Months)</option>
                </select>
              </div>
            </div>

            {/* Section 5: Meeting Schedule */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Meeting Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="meetingMode" className="p-3 border rounded-lg" onChange={handleChange}>
                  <option value="">Preferred Meeting Mode *</option>
                  <option>Online (Zoom / Google Meet)</option>
                  <option>Offline (Visit Office)</option>
                </select>
                <input type="date" name="preferredDate" className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="time" name="preferredTime" className="p-3 border rounded-lg" onChange={handleChange} />
                <input type="text" name="alternateDateTime" placeholder="Alternate Date & Time" className="p-3 border rounded-lg" onChange={handleChange} />
              </div>
            </div>

            {/* Section 6: Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark mb-4 pb-2 border-b-2 border-secondary">Additional Information</h3>
              <div className="space-y-4">
                <textarea name="purpose" placeholder="Purpose of Meeting *" rows="3" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
                <textarea name="expectations" placeholder="Specific Requirements / Expectations" rows="3" className="w-full p-3 border rounded-lg" onChange={handleChange}></textarea>
                <input type="file" name="document" className="p-3 border rounded-lg w-full" />
              </div>
            </div>

            {/* Section 7: Declaration */}
            <div className="mb-8">
              <label className="flex items-center space-x-3">
                <input type="checkbox" name="declaration" onChange={handleChange} className="w-5 h-5" />
                <span>We confirm that the above information is accurate and we are interested in collaborating with Maha Shree Rudra Samsthanam Foundation under CSR initiatives.</span>
              </label>
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Schedule CSR Meeting
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ScheduleMeeting;