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
  { id: 'bab1', title: 'BAB 1 - Pendahuluan', content: 'Bab ini menjelaskan latar belakang penelitian, rumusan masalah, tujuan penelitian, serta manfaat penelitian. Pendahuluan memberikan gambaran mengenai alasan utama penelitian ini dilakukan dan urgensi dari topik yang dipilih. Latar belakang menjelaskan fenomena yang melatarbelakangi penelitian, rumusan masalah merangkum permasalahan utama yang akan dipecahkan, tujuan penelitian menentukan hasil yang ingin dicapai, dan manfaat penelitian menguraikan dampak positif yang diharapkan dari penelitian ini.' },
  { id: 'bab2', title: 'BAB 2 - Kajian Pustaka', content: 'Pada bab ini dibahas teori-teori yang relevan dengan penelitian yang dilakukan. Kajian pustaka mencakup referensi dari penelitian sebelumnya, konsep-konsep utama yang mendukung penelitian, serta dasar hukum atau regulasi yang berkaitan dengan topik yang diangkat. Bab ini berfungsi sebagai landasan teoritis yang akan digunakan dalam menganalisis hasil penelitian, dengan mengacu pada berbagai sumber yang kredibel dan relevan.' },
  { id: 'bab3', title: 'BAB 3 - Metodologi Penelitian', content: 'Bab ini menjelaskan metode yang digunakan dalam penelitian, termasuk jenis penelitian yang diterapkan (kualitatif atau kuantitatif), teknik pengumpulan data seperti wawancara, survei, atau studi literatur, populasi dan sampel penelitian, serta teknik analisis data yang digunakan untuk mengolah informasi yang diperoleh. Metodologi penelitian harus sesuai dengan tujuan yang telah dirumuskan sebelumnya agar hasil yang diperoleh valid dan dapat dipertanggungjawabkan.' },
  { id: 'bab4', title: 'BAB 4 - Hasil dan Pembahasan', content: 'Pada bab ini dipaparkan hasil penelitian yang telah dilakukan, baik dalam bentuk tabel, grafik, maupun deskripsi naratif. Pembahasan berisi analisis mendalam terhadap hasil yang diperoleh, dikaitkan dengan teori yang telah dijelaskan dalam kajian pustaka. Analisis ini bertujuan untuk menginterpretasikan data, mengidentifikasi temuan-temuan utama, serta menjelaskan implikasi dari hasil yang didapat.' },
  { id: 'bab5', title: 'BAB 5 - Kesimpulan dan Saran', content: 'Bab terakhir berisi kesimpulan yang diperoleh dari hasil penelitian serta saran untuk penelitian selanjutnya atau penerapan dalam dunia nyata. Kesimpulan harus menjawab rumusan masalah yang telah dikemukakan pada pendahuluan, sementara saran memberikan rekomendasi bagi peneliti berikutnya atau pihak yang berkepentingan terkait penerapan hasil penelitian ini dalam konteks praktis.' }
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
