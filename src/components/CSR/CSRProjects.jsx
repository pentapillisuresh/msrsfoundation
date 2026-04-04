import React from 'react';
import PageHeader from '../Common/PageHeader';
import { projectsData } from '../../data/projectsData';

const CSRProjects = () => {
  return (
    <div className="pt-24">
      <PageHeader 
        title="CSR Projects"
        subtitle="Strategic Initiatives. Measurable Impact."
        description="Discover our CSR-aligned projects designed to address critical social challenges while delivering accountability, scalability, and sustainable outcomes."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-primary to-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark mb-3">{project.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Objective</h4>
                      <p className="text-gray-700">{project.objective}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Target Beneficiaries</h4>
                      <p className="text-gray-700">{project.beneficiaries}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Budget Required</h4>
                      <p className="text-gray-700">{project.budget}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Impact Metrics</h4>
                      <p className="text-gray-700">{project.impactMetrics}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">CSR Alignment</h4>
                      <p className="text-gray-700">{project.csrAlignment}</p>
                    </div>
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

export default CSRProjects;