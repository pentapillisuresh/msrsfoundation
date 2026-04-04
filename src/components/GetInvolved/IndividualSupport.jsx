import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';
import Button from '../Common/Button';

const IndividualSupport = () => {
  const benefits = [
    { icon: <FiHeart />, title: "Tax Benefits", description: "80G tax exemption on your donations" },
    { icon: <FiUsers />, title: "Community Impact", description: "Directly impact lives of thousands" },
    { icon: <FiGlobe />, title: "Transparency", description: "Regular updates on your contribution" },
    { icon: <FiAward />, title: "Recognition", description: "Certificate of appreciation" }
  ];

  const ways = [
    { amount: "₹1,000", impact: "Can provide educational materials for 5 children" },
    { amount: "₹5,000", impact: "Can support a child's education for 3 months" },
    { amount: "₹10,000", impact: "Can sponsor a medical camp for 100 people" },
    { amount: "₹25,000", impact: "Can support women entrepreneurship training" }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-dark mb-4">Every Contribution Matters</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Support our mission through donations and help us create meaningful change in society.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h4 className="text-2xl font-bold text-dark mb-6">Why Donate to MSRS Foundation?</h4>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-primary rounded-lg">
                <div className="text-secondary text-2xl">{benefit.icon}</div>
                <div>
                  <h5 className="font-semibold text-dark mb-1">{benefit.title}</h5>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-dark mb-6">Impact of Your Contribution</h4>
          <div className="space-y-4">
            {ways.map((way, idx) => (
              <div key={idx} className="bg-white border-2 border-secondary/20 rounded-lg p-4 card-hover">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-secondary">{way.amount}</span>
                  <span className="text-gray-600">{way.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/donate">
          <Button variant="primary" size="lg">
            Donate Now - Make a Difference Today
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          Your donations are eligible for tax exemption under Section 80G
        </p>
      </div>
    </div>
  );
};

export default IndividualSupport;