import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import Button from '../Common/Button';
import { FiMapPin, FiPhone, FiMail, FiGlobe, FiClock } from 'react-icons/fi';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', subject: '', message: '', preferredContact: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const contacts = [...formData.preferredContact];
      if (checked) contacts.push(value);
      else {
        const index = contacts.indexOf(value);
        if (index > -1) contacts.splice(index, 1);
      }
      setFormData({ ...formData, preferredContact: contacts });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="pt-24">
      <PageHeader 
        title="Get in Touch"
        subtitle="Let's Connect for a Cause."
        description="Reach out for inquiries, partnerships, or support — we're here to collaborate and create impact."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-8">
                We welcome individuals, donors, volunteers, and corporate partners to collaborate with us in creating meaningful social impact.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-secondary text-xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Address</h4>
                    <p className="text-gray-600">
                      MSRS Foundation,<br />
                      Registered Office Address,<br />
                      City, State - PIN Code, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-secondary text-xl">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                    <p className="text-gray-600">+91 XXXXX XXXXX (For CSR)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-secondary text-xl">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Email</h4>
                    <p className="text-gray-600">msrsfoundation2025@gmail.com</p>
                    <p className="text-gray-600">csr@msrsfoundation.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-secondary text-xl">
                    <FiClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8">
                <h4 className="font-semibold text-dark mb-3">Find Us</h4>
                <div className="rounded-xl overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548269856!3d40.69714941864811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1641234567890!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="MSRS Foundation Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-primary to-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name (Optional - for CSR/Corporate users)"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  
                  <select
                    name="subject"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="">Select Subject *</option>
                    <option>General Inquiry</option>
                    <option>Donation Support</option>
                    <option>CSR Partnership</option>
                    <option>Volunteer / Internship</option>
                    <option>Event Collaboration</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                  
                  <textarea
                    name="message"
                    placeholder="Message *"
                    rows="5"
                    required
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                  
                  <div>
                    <label className="block mb-2 font-semibold">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" value="Email" onChange={handleChange} />
                        <span>Email</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" value="Phone Call" onChange={handleChange} />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" value="WhatsApp" onChange={handleChange} />
                        <span>WhatsApp</span>
                      </label>
                    </div>
                  </div>
                  
                  <input
                    type="file"
                    name="attachment"
                    className="w-full p-3 border rounded-lg"
                  />
                  
                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Submit Message
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    We respect your privacy. All information shared will be kept confidential.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;