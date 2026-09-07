import React from 'react';
import { useParams } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const IndustryDetail = () => {
  const { id } = useParams();
  
  const titles = {
    'semiconductor-electronics': 'Semiconductor & Electronics',
    'technology-digital-engineering': 'Technology & Digital Engineering'
  };

  const title = titles[id] || 'Industry Details';

  return (
    <div className="page-container section-padding">
      <div className="container">
        <ScrollReveal>
          <span className="section-label text-center">INDUSTRY</span>
          <h1 className="section-title text-center">{title}</h1>
        </ScrollReveal>
        <div className="mt-12 text-center text-muted">
          Content for {title} coming soon...
        </div>
      </div>
    </div>
  );
};
export default IndustryDetail;
