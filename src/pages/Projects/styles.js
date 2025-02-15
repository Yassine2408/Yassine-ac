import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 100px 2rem 2rem;
  
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.surface};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  font-size: 0.8rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 5px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`; 