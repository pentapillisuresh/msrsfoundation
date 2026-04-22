import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight, FiSend, 
  FiCheckCircle, FiMessageCircle, FiHeart, FiChevronDown, FiChevronUp,
  FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube, FiTarget
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-back',
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
      details: ['MSRS Foundation', 'Chinnamushidivada', 'Visakhapatnam, Andhra Pradesh - 530045'],
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
    <div className="bg-[#FCFDFB] overflow-x-hidden selection:bg-[#667A62] selection:text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Mulish', sans-serif; }

          .premium-gradient-text {
            background: linear-gradient(to right, #2C3E2B, #667A62, #8A9A87);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .contact-card {
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            position: relative;
            overflow: hidden;
          }
          
          .contact-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(44, 62, 43, 0.12);
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
          
          .stagger-border {
            position: relative;
          }
          .stagger-border::after {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: -20px;
            bottom: -20px;
            border: 2px solid #667A62;
            z-index: -1;
            transition: all 0.5s ease;
          }
          .stagger-border:hover::after {
            top: 10px;
            left: 10px;
            right: -10px;
            bottom: -10px;
          }

          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom { animation: subtle-zoom 20s infinite alternate linear; }

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
          
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
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
        `}
      </style>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/contact.avif" 
            className="w-full h-full object-cover animate-zoom" 
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2619]/90 via-[#2C3E2B]/70 to-[#FCFDFB]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div data-aos="fade-down">
            <span className="inline-block px-6 py-1.5 mb-5 text-[10px] font-bold tracking-[0.3em] text-white uppercase border border-white/30 rounded-full backdrop-blur-sm">
              LET'S CONNECT
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4" data-aos="fade-up" data-aos-delay="200">
            Get in Touch
          </h1>
          <p className="text-white/80 font-sans text-base max-w-2xl mx-auto mb-6 font-light tracking-wide" data-aos="fade-up" data-aos-delay="400">
            We're here to answer your questions, explore partnerships, and welcome your support.
            Reach out to us today.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-24 bg-[#F7F9F5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Information */}
            <div>
              <div data-aos="fade-up">
                <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
                  CONNECT WITH US
                </span>
                <div className="w-16 h-0.5 bg-[#667A62] mb-5"></div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#2C3E2B] mb-5 leading-tight">
                  We'd Love to <br />Hear From You
                </h2>
                <p className="text-[#4A5C46] text-base mb-10 leading-relaxed">
                  We welcome individuals, donors, volunteers, and corporate partners to collaborate with us 
                  in creating meaningful social impact. Reach out for inquiries, partnerships, or support.
                </p>
              </div>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="contact-card bg-white p-6 flex gap-5 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-12 h-12 bg-[#EAF6E3] flex items-center justify-center flex-shrink-0">
                      <div className="text-xl text-[#667A62]">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C3E2B] text-base mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-[#4A5C46] text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
                <h3 className="font-bold text-[#2C3E2B] text-base mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                    <FiFacebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                    <FiTwitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#E4405F] hover:text-white transition-all duration-300">
                    <FiInstagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                    <FiYoutube size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#EAF6E3] flex items-center justify-center text-[#667A62] hover:bg-[#25D366] hover:text-white transition-all duration-300">
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold text-[#2C3E2B] mb-2">Send Us a Message</h3>
                  <p className="text-[#4A5C46] text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <div className="w-12 h-0.5 bg-[#667A62] mt-3"></div>
                </div>
                
                {submitSuccess && (
                  <div className="success-message mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-center gap-3">
                    <FiCheckCircle className="text-green-500 text-lg" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message Sent Successfully!</p>
                      <p className="text-green-600 text-xs">Thank you for reaching out. We'll contact you soon.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors text-sm"
                      />
                      
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors text-sm"
                      />
                      
                      <input
                        type="text"
                        name="organization"
                        placeholder="Organization Name"
                        value={formData.organization}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                    
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors appearance-none cursor-pointer text-sm"
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
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 bg-gray-50 focus:bg-white transition-colors resize-none text-sm"
                    ></textarea>
                    
                    <div>
                      <label className="block mb-2 font-semibold text-[#2C3E2B] text-xs uppercase tracking-wide">Preferred Contact Method</label>
                      <div className="flex flex-wrap gap-4">
                        {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                          <label key={method} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              value={method}
                              checked={formData.preferredContact.includes(method)}
                              onChange={handleChange}
                              className="w-3.5 h-3.5 text-[#667A62] rounded border-gray-300 focus:ring-[#667A62] cursor-pointer"
                            />
                            <span className="text-xs text-[#4A5C46] hover:text-[#667A62] transition-colors">
                              {method}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#667A62] text-white font-semibold text-sm hover:bg-[#4A5C46] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>Sending... <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                      ) : (
                        <>Send Message <FiSend size={14} /></>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-400 mt-4">
                      <FiCheckCircle className="inline mr-1 text-green-500" size={10} />
                      We respect your privacy. All information shared will be kept confidential.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Google Maps Section - Below both columns, full width */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center mb-8">
              <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
                FIND US
              </span>
              <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
              <h3 className="font-serif text-2xl text-[#2C3E2B] mt-4">Visit Our Office</h3>
            </div>
            
            <div className="stagger-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.543567890123!2d83.318889!3d17.686816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39435c5f7b5b5f%3A0x7e5a5e5e5e5e5e5e!2sChinnamushidivada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530045!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="MSRS Foundation Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.google.com/?q=Chinnamushidivada+Visakhapatnam+Andhra+Pradesh"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#667A62] hover:text-[#4A5C46] transition-colors inline-flex items-center gap-1"
              >
                Get Directions <FiArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-xs tracking-[5px] text-[#667A62] font-semibold mb-3 inline-block">
              QUICK ANSWERS
            </span>
            <div className="w-16 h-0.5 bg-[#667A62] mx-auto"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3E2B] mt-4 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4A5C46] text-sm">Find answers to common questions about our foundation and how you can get involved.</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item bg-[#F7F9F5] overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question w-full px-5 py-3 flex justify-between items-center text-left hover:bg-[#EAF6E3] transition-colors"
                >
                  <span className="font-semibold text-[#2C3E2B] text-sm">{faq.question}</span>
                  <span className="text-[#667A62]">
                    {openFaq === index ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="faq-answer px-5 pb-3 pt-0">
                    <p className="text-[#4A5C46] text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#6F8770] px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-white text-2xl md:text-3xl leading-snug mb-3">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Join hands with us to create lasting social impact. Every contribution counts.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <Link 
                to="/donate" 
                className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2C3E2B] font-semibold text-sm rounded-md hover:bg-[#667A62] hover:text-white transition-all duration-300 shadow-md"
              >
                Donate Now 
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <Link 
                to="/get-involved" 
                className="px-5 py-2.5 border border-white text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[#2C3E2B] transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;