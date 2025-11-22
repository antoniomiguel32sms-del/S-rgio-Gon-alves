import React, { useState } from 'react';
import { PageHeader } from './PageHeader';
import { ReportModal } from './ReportModal';
import { generateReport } from '../services/geminiService';

interface ActiveReport {
  content: string;
  taskId: string;
}

interface DashboardTask {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactElement;
  prompt: string;
}

const DashboardCard: React.FC<{ task: DashboardTask, onExecute: () => void, isLoading: boolean }> = ({ task, onExecute, isLoading }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 flex flex-col justify-between transform hover:-translate-y-1 transition-transform duration-300">
      <div>
        <div className="flex items-center space-x-4 mb-3">
            <div className="bg-gray-700 p-3 rounded-full">
                {task.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">{task.description}</p>
      </div>
      <button
        onClick={onExecute}
        disabled={isLoading}
        className="w-full mt-auto flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 disabled:bg-cyan-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {isLoading ? 'Analisando...' : task.buttonText}
      </button>
    </div>
  );
};

const dashboardTasks: DashboardTask[] = [
    {
      id: 'dashboard_health_report',
      title: 'Relatório de Saúde do Sistema',
      description: 'Gere um relatório completo sobre a performance e estabilidade do seu hardware e software.',
      buttonText: 'Gerar Relatório',
      icon: <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat executará o 'perfmon' para gerar um relatório de saúde do sistema, e que a coleta de dados levará 60 segundos. Forneça o seguinte comando em um bloco ```cmd: perfmon /report",
    },
    {
      id: 'dashboard_thermal_check',
      title: 'Consultor Térmico',
      description: 'Gera um atalho para baixar ferramentas confiáveis e verificar as temperaturas da sua CPU e GPU.',
      buttonText: 'Verificar Temperaturas',
      icon: <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      prompt: "Gere um guia para o AURORA sobre como verificar temperaturas de CPU e GPU. O guia deve explicar que o arquivo .bat abrirá páginas de busca para as ferramentas mais confiáveis (HWMonitor e Core Temp) para que o usuário possa baixá-las dos sites oficiais. Liste as ferramentas e explique o que são temperaturas seguras (em repouso vs. sob carga). Forneça o seguinte comando em um bloco ```cmd: start \"HWMonitor\" \"https://www.google.com/search?q=CPUID+HWMonitor+official+download\"\nstart \"Core Temp\" \"https://www.google.com/search?q=ALCPU+Core+Temp+official+download\"",
    },
    {
      id: 'dashboard_drive_health',
      title: 'Saúde do Drive (S.M.A.R.T.)',
      description: 'Verifique o status S.M.A.R.T. dos seus discos rígidos e SSDs para prever possíveis falhas.',
      buttonText: 'Verificar Status',
      icon: <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat verificará o status S.M.A.R.T. dos discos. Explique como interpretar os resultados ('OK', 'Pred Fail'). Forneça o seguinte comando em um bloco ```cmd: wmic diskdrive get status",
    },
];

export const Dashboard: React.FC = () => {
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const [activeReport, setActiveReport] = useState<ActiveReport | null>(null);

  const handleExecuteTask = async (prompt: string, taskId: string) => {
    setLoadingTaskId(taskId);
    try {
      const result = await generateReport(prompt, taskId);
      setActiveReport({ content: result, taskId: taskId });
    } catch (error) {
      console.error("Task execution failed:", error);
      setActiveReport({
        content: "Falha ao gerar o relatório. Por favor, tente novamente mais tarde.",
        taskId: taskId
      });
    } finally {
      setLoadingTaskId(null);
    }
  };

  const closeReport = () => {
    setActiveReport(null);
  };
  
  return (
    <>
      <PageHeader
        title="Painel AURORA"
        subtitle="Análise preditiva e status em tempo real da saúde do seu sistema."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardTasks.map((task) => (
            <DashboardCard
                key={task.id}
                task={task}
                onExecute={() => handleExecuteTask(task.prompt, task.id)}
                isLoading={loadingTaskId === task.id}
            />
        ))}
      </div>
      <div className="mt-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-semibold text-white">Bem-vindo ao AURORA</h3>
        <p className="mt-2 text-gray-400 prose prose-invert max-w-none">
          Sua central de comando inteligente para otimização e manutenção do PC.
        </p>
         <p className="mt-3 text-gray-300">
          Selecione uma ferramenta no menu à esquerda para começar. O AURORA irá analisar sua solicitação, gerar a solução ideal e preparar os comandos necessários para você executar com segurança. Assuma o controle total sobre a performance e a saúde do seu sistema.
        </p>
      </div>
      {activeReport && <ReportModal report={activeReport.content} taskId={activeReport.taskId} onClose={closeReport} />}
    </>
  );
};