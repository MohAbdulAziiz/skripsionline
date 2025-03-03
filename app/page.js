'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const PageContent = styled.div`
  padding: 80px 20px 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const StickyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Section = styled.div`
  padding: 40px;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const sections = [
  { id: 'bab1', title: 'BAB 1 - Pendahuluan', content: 'Latar belakang penelitian dan tujuan penelitian.' },
  { id: 'bab2', title: 'BAB 2 - Kajian Pustaka', content: 'Pembahasan teori dan referensi yang relevan.' },
  { id: 'bab3', title: 'BAB 3 - Metodologi Penelitian', content: 'Metode yang digunakan dalam penelitian.' },
  { id: 'bab4', title: 'BAB 4 - Hasil dan Pembahasan', content: 'Hasil penelitian serta analisisnya.' },
  { id: 'bab5', title: 'BAB 5 - Kesimpulan dan Saran', content: 'Kesimpulan serta saran penelitian selanjutnya.' },
];

export default function SkripsiPage() {
  const [currentHeading, setCurrentHeading] = useState(sections[0].title);

  useEffect(() => {
    const handleScroll = () => {
      let activeSection = sections[0].title;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 100) {
          activeSection = section.title;
          break;
        }
      }
      setCurrentHeading(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageWrapper>
      <StickyContainer>{currentHeading}</StickyContainer>
      <PageContent>
        {sections.map((section) => (
          <Section key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </Section>
        ))}
      </PageContent>
    </PageWrapper>
  );
}
