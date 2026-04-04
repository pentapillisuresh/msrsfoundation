import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiTrendingUp, FiShield, FiUsers, FiBarChart2, FiTarget } from 'react-icons/fi';
import Button from '../Common/Button';

const CorporatePartnership = () => {
  const benefits = [
    { icon: <FiBriefcase />, title: "CSR Compliance", description: "100% compliant with Schedule VII activities" },
    { icon: <FiTrendingUp />, title: "Brand Enhancement", description: "Positive brand association and visibility" },
    { icon: <FiShield />, title: "Risk Management", description: "Professional project execution with audits" },
    { icon: <FiUsers />, title: "Employee Engagement", description: "Volunteering opportunities for employees" }
  ];

  const partnershipModels = [
    { title: "Project Funding", description: "Direct funding for specific projects aligned with your CSR goals" },
    { title: "Adopt a Village", description: "Comprehensive development of a village or community" },
    { title: "Employee Giving", description: "Payroll giving and employee matching programs" },
    { title: "Cause Marketing", description: "Percentage of sales donated to social causes" }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-dark mb-4">Collaborate for Greater Impact</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Partner with us under CSR initiatives to deliver structured, high-impact, and compliant social programs.
        </p>
      </div>

      <div className="bg-primary rounded-2xl p-8 mb-12">
        <h4 className="text-2xl font-bold text-dark text-center mb-8">Why Partner With Us?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl text-secondary mb-3">{benefit.icon}</div>
              <h5 className="font-semibold text-dark mb-2">{benefit.title}</h5>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl font-bold text-dark text-center mb-8">Partnership Models</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnershipModels.map((model, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg card-hover border-l-4 border-secondary">
              <h5 className="text-xl font-bold text-dark mb-2">{model.title}</h5>
              <p className="text-gray-600">{model.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/schedule-meeting">
          <Button variant="primary" size="lg">
            Schedule a Meeting with CSR Team
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CorporatePartnership;