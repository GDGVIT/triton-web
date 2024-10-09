'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PastebinProps {
  initialContent?: string;
  initialTitle?: string;
}

const Pastebin: React.FC<PastebinProps> = ({ initialContent = '', initialTitle = 'Untitled file' }) => {
  const [content, setContent] = useState(initialContent);
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <>
      <Navbar content={content} titleN={initialTitle} />
      <div className="flex flex-col md:flex-row h-[85vh] font-jetbrains-mono">
        <textarea
          className="w-full md:w-1/2 h-full resize-none p-4 text-white bg-[#212121] focus:outline-none"
          placeholder="Pastebin and URL shortener. Paste, save and share!"
          value={content}
          onChange={handleContentChange}
        ></textarea>
        <div className="w-full h-0.5 md:w-0.5 md:h-full bg-black"></div>
        <textarea
          className="w-full md:w-1/2 h-full resize-none p-4 mb-10 bg-[#212121] text-white focus:outline-none"
          placeholder="Pastebin and URL shortener. Paste, save and share!"
          readOnly
          value={content}
        ></textarea>
      </div>
      <Footer />
    </>
  );
}

export default Pastebin;