import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Cpu, Server } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const IndustryDetail = () => {
  const { id } = useParams();
  
  const industries = {
    'semiconductor-electronics': {
      title: 'Semiconductor & Electronics',
      icon: Cpu,
      tagline: 'Enabling next-generation chips, devices, and intelligent systems.',
      content: 'The semiconductor and electronics industry is at the core of Tranquelent\'s engineering DNA. We provide specialized engineering services that help global technology leaders design, verify, and implement complex silicon and electronic systems, accelerating the path from concept to market-ready hardware.',
      focusAreas: [
        'Advanced Node IC Design',
        'Complex System-on-Chip (SoC) Architecture',
        'Comprehensive Silicon Validation',
        'Next-Gen Electronics Hardware'
      ]
    },
    'technology-digital-engineering': {
      title: 'Technology & Digital Engineering',
      icon: Server,
      tagline: 'Building modern digital platforms, cloud architectures, and intelligent solutions.',
      content: 'We partner with technology-driven enterprises to modernize their engineering foundation. By combining deep software expertise with system-level understanding, we deliver digital platforms that are scalable, secure, and ready for the future of intelligent computing.',
      focusAreas: [
        'Cloud-Native Platform Engineering',
        'Data-Driven Intelligent Systems',
        'IoT & Edge Computing Solutions',
        'Enterprise Digital Transformation'
      ]
    }
  };

  const industry = industries[id];

  if (!industry) {
    return (
      <div className="page-container section-padding text-center">
        <h2>Industry Not Found</h2>
        <Link to="/industries" className="text-accent mt-4 inline-block">Return to Industries</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">INDUSTRY FOCUS</span>
            <div className="flex justify-center mb-6">
              <industry.icon size={64} className="text-accent" />
            </div>
            <h1 className="section-title text-center">{industry.title}</h1>
            <p className="section-description max-w-3xl mx-auto">{industry.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light pt-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Industry Expertise</h2>
                <p className="text-muted text-lg leading-relaxed mb-8">{industry.content}</p>
                <Link to="/contact" className="btn btn-primary">Discuss Your Engineering Needs &rarr;</Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Key Focus Areas</h3>
                <div className="flex flex-col gap-4">
                  {industry.focusAreas.map((area, i) => (
                    <div key={i} className="p-4 bg-bg-dark border border-border rounded flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">
                        {i + 1}
                      </div>
                      <span className="text-white font-medium text-lg">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndustryDetail;
