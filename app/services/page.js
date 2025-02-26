'use client';

import styled from 'styled-components';
import { FaCode, FaChartBar, FaDatabase } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
  min-height: calc(100vh - 120px);
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>

        <h2 style={{ marginTop: '40px' }}>Services I Offer</h2>
        <ServicesContainer>
          <ServiceCard>
            <FaCode size={50} color="#3498db" />
            <h3>Web Development</h3>
            <p>Building modern and responsive websites using the latest technologies.</p>
          </ServiceCard>
          
          <ServiceCard>
            <FaChartBar size={50} color="#2ecc71" />
            <h3>Data Analysis</h3>
            <p>Transforming raw data into meaningful insights using Python and SQL.</p>
          </ServiceCard>
          
          <ServiceCard>
            <FaDatabase size={50} color="#e74c3c" />
            <h3>Database Management</h3>
            <p>Optimizing and managing databases for efficient data storage and retrieval.</p>
          </ServiceCard>
        </ServicesContainer>
      </PageContent>
      <Footer />
    </div>
  );
}
