import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CapabilityCard = ({ title, services, link, index }) => {
  return (
    <motion.div 
      className="capability-card glass-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="card-header">
        <span className="card-number">0{index + 1}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <ul className="card-services">
        {services.map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
      <Link to={link} className="card-cta">
        Learn More <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default CapabilityCard;
