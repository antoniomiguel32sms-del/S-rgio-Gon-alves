
import React, { useState, useRef } from 'react';
import { PageHeader } from './PageHeader';
import { ReportModal } from './ReportModal';
import { generateReport } from '../services/geminiService';
import { OS_INSTALLER_TASKS } from '../constants';

// Helper to create and download a .bat file
const downloadBat = (command: string, taskId: string) => {
    const batContent = `@echo off\ncls\n@echo Executando comando AURORA...\n${command}\n@echo.\n@echo Tarefa concluida.\npause`;
    const blob = new Blob([batContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aurora_${taskId}.bat`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};


export const OSInstaller: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [guideContent, setGuideContent] = useState<string | null>(null);
  const [backupConfirmed, setBackupConfirmed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleAction = async (taskId: 'pre_format_cleanup' | 'windows_install_guide') => {
    setIsLoading(taskId);
    const task = OS_INSTALLER_TASKS.find(t => t.id === taskId);
    if (!task) return;

    try {
      const report = await generateReport(task.prompt, task.id);
      
      if (taskId === 'pre_format_cleanup') {
        const commandRegex = /```cmd\n([\s\S]*?)\n```/;
        const match = report.match(commandRegex);
        if (match && match[1]) {
            downloadBat(match[1].trim(), taskId);
        } else {
            console.error("Comando não encontrado no relatório para limpeza de disco.");
        }
      } else if (taskId === 'windows_install_guide') {
        setGuideContent(report);
      }

    } catch (error) {
      console.error(`Failed to execute task ${taskId}:`, error);
      if (taskId === 'windows_install_guide') {
        setGuideContent("Falha ao gerar o guia. Por favor, tente novamente.");
      }
    } finally {
      setIsLoading(null);
    }
  };
  
  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Fix: Made the 'children' prop optional to resolve TypeScript errors where the prop was not being inferred correctly.
  const Step = ({ number, title, children, enabled = true }: { number: number, title: string, children?: React.ReactNode, enabled?: boolean }) => (
    <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-opacity ${enabled ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}>
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className={`bg-cyan-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 ${!enabled && 'bg-gray-600'}`}>
                {number}
            </span>
            {title}
        </h3>
        <div className={!enabled ? 'pointer-events-none' : ''}>
            {children}
        </div>
    </div>
  );

  return (
    <>
      <PageHeader
        title="Assistente de Instalação e Limpeza"
        subtitle="Um guia passo-a-passo para formatar e instalar o Windows com segurança."
      />

      <div className="space-y-8">
        
        <Step number={1} title="Confirmação de Backup">
            <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    AVISO CRÍTICO: Perda de Dados
                </h4>
                <p>O processo de formatação **APAGARÁ PERMANENTEMENTE** todos os arquivos, programas e dados do seu disco rígido principal. Faça backup de tudo que for importante antes de continuar.</p>
            </div>
            <label className="flex items-center space-x-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={backupConfirmed}
                    onChange={() => setBackupConfirmed(!backupConfirmed)}
                    className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-300">Eu entendo que meus dados serão apagados e já fiz um backup seguro de todos os meus arquivos importantes.</span>
            </label>
        </Step>
        
        <Step number={2} title="Limpeza Pré-Formatação" enabled={backupConfirmed}>
            <p className="text-gray-400 mb-4">
                Antes de formatar, é uma boa prática limpar arquivos desnecessários do seu sistema atual. Isso não afeta seus arquivos pessoais, mas remove lixo eletrônico.
            </p>
            <button
                onClick={() => handleAction('pre_format_cleanup')}
                disabled={isLoading === 'pre_format_cleanup'}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center font-semibold shadow-lg disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
                {isLoading === 'pre_format_cleanup' ? (
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                )}
                {isLoading === 'pre_format_cleanup' ? 'Processando...' : 'Executar Limpeza de Disco'}
            </button>
        </Step>
        
        <Step number={3} title="Preparar Mídia de Instalação" enabled={backupConfirmed}>
            <p className="text-gray-400 mb-4">Selecione o arquivo .ISO do Windows e use uma das ferramentas recomendadas para criar seu pen drive de instalação.</p>
            <input type="file" accept=".iso" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
            <button onClick={triggerFileSelect} className="px-6 py-2 mb-4 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors flex items-center font-semibold">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Procurar Arquivo ISO
            </button>
            {selectedFile && <p className="text-green-400 font-mono text-sm bg-gray-900 p-3 rounded-md mb-4">Arquivo selecionado: {selectedFile.name}</p>}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://rufus.ie/" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <h4 className="font-bold text-white">Rufus (Recomendado)</h4>
                    <p className="text-sm text-gray-300 mt-1">Uma ferramenta poderosa e confiável para criar mídias bootáveis.</p>
                </a>
                <a href="https://www.microsoft.com/software-download/windows11" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <h4 className="font-bold text-white">Microsoft Media Creation Tool</h4>
                    <p className="text-sm text-gray-300 mt-1">A ferramenta oficial da Microsoft. Simples e direta.</p>
                </a>
             </div>
        </Step>

        <Step number={4} title="Guia Final de Formatação" enabled={backupConfirmed}>
            <p className="text-gray-400 mb-4">Tudo pronto? Clique abaixo para gerar as instruções finais sobre como iniciar pelo pen drive e instalar o Windows.</p>
            <button
                onClick={() => handleAction('windows_install_guide')}
                disabled={isLoading === 'windows_install_guide'}
                className="w-full sm:w-auto flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none disabled:bg-green-400 disabled:cursor-not-allowed transition-colors"
            >
                {isLoading === 'windows_install_guide' ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                )}
                {isLoading === 'windows_install_guide' ? 'Gerando Guia...' : 'Gerar Guia de Instalação'}
            </button>
        </Step>
      </div>
      
      {guideContent && (
        <ReportModal 
            report={guideContent} 
            taskId="windows_install_guide" 
            onClose={() => setGuideContent(null)} 
        />
      )}
    </>
  );
};
