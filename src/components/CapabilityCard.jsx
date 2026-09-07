import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CapabilityCard = ({ title, link, services, index, image }) => {
  return (
    <motion.div 
      className="capability-card glass-card relative overflow-hidden group"
      whileHover={{ y: -5 }}
    >
      {/* Background Image on Hover */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="card-header border-b border-border pb-4 mb-4">
          <span className="card-number">0{index + 1}</span>
          <h3 className="card-title text-xl font-bold">{title}</h3>
        </div>
        
        <ul className="card-services text-sm text-muted">
          {services.map((service, i) => (
            <li key={i} className="mb-2 pl-4 relative">
              <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-accent"></span>
              {service}
            </li>
          ))}
        </ul>

        {/* Pictorial Representation Popups (Slide Down on hover) */}
        <div className="overflow-hidden mt-auto pt-4 h-0 group-hover:h-32 transition-all duration-500 ease-in-out border-t border-border/0 group-hover:border-border">
           <img src={image} alt={title} className="w-full h-full object-cover rounded border border-accent/20" />
        </div>

        <Link to={link} className="card-cta mt-4 inline-flex items-center text-accent font-semibold hover:gap-2 transition-all">
          Explore Services &rarr;
        </Link>
      </div>
    </motion.div>
  );
};

export default CapabilityCard;
