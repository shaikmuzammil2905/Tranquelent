import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Server, Monitor, Compass, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CapabilityCard from '../components/CapabilityCard';
import heroImage from '../assets/image-copy-3.png';

const Home = () => {
  const capabilities = [
    {
      title: "Semiconductor Engineering",
      link: "/services/semiconductor-engineering",
      services: [
        "VLSI Engineering",
        "ASIC / SoC Engineering",
        "RTL Design",
        "Functional Verification",
        "Design Verification",
        "Physical Design",
        "Semiconductor Design Support",
        "Silicon Engineering Support"
      ]
    },
    {
      title: "Embedded & Hardware Engineering",
      link: "/services/embedded-hardware-engineering",
      services: [
        "Embedded Software",
        "Firmware",
        "RTOS",
        "FPGA Engineering",
        "Digital Hardware",
        "Electronics Engineering",
        "System Integration",
        "Device & Platform Engineering",
        "Connected/Intelligent Systems"
      ]
    },
    {
      title: "Software & Digital Engineering",
      link: "/services/software-digital-engineering",
      services: [
        "Software Engineering",
        "Application Development",
        "Cloud Engineering",
        "AI & Data Engineering",
        "DevOps & Automation",
        "Digital Engineering",
        "Platform Modernization",
        "System Integration"
      ]
    },
    {
      title: "Engineering & Technology Consulting",
      link: "/services/engineering-technology-consulting",
      services: [
        "Technology Strategy",
        "System Architecture",
        "Solution Architecture",
        "Engineering Advisory",
        "Technology Modernization",
        "Engineering Transformation",
        "Technical Assessment",
        "Technology Roadmaps"
      ]
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION (DARK NAVY) */}
      <section className="hero-section bg-navy-dark">
        <div className="container hero-container">
          <div className="hero-content">
            <motion.span 
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ENGINEERING • TECHNOLOGY • INNOVATION
            </motion.span>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Engineering Intelligent Systems for <span className="text-accent">What's Next</span>
            </motion.h1>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Advanced semiconductor, embedded, software and digital engineering solutions designed to accelerate innovation from concept to scale.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary">Talk to Our Experts &rarr;</Link>
              <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
            </motion.div>
          </div>
          <div className="hero-visual">
            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={heroImage} alt="Semiconductor Engineering" className="w-full h-auto rounded-lg shadow-[0_0_40px_rgba(0,216,255,0.2)]" fetchPriority="high" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (WHITE) */}
      <section className="who-we-are section bg-white-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">A Semiconductor & Engineering Technology Services Company</h2>
            <p className="section-description max-w-3xl text-muted">
              Tranquelent helps technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software, combining deep engineering expertise with a future-focused approach.
            </p>
          </ScrollReveal>
          
          <div className="capabilities-highlights">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="highlight-item">
                <div className="highlight-number">0{i+1}</div>
                <div className="highlight-text">{cap.title}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR CORE CAPABILITIES (DARK NAVY) */}
      <section className="core-capabilities section bg-navy-dark">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">OUR CORE CAPABILITIES</span>
            <h2 className="section-title">Four Pillars. One Engineering Advantage.</h2>
            <p className="section-description max-w-3xl">
              From silicon to systems, software to strategy — we deliver integrated engineering capabilities to help you build what's next.
            </p>
          </ScrollReveal>

          <div className="capabilities-grid mt-8">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <CapabilityCard {...cap} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY TRANQUELENT? (WHITE) */}
      <section className="why-us section bg-white-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">WHY TRANQUELENT?</span>
            <h2 className="section-title">Engineering Depth.<br/>Real-World Impact.</h2>
            <p className="section-description max-w-3xl text-muted">
              We bring together deep engineering expertise, industry knowledge and a delivery model built for quality, agility and long-term success.
            </p>
          </ScrollReveal>

          <div className="principles-grid mt-8">
            {[
              { icon: Cpu, title: "Engineering Expertise", desc: "Deep technical capability across silicon, systems, software and beyond." },
              { icon: Server, title: "Industry Knowledge", desc: "Domain understanding of semiconductor, electronics and technology verticals." },
              { icon: CheckCircle2, title: "End-to-End Delivery", desc: "From design and development to integration and support." },
              { icon: Compass, title: "Built for Scale", desc: "Flexible teams, modern processes and scalable engagement models." }
            ].map((principle, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="principle-card glass-card">
                <principle.icon size={32} className="text-accent mb-4" />
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-desc">{principle.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (DARK NAVY) */}
      <section className="how-we-work section bg-navy-dark">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">OUR DELIVERY MODEL</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-description max-w-3xl">
              We work as an extension of your team, combining engineering excellence with a collaborative and flexible delivery model.
            </p>
          </ScrollReveal>

          <div className="process-steps mt-12">
            {[
              { title: "Dedicated Engineering Teams", desc: "Skilled, focused teams aligned to your goals." },
              { title: "Project-Based Delivery", desc: "Structured, transparent and milestone-driven." },
              { title: "Technology Consulting", desc: "Strategic guidance for smarter decisions." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="process-step">
                <div className="step-number">0{i+1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES (WHITE) */}
      <section className="industries section bg-white-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">INDUSTRIES</span>
            <h2 className="section-title">Where We Make an Impact</h2>
          </ScrollReveal>

          <div className="industries-layout mt-8">
            <ScrollReveal className="industry-card primary glass-card">
              <h3 className="industry-title text-white">Semiconductor & Electronics</h3>
              <p className="industry-desc">Enabling next-gen chips, devices and intelligent systems.</p>
              <Link to="/industries/semiconductor-electronics" className="btn btn-secondary mt-4 w-fit">Learn More</Link>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="industry-card secondary glass-card">
              <h3 className="industry-title">Technology & Digital Engineering</h3>
              <p className="industry-desc">Building modern digital platforms, cloud and intelligent solutions.</p>
              <Link to="/industries/technology-digital-engineering" className="btn btn-primary mt-4 w-fit">Learn More</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA (DARK NAVY) */}
      <section className="final-cta section bg-navy-dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="section-title">Let's Build What's Next</h2>
            <p className="section-description mx-auto max-w-2xl mb-8">
              Partner with Tranquelent for engineering solutions that turn complex challenges into intelligent systems.
            </p>
            <Link to="/contact" className="btn btn-primary">Talk to Our Experts &rarr;</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
