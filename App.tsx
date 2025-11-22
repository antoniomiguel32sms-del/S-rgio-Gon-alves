import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Cleaner } from './components/Cleaner';
import { Diagnostics } from './components/Diagnostics';
import { Updates } from './components/Updates';
import { Recovery } from './components/Recovery';
import { Security } from './components/Security';
import { Memory } from './components/Memory';
import { SystemCleaner } from './components/SystemCleaner';
import { Privacy } from './components/Privacy';
import { OSInstaller } from './components/OSInstaller';
import { WindowsOptimizer } from './components/WindowsOptimizer';
import { StartupManager } from './components/StartupManager';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'diagnostics':
        return <Diagnostics />;
      case 'game-optimizer':
        return <Updates />;
      case 'cleaner':
        return <Cleaner />;
      case 'system-cleaner':
        return <SystemCleaner />;
      case 'windows-optimizer':
        return <WindowsOptimizer />;
       case 'startup-manager':
        return <StartupManager />;
      case 'security':
        return <Security />;
      case 'memory':
        return <Memory />;
      case 'recovery':
        return <Recovery />;
      case 'privacy':
        return <Privacy />;
      case 'os-installer':
        return <OSInstaller />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;