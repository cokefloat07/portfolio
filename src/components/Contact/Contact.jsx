import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import MagneticButton from '../MagneticButton/MagneticButton';
import TextReveal from '../TextReveal/TextReveal';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Using environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // ✅ Check if env variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service not configured properly.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      toast.success('Message sent successfully! 🎉');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ---- Rest of your component stays EXACTLY the same ----
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg-gradient" />
      <div className="container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>
              Get In Touch
            </span>
          </motion.div>

          <TextReveal className="text-center">
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Let's work<br />
              <span className="gradient-text">together</span>
            </h2>
          </TextReveal>

          <motion.p
            className="section-subtitle"
            variants={fadeInUp}
            style={{ textAlign: 'center', margin: '0 auto 60px' }}
          >
            Have a project in mind? Let's create something amazing together.
            I'm always open to discussing new opportunities.
          </motion.p>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={fadeInUp}>
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-desc">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>

              <div className="contact-details">
                <motion.div className="contact-detail" whileHover={{ x: 5 }}>
                  <div className="contact-detail-icon"><FiMail /></div>
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <a href={`mailto:${personalInfo.email}`}>
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div className="contact-detail" whileHover={{ x: 5 }}>
                  <div className="contact-detail-icon"><FiPhone /></div>
                  <div>
                    <span className="contact-detail-label">Phone</span>
                    <a href={`tel:${personalInfo.phone}`}>
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div className="contact-detail" whileHover={{ x: 5 }}>
                  <div className="contact-detail-icon"><FiMapPin /></div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </motion.div>
              </div>

              <div className="contact-social">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>

              <div className="contact-orb contact-orb-1" />
              <div className="contact-orb contact-orb-2" />
            </motion.div>

            <motion.form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              variants={fadeInUp}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <MagneticButton
                type="submit"
                className="primary submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </MagneticButton>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;