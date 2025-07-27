import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'توسعه‌دهنده فرانت‌اند و طراح UI/UX';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="profile-container"
          variants={itemVariants}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Profile" 
            className="profile-img"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x200/3498db/ffffff?text=علی';
            }}
          />
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          سلام، من <span className="highlight">علی احمدی</span> هستم
        </motion.h1>

        <motion.div className="typing-container" variants={itemVariants}>
          <p className="hero-description">
            {displayedText}
            <span className="cursor">|</span>
          </p>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <Link to="/projects" className="btn btn-primary">
            مشاهده پروژه‌ها
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            تماس با من
          </Link>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
