import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding-top: 80px;
`;

export const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: ${({ theme }) => theme.primary};
  border-radius: 30px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.surface};

  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const ServiceCard = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const SkillTag = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.surface};
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`; 