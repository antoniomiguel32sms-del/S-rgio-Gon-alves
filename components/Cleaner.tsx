import React from 'react';
import { ActionPage } from './ActionPage';
import { NETWORK_TASKS } from '../constants';

export const Cleaner: React.FC = () => {
  return (
    <ActionPage
      title="Otimizador de Rede e Internet"
      subtitle="Execute diagnósticos e correções para otimizar sua conexão de rede."
      tasks={NETWORK_TASKS}
    />
  );
};
