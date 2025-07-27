import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'ایمیل', value: 'contact@example.com' },
    { icon: <FiPhone />, label: 'تلفن', value: '+98 912 345 6789' },
    { icon: <FiMapPin />, label: 'آدرس', value: 'تهران، ایران' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">تماس با من</h1>
          <p className="section-subtitle">
            برای همکاری یا پرسش، پیام بدهید
          </p>
        </motion.div>

        <motion.div 
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <h2 className="info-title">اطلاعات تماس</h2>
            <p className="info-description">
              می‌توانید از طریق راه‌های زیر یا فرم تماس با من در ارتباط باشید
            </p>

            <ul className="contact-details">
              {contactInfo.map((item, index) => (
                <li key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-content">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="social-links">
              <a href="https://twitter.com/" className="social-link" aria-label="Twitter">
                <span className="social-text">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/" className="social-link" aria-label="LinkedIn">
                <span className="social-text">LinkedIn</span>
              </a>
              <a href="https://github.com/" className="social-link" aria-label="GitHub">
                <span className="social-text">GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={itemVariants}
          >
            <h2 className="form-title">پیام بفرستید</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام کامل"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="آدرس ایمیل"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="موضوع"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="پیام شما"
                  required
                  rows="5"
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'در حال ارسال...' : (
                  <>
                    <span>ارسال پیام</span>
                    <FiSend className="send-icon" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  پیام شما با موفقیت ارسال شد!
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
