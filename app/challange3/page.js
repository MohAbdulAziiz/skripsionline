'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background-color: #f4f4f4;
  min-height: calc(100vh - 120px);
`;

const ClassesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ClassCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ClassTitle = styled.h3`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const classmates = {
  'Kelas SI': [
    { name: 'Andi', image: '/aziz.jpeg' },
    { name: 'Budi', image: '/aziz.jpeg' },
    { name: 'Citra', image: '/aziz.jpeg' },
    { name: 'Dina', image: '/aziz.jpeg' },
    { name: 'Eka', image: '/aziz.jpeg' }
  ],
  'Kelas KA': [
    { name: 'Faisal', image: '/aziz.jpeg' },
    { name: 'Gita', image: '/aziz.jpeg' },
    { name: 'Hana', image: '/aziz.jpeg' },
    { name: 'Ivan', image: '/aziz.jpeg' },
    { name: 'Joko', image: '/aziz.jpeg' }
  ],
  'Kelas BD': [
    { name: 'Kiki', image: '/aziz.jpeg' },
    { name: 'Lina', image: '/aziz.jpeg' },
    { name: 'Mira', image: '/aziz.jpeg' },
    { name: 'Nanda', image: '/aziz.jpeg' },
    { name: 'Omar', image: '/aziz.jpeg' }
  ]
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 700px;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background: red;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Home() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>
        <h2 style={{ marginTop: '40px' }}>Best Friends in Each Class</h2>
        <ClassesContainer>
          {Object.entries(classmates).map(([className, students]) => (
            <ClassCard key={className} onClick={() => setSelectedClass({ className, students })}>
              <ClassTitle>{className}</ClassTitle>
              <ProfileContainer>
                {students.map((student, index) => (
                  <ProfileImage key={index} src={student.image} alt={student.name} />
                ))}
              </ProfileContainer>
            </ClassCard>
          ))}
        </ClassesContainer>
      </PageContent>
      <Footer />

      {selectedClass && (
        <Modal onClick={() => setSelectedClass(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>{selectedClass.className}</h3>
            <ProfileContainer>
              {selectedClass.students.map((student, index) => (
                <ProfileWrapper key={index}>
                  <ProfileImage src={student.image} alt={student.name} />
                  <p>{student.name}</p>
                  <p>{selectedClass.className}</p>
                </ProfileWrapper>
              ))}
            </ProfileContainer>
            <CloseButton onClick={() => setSelectedClass(null)}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
