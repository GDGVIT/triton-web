"use client"
import React, { createContext, useState, useContext } from 'react';

interface MarkdownContextProps {
  isMarkdown: boolean;
  setIsMarkdown: (value: boolean) => void;
}

const MarkdownContext = createContext<MarkdownContextProps | undefined>(undefined);

export const MarkdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMarkdown, setIsMarkdown] = useState(false);

  return (
    <MarkdownContext.Provider value={{ isMarkdown, setIsMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error('useMarkdown must be used within a MarkdownProvider');
  }
  return context;
};