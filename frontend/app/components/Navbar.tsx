"use client";
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="bg-background flex items-center justify-between p-4 mx-4 font-jetbrains-mono">
      <div className="flex items-center">
        <Image alt="logo" src="/logo.svg" width={45} height={30} />
        <div className="flex flex-col space-y-1">
          <span className="text-xl text-[#8F8F8F] ml-6">Untitled file</span>
          <div className="flex space-x-4 ml-6">
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Workspace</button>
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Preview</button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-8">
          <button className="bg-white text-black px-4 py-1 rounded-2xl hover:bg-secondary">Analytics</button>
          <button className="text-muted hover:text-muted-foreground flex items-center space-x-2">
            <Image alt="save icon" src="/save.svg" width={25} height={25} />
            <span>Save</span>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-muted hover:text-muted-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-background border border-gray-700 rounded-lg shadow-lg p-4 bg-black">
          <button className="block w-full text-left  text-white px-4 py-2 rounded-lg hover:bg-secondary mb-2">Analytics</button>
          <button className=" w-full text-left text-muted hover:text-muted-foreground flex items-center space-x-2">
            <Image alt="save icon" src="/save.svg" width={25} height={25} />
            <span>Save</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
