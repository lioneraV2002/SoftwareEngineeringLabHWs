import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiAward, FiUser } from 'react-icons/fi';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 }
  ];

  const experiences = [
    {
      year: '2022 - حال حاضر',
      position: 'توسعه دهنده فرانت‌اند ارشد',
      company: 'شرکت فناوری نوین',
      description: 'توسعه رابط کاربری محصولات اصلی شرکت با React و TypeScript'
    },
    {
      year: '2020 - 2022',
      position: 'توسعه دهنده فرانت‌اند',
      company: 'استارتاپ وب‌های خلاق',
      description: 'پیاده سازی کامپوننت‌های قابل استفاده مجدد و بهبود عملکرد رابط کاربری'
    },
    {
      year: '2018 - 2020',
      position: 'طراح UI/UX',
      company: 'آژانس طراحی دیجیتال',
      description: 'طراحی رابط کاربری و تجربه کاربری برای مشتریان مختلف'
    }
  ];

  const stats = [
    { icon: <FiCode />, value: '50+', label: 'پروژه کامل' },
    { icon: <FiLayers />, value: '5 سال', label: 'تجربه' },
    { icon: <FiAward />, value: '12+', label: 'گواهینامه' },
    { icon: <FiUser />, value: '35+', label: 'مشتری راضی' }
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
    <section className="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">درباره من</h1>
          <p className="section-subtitle">
            بیایید بیشتر آشنا شویم
          </p>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-image" variants={itemVariants}>
            <div className="image-wrapper">
              <img 
                src="/images/about.jpg" 
                alt="About Me" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x600/3498db/ffffff?text=علی+احمدی';
                }}
              />
            </div>
          </motion.div>

          <motion.div className="about-info" variants={itemVariants}>
            <h2 className="about-title">
              من <span className="highlight">علی احمدی</span> هستم، توسعه دهنده فرانت‌اند
            </h2>
            
            <div className="about-text">
              <p>
                با بیش از 5 سال تجربه در توسعه وب، من در ایجاد رابط‌های کاربری مدرن و تعاملی تخصص دارم. 
                به طراحی پاسخگو، عملکرد عالی و تجربه کاربری استثنایی اعتقاد دارم.
              </p>
              <p>
                من عاشق حل مشکلات پیچیده با راه حل‌های خلاقانه هستم و دائماً در حال یادگیری فناوری‌های جدید هستم 
                تا در روندهای صنعت به‌روز بمانم.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="skills-section">
          <motion.h3 
            className="skills-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            مهارت‌های من
          </motion.h3>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <motion.h3 
            className="experience-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            سوابق کاری
          </motion.h3>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h4 className="timeline-position">{exp.position}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;