import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Careers = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center pb-12">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">CAREERS</span>
            <h1 className="section-title">Build What's Next With Us</h1>
            <p className="section-description max-w-3xl mx-auto">
              Tranquelent is building an engineering-focused organization across semiconductor, embedded, hardware, software and digital engineering. Join us in engineering intelligent systems for the future.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <ScrollReveal delay={0.2}>
            <div className="glass-card max-w-4xl mx-auto p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-bg-dark border border-accent/30 mx-auto flex items-center justify-center mb-8">
                <Briefcase size={32} className="text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Current Opportunities</h2>
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                Opportunities will be listed here as they become available. We are always looking for passionate engineers who excel in solving complex technical challenges.
              </p>
              
              <div className="border-t border-border pt-8 mt-4">
                <h3 className="text-xl font-bold mb-4">Don't see a perfect fit?</h3>
                <p className="text-muted mb-6">Send us your resume, and we'll keep you in mind for future roles in semiconductor and digital engineering.</p>
                <Link to="/contact" className="btn btn-primary">Connect With Us <ArrowRight size={16} className="ml-2" /></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Careers;
