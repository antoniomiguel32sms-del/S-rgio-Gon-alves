import React from 'react';
import { ActionPage } from './ActionPage';
import { MEMORY_TASKS } from '../constants';

export const Memory: React.FC = () => {
  return (
    <ActionPage
      title="Otimizador de Memória"
      subtitle="Diagnostique problemas e otimize o uso de RAM em tempo real."
      tasks={MEMORY_TASKS}
    />
  );
};