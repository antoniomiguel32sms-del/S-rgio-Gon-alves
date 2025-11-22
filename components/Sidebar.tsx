import React from 'react';
import { NAV_ITEMS } from '../constants';
import type { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-16 sm:w-64 bg-gray-900/70 backdrop-blur-sm border-r border-gray-700 flex flex-col">
      <div className="flex items-center justify-center sm:justify-start sm:pl-6 h-20 border-b border-gray-700">
         <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
        </svg>
        <span className="hidden sm:inline ml-3 text-xl font-bold tracking-wider">AURORA</span>
      </div>
      <nav className="flex-1 px-2 sm:px-4 py-4 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 ${
              currentPage === item.id
                ? 'bg-cyan-600 text-white shadow-lg'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline ml-4 font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};