
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h1>
      <p className="mt-2 text-lg text-gray-400">{subtitle}</p>
    </div>
  );
};
