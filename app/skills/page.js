'use client';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
  min-height: calc(100vh - 120px);
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const SkillCategory = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const skills = [
  { category: 'Data Science', skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'] },
  { category: 'Teaching', skills: ['Public Speaking', 'Curriculum Development', 'Student Mentoring'] },
  { category: 'Copywriting', skills: ['SEO Writing', 'Content Marketing', 'Persuasive Writing'] }
];

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>
        <h1>My Skills</h1>
        <SkillsContainer>
          {skills.flatMap(({ category, skills }) =>
            skills.map(skill => (
              <SkillCard key={skill}>
                <SkillTitle>{skill}</SkillTitle>
                <SkillCategory>{category}</SkillCategory>
              </SkillCard>
            ))
          )}
        </SkillsContainer>
      </PageContent>
      <Footer />
    </div>
  );
}
