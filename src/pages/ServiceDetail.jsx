import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ServiceDetail = () => {
  const { id } = useParams();

  const servicesData = {
    'semiconductor-engineering': {
      title: 'Semiconductor Engineering',
      tagline: 'Engineering expertise across the semiconductor lifecycle, from design and verification to physical implementation and silicon support.',
      content: 'Tranquelent brings deep technical capability across the entire silicon lifecycle. We help global semiconductor companies accelerate their time-to-market while ensuring first-pass silicon success.',
      offerings: [
        'VLSI Engineering', 'ASIC / SoC Engineering', 'RTL Design', 
        'Functional Verification', 'Design Verification', 'Physical Design', 
        'Semiconductor Design Support', 'Silicon Engineering Support'
      ],
      challenges: [
        'Shrinking technology nodes and increasing design complexity.',
        'Stringent power, performance, and area (PPA) targets.',
        'Aggressive time-to-market constraints.',
        'First-pass silicon success imperatives.'
      ]
    },
    'embedded-hardware-engineering': {
      title: 'Embedded & Hardware Engineering',
      tagline: 'Building intelligent hardware systems with deep expertise in embedded software, firmware, and digital hardware.',
      content: 'We engineer robust, secure, and intelligent embedded systems that connect the physical and digital worlds. From edge computing devices to complex industrial hardware, our teams deliver scalable engineering solutions.',
      offerings: [
        'Embedded Software', 'Firmware', 'RTOS', 'FPGA Engineering', 
        'Digital Hardware', 'Electronics Engineering', 'System Integration', 
        'Device & Platform Engineering', 'Connected/Intelligent Systems'
      ],
      challenges: [
        'Balancing system performance with strict power constraints.',
        'Ensuring security and reliability in connected devices.',
        'Integration complexities across diverse hardware and software layers.',
        'Navigating rapid technology obsolescence.'
      ]
    },
    'software-digital-engineering': {
      title: 'Software & Digital Engineering',
      tagline: 'Software and digital engineering capabilities supporting intelligent systems.',
      content: 'Software is the brain of modern intelligent systems. We engineer scalable, secure, and modern software architectures that seamlessly integrate with underlying hardware and drive digital transformation.',
      offerings: [
        'Software Engineering', 'Application Development', 'Cloud Engineering', 
        'AI & Data Engineering', 'DevOps & Automation', 'Digital Engineering', 
        'Platform Modernization', 'System Integration'
      ],
      challenges: [
        'Modernizing legacy software monoliths for the cloud era.',
        'Building scalable architectures to handle massive data flows.',
        'Securing digital platforms across distributed environments.',
        'Accelerating software delivery lifecycles.'
      ]
    },
    'engineering-technology-consulting': {
      title: 'Engineering & Technology Consulting',
      tagline: 'Strategic guidance for smarter engineering and technology decisions.',
      content: 'Beyond execution, we provide strategic technology advisory. We help organizations align their engineering roadmaps with business objectives, ensuring they are prepared for the future of technology.',
      offerings: [
        'Technology Strategy', 'System Architecture', 'Solution Architecture', 
        'Engineering Advisory', 'Technology Modernization', 'Engineering Transformation', 
        'Technical Assessment', 'Technology Roadmaps'
      ],
      challenges: [
        'Navigating complex technology selection processes.',
        'Architecting systems for future scale and adaptability.',
        'Transforming engineering organizations for agility.',
        'Aligning technical investments with business outcomes.'
      ]
    }
  };

  const service = servicesData[id];

  if (!service) {
    return (
      <div className="page-container section-padding text-center">
        <h2>Capability Not Found</h2>
        <Link to="/services" className="text-accent mt-4 inline-block">Return to Capabilities</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="hero-section text-center">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">CAPABILITY</span>
            <h1 className="section-title text-center">{service.title}</h1>
            <p className="section-description max-w-3xl mx-auto">{service.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section bg-navy-light pt-0">
        <div className="container">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">{service.content}</p>
                
                <h3 className="text-2xl font-bold mb-6">Engineering Challenges We Solve</h3>
                <ul className="space-y-4">
                  {service.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted text-lg">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 lg:p-12 h-full">
                <h3 className="text-2xl font-bold mb-8">Our {service.title} Services</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.offerings.map((offering, i) => (
                    <li key={i} className="flex items-center gap-2 p-4 bg-bg-dark border border-border rounded text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {offering}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-8">
                  <h4 className="text-xl font-bold mb-4">Ready to accelerate your engineering?</h4>
                  <Link to="/contact" className="btn btn-primary w-full">Talk to Our Experts <ArrowRight size={16} className="ml-2" /></Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
