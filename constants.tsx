import React from 'react';
import type { NavItem, ScanTask } from './types';

const iconClass = "w-6 h-6";
const sharedIconClass = "w-8 h-8 text-cyan-400";

export const NAV_ITEMS: NavItem[] = [
  // Core
  { id: 'dashboard', label: 'Painel', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
  { id: 'diagnostics', label: 'Saúde do Hardware', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 010 1.414L13 20m-5-4v-4m0 0h4" /></svg> },
  
  // Optimization
  { id: 'game-optimizer', label: 'Otimizador de Jogos', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 010 1.414L13 20m-5-4v-4m0 0h4" /></svg> },
  { id: 'system-cleaner', label: 'Limpador', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg> },
  { id: 'windows-optimizer', label: 'Otimizador do Windows', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  { id: 'memory', label: 'Memória', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806v1.114a2 2 0 00.547 1.806l.477 2.387a6 6 0 003.86.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806v-1.114a2 2 0 00-.547-1.806zM12 12a3 3 0 100-6 3 3 0 000 6z" /></svg> },
  { id: 'startup-manager', label: 'Gerenciador de Inicialização', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> },
  
  // Security & Privacy
  { id: 'security', label: 'Segurança', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056v-1.056c0-1.845-1.002-3.486-2.382-4.016z" /></svg> },
  { id: 'privacy', label: 'Guardião da Privacidade', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
  
  // Tools & Recovery
  { id: 'cleaner', label: 'Rede e Internet', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18" /></svg> },
  { id: 'recovery', label: 'Recuperação', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { id: 'os-installer', label: 'Assistente de Instalação', icon: <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
];

export const CLEANER_TASKS: ScanTask[] = [
  {
    id: 'clean_temp_files',
    title: 'Limpar Arquivos Temporários',
    description: 'Remove arquivos temporários do sistema e do usuário, e esvazia a lixeira para liberar espaço em disco.',
    buttonText: 'Executar Limpeza',
    icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
    prompt: "Gere um relatório para o AURORA. O relatório deve explicar que o script .bat deletará arquivos das pastas temporárias e depois abrirá a Limpeza de Disco. Forneça o seguinte comando em um bloco ```cmd: del /q /f /s %temp%\\* && del /q /f /s C:\\Windows\\Temp\\* && cleanmgr.exe",
  },
  {
    id: 'clear_update_cache',
    title: 'Limpar Cache do Windows Update',
    description: 'Remove arquivos de download de atualizações antigas, o que pode corrigir problemas com o Windows Update.',
    buttonText: 'Executar Limpeza',
    icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v-5h-5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11a8 8 0 101.464-4.536" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13a8 8 0 10-1.464 4.536" /></svg>,
    prompt: "Gere um relatório para o AURORA. O relatório deve avisar o usuário para executar o .bat como administrador e explicar que o script irá parar os serviços do Windows Update, renomear a pasta de cache e reiniciar os serviços. Forneça o seguinte comando em um bloco ```cmd: net stop wuauserv && net stop bits && rename c:\\windows\\SoftwareDistribution SoftwareDistribution.old && net start wuauserv && net start bits",
  },
];

export const HARDWARE_TASKS: ScanTask[] = [
    {
      id: 'health_check',
      title: 'Gerar Relatório de Diagnóstico',
      description: 'Executa a ferramenta de diagnóstico do DirectX (dxdiag) e salva um relatório detalhado no seu desktop.',
      buttonText: 'Executar Diagnóstico',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat executará o dxdiag e salvará um arquivo 'aurora_dxdiag_report.txt' no desktop do usuário. Forneça o seguinte comando em um bloco ```cmd: dxdiag /t %userprofile%\\Desktop\\aurora_dxdiag_report.txt",
    },
    {
      id: 'thermal_advisor',
      title: 'Gerar Relatório de Performance',
      description: 'Executa o Monitor de Desempenho para gerar um relatório completo da saúde do sistema.',
      buttonText: 'Executar Análise',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat executará o 'perfmon' para gerar um relatório de saúde do sistema, e que a coleta de dados levará 60 segundos. Forneça o seguinte comando em um bloco ```cmd: perfmon /report",
    },
    {
      id: 'run_sfc_scan',
      title: 'Verificar Integridade (SFC)',
      description: 'Executa a Verificação de Arquivos do Sistema para encontrar e reparar arquivos corrompidos do Windows.',
      buttonText: 'Executar Verificação',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 0l-4-4m4 4H5" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique o que o comando 'sfc /scannow' faz e avise o usuário para executar o .bat como administrador. Forneça o seguinte comando em um bloco ```cmd: sfc /scannow",
    },
    {
      id: 'run_dism_scan',
      title: 'Reparar Imagem (DISM)',
      description: 'Usa a ferramenta DISM para reparar a imagem de componentes do Windows, usada pelo SFC.',
      buttonText: 'Executar Reparo',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 003 0m0 0V7m0 2.5v6" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique o que o comando 'DISM' faz e avise o usuário para executar o .bat como administrador. Forneça o seguinte comando em um bloco ```cmd: DISM /Online /Cleanup-Image /RestoreHealth",
    },
];

export const GAME_OPTIMIZER_TASKS: ScanTask[] = [
    {
      id: 'game_optimize',
      title: 'Aplicar Perfil de Alto Desempenho',
      description: 'Ativa o plano de energia de "Alto Desempenho" do Windows para garantir a máxima performance em jogos.',
      buttonText: 'Aplicar Otimização',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat aplicará o plano de energia de 'Alto Desempenho' do Windows para melhorar a performance em jogos. Forneça o seguinte comando em um bloco ```cmd: powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c",
    },
    {
      id: 'gpu_driver_check',
      title: 'Verificar Driver de GPU',
      description: 'Abre o Gerenciador de Dispositivos e os sites oficiais da NVIDIA e AMD para facilitar a atualização de drivers.',
      buttonText: 'Verificar Agora',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá três janelas: Gerenciador de Dispositivos, a página de drivers da NVIDIA e a da AMD. Forneça o seguinte comando em um bloco ```cmd: start devmgmt.msc && start https://www.nvidia.com.br/drivers && start https://www.amd.com/pt/support",
    },
];

export const NETWORK_TASKS: ScanTask[] = [
    {
      id: 'flush_dns',
      title: 'Limpar Cache DNS',
      description: 'Resolve problemas de acesso a sites e conectividade limpando o cache de resolução de nomes DNS do seu computador.',
      buttonText: 'Executar Limpeza',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v-5h-5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11a8 8 0 101.464-4.536" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13a8 8 0 10-1.464 4.536" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat irá limpar o cache DNS do sistema para resolver problemas de conexão. Forneça o seguinte comando em um bloco ```cmd: ipconfig /flushdns",
    },
    {
      id: 'reset_tcp_ip',
      title: 'Redefinir Protocolo TCP/IP',
      description: 'Restaura as configurações do protocolo TCP/IP para o padrão, corrigindo problemas de conexão persistentes.',
      buttonText: 'Executar Redefinição',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat irá redefinir as configurações do TCP/IP. **AVISE O USUÁRIO QUE UMA REINICIALIZAÇÃO DO PC É NECESSÁRIA** após executar o script. Forneça o seguinte comando em um bloco ```cmd: netsh int ip reset",
    },
    {
      id: 'renew_ip',
      title: 'Renovar Endereço IP',
      description: 'Libera e renova o endereço IP do seu computador junto ao roteador, útil para resolver conflitos de IP.',
      buttonText: 'Executar Renovação',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat irá liberar a configuração de IP atual e solicitar uma nova ao servidor DHCP. Forneça o seguinte comando em um bloco ```cmd: ipconfig /release && ipconfig /renew",
    },
    {
      id: 'view_network_config',
      title: 'Salvar Configuração de Rede',
      description: 'Salva um relatório detalhado de todas as configurações de rede do seu PC em um arquivo de texto no Desktop.',
      buttonText: 'Salvar Relatório',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat irá salvar um relatório completo de configuração de rede chamado 'aurora_network_config.txt' na área de trabalho do usuário. Forneça o seguinte comando em um bloco ```cmd: ipconfig /all > %userprofile%\\Desktop\\aurora_network_config.txt",
    },
];

export const SECURITY_TASKS: ScanTask[] = [
    {
      id: 'defender_full_scan',
      title: 'Verificação Completa (Defender)',
      description: 'Executa uma varredura completa do sistema com o Microsoft Defender para buscar por ameaças.',
      buttonText: 'Executar Varredura',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056v-1.056c0-1.845-1.002-3.486-2.382-4.016z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat iniciará uma varredura completa do sistema via linha de comando do Microsoft Defender e que a janela do terminal permanecerá aberta durante o processo. Avise o usuário para executar o .bat como administrador. Forneça o seguinte comando em um bloco ```cmd: \"%ProgramFiles%\\Windows Defender\\MpCmdRun.exe\" -Scan -ScanType 2",
    },
    {
      id: 'detect_suspicious_software',
      title: 'Verificação Offline (Defender)',
      description: 'Executa a verificação offline do Defender para encontrar malwares difíceis de remover.',
      buttonText: 'Executar Varredura',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat agendará uma Verificação Offline do Microsoft Defender e reiniciará o computador. **AVISE O USUÁRIO PARA SALVAR TODO O TRABALHO ANTES DE EXECUTAR.** Forneça o seguinte comando em um bloco ```cmd: powershell -Command \"Start-MpWDOScan\"",
    },
];

export const PRIVACY_TASKS: ScanTask[] = [
    {
      id: 'disable_telemetry',
      title: 'Desativar Telemetria',
      description: 'Desativa os principais serviços de coleta de dados do Windows para aumentar sua privacidade.',
      buttonText: 'Executar Desativação',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat desativará os serviços de telemetria do Windows e deve ser executado como administrador. Forneça o seguinte comando em um bloco ```cmd: sc config \"DiagTrack\" start= disabled && sc config \"dmwappushservice\" start= disabled",
    },
    {
      id: 'clean_free_space',
      title: 'Limpar Espaço Livre',
      description: 'Sobrescreve o espaço livre do disco para que arquivos deletados não possam ser recuperados. Pode demorar.',
      buttonText: 'Executar Limpeza Segura',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2-2H7a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat usará a ferramenta 'cipher' para limpar o espaço livre do disco C:. **AVISE QUE O PROCESSO PODE DEMORAR MUITO TEMPO.** Forneça o seguinte comando em um bloco ```cmd: cipher /w:C:",
    },
    {
      id: 'clear_activity_history',
      title: 'Limpar Histórico de Atividades',
      description: 'Abre as configurações do Windows para você limpar o histórico de atividades associado à sua conta.',
      buttonText: 'Abrir Configurações',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá as 'Configurações de Histórico de Atividades' do Windows para o usuário poder limpar manualmente. Forneça o seguinte comando em um bloco ```cmd: start ms-settings:privacy-history",
    },
    {
      id: 'manage_advertising_id',
      title: 'Gerenciar ID de Anúncio',
      description: 'Abre as configurações gerais de privacidade para desativar o rastreamento de anúncios no Windows.',
      buttonText: 'Abrir Configurações',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá as 'Configurações Gerais de Privacidade' do Windows para o usuário gerenciar o ID de anúncio. Forneça o seguinte comando em um bloco ```cmd: start ms-settings:privacy-general",
    },
];


export const MEMORY_TASKS: ScanTask[] = [
    {
      id: 'trim_memory',
      title: 'Baixar Ferramenta RamMap',
      description: 'Abre a página oficial de download da RamMap (Microsoft) para limpar a memória em espera.',
      buttonText: 'Abrir Página de Download',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zM9 9L4 4l5 5z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá a página oficial de download da ferramenta RamMap. Explique brevemente como usá-la após o download ('Empty' -> 'Empty Standby List'). Forneça o seguinte comando em um bloco ```cmd: start https://learn.microsoft.com/en-us/sysinternals/downloads/rammap",
    },
    {
      id: 'memory_diagnostic',
      title: 'Diagnóstico de Memória',
      description: 'Executa o Diagnóstico de Memória do Windows para verificar erros de hardware na RAM.',
      buttonText: 'Executar Diagnóstico',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat iniciará o 'Diagnóstico de Memória do Windows' e que o PC precisará ser reiniciado. **AVISE O USUÁRIO PARA SALVAR TODO O TRABALHO.** Forneça o seguinte comando em um bloco ```cmd: mdsched.exe",
    },
];


export const RECOVERY_TASKS: ScanTask[] = [
    {
      id: 'create_restore_point',
      title: 'Criar Ponto de Restauração',
      description: 'Salva o estado atual do sistema para que você possa reverter para ele mais tarde se algo der errado.',
      buttonText: 'Criar Ponto',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat usará o PowerShell para criar um ponto de restauração e deve ser executado como administrador. Forneça o seguinte comando em um bloco ```cmd: powershell -Command \"Checkpoint-Computer -Description 'Ponto Criado pelo AURORA' -RestorePointType 'MODIFY_SETTINGS'\"",
    },
    {
      id: 'create_system_backup',
      title: 'Criar Backup do Sistema',
      description: 'Abre a ferramenta do Windows para criar uma imagem completa do sistema para recuperação de desastres.',
      buttonText: 'Abrir Ferramenta de Backup',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá a ferramenta de 'Backup e Restauração' do Windows para criar uma imagem do sistema. Recomende usar um disco externo. Forneça o seguinte comando em um bloco ```cmd: sdclt.exe /CONFIGURE",
    },
    {
      id: 'system_protection_settings',
      title: 'Configurações de Proteção do Sistema',
      description: 'Abre as configurações onde você pode gerenciar e criar Pontos de Restauração do sistema.',
      buttonText: 'Abrir Configurações',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá a janela de 'Proteção do Sistema', onde o usuário pode gerenciar os pontos de restauração. Forneça o seguinte comando em um bloco ```cmd: SystemPropertiesProtection.exe",
    },
];

export const OS_INSTALLER_TASKS: ScanTask[] = [
    {
      id: 'pre_format_cleanup',
      title: 'Limpeza de Disco Pré-Formatação',
      description: 'Executa a ferramenta de Limpeza de Disco do Windows para remover arquivos desnecessários antes da formatação.',
      buttonText: 'Executar Limpeza de Disco',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
      prompt: "Gere um relatório para o AURORA. O relatório deve explicar que o script .bat abrirá a ferramenta de Limpeza de Disco nativa do Windows (`cleanmgr.exe`) para permitir que o usuário remova arquivos temporários e desnecessários do disco principal (C:) antes de iniciar o processo de formatação. Forneça o seguinte comando em um bloco ```cmd: cleanmgr.exe /d C:",
    },
    {
      id: 'windows_install_guide',
      title: 'Guia de Instalação Limpa do Windows',
      description: 'Gere um guia passo a passo detalhado para formatar seu PC e instalar uma nova cópia do Windows 10 ou 11 a partir de um arquivo ISO.',
      buttonText: 'Gerar Guia Completo',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>,
      prompt: "Gere um guia completo para o AURORA. O guia deve ser um passo a passo detalhado para formatar um PC e fazer uma instalação limpa do Windows 10/11 a partir de uma mídia bootável. O guia DEVE começar com um AVISO IMPORTANTE sobre a necessidade de fazer backup de todos os dados pessoais, pois o processo apagará tudo. O guia deve ser dividido nas seguintes seções: 1. Como Iniciar pelo Pen Drive (BIOS/UEFI), 2. O Processo de Instalação na tela do Windows. Na seção 2, detalhe a parte de selecionar a instalação 'Personalizada' e como **excluir as partições antigas** para garantir uma instalação limpa. O tom deve ser claro, didático e seguro. Não inclua blocos de comando, pois a tarefa é puramente instrucional.",
    },
];

export const WINDOWS_OPTIMIZER_TASKS: ScanTask[] = [
    {
      id: 'remove_bloatware',
      title: 'Remover Bloatware (Recomendado)',
      description: 'Desinstala aplicativos pré-instalados do Windows que você talvez não use, liberando espaço e recursos.',
      buttonText: 'Executar Remoção',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
      prompt: `Gere um relatório para o AURORA. Explique que o script .bat usará o PowerShell para remover uma lista de aplicativos pré-instalados comuns e seguros do Windows. Avise para executar como administrador. Liste os seguintes aplicativos que serão removidos: 3D Viewer, Alarms & Clock, Mail and Calendar, Mixed Reality Portal, Solitaire Collection, People, Print 3D, Snip & Sketch, Sticky Notes, Voice Recorder, Weather, Xbox-related apps, Your Phone. Forneça o seguinte comando em um bloco \`\`\`cmd:
powershell -Command "Get-AppxPackage *3DViewer* | Remove-AppxPackage; Get-AppxPackage *WindowsAlarms* | Remove-AppxPackage; Get-AppxPackage *windowscommunicationsapps* | Remove-AppxPackage; Get-AppxPackage *MixedReality.Portal* | Remove-AppxPackage; Get-AppxPackage *MicrosoftSolitaireCollection* | Remove-AppxPackage; Get-AppxPackage *People* | Remove-AppxPackage; Get-AppxPackage *Print3D* | Remove-AppxPackage; Get-AppxPackage *ScreenSketch* | Remove-AppxPackage; Get-AppxPackage *MicrosoftStickyNotes* | Remove-AppxPackage; Get-AppxPackage *WindowsSoundRecorder* | Remove-AppxPackage; Get-AppxPackage *BingWeather* | Remove-AppxPackage; Get-AppxPackage *Xbox* | Remove-AppxPackage; Get-AppxPackage *YourPhone* | Remove-AppxPackage;"`,
    },
    {
      id: 'restore_apps',
      title: 'Restaurar Apps Padrão',
      description: 'Reinstala todos os aplicativos padrão do Windows que podem ter sido removidos anteriormente.',
      buttonText: 'Executar Restauração',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M7 9l3-3-3-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20v-5h-5m-2 5l-3 3 3 3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11a8 8 0 101.464-4.536" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13a8 8 0 10-1.464 4.536" /></svg>,
      prompt: `Gere um relatório para o AURORA. Explique que este script é uma medida de segurança para reinstalar todos os aplicativos nativos do Windows. Avise para executar como administrador e que o processo pode demorar. Forneça o seguinte comando em um bloco \`\`\`cmd:
powershell -Command "Get-AppxPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register \\"$($_.InstallLocation)\\AppXManifest.xml\\"}"`,
    },
];

export const STARTUP_MANAGER_TASKS: ScanTask[] = [
    {
      id: 'open_task_manager_startup',
      title: 'Gerenciar Apps de Inicialização',
      description: 'Abre o Gerenciador de Tarefas na aba "Inicializar", onde você pode habilitar ou desabilitar programas que iniciam com o Windows.',
      buttonText: 'Abrir Gerenciador',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá o Gerenciador de Tarefas. Instrua o usuário a navegar até a aba 'Inicializar' (ou 'Startup Apps') para gerenciar os programas. Forneça o seguinte comando em um bloco ```cmd: taskmgr",
    },
    {
      id: 'open_user_startup_folder',
      title: 'Abrir Pasta de Inicialização (Usuário)',
      description: 'Abre a pasta de inicialização do seu usuário. Atalhos colocados aqui iniciarão apenas para você.',
      buttonText: 'Abrir Pasta',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá a pasta de inicialização do usuário atual. Forneça o seguinte comando em um bloco ```cmd: explorer shell:startup",
    },
    {
      id: 'open_all_users_startup_folder',
      title: 'Abrir Pasta de Inicialização (Todos)',
      description: 'Abre a pasta de inicialização comum. Atalhos aqui iniciarão para todos os usuários do PC.',
      buttonText: 'Abrir Pasta',
      icon: <svg className={sharedIconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      prompt: "Gere um relatório para o AURORA. Explique que o script .bat abrirá a pasta de inicialização para todos os usuários e pode exigir privilégios de administrador. Forneça o seguinte comando em um bloco ```cmd: explorer shell:common startup",
    },
];