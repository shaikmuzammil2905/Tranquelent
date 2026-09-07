import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Server, Monitor, Compass, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const capabilities = [
    {
      id: "semiconductor-engineering",
      title: "Semiconductor Engineering",
      icon: Cpu,
      desc: "Engineering expertise across the semiconductor lifecycle, from design and verification to physical implementation and silicon support. This is our flagship capability.",
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
      id: "embedded-hardware-engineering",
      title: "Embedded & Hardware Engineering",
      icon: Server,
      desc: "Building intelligent hardware systems with deep expertise in embedded software, firmware, and digital hardware.",
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
      id: "software-digital-engineering",
      title: "Software & Digital Engineering",
      icon: Monitor,
      desc: "Software and digital engineering capabilities supporting intelligent systems.",
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
      id: "engineering-technology-consulting",
      title: "Engineering & Technology Consulting",
      icon: Compass,
      desc: "Strategic guidance for smarter engineering and technology decisions.",
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
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">OUR EXPERTISE</span>
            <h1 className="section-title">Engineering Capabilities Built for What's Next</h1>
            <p className="section-description max-w-3xl mx-auto">
              From silicon to systems, software to strategy — Tranquelent's four engineering pillars provide deep technical capability to accelerate your innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light pt-0">
        <div className="container">
          <div className="capabilities-detailed-grid grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-bg-dark rounded-full border border-accent">
                      <cap.icon size={28} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">{cap.title}</h3>
                  </div>
                  <p className="text-muted mb-6">{cap.desc}</p>
                  
                  <h4 className="font-semibold text-white mb-4">Core Services:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 flex-grow">
                    {cap.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted text-sm">
                        <span className="text-accent mt-1">•</span> {service}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/services/${cap.id}`} className="btn btn-secondary mt-auto w-fit">
                    Explore Capability <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
