import { motion } from 'framer-motion';
import {
  HomeContainer,
  HeroSection,
  Title,
  Subtitle,
  CTAButton,
  ServicesSection,
  ServiceCard,
  SkillsSection,
  SkillTag
} from './styles';

const Home = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML/CSS', 'Node.js',
    'Firebase', 'Netlify', 'Responsive Design', 'UI/UX'
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Yassine Ait El Caid</Title>
          <Subtitle>Web Developer | IT Teacher | Problem Solver</Subtitle>
          <CTAButton href="https://www.fiverr.com/s/dDrdo83" target="_blank">
            Hire Me on Fiverr
          </CTAButton>
        </motion.div>
      </HeroSection>

      <ServicesSection>
        <h2>What I Offer</h2>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <ServiceCard>
            <h3>Web Development</h3>
            <p>Custom websites built with modern technologies</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Responsive Design</h3>
            <p>Websites that work perfectly on all devices</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Technical Consultation</h3>
            <p>Expert advice on your web projects</p>
          </ServiceCard>
        </div>
      </ServicesSection>

      <SkillsSection>
        <h2>Skills & Technologies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          {skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>
      </SkillsSection>
    </HomeContainer>
  );
};

export default Home; 