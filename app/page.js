'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const PageContent = styled.div`
  padding: 140px 20px 20px; /* Memberi ruang tambahan agar header tidak tertutup */
  background-color: #f4f4f4;
  min-height: calc(100vh - 120px);
`;

const StickyContainer = styled.div`
  position: fixed;
  top: 60px; /* Menempatkan sticky di bawah header */
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
  { 
    id: 'bab1', 
    title: 'BAB 1 - Pendahuluan', 
    content: 'Bab ini menjelaskan latar belakang penelitian, rumusan masalah, tujuan penelitian, serta manfaat penelitian. Pendahuluan memberikan gambaran mengenai alasan utama penelitian ini dilakukan dan urgensi dari topik yang dipilih.' 
  },
  { 
    id: 'bab2', 
    title: 'BAB 2 - Kajian Pustaka', 
    content: 'Pada bab ini dibahas teori-teori yang relevan dengan penelitian yang dilakukan. Kajian pustaka mencakup referensi dari penelitian sebelumnya, konsep-konsep utama, serta dasar hukum atau regulasi yang berkaitan dengan topik penelitian.' 
  },
  { 
    id: 'bab3', 
    title: 'BAB 3 - Metodologi Penelitian', 
    content: 'Bab ini menjelaskan metode yang digunakan dalam penelitian, termasuk jenis penelitian, teknik pengumpulan data, populasi dan sampel, serta teknik analisis data. Metodologi yang dipilih harus sesuai dengan tujuan penelitian yang telah dirumuskan sebelumnya.' 
  },
  { 
    id: 'bab4', 
    title: 'BAB 4 - Hasil dan Pembahasan', 
    content: 'Pada bab ini dipaparkan hasil penelitian yang telah dilakukan, baik dalam bentuk tabel, grafik, maupun deskripsi. Pembahasan berisi analisis mendalam terhadap hasil yang diperoleh, dikaitkan dengan teori yang telah dijelaskan dalam kajian pustaka.' 
  },
  { 
    id: 'bab5', 
    title: 'BAB 5 - Kesimpulan dan Saran', 
    content: 'Bab terakhir berisi kesimpulan yang diperoleh dari hasil penelitian serta saran untuk penelitian selanjutnya atau penerapan dalam dunia nyata. Kesimpulan harus menjawab rumusan masalah yang telah dikemukakan pada pendahuluan.' 
  }
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
      <Header />
      <StickyContainer>{currentHeading}</StickyContainer>
      <PageContent>
        {sections.map((section) => (
          <Section key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </Section>
        ))}
      </PageContent>
      <Footer />
    </PageWrapper>
  );
}
