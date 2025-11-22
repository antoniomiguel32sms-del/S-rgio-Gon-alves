import React from 'react';
import { ActionPage } from './ActionPage';
import { WINDOWS_OPTIMIZER_TASKS } from '../constants';

export const WindowsOptimizer: React.FC = () => {
  return (
    <ActionPage
      title="Otimizador do Windows"
      subtitle="Remova aplicativos pré-instalados desnecessários (bloatware) e ajuste recursos do sistema."
      tasks={WINDOWS_OPTIMIZER_TASKS}
    />
  );
};