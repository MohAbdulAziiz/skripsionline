'use client';

import styled from 'styled-components';
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

const FloatingOrnament = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: float 6s infinite ease-in-out;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const HighlightText = styled.span`
  color: #6e8efb;
  font-weight: bold;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px 20px;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: left;
  &:hover {
    transform: translateY(-5px);
  }
`;

const projects = [
  { title: 'Data Analysis Dashboard', description: 'A dashboard to visualize real-time data insights.' },
  { title: 'Machine Learning Model', description: 'A predictive model for customer churn analysis.' },
  { title: 'NLP Chatbot', description: 'An AI-powered chatbot for customer service automation.' },
  { title: 'Copywriting Portfolio', description: 'A collection of compelling copywriting projects.' },
  { title: 'Interactive Learning Platform', description: 'A web-based platform for online learning and assessments.' },
];

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>
        <FloatingOrnament top="10%" left="10%" />
        <FloatingOrnament top="70%" left="80%" />
        <h1>Portfolio</h1>
        
        <h2>Projects</h2>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </PageContent>
      <Footer />
    </div>
  );
}
