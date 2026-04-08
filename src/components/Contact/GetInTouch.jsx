import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight, FiSend, 
  FiCheckCircle, FiMessageCircle, FiHeart, FiChevronDown, FiChevronUp,
  FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', subject: '', message: '', preferredContact: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Contact Form:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      setFormData({
        name: '', email: '', phone: '', organization: '', subject: '', message: '', preferredContact: []
      });
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: 'Visit Our Office',
      details: ['MSRS Foundation', 'Registered Office Address', 'City, State - PIN Code, India'],
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX (For CSR)'],
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['msrsfoundation2025@gmail.com', 'csr@msrsfoundation.org'],
    },
    {
      icon: <FiClock />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
    }
  ];

  const faqs = [
    {
      question: 'How can I donate to MSRS Foundation?',
      answer: 'You can donate online through our secure payment gateway, bank transfer, or by sending a cheque. Visit our Donate page for more details. We also accept monthly contributions through our donation portal.'
    },
    {
      question: 'How do I become a CSR partner?',
      answer: 'Please fill out the contact form with "CSR Partnership" as subject, and our team will reach out to you within 48 hours. We offer customized CSR programs aligned with your company\'s goals.'
    },
    {
      question: 'Can I volunteer with MSRS Foundation?',
      answer: 'Yes! We welcome volunteers for various programs including teaching, healthcare camps, event management, and administrative support. Please mention "Volunteer" in the subject line when contacting us.'
    },
    {
      question: 'How are funds utilized?',
      answer: 'We maintain complete transparency. 85% of funds go directly to programs, with the remaining 15% used for administrative costs. Detailed annual reports and financial statements are available on request.'
    },
    {
      question: 'Is my donation tax-exempt?',
      answer: 'Yes, MSRS Foundation is registered under Section 12A and 80G of the Income Tax Act. Donations made to us are eligible for tax exemption under Section 80G.'
    },
    {
      question: 'How can my company partner for CSR initiatives?',
      answer: 'We offer customized CSR programs aligned with your company\'s goals. Contact our CSR team for a detailed discussion about partnership opportunities and impact assessment.'
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
          
          * {
            font-family: 'Mulish', sans-serif;
          }
          
          h1, h2, h3, h4, .heading-font {
            font-family: 'Cormorant Garamond', serif;
          }
          
          .banner-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          
          .section-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
            letter-spacing: -0.01em;
          }
          
          .contact-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(44, 62, 43, 0.85) 0%, rgba(44, 62, 43, 0.7) 50%, rgba(44, 62, 43, 0.85) 100%);
          }
          
          .contact-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80');
            background-size: cover;
            background-position: center;
            animation: zoomIn 20s ease-out infinite alternate;
          }
          
          @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          .banner-content {
            animation: fadeInUp 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .info-card {
            transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .info-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 122, 98, 0.1), transparent);
            transition: left 0.5s ease;
          }
          
          .info-card:hover::before {
            left: 100%;
          }
          
          .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(44, 62, 43, 0.1);
          }
          
          .form-input {
            transition: all 0.3s ease;
            border: 1px solid #E5E7EB;
          }
          
          .form-input:focus {
            outline: none;
            border-color: #667A62;
            box-shadow: 0 0 0 3px rgba(102, 122, 98, 0.1);
          }
          
          .btn-submit {
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }
          
          .btn-submit::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          
          .btn-submit:hover::before {
            left: 100%;
          }
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .success-message {
            animation: slideIn 0.5s ease forwards;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .faq-item {
            transition: all 0.3s ease;
          }
          
          .faq-question {
            transition: all 0.3s ease;
          }
          
          .faq-answer {
            animation: fadeIn 0.3s ease forwards;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .map-wrapper {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .map-wrapper iframe {
            filter: grayscale(0.2) contrast(1.05);
            transition: all 0.5s ease;
          }
          
          .map-wrapper:hover iframe {
            filter: grayscale(0) contrast(1.1);
            transform: scale(1.02);
          }
          
          .map-overlay {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: white;
            padding: 8px 16px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            color: #667A62;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 10;
            pointer-events: none;
          }
          
          @media (max-width: 768px) {
            .banner-title {
              font-size: 2.8rem !important;
            }
          }
        `}
      </style>

      {/* Premium Banner Section */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <div className="contact-bg" />
        <div className="contact-overlay" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl banner-content">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-[#667A62] rounded-full shadow-lg animate-pulse">
              Let's Connect
            </span>
            <h1 className="banner-title text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15]">
              Get in Touch
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#667A62]"></div>
              <div className="w-6 h-0.5 bg-[#667A62]"></div>
              <div className="w-3 h-0.5 bg-[#667A62]"></div>
            </div>
            <p className="text-white/95 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide">
              Let's Connect for a Cause.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#EAF6E3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-white shadow-md rounded-full">
                  Connect With Us
                </span>
                <h2 className="section-title text-4xl md:text-5xl font-bold text-[#2C3E2B] mb-5">
                  We'd Love to <br />Hear From You
                </h2>
                <div className="w-16 h-0.5 bg-[#667A62] mb-8"></div>
                <p className="text-[#4A5C46] text-base mb-10 leading-relaxed">
                  We welcome individuals, donors, volunteers, and corporate partners to collaborate with us 
                  in creating meaningful social impact. Reach out for inquiries, partnerships, or support.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="info-card bg-white rounded-2xl p-6 shadow-md flex gap-5"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#EAF6E3] flex items-center justify-center flex-shrink-0">
                      <div className="text-2xl text-[#667A62]">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E2B] text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-[#4A5C46] text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links with Real Icons */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                <h3 className="font-bold text-[#2C3E2B] text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FiFacebook size={20} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FiTwitter size={20} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#E4405F] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FiInstagram size={20} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FiYoutube size={20} />
                  </a>
                  <a href="#" className="w-11 h-11 rounded-full bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#25D366] hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>

              {/* Improved Google Maps */}
              {/* Google Maps - Vizag, Chinnamushidivada Location */}
<div className="mt-10" data-aos="fade-up" data-aos-delay="500">
  <h3 className="font-bold text-[#2C3E2B] text-lg mb-4">Find Us</h3>
  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.543567890123!2d83.318889!3d17.686816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39435c5f7b5b5f%3A0x7e5a5e5e5e5e5e5e!2sChinnamushidivada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530045!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="MSRS Foundation - Vizag Location"
    ></iframe>
    <div className="map-overlay">
      <FiMapPin className="inline mr-1" size={12} /> msrsfoundation, Vizag
    </div>
  </div>
  <div className="mt-3 text-center">
    <a 
      href="https://maps.google.com/?q=Chinnamushidivada+Visakhapatnam+Andhra+Pradesh"
      target="_blank" 
      rel="noopener noreferrer"
      className="text-sm text-[#667A62] hover:text-[#4A5C46] transition-colors inline-flex items-center gap-1"
    >
      Get Directions <FiArrowRight size={12} />
    </a>
  </div>
</div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EAF6E3] to-transparent rounded-full opacity-50"></div>
                
                <h3 className="section-title text-3xl font-bold text-[#2C3E2B] mb-2">Send Us a Message</h3>
                <p className="text-[#4A5C46] text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {submitSuccess && (
                  <div className="success-message mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <FiCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
                      <p className="text-green-600 text-sm">Thank you for reaching out. We'll contact you soon.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                      />
                      
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                      />
                      
                      <input
                        type="text"
                        name="organization"
                        placeholder="Organization Name (For CSR/Corporate)"
                        value={formData.organization}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                    
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer"
                      required
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
                      placeholder="Your Message *"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-xl bg-gray-50 focus:bg-white transition-colors resize-none"
                    ></textarea>
                    
                    <div>
                      <label className="block mb-3 font-semibold text-[#2C3E2B] text-sm">Preferred Contact Method</label>
                      <div className="flex flex-wrap gap-4">
                        {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                          <label key={method} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="checkbox"
                              value={method}
                              checked={formData.preferredContact.includes(method)}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#667A62] rounded border-gray-300 focus:ring-[#667A62] cursor-pointer"
                            />
                            <span className="text-sm text-[#4A5C46] group-hover:text-[#667A62] transition-colors">
                              {method}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-[#2C3E2B]">Attach File (Optional)</label>
                      <input
                        type="file"
                        name="attachment"
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EAF6E3] file:text-[#667A62] hover:file:bg-[#667A62] hover:file:text-white transition-all cursor-pointer"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-submit w-full py-3.5 bg-[#667A62] text-white font-semibold rounded-xl hover:bg-[#4A5C46] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>Sending... <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                      ) : (
                        <>Send Message <FiSend /></>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-6">
                      <FiCheckCircle className="inline mr-1 text-green-500" />
                      We respect your privacy. All information shared will be kept confidential.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-wider text-[#667A62] uppercase bg-[#EAF6E3] rounded-full">
              Quick Answers
            </span>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[#2C3E2B] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto mb-5"></div>
            <p className="text-[#4A5C46]">Find answers to common questions about our foundation and how you can get involved.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#2C3E2B] text-base">{faq.question}</span>
                  <span className="text-[#667A62]">
                    {openFaq === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="faq-answer px-6 pb-4 pt-2">
                    <p className="text-[#4A5C46] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2C3E2B] to-[#3A4E39] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <FiHeart className="text-5xl text-[#667A62] mx-auto mb-5 floating-element" />
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-[#EAF6E3] text-lg mb-8 max-w-2xl mx-auto">
              Join hands with us to create lasting social impact. Every contribution counts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/donate" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#667A62] text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all transform hover:scale-105">
                Donate Now <FiArrowRight />
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#2C3E2B] transition-all transform hover:scale-105">
                Get Involved <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;