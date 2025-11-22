import React from 'react';
import { ActionPage } from './ActionPage';
import { CLEANER_TASKS } from '../constants';

export const SystemCleaner: React.FC = () => {
  return (
    <ActionPage
      title="Limpador do Sistema"
      subtitle="Execute tarefas para liberar espaço em disco removendo arquivos e caches desnecessários."
      tasks={CLEANER_TASKS}
    />
  );
};