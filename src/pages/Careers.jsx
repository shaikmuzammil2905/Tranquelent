import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Careers = () => (
  <div className="page-container section-padding">
    <div className="container text-center">
      <ScrollReveal>
        <span className="section-label">CAREERS</span>
        <h1 className="section-title">Build What's Next With Us</h1>
        <p className="max-w-3xl mx-auto mb-12">
          Tranquelent is building an engineering-focused organization across semiconductor, embedded, hardware, software and digital engineering.
        </p>
        <div className="glass-card max-w-2xl mx-auto p-8">
          <p className="text-muted mb-6">Opportunities will be listed here as they become available.</p>
          <Link to="/contact" className="btn btn-primary">Connect With Us</Link>
        </div>
      </ScrollReveal>
    </div>
  </div>
);
export default Careers;
