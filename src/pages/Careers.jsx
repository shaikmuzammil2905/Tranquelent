import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Careers = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center pb-12 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('../assets/bg-services.png')] bg-cover bg-center"></div>
        <div className="container relative z-10">
          <ScrollReveal>
            <span className="section-label">CAREERS</span>
            <h1 className="section-title">Build What's Next With Us</h1>
            <p className="section-description max-w-3xl mx-auto">
              Tranquelent is building an engineering-focused organization across semiconductor, embedded, hardware, software and digital engineering. Join us in engineering intelligent systems for the future.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-white-section pt-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
               <img src="../assets/section-pic-14.png" alt="Engineering Team" className="w-full h-auto rounded-lg shadow-2xl border-4 border-white" />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Why Join Tranquelent?</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Work on cutting-edge semiconductor and digital engineering projects",
                  "Collaborate with top-tier global technology teams",
                  "Continuous learning and technology upskilling",
                  "Performance-driven culture with clear growth paths"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-navy-light rounded-lg border border-accent/20">
                <h3 className="text-xl font-bold text-white mb-4">Don't see a perfect fit?</h3>
                <p className="text-white/70 mb-6">Send us your resume, and we'll keep you in mind for future roles in semiconductor and digital engineering.</p>
                <Link to="/contact" className="btn btn-primary w-full sm:w-auto">Connect With Us <ArrowRight size={16} className="ml-2" /></Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
