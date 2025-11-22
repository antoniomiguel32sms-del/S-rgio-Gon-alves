
import React, { useState } from 'react';
import { PageHeader } from './PageHeader';
import { ActionCard } from './ActionCard';
import { ReportModal } from './ReportModal';
import { generateReport } from '../services/geminiService';
import type { ScanTask } from '../types';

interface ActionPageProps {
  title: string;
  subtitle: string;
  tasks: ScanTask[];
}

interface ActiveReport {
  content: string;
  taskId: string;
}

export const ActionPage: React.FC<ActionPageProps> = ({ title, subtitle, tasks }) => {
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
      <PageHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <ActionCard
            key={task.id}
            task={task}
            onExecute={(prompt) => handleExecuteTask(prompt, task.id)}
            isLoading={loadingTaskId === task.id}
          />
        ))}
      </div>
      {activeReport && <ReportModal report={activeReport.content} taskId={activeReport.taskId} onClose={closeReport} />}
    </>
  );
};
