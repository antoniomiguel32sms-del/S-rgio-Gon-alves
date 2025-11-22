
import React from 'react';
import type { ScanTask } from '../types';

interface ActionCardProps {
  task: ScanTask;
  onExecute: (prompt: string, promptKey: string) => void;
  isLoading: boolean;
}

export const ActionCard: React.FC<ActionCardProps> = ({ task, onExecute, isLoading }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-gray-700 p-3 rounded-full">
            {task.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{task.title}</h3>
        </div>
        <p className="text-gray-400">{task.description}</p>
      </div>
      <button
        onClick={() => onExecute(task.prompt, task.id)}
        disabled={isLoading}
        className="mt-6 w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {isLoading ? 'Executando...' : task.buttonText}
      </button>
    </div>
  );
};