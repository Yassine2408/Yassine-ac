import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import {
  ProjectsContainer,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  TechStack,
  TechTag,
  ProjectLinks
} from './styles';

const Projects = () => {
  return (
    <ProjectsContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <TechStack>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              
              <ProjectLinks>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects; 