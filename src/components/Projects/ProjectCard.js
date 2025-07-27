import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="project-card"
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: '0 15px 30px var(--shadow-color)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400/3498db/ffffff?text=پروژه';
          }}
        />
        <div className="project-overlay">
          <div className="project-category">
            {project.category === 'web' && 'وب'}
            {project.category === 'mobile' && 'موبایل'}
            {project.category === 'desktop' && 'دسکتاپ'}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-buttons">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-btn github-btn"
          aria-label="GitHub repository"
        >
          <FiGithub />
          <span>کد منبع</span>
        </a>
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-btn demo-btn"
          aria-label="Live demo"
        >
          <FiExternalLink />
          <span>دمو زنده</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;