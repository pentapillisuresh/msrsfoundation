import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader';
import { FiFileText, FiDownload, FiEye } from 'react-icons/fi';
import { knowledgeHubData } from '../../data/knowledgeHubData';

const KnowledgeHub = () => {
  const [activeTab, setActiveTab] = useState('reports');

  const tabs = [
    { id: 'reports', label: 'CSR Reports' },
    { id: 'research', label: 'Research Papers' },
    { id: 'case', label: 'Case Studies' },
    { id: 'stories', label: 'Impact Stories' }
  ];

  return (
    <div className="pt-24">
      <PageHeader 
        title="Knowledge Hub"
        subtitle="Insights. Awareness. Empowerment."
        description="Explore articles, reports, and resources focused on social impact, CSR trends, and community development."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-secondary text-white'
                    : 'bg-primary text-dark hover:bg-secondary/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeHubData[activeTab]?.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-gradient-to-br from-primary to-white rounded-xl overflow-hidden shadow-lg card-hover">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-secondary text-3xl">
                      <FiFileText />
                    </div>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-secondary hover:text-accent flex items-center space-x-1">
                      <FiEye />
                      <span>Preview</span>
                    </button>
                    <button className="text-secondary hover:text-accent flex items-center space-x-1">
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

export default KnowledgeHub;