import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'فروشگاه آنلاین',
      description: 'یک فروشگاه آنلاین کامل با React و Node.js',
      image: '/images/projects/project1.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/username/project1',
      demo: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: 'اپلیکیشن وضعیت آب و هوا',
      description: 'اپلیکیشن نمایش وضعیت آب و هوا با API خارجی',
      image: '/images/projects/project2.jpg',
      category: 'mobile',
      technologies: ['React Native', 'API'],
      github: 'https://github.com/username/project2',
      demo: 'https://project2-demo.com'
    },
    {
      id: 3,
      title: 'سیستم مدیریت محتوا',
      description: 'پنل ادمین برای مدیریت محتوا',
      image: '/images/projects/project3.jpg',
      category: 'web',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      github: 'https://github.com/username/project3',
      demo: 'https://project3-demo.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'همه' },
    { id: 'web', label: 'وب' },
    { id: 'mobile', label: 'موبایل' },
    { id: 'desktop', label: 'دسکتاپ' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">پروژه‌های من</h1>
          <p className="section-subtitle">
            نمونه‌ای از کارهای انجام شده
          </p>
        </motion.div>

        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;



