import React from 'react';

export type Page = 'dashboard' | 'diagnostics' | 'game-optimizer' | 'cleaner' | 'recovery' | 'system-cleaner' | 'security' | 'memory' | 'privacy' | 'os-installer' | 'windows-optimizer' | 'startup-manager';

export interface ScanTask {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  // Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  prompt: string;
}

export interface NavItem {
  id: Page;
  label: string;
  // Fix: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
}