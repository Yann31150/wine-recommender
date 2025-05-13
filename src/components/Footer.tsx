import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#1a0d0a] text-[#f5e9dc] py-8 px-4 flex flex-col md:flex-row items-center justify-between border-t border-[#7b2230] mt-8">
    <div className="mb-4 md:mb-0 text-center md:text-left">
      <span className="font-light">© {new Date().getFullYear()} Projet Recommandation de Vins par IA</span>
    </div>
    <div className="flex gap-6 items-center justify-center">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a03c50] transition-colors text-2xl" aria-label="GitHub">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/></svg>
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a03c50] transition-colors text-2xl" aria-label="LinkedIn">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
      </a>
    </div>
    <div className="mt-4 md:mt-0 text-center md:text-right text-sm text-[#a03c50]">
      Réalisé par Yann D. — Design & Développement
    </div>
  </footer>
);

export default Footer; 