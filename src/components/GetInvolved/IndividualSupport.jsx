import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUsers, FiGlobe, FiAward, FiClock, FiCheckCircle, FiTrendingUp, FiShield } from 'react-icons/fi';
import Button from '../Common/Button';

const IndividualSupport = () => {
  const benefits = [
    { icon: <FiHeart />, title: "Tax Benefits", description: "80G tax exemption on your donations", color: "bg-red-50" },
    { icon: <FiUsers />, title: "Community Impact", description: "Directly impact lives of thousands", color: "bg-blue-50" },
    { icon: <FiGlobe />, title: "Transparency", description: "Regular updates on your contribution", color: "bg-green-50" },
    { icon: <FiAward />, title: "Recognition", description: "Certificate of appreciation", color: "bg-purple-50" }
  ];

  const ways = [
    { amount: "₹1,000", impact: "Can provide educational materials for 5 children", icon: "📚", bg: "from-blue-50 to-blue-100" },
    { amount: "₹5,000", impact: "Can support a child's education for 3 months", icon: "🎓", bg: "from-green-50 to-green-100" },
    { amount: "₹10,000", impact: "Can sponsor a medical camp for 100 people", icon: "🏥", bg: "from-orange-50 to-orange-100" },
    { amount: "₹25,000", impact: "Can support women entrepreneurship training", icon: "👩‍💼", bg: "from-purple-50 to-purple-100" }
  ];

  const testimonials = [
    { name: "Rajesh Sharma", amount: "₹50,000", text: "Proud to support MSRS Foundation. Their transparency and impact reporting is exceptional!", image: "/images/testimonial1.jpg" },
    { name: "Priya Mehta", amount: "₹25,000", text: "The best decision I made this year. Seeing the smiles on children's faces is priceless.", image: "/images/testimonial2.jpg" }
  ];

  return (
    <div>
      {/* Banner Section with 300px height */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/90 z-10"></div>
        <img 
          src="/images/individual-support-banner.jpg" 
          alt="Individual Support Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=300&fit=crop";
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Every Contribution Matters</h1>
            <p className="text-lg text-white/90">Support our mission through donations and help us create meaningful change in society.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-gray-600 mt-2">Lives Impacted</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">₹2Cr+</div>
              <div className="text-sm text-gray-600 mt-2">Donations Raised</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-gray-600 mt-2">Active Donors</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary to-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-gray-600 mt-2">Transparency</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-dark mb-6 font-heading">Why Donate to MSRS Foundation?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className={`flex items-start space-x-4 p-5 ${benefit.color} rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                    <div className="text-secondary text-3xl">{benefit.icon}</div>
                    <div>
                      <h5 className="font-semibold text-dark text-lg mb-1">{benefit.title}</h5>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold text-dark mb-6 font-heading">Impact of Your Contribution</h3>
              <div className="space-y-4">
                {ways.map((way, idx) => (
                  <div key={idx} className={`bg-gradient-to-r ${way.bg} border-2 border-secondary/20 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{way.icon}</span>
                        <span className="text-2xl font-bold text-secondary">{way.amount}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{way.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-12 font-heading">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Choose Your Amount", desc: "Select any amount you wish to contribute", icon: "💰" },
                { step: "02", title: "Make Payment", desc: "Secure online payment with multiple options", icon: "💳" },
                { step: "03", title: "Track Impact", desc: "Receive updates on how your donation helped", icon: "📊" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16 bg-primary rounded-2xl p-8" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-dark text-center mb-8 font-heading">What Our Donors Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">Donated: {testimonial.amount}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center" data-aos="fade-up">
            <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-lg mb-6">Your contribution today can change lives tomorrow</p>
              <Link to="/donate">
                <Button variant="primary" size="lg" className="bg-white text-secondary hover:bg-gray-100">
                  Donate Now - Make a Difference Today
                </Button>
              </Link>
              <p className="text-sm mt-4 text-white/80">
                Your donations are eligible for tax exemption under Section 80G
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSupport;