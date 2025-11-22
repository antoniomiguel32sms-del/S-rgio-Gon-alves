import React from 'react';
import { ActionPage } from './ActionPage';
import { RECOVERY_TASKS } from '../constants';

export const Recovery: React.FC = () => {
  return (
    <ActionPage
      title="Recuperação de Dados e Sistema"
      subtitle="Crie backups e pontos de restauração para proteger seus dados contra falhas."
      tasks={RECOVERY_TASKS}
    />
  );
};