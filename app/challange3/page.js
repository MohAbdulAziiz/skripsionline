'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContent = styled.div`
  padding: 80px 20px;
  text-align: center;
  background: linear-gradient(to bottom, #e3f2fd, #bbdefb);
  min-height: calc(100vh - 120px);
`;

const ClassesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ClassCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 320px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ClassTitle = styled.h3`
  background-color: #0077c2;
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
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
  border: 3px solid #0077c2;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const classmates = {
  'Kelas SI': [
    { name: 'Andi', image: '/contoh1.jpg' },
    { name: 'Budi', image: '/contoh2.jpg' },
    { name: 'Citra', image: '/contoh3.jpg' }
  ],
  'Kelas KA': [
    { name: 'Faisal', image: '/contoh4.jpg' },
    { name: 'Gita', image: '/contoh2.jpg' },
    { name: 'Hana', image: '/contoh6.jpg' }
  ],
  'Kelas BD': [
    { name: 'Kiki', image: '/contoh7.jpg' },
    { name: 'Lina', image: '/contoh8.jpg' },
    { name: 'Mira', image: '/contoh9.jpg' }
  ]
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 35px;
  border-radius: 12px;
  text-align: center;
  width: 600px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 15px;
  border: none;
  background: #d32f2f;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #b71c1c;
  }
`;

export default function Home() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <PageContent>
        <h2 style={{ marginTop: '40px', color: '#003c8f' }}>Best Friends in Each Class</h2>
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
            <h3 style={{ color: '#003c8f' }}>{selectedClass.className}</h3>
            <ProfileContainer>
              {selectedClass.students.map((student, index) => (
                <ProfileWrapper key={index}>
                  <ProfileImage src={student.image} alt={student.name} />
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#0077c2' }}>{student.name}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>{selectedClass.className}</p>
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
