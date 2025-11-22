import React from 'react';
import { ActionPage } from './ActionPage';
import { SECURITY_TASKS } from '../constants';

export const Security: React.FC = () => {
  return (
    <ActionPage
      title="Central de Segurança"
      subtitle="Execute varreduras e detecte softwares indesejados para manter seu sistema seguro."
      tasks={SECURITY_TASKS}
    />
  );
};