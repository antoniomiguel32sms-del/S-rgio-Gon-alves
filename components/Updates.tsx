import React from 'react';
import { ActionPage } from './ActionPage';
import { GAME_OPTIMIZER_TASKS } from '../constants';

export const Updates: React.FC = () => {
  return (
    <ActionPage
      title="Otimizador de Jogos"
      subtitle="Aplique perfis de otimização e mantenha seus drivers de GPU atualizados para o máximo desempenho."
      tasks={GAME_OPTIMIZER_TASKS}
    />
  );
};