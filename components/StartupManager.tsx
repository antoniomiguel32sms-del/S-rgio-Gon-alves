import React from 'react';
import { ActionPage } from './ActionPage';
import { STARTUP_MANAGER_TASKS } from '../constants';

export const StartupManager: React.FC = () => {
  return (
    <ActionPage
      title="Gerenciador de Inicialização"
      subtitle="Controle quais programas iniciam com o Windows para acelerar o boot e liberar recursos."
      tasks={STARTUP_MANAGER_TASKS}
    />
  );
};
