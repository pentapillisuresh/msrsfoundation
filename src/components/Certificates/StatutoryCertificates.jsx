import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import { certificatesData } from '../../data/certificatesData';
import { FiFileText, FiDownload, FiEye, FiCheckCircle } from 'react-icons/fi';

const StatutoryCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const governmentApprovals = [
    { title: "Ministry of Corporate Affairs", description: "Section 8 Registration", status: "Approved" },
    { title: "CSR-1 Registration", description: "Mandatory for CSR funds", status: "Active" },
    { title: "Income Tax - 12A", description: "Tax exemption for NGO", status: "Registered" },
    { title: "Income Tax - 80G", description: "Donor tax benefit", status: "Certified" },
    { title: "NITI Aayog Darpan", description: "Government NGO registration", status: "Registered" },
    { title: "FCRA", description: "For international funding", status: "Applied" }
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="Statutory Certificates"
        subtitle="Verified. Registered. Trusted."
        description="Access our official certifications including CSR-1, MCA registration, MSME, and other statutory documents."
      />
      
      {/* Government Approvals */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-dark text-center mb-8" data-aos="fade-up">
            Government of India Approvals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {governmentApprovals.map((approval, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-gradient-to-br from-primary to-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-dark">{approval.title}</h4>
                  <FiCheckCircle className="text-green-500 text-xl" />
                </div>
                <p className="text-gray-600 text-sm mb-2">{approval.description}</p>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  {approval.status}
                </span>
              </div>
            ))}
          </div>

          {/* All Certificates */}
          <h3 className="text-2xl font-bold text-dark text-center mb-8" data-aos="fade-up">
            All Certificates & Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificatesData.map((cert, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 50} className="bg-white border-2 border-primary rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-secondary text-3xl">
                      <FiFileText />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{cert.title}</h4>
                      <p className="text-sm text-gray-500">{cert.description}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-secondary hover:bg-primary rounded-lg transition-colors">
                      <FiEye />
                    </button>
                    <button className="p-2 text-secondary hover:bg-primary rounded-lg transition-colors">
                      <FiDownload />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatutoryCertificates;