import React from 'react';
import { ActionPage } from './ActionPage';
import { PRIVACY_TASKS } from '../constants';

export const Privacy: React.FC = () => {
  return (
    <ActionPage
      title="Guardião da Privacidade"
      subtitle="Assuma o controle sobre a telemetria do Windows e proteja seus dados."
      tasks={PRIVACY_TASKS}
    />
  );
};
