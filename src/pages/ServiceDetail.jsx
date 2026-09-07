import React from 'react';
import { useParams } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    'semiconductor-engineering': {
      title: 'Semiconductor Engineering',
      desc: 'Engineering expertise across the semiconductor lifecycle, from design and verification to physical implementation and silicon support.'
    },
    'embedded-hardware-engineering': {
      title: 'Embedded & Hardware Engineering',
      desc: 'Building intelligent hardware systems with deep expertise in embedded software, firmware, and digital hardware.'
    },
    'software-digital-engineering': {
      title: 'Software & Digital Engineering',
      desc: 'Software and digital engineering capabilities supporting intelligent systems.'
    },
    'engineering-technology-consulting': {
      title: 'Engineering & Technology Consulting',
      desc: 'Strategic guidance for smarter engineering and technology decisions.'
    }
  };

  const service = services[id] || { title: 'Service', desc: 'Service details coming soon.' };

  return (
    <div className="page-container section-padding">
      <div className="container">
        <ScrollReveal>
          <span className="section-label text-center">CAPABILITY</span>
          <h1 className="section-title text-center">{service.title}</h1>
          <p className="text-center max-w-3xl mx-auto">{service.desc}</p>
        </ScrollReveal>
        <div className="mt-12 text-center text-muted">
          Detailed capability content coming soon...
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;
