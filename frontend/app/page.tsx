'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Page = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <>
      <Navbar content={content} />
      <div className="flex flex-col md:flex-row h-[85vh] font-jetbrains-mono">
        <textarea className="w-full md:w-1/2 h-full resize-none p-4 bg-[#212121] focus:outline-none" placeholder="Pastebin and URL shortener. Paste, save and share!" value={content} onChange={handleContentChange}></textarea>
        <div className="w-full h-0.5 md:w-0.5 md:h-full bg-black"></div>
        <textarea className="w-full md:w-1/2 h-full resize-none p-4 mb-10 bg-[#212121] focus:outline-none" placeholder="Pastebin and URL shortener. Paste, save and share!" readOnly value={content}></textarea>
      </div>
      <Footer />
    </>
  );
};

export default Page;
