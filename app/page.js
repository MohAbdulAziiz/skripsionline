'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      {/* Header tetap di atas */}
      <div className="fixed top-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Split Screen Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
        
        {/* Bagian Kiri - Background dengan Foto */}
        <div className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/aziz.jpeg')" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/60 to-transparent backdrop-blur-lg"></div>
          </div>
          
          {/* Foto Profil dengan efek glassmorphism */}
          <div className="relative z-10 flex flex-col items-center p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-all duration-300">
              <Image
                src="/aziz.jpeg"
                alt="Profile Picture"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h2 className="text-white mt-4 text-xl font-semibold">Moh. Abdul Aziz</h2>
            <p className="text-gray-300 text-sm">UI/UX Designer & Developer</p>
          </div>
        </div>

        {/* Bagian Kanan - Teks */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center bg-white/90 backdrop-blur-lg min-h-screen rounded-lg shadow-lg">
          <div className="p-8 md:p-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate UI/UX designer and developer who loves crafting
              beautiful and functional web experiences. With a keen eye for design 
              and strong technical skills, I bring ideas to life through creativity 
              and technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#"
                className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300"
              >
                View My Work
              </a>
              <a 
                href="#"
                className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg shadow-lg transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
