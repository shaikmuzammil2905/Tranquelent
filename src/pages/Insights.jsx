import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, Monitor, Compass, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Insights = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center pb-12">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">INSIGHTS & PERSPECTIVES</span>
            <h1 className="section-title">Engineering the Future</h1>
            <p className="section-description max-w-3xl mx-auto">
              Explore our latest thinking on semiconductor engineering, intelligent systems, and the future of technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <ScrollReveal delay={0.2}>
            <div className="glass-card max-w-4xl mx-auto p-12 text-center">
              <div className="w-24 h-24 rounded-full bg-bg-dark border border-accent/30 mx-auto flex items-center justify-center mb-6">
                <Cpu size={40} className="text-accent opacity-70" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Insights Coming Soon</h2>
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                Our engineering experts are preparing in-depth articles, whitepapers, and technical perspectives across semiconductor design, embedded systems, and digital engineering. Check back soon for our latest publications.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-border pt-8 mt-8 text-sm font-medium">
                <div className="text-muted hover:text-accent cursor-pointer transition">Semiconductor</div>
                <div className="text-muted hover:text-accent cursor-pointer transition">Embedded Systems</div>
                <div className="text-muted hover:text-accent cursor-pointer transition">Software Engineering</div>
                <div className="text-muted hover:text-accent cursor-pointer transition">Technology Strategy</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-24 text-center">
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
              <p className="text-muted mb-8 max-w-2xl mx-auto">Follow Tranquelent on LinkedIn for our latest updates and engineering perspectives.</p>
              <a href="https://www.linkedin.com/company/tranquelent/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Follow Us on LinkedIn
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
