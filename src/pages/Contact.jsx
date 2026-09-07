import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `New Contact Form Submission:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Company: ${formData.company}%0A
Phone: ${formData.phone}%0A
Service: ${formData.service}%0A
Message: ${formData.message}`;

    // Replace with the provided WP number
    const whatsappNumber = "1234567890"; // Placeholder
    window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  return (
    <div className="page-container section-padding">
      <div className="container">
        <ScrollReveal>
          <span className="section-label text-center">CONTACT US</span>
          <h1 className="section-title text-center">Talk to Our Experts</h1>
        </ScrollReveal>

        <div className="contact-layout mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="contact-info glass-card">
              <h3 className="text-xl font-bold mb-6">Our Locations</h3>
              
              <div className="mb-8">
                <h4 className="text-accent mb-2">USA Headquarters</h4>
                <p>5900 Balcones Drive STE 100</p>
                <p>Austin, TX 78731</p>
                <p>USA</p>
              </div>

              <div className="mb-8">
                <h4 className="text-accent mb-2">India</h4>
                <p>Bangalore, Karnataka, India</p>
              </div>

              <div>
                <h4 className="text-accent mb-2">Email</h4>
                <a href="mailto:contact@tranquelent.com" className="hover:text-accent transition">contact@tranquelent.com</a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-group mb-4">
                <label className="block mb-2 text-sm text-muted">Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white" />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-sm text-muted">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white" />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-sm text-muted">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white" />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-sm text-muted">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white" />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-sm text-muted">Service/Capability</label>
                <select required name="service" value={formData.service} onChange={handleChange} className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white">
                  <option value="" className="text-black">Select a Service</option>
                  <option value="Semiconductor Engineering" className="text-black">Semiconductor Engineering</option>
                  <option value="Embedded & Hardware" className="text-black">Embedded & Hardware</option>
                  <option value="Software & Digital" className="text-black">Software & Digital</option>
                  <option value="Technology Consulting" className="text-black">Technology Consulting</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
              </div>
              <div className="form-group mb-6">
                <label className="block mb-2 text-sm text-muted">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="form-input w-full p-3 bg-transparent border border-border rounded focus:border-accent outline-none text-white"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
