
import React, { useState, useEffect, useRef } from 'react';

interface ReportModalProps {
  report: string;
  onClose: () => void;
  taskId: string | null;
}

export const ReportModal: React.FC<ReportModalProps> = ({ report, onClose, taskId }) => {
  const [command, setCommand] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const isAlert = taskId === 'lang_overlay_patch';

  useEffect(() => {
    // Regex para encontrar o comando dentro de ```cmd ... ```
    const commandRegex = /```cmd\n([\s\S]*?)\n```/;
    const match = report.match(commandRegex);
    if (match && match[1]) {
      setCommand(match[1].trim());
    } else {
      setCommand(null);
    }
  }, [report]);
  
  // Basic markdown-to-HTML conversion
  const formatReport = (text: string) => {
    return text
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-3 mt-4">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-200 mb-2 mt-3">$1</h3>')
      .replace(/\*\*(.*)\*\*/g, '<strong class="font-semibold text-cyan-400">$1</strong>')
      .replace(/\* (.*)/g, '<li class="ml-5 list-disc">$1</li>')
      // Transforma ```cmd ... ``` em um bloco de código visualmente distinto
      .replace(/```cmd\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 rounded-md p-4 mt-4 font-mono text-sm text-green-300 overflow-x-auto"><code>$1</code></pre>')
      .replace(/\n/g, '<br />');
  };

  const handleDownloadBat = () => {
    if (command) {
      const batContent = `@echo off\ncls\n@echo Executando comando AURORA...\n${command}\n@echo.\n@echo Tarefa concluida.\npause`;
      const blob = new Blob([batContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `aurora_${taskId || 'command'}.bat`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  const getModalTitle = () => {
    if (isAlert) return "Alerta de Segurança";
    if (command) return "Comando Pronto para Execução";
    return "Relatório da Tarefa";
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div ref={modalRef} className="bg-gray-800 rounded-lg shadow-2xl p-6 sm:p-8 max-w-2xl w-full mx-4 border border-gray-700 animate-fade-in-up">
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-2xl font-bold text-white">{getModalTitle()}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Fechar">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {command && (
            <div className="bg-blue-900/50 border border-blue-700 text-blue-200 p-4 rounded-lg mb-6 text-sm">
                <h4 className="font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Pronto para Agir!
                </h4>
                <p>
                    O AURORA preparou um arquivo de comando (.bat) para você. Faça o download e execute-o (se necessário, como administrador) para aplicar a otimização no seu PC.
                </p>
            </div>
        )}

        <div 
          className="prose prose-invert max-h-[50vh] overflow-y-auto pr-4 text-gray-300"
          dangerouslySetInnerHTML={{ __html: formatReport(report) }}
        >
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-end items-center gap-4">
            {command && (
              <button 
                onClick={handleDownloadBat} 
                className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center font-semibold shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Baixar Arquivo .bat
              </button>
            )}
            <button onClick={onClose} className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Fechar
            </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
