import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, Monitor, Compass, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Industries = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">INDUSTRIES</span>
            <h1 className="section-title">Where We Make an Impact</h1>
            <p className="section-description max-w-3xl mx-auto">
              Tranquelent brings deep engineering expertise and domain understanding to technology-driven verticals, with a primary focus on semiconductor and electronics engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light pt-0">
        <div className="container">
          <div className="industries-layout grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            
            {/* Primary Industry */}
            <ScrollReveal>
              <div className="industry-card primary glass-card h-full">
                <div className="mb-6 flex justify-between items-start">
                  <Cpu size={48} className="text-accent" />
                  <span className="px-3 py-1 bg-accent text-bg-dark text-xs font-bold rounded uppercase tracking-wider">Primary Focus</span>
                </div>
                <h3 className="industry-title">Semiconductor & Electronics</h3>
                <p className="industry-desc">Enabling next-generation chips, devices, and intelligent systems. We provide deep technical capability across the entire silicon lifecycle.</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 mt-6">
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> IC Design & Verification</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Physical Design & Implementation</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Advanced Packaging</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Silicon Validation & Testing</li>
                </ul>

                <Link to="/industries/semiconductor-electronics" className="btn btn-secondary mt-auto w-fit">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Secondary Industry */}
            <ScrollReveal delay={0.2}>
              <div className="industry-card secondary glass-card h-full">
                <div className="mb-6">
                  <Server size={48} className="text-accent" />
                </div>
                <h3 className="industry-title">Technology & Digital Engineering</h3>
                <p className="industry-desc">Building modern digital platforms, cloud architectures, and intelligent solutions for technology-driven organizations worldwide.</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 mt-6">
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Cloud Platforms & Infrastructure</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> AI & Data Engineering</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Connected Devices (IoT)</li>
                  <li className="flex items-start gap-2 text-muted text-sm"><span className="text-accent mt-1">•</span> Enterprise Modernization</li>
                </ul>

                <Link to="/industries/technology-digital-engineering" className="btn btn-secondary mt-auto w-fit">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

          <div className="mt-24">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-center mb-12">Expanding Our Engineering Footprint</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Automotive & Mobility', 'Industrial Technology', 'Telecom & Networking'].map((industry, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass-card text-center p-8">
                    <Monitor size={32} className="text-accent mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">{industry}</h4>
                    <p className="text-muted text-sm">Engineering intelligent systems for tomorrow's connectivity and mobility challenges.</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
