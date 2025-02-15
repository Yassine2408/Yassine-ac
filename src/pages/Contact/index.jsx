import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ContactContainer,
  ContactForm,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  ContactInfo,
  SocialLinks,
  SocialLink
} from './styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the form submission logic
    // For example, sending to an email service or backend API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
      >
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        <ContactInfo>
          <h2>Contact Information</h2>
          <p>Feel free to reach out through any of these platforms:</p>
          
          <SocialLinks>
            <SocialLink href="https://www.fiverr.com/s/dDrdo83" target="_blank">
              <i className="fab fa-fiverr"></i> Fiverr
            </SocialLink>
            <SocialLink href="mailto:yassine.aitelcaid@uit.ac.ma">
              <i className="fas fa-envelope"></i> Email
            </SocialLink>
            {/* Add more social links as needed */}
          </SocialLinks>

          <div style={{ marginTop: '2rem' }}>
            <h3>Location</h3>
            <p>Kenitra, Morocco</p>
          </div>
        </ContactInfo>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact; 