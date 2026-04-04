import React from 'react';
import PageHeader from '../Common/PageHeader';
import { certificatesData } from '../../data/certificatesData';
import { FiFileText, FiDownload } from 'react-icons/fi';

const ComplianceGovernance = () => {
  return (
    <div className="pt-24">
      <PageHeader 
        title="Compliance & Governance"
        subtitle="Built on Trust. Backed by Transparency."
        description="MSRS Foundation strictly adheres to all statutory and regulatory compliances as mandated by the Government of India, ensuring transparency and accountability in all operations."
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-secondary text-3xl">
                    <FiFileText />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                    <button className="text-secondary hover:text-accent flex items-center space-x-1 text-sm">
                      <FiDownload />
                      <span>Download</span>
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

export default ComplianceGovernance;