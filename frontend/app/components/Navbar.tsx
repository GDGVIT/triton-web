'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Navbar = ({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Untitled file');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [oAuthToken, setOAuthToken] = useState(localStorage.getItem('token') ?? '');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

useEffect(() => {
  setOAuthToken(localStorage.getItem('token') ?? '');
  if (!oAuthToken) {
    setIsLoggedIn(false); // Assuming you have a state variable to track login status
  }
  else{
    setIsLoggedIn(true);
  }
}, []); 

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSave = async () => {
    const [fileName, extension] = title.split('.');
    const payload = {
      title: fileName,
      content,
      extension: extension || '.txt',
      url: fileName.replace(/\s+/g, '-').toLocaleLowerCase(),
    };

    console.log(payload);

    try {
      const response = await axios.post('http://localhost:8080/v1/pastebin/create', payload, {
        headers: {
          Authorization: `Bearer ${oAuthToken}`,
        },
      });
      const generatedUrl = `http://localhost:8080/${fileName.replace(/\s+/g, '-').toLocaleLowerCase()}`;
      console.log('Saved successfully:', response.data);
      console.log('Generated URL:', generatedUrl);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/v1/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${oAuthToken}`,
        },
      });
      localStorage.removeItem('token'); // This line removes the token
      setIsLoggedIn(false);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  

  return (
    <nav className="bg-background flex items-center justify-between p-4 mx-4 font-jetbrains-mono">
      <div className="flex items-center">
        <Image alt="logo" src="/logo.svg" width={45} height={30} />
        <div className="flex flex-col space-y-1">
          <input type="text" className="text-xl text-[#8F8F8F] ml-6 bg-black outline-none" placeholder="Untitled file" value={title} onChange={handleTitleChange} />
          <div className="flex space-x-4 ml-6">
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Workspace</button>
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Preview</button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden md:flex items-center space-x-8">
          <button className="bg-white text-black px-4 py-1 rounded-2xl hover:bg-secondary">Analytics</button>
          <button onClick={handleSave} className="text-muted hover:text-muted-foreground flex items-center space-x-2">
            <Image alt="save icon" src="/save.svg" width={25} height={25} />
            <span>Save</span>
          </button>
          {isLoggedIn ? (
            <button type="button" className="w-full text-left text-muted hover:text-muted-foreground flex items-center space-x-2" onClick={handleLogout}>
              <span>Logout</span>
            </button>
          ) : (
            <form action="http://localhost:8080/v1/auth/login/oauth" method="GET">
              <button type="submit" className="w-full text-left text-muted hover:text-muted-foreground flex items-center space-x-2">
                <span>Login</span>
              </button>
            </form>
          )}
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
          <button className="block w-full text-left text-white px-4 py-2 rounded-lg hover:bg-secondary mb-2">Analytics</button>
          <button onClick={handleSave} className="w-full text-left text-muted hover:text-muted-foreground flex items-center space-x-2">
            <Image alt="save icon" src="/save.svg" width={25} height={25} />
            <span>Save</span>
          </button>
          <form action="http://localhost:8080/v1/auth/login/oauth" method="GET">
            <button type="submit" className="w-full text-left text-muted hover:text-muted-foreground flex items-center space-x-2">
              <span>Login</span>
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
