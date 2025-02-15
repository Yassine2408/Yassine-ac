import styled from 'styled-components';

export const BlogContainer = styled.div`
  padding: 100px 2rem 2rem;
  
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BlogCard = styled.article`
  background: ${({ theme }) => theme.surface};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BlogDate = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;

export const BlogTitle = styled.h2`
  margin: 1rem 0;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;

export const BlogExcerpt = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const ReadMore = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`; 