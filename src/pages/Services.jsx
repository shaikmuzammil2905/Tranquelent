import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <h1 className="section-title">Engineering Capabilities Built for What's Next</h1>
            <p className="section-description max-w-3xl mx-auto">
              Tranquelent's four engineering pillars provide deep technical capability across silicon, systems, software and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light">
        <div className="container">
          {/* Services list will go here in full implementation */}
          <div className="text-center text-muted">Detailed services content coming soon...</div>
        </div>
      </section>
    </div>
  );
};

export default Services;
