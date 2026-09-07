import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Server, Monitor, Compass, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CapabilityCard from '../components/CapabilityCard';
import heroImage from '../assets/hero-pic.png';
import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';
import service4 from '../assets/service-4.png';
import bgServices from '../assets/bg-services.png';
import sectionPic14 from '../assets/section-pic-14.png';

const Home = () => {
  const capabilities = [
    {
      title: "Semiconductor Engineering",
      link: "/services/semiconductor-engineering",
      image: service1,
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
      image: service2,
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
      image: service3,
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
      image: service4,
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
      <section 
        className="hero-section bg-navy-dark relative"
        style={{ backgroundImage: 'url(../assets/image-copy-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container hero-container relative z-10">
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
              <img src={heroImage} alt="Semiconductor Engineering" className="w-full h-auto rounded-lg shadow-[0_0_40px_rgba(0,216,255,0.2)] border border-accent/30" fetchPriority="high" />
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
              <ScrollReveal key={i} delay={i * 0.1} className="highlight-item group">
                <div className="highlight-number group-hover:text-primary transition-colors">0{i+1}</div>
                <div className="highlight-text">{cap.title}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR CORE CAPABILITIES (DARK NAVY WITH ANIMATED BG) */}
      <section className="core-capabilities section bg-navy-dark relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${bgServices})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <div className="container relative z-10">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="section-label">WHY TRANQUELENT?</span>
                <h2 className="section-title">Engineering Depth.<br/>Real-World Impact.</h2>
                <p className="section-description text-muted mb-8">
                  We bring together deep engineering expertise, industry knowledge and a delivery model built for quality, agility and long-term success.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Cpu, title: "Engineering Expertise", desc: "Deep technical capability across silicon, systems, software and beyond." },
                  { icon: Server, title: "Industry Knowledge", desc: "Domain understanding of semiconductor, electronics and technology verticals." },
                  { icon: CheckCircle2, title: "End-to-End Delivery", desc: "From design and development to integration and support." },
                  { icon: Compass, title: "Built for Scale", desc: "Flexible teams, modern processes and scalable engagement models." }
                ].map((principle, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} className="principle-card">
                    <principle.icon size={28} className="text-accent mb-3" />
                    <h3 className="text-lg font-bold text-primary mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{principle.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            
            <ScrollReveal delay={0.2} className="relative hidden lg:block">
               <img src={sectionPic14} alt="Engineering Excellence" className="w-full h-auto rounded-lg shadow-2xl" />
               <div className="absolute inset-0 border-2 border-accent/20 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </ScrollReveal>
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

          <div className="process-steps mt-12 relative flex flex-col md:flex-row gap-8">
            {[
              { title: "Dedicated Engineering Teams", desc: "Skilled, focused teams aligned to your goals." },
              { title: "Project-Based Delivery", desc: "Structured, transparent and milestone-driven." },
              { title: "Technology Consulting", desc: "Strategic guidance for smarter decisions." }
            ].map((step, i) => (
              <div key={i} className="group relative flex-1 flex flex-col md:items-center text-left md:text-center">
                {/* Connecting Line that animates on hover */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-[20px] left-[50%] w-full h-[2px] bg-border overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent w-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: i * 0.4 }}
                    />
                  </div>
                )}
                
                <motion.div 
                  className="step-number relative z-10 w-12 h-12 bg-primary border-2 border-border rounded-full flex items-center justify-center text-accent font-bold text-lg mb-4 group-hover:border-accent group-hover:scale-110 transition-all cursor-pointer"
                  whileHover={{ y: 5 }}
                >
                  0{i+1}
                </motion.div>
                <h3 className="step-title font-bold text-xl mb-2">{step.title}</h3>
                <p className="step-desc text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES (WHITE) */}
      <section className="industries section bg-white-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">INDUSTRIES</span>
            <h2 className="section-title text-center">Where We Make an Impact</h2>
          </ScrollReveal>

          <div className="industries-layout mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal className="industry-card primary glass-card h-full flex flex-col items-center text-center p-12 group hover:shadow-2xl transition-all border-t-4 border-t-accent">
              <Cpu size={48} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="industry-title text-2xl font-bold text-white mb-4">Semiconductor & Electronics</h3>
              <p className="industry-desc text-white/80 mb-8 flex-grow">Enabling next-gen chips, devices and intelligent systems with deep technical capability.</p>
              <Link to="/industries/semiconductor-electronics" className="btn btn-secondary w-full">Explore Industry</Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="industry-card secondary glass-card h-full flex flex-col items-center text-center p-12 group hover:shadow-2xl transition-all border-t-4 border-t-accent">
              <Server size={48} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="industry-title text-2xl font-bold text-white mb-4">Technology & Digital Engineering</h3>
              <p className="industry-desc text-white/80 mb-8 flex-grow">Building modern digital platforms, cloud architectures, and intelligent solutions.</p>
              <Link to="/industries/technology-digital-engineering" className="btn btn-secondary w-full">Explore Industry</Link>
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
            <Link to="/contact" className="btn btn-primary btn-lg">Talk to Our Experts &rarr;</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
