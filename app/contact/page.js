'use client';

import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f4f4f4, #e0e0e0);
  min-height: calc(100vh - 120px);
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: left;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 120px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
  width: 100%;
  &:hover {
    background: #5a7be4;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  background: #fafafa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const MapContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function Contact() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>
        <h1>Contact Me</h1>
        <p>Feel free to reach out through the form below or find me on the map.</p>
        
        <ContactContainer>
          <ContactForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </ContactForm>
          
          <ContactInfo>
            <ContactItem>
              <FaEnvelope /> contact@example.com
            </ContactItem>
            <ContactItem>
              <FaPhone /> +123 456 7890
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt /> 123 Main Street, Melbourne, VIC
            </ContactItem>
          </ContactInfo>
        </ContactContainer>

        <h2>Find Me</h2>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95373531531596!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df17a1%3A0xf6d77b6e5e3e1c45!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1632526523615!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </PageContent>
      <Footer />
    </div>
  );
}
