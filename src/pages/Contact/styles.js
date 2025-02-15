import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 100px 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  background: ${({ theme }) => theme.surface};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.primary}40;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.primary}40;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 2rem;
  background: ${({ theme }) => theme.surface};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.secondary};
  }

  p {
    line-height: 1.6;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  i {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`; 