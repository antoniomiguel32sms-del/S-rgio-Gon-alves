import React from 'react';
import { ActionPage } from './ActionPage';
import { HARDWARE_TASKS } from '../constants';

export const Diagnostics: React.FC = () => {
  return (
    <ActionPage
      title="Saúde do Hardware"
      subtitle="Execute diagnósticos e monitore a saúde dos seus componentes."
      tasks={HARDWARE_TASKS}
    />
  );
};