import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Users, Code, Compass, Server } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">ABOUT US</span>
            <h1 className="section-title">Engineering What's Next</h1>
            <p className="section-description max-w-3xl mx-auto">
              Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted text-lg mb-4">
                We are a team of passionate engineers and technology specialists dedicated to solving complex engineering challenges. Operating from our headquarters in Austin, Texas, and our engineering centers in Bangalore, India, we provide global delivery capabilities with a focus on engineering excellence.
              </p>
              <p className="text-muted text-lg">
                Our core story is built on the progression of intelligent systems: from the fundamental building blocks of Silicon, to integrated Systems, advanced Software, and overarching Strategy.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card h-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-accent">Our Core Story</h3>
                <div className="flex flex-col gap-4 text-lg font-medium text-white">
                  <div className="flex items-center gap-4"><Cpu className="text-accent" /> SILICON</div>
                  <div className="w-1 h-4 bg-accent/30 ml-3"></div>
                  <div className="flex items-center gap-4"><Server className="text-accent" /> SYSTEMS</div>
                  <div className="w-1 h-4 bg-accent/30 ml-3"></div>
                  <div className="flex items-center gap-4"><Code className="text-accent" /> SOFTWARE</div>
                  <div className="w-1 h-4 bg-accent/30 ml-3"></div>
                  <div className="flex items-center gap-4"><Compass className="text-accent" /> STRATEGY</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Engineering Excellence', desc: 'A relentless commitment to quality, performance, and robust architecture in every project we deliver.' },
                { title: 'Collaboration', desc: 'Working closely as a true extension of your engineering teams, ensuring transparency and alignment.' },
                { title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible in semiconductor and digital engineering.' },
                { title: 'Scalable Delivery', desc: 'Flexible engagement models designed to scale alongside your evolving business and technical needs.' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <h4 className="text-xl font-bold mb-3 text-accent">{item.title}</h4>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">Ready to Build the Future?</h2>
              <Link to="/contact" className="btn btn-primary btn-lg">Talk to Our Experts</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
