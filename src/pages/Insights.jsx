import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, Monitor, Compass, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Insights = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center pb-12 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('../assets/bg-services.png')] bg-cover bg-center"></div>
        <div className="container relative z-10">
          <ScrollReveal>
            <span className="section-label">INSIGHTS & PERSPECTIVES</span>
            <h1 className="section-title">Engineering the Future</h1>
            <p className="section-description max-w-3xl mx-auto">
              Explore our latest thinking on semiconductor engineering, intelligent systems, and the future of technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-white-section pt-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ScrollReveal>
               <img src="../assets/section-pic-14.png" alt="Engineering Insights" className="w-full h-[400px] object-cover rounded-lg shadow-2xl border-4 border-white" />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex flex-col justify-center">
              <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2">Featured Insight</span>
              <h2 className="text-3xl font-bold mb-4">The Future of Silicon: Scaling Beyond Moore's Law</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                As traditional scaling slows, the semiconductor industry is turning to advanced packaging, new materials, and domain-specific architectures to continue driving performance improvements.
              </p>
              <button className="btn btn-primary w-fit">Read Article <ArrowRight size={16} className="ml-2" /></button>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="glass-card max-w-5xl mx-auto p-12 text-center bg-navy-dark mt-24">
              <div className="w-20 h-20 rounded-full bg-primary border border-accent/50 mx-auto flex items-center justify-center mb-6">
                <Cpu size={32} className="text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">More Insights Coming Soon</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Our engineering experts are preparing in-depth articles, whitepapers, and technical perspectives across semiconductor design, embedded systems, and digital engineering.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-border pt-8 mt-8 text-sm font-bold text-white/90">
                <div className="hover:text-accent cursor-pointer transition">Semiconductor</div>
                <div className="hover:text-accent cursor-pointer transition">Embedded Systems</div>
                <div className="hover:text-accent cursor-pointer transition">Software Engineering</div>
                <div className="hover:text-accent cursor-pointer transition">Technology Strategy</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Insights;
