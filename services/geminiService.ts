import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Chave da API Gemini não encontrada. Usando dados simulados. Por favor, defina a variável de ambiente API_KEY.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MOCK_DELAY = 1500;

const mockResponses: { [key: string]: string } = {
  "default": "## Relatório Indisponível (Simulado)\n\nNão foi possível gerar o relatório para esta ação. Por favor, configure sua chave de API Gemini.",
  "dashboard_health_report": `
## Relatório de Desempenho do Sistema

Este comando executará o Monitor de Desempenho e Recursos do Windows e gerará um relatório completo sobre a saúde e performance do seu sistema. Este relatório é excelente para identificar problemas de hardware e software.

\`\`\`cmd
perfmon /report
\`\`\`

**O que fazer:**
1.  Baixe e execute o arquivo .bat.
2.  Uma janela de coleta de dados será exibida por 60 segundos.
3.  Após a coleta, o relatório completo será exibido em uma nova janela para análise.
  `,
  "dashboard_thermal_check": `
## Consultor Térmico: Abrindo Links de Ferramentas

Verificar as temperaturas da CPU e GPU é crucial para a saúde do seu hardware. O Windows não possui uma ferramenta nativa para isso.

Para facilitar, o arquivo .bat que você pode baixar irá **abrir as páginas de busca** para os softwares de monitoramento mais confiáveis, garantindo que você os baixe do **site oficial e seguro**.

### Ferramentas Recomendadas
*   **HWMonitor:** Completo, mostra temperaturas, voltagens e velocidades dos fans.
*   **Core Temp:** Focado na temperatura de cada núcleo da sua CPU.

\`\`\`cmd
start "HWMonitor" "https://www.google.com/search?q=CPUID+HWMonitor+official+download"
start "Core Temp" "https://www.google.com/search?q=ALCPU+Core+Temp+official+download"
\`\`\`

### O que são temperaturas seguras?
*   **Em Repouso (Idle):** 30°C - 50°C é excelente.
*   **Sob Carga (Jogando/Trabalhando):** 60°C - 85°C é normal.
*   **Acima de 90°C:** Pode indicar problemas de refrigeração que precisam de atenção.
`,
  "dashboard_drive_health": `
## Verificação de Saúde do Drive (S.M.A.R.T.)

Este comando verificará o status S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology) de todos os seus discos rígidos e SSDs. É uma forma rápida de prever falhas de disco.

\`\`\`cmd
wmic diskdrive get status
\`\`\`

**Como interpretar o resultado:**
*   **OK:** O drive está funcionando normalmente.
*   **Pred Fail** ou **Bad:** O drive reportou um problema e pode estar prestes a falhar. **Faça backup dos seus dados imediatamente!**

**O que fazer:**
1.  Baixe e execute o arquivo .bat.
2.  Uma janela de terminal se abrirá e exibirá o status de cada drive.
3.  A janela permanecerá aberta para você ver o resultado. Pressione qualquer tecla para fechar.
  `,
  "health_check": `
## Relatório de Diagnóstico (DXDiag)

Este comando executará a Ferramenta de Diagnóstico do DirectX (dxdiag) e salvará um relatório de texto detalhado com informações sobre os componentes e drivers do seu sistema no seu Desktop.

\`\`\`cmd
dxdiag /t %userprofile%\\Desktop\\aurora_dxdiag_report.txt
\`\`\`

**O que fazer:**
1.  Baixe e execute o arquivo .bat.
2.  Uma janela do terminal pode aparecer rapidamente.
3.  Procure por um novo arquivo de texto chamado "aurora_dxdiag_report.txt" na sua área de trabalho para revisar os resultados.
  `,
  "thermal_advisor": `
## Relatório de Desempenho do Sistema

Este comando executará o Monitor de Desempenho e Recursos do Windows e gerará um relatório completo sobre a saúde e performance do seu sistema. Este relatório é excelente para identificar problemas de hardware e software.

\`\`\`cmd
perfmon /report
\`\`\`

**O que fazer:**
1.  Baixe e execute o arquivo .bat.
2.  Uma janela de coleta de dados será exibida por 60 segundos.
3.  Após a coleta, o relatório completo será exibido em uma nova janela para análise.
  `,
    "system_protection_settings": `
## Abrir Configurações de Proteção do Sistema

Este comando abrirá diretamente a janela de Propriedades do Sistema na aba de Proteção do Sistema.

\`\`\`cmd
SystemPropertiesProtection.exe
\`\`\`

**O que fazer:**
Nesta janela, você pode configurar, criar e restaurar Pontos de Restauração do sistema, além de gerenciar o espaço em disco usado para proteção.
  `,
  "memory_diagnostic": `
## Diagnóstico de Memória do Windows

Este comando iniciará a ferramenta de Diagnóstico de Memória do Windows, que verificará sua RAM em busca de erros de hardware.

\`\`\`cmd
mdsched.exe
\`\`\`
**O que Acontece a Seguir:**
Ao executar, você será solicitado a reiniciar o computador para iniciar o teste. Salve todo o seu trabalho antes de prosseguir.
  `,
  "game_optimize": `
## Aplicar Plano de Energia de Alto Desempenho

Este comando ativa o plano de energia "Alto Desempenho" do Windows, garantindo que seu hardware funcione com performance máxima, o que é ideal para jogos.

\`\`\`cmd
powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
\`\`\`
**O que fazer:**
Baixe e execute o arquivo .bat. O comando será aplicado instantaneamente em segundo plano.
  `,
  "gpu_driver_check": `
## Verificar Drivers de GPU

Este comando abrirá o Gerenciador de Dispositivos e os sites oficiais de download de drivers da NVIDIA e AMD para facilitar a atualização.

\`\`\`cmd
start devmgmt.msc
start https://www.nvidia.com.br/drivers
start https://www.amd.com/pt/support
\`\`\`
**O que fazer:**
1. No Gerenciador de Dispositivos, expanda "Adaptadores de vídeo" para ver o modelo da sua placa.
2. Use o site correspondente (NVIDIA ou AMD) para baixar e instalar o driver mais recente.
  `,
  "flush_dns": `
## Limpar Cache DNS

Este comando executará o comando \`ipconfig /flushdns\` para limpar o cache de resolução de DNS do Windows.

\`\`\`cmd
ipconfig /flushdns
\`\`\`

**O que fazer:**
Execute o arquivo .bat. Uma janela de terminal piscará brevemente, confirmando que o cache foi limpo com sucesso. Isso pode resolver problemas de acesso a sites que mudaram de endereço recentemente.
  `,
  "reset_tcp_ip": `
## Redefinir Protocolo TCP/IP

Este comando redefinirá a pilha de protocolos de rede (TCP/IP) do seu computador para as configurações padrão de fábrica.

\`\`\`cmd
netsh int ip reset
\`\`\`

**AVISO IMPORTANTE:**
Após executar este comando, **você precisará reiniciar o seu computador** para que as alterações entrem em vigor. Salve todo o seu trabalho antes de executar o script e reiniciar.
  `,
  "renew_ip": `
## Renovar Endereço IP

Este script primeiro liberará o seu endereço IP atual e, em seguida, solicitará um novo ao seu roteador (servidor DHCP).

\`\`\`cmd
ipconfig /release
ipconfig /renew
\`\`\`

**O que fazer:**
Execute o arquivo .bat. Você pode perder a conexão com a internet por alguns segundos enquanto um novo endereço IP é atribuído. Este processo é útil para resolver conflitos de IP na sua rede local.
  `,
  "view_network_config": `
## Salvar Configuração de Rede

Este comando executará \`ipconfig /all\` e salvará a saída detalhada em um arquivo de texto no seu Desktop.

\`\`\`cmd
ipconfig /all > %userprofile%\\Desktop\\aurora_network_config.txt
\`\`\`

**O que fazer:**
1.  Baixe e execute o arquivo .bat.
2.  Uma janela do terminal pode aparecer rapidamente.
3.  Procure por um novo arquivo de texto chamado "aurora_network_config.txt" na sua área de trabalho para revisar suas configurações de rede.
  `,
  "create_restore_point": `
## Criar Ponto de Restauração

Este comando utiliza o PowerShell para criar um ponto de restauração do sistema chamado "Ponto Criado pelo AURORA".

\`\`\`cmd
powershell -Command "Checkpoint-Computer -Description 'Ponto Criado pelo AURORA' -RestorePointType 'MODIFY_SETTINGS'"
\`\`\`
**O que fazer:**
Execute o arquivo .bat como administrador. O processo levará alguns instantes para ser concluído.
  `,
  "create_system_backup": `
## Abrir Ferramenta de Backup do Sistema

Este comando abrirá a ferramenta de "Backup e Restauração" do Windows, permitindo que você crie uma imagem completa do sistema.

\`\`\`cmd
sdclt.exe /CONFIGURE
\`\`\`
**O que fazer:**
Siga as instruções do assistente para criar um backup completo do seu sistema, preferencialmente em um disco externo.
  `,
  "clean_temp_files": `
## Limpeza de Arquivos Temporários

Este script irá deletar o conteúdo das pastas de arquivos temporários do usuário e do sistema, e depois abrirá a ferramenta de Limpeza de Disco do Windows para uma limpeza mais profunda.

\`\`\`cmd
del /q /f /s %temp%\\*
del /q /f /s C:\\Windows\\Temp\\*
cleanmgr.exe
\`\`\`
**O que fazer:**
Execute o arquivo .bat. Após a execução dos comandos silenciosos, selecione o disco (geralmente C:) na Limpeza de Disco e marque os itens que deseja limpar.
  `,
  "clear_update_cache": `
## Limpar Cache do Windows Update

Este script irá parar os serviços de atualização, renomear a pasta de cache e reiniciar os serviços. Isso pode resolver problemas com atualizações travadas.

\`\`\`cmd
net stop wuauserv
net stop bits
rename c:\\windows\\SoftwareDistribution SoftwareDistribution.old
net start wuauserv
net start bits
\`\`\`
**Aviso:** Execute este arquivo .bat como administrador para que ele funcione corretamente.
  `,
  "run_sfc_scan": `
## Verificação de Integridade (SFC)

O comando \`sfc /scannow\` verifica e repara arquivos de sistema corrompidos do Windows.

\`\`\`cmd
sfc /scannow
\`\`\`
**O que fazer:**
Execute o arquivo .bat como administrador. A verificação pode levar vários minutos para ser concluída.
  `,
  "run_dism_scan": `
## Reparo da Imagem (DISM)

O DISM é uma ferramenta mais avançada que pode reparar a imagem do sistema usada pelo SFC.

\`\`\`cmd
DISM /Online /Cleanup-Image /RestoreHealth
\`\`\`
**O que fazer:**
Execute o arquivo .bat como administrador. O processo pode demorar um pouco e pode parecer travado, mas deixe-o terminar.
  `,
  "defender_full_scan": `
## Varredura Completa com Microsoft Defender

Este comando iniciará uma varredura completa do sistema usando a ferramenta de linha de comando do Microsoft Defender.

\`\`\`cmd
"%ProgramFiles%\\Windows Defender\\MpCmdRun.exe" -Scan -ScanType 2
\`\`\`
**O que fazer:**
Execute o arquivo .bat como administrador. A janela do terminal permanecerá aberta durante a verificação.
  `,
  "detect_suspicious_software": `
## Varredura Offline com Microsoft Defender

Este comando agendará uma Verificação Offline do Microsoft Defender. O seu computador será reiniciado para executar esta verificação antes do Windows iniciar.

\`\`\`cmd
powershell -Command "Start-MpWDOScan"
\`\`\`

**AVISO:** Salve todo o seu trabalho antes de executar este script, pois ele reiniciará o seu PC.
  `,
  "trim_memory": `
## Baixar Ferramenta RamMap

Este comando abrirá a página oficial de download da ferramenta RamMap da Microsoft (Sysinternals) no seu navegador.

\`\`\`cmd
start https://learn.microsoft.com/en-us/sysinternals/downloads/rammap
\`\`\`
**O que fazer:**
Após baixar e extrair, execute o RamMap como administrador. No menu "Empty", clique em "Empty Standby List" para liberar a memória em espera.
  `,
  "disable_telemetry": `
## Desativar Serviços de Telemetria

Este comando desativará os principais serviços de telemetria e coleta de dados do Windows, ajudando a proteger sua privacidade.

\`\`\`cmd
sc config "DiagTrack" start= disabled
sc config "dmwappushservice" start= disabled
\`\`\`
**O que fazer:**
Execute este arquivo .bat como administrador para garantir que as alterações de serviço sejam aplicadas corretamente.
  `,
  "clean_free_space": `
## Limpeza Segura de Espaço Livre

Este comando usará a ferramenta 'cipher' do Windows para limpar o espaço livre no seu disco C:. Isso remove resquícios de arquivos deletados, impedindo sua recuperação.

\`\`\`cmd
cipher /w:C:
\`\`\`

**AVISO IMPORTANTE:**
Este processo **pode demorar muito tempo** para ser concluído, dependendo do tamanho do seu disco. Não interrompa o processo após iniciá-lo.
  `,
  "clear_activity_history": `
## Abrir Configurações de Histórico

Este comando abrirá a janela de configurações de "Histórico de atividades" do Windows.

\`\`\`cmd
start ms-settings:privacy-history
\`\`\`
**O que fazer:**
Nesta janela, você pode desmarcar a opção "Armazenar meu histórico de atividades neste dispositivo" e clicar no botão "Limpar" para remover o histórico de atividades da sua conta.
  `,
  "manage_advertising_id": `
## Gerenciar ID de Anúncio

Este comando abrirá as configurações gerais de privacidade do Windows, onde você pode desativar o ID de anúncio.

\`\`\`cmd
start ms-settings:privacy-general
\`\`\`
**O que fazer:**
Na janela que se abre, desative a opção "Permitir que os aplicativos usem a ID de publicidade para tornar os anúncios mais interessantes para você com base na sua atividade de aplicativo".
  `,
    "pre_format_cleanup": `
## Executar Limpeza de Disco

Este comando abrirá a ferramenta nativa de Limpeza de Disco do Windows, focada no seu disco principal (C:).

\`\`\`cmd
cleanmgr.exe /d C:
\`\`\`

**O que fazer:**
1.  Execute o arquivo .bat.
2.  Na janela que se abre, marque as caixas dos tipos de arquivos que você deseja remover (ex: Arquivos de Internet Temporários, Lixeira, Arquivos de Otimização de Entrega).
3.  Clique em "OK" e depois em "Excluir arquivos" para confirmar.
4.  Esta é uma etapa preparatória segura para liberar espaço antes da formatação.
  `,
    "windows_install_guide": `
## Guia Completo para Instalação Limpa do Windows

**AVISO MUITO IMPORTANTE: Este processo apagará TUDO do seu disco rígido ou SSD principal (onde o Windows está instalado). Faça backup de todos os seus documentos, fotos, vídeos e outros arquivos importantes em um disco externo ou serviço de nuvem ANTES de começar!**

### 1. Como Iniciar pelo Pen Drive (BIOS/UEFI)
*   Com o pen drive conectado, reinicie o computador.
*   Assim que ele começar a ligar, pressione repetidamente a tecla para entrar na **BIOS** ou **UEFI**. As teclas mais comuns são **F2, F10, F12, ou DEL**. A tecla correta geralmente é exibida na tela inicial.
*   Dentro da BIOS/UEFI, procure por uma aba chamada **"Boot"** ou **"Boot Order"**.
*   Altere a ordem de inicialização para que a **"USB Drive"** ou o nome do seu pen drive seja a primeira opção.
*   Salve as alterações e saia da BIOS/UEFI. O computador será reiniciado e iniciará a partir do pen drive.

### 2. O Processo de Instalação do Windows
*   A primeira tela será o instalador do Windows. Selecione seu idioma e clique em "Avançar" e depois em "Instalar agora".
*   Insira sua chave de produto do Windows, se tiver. Caso contrário, clique em "Não tenho a chave do produto".
*   Escolha a edição do Windows que você deseja instalar (geralmente Home ou Pro).
*   Aceite os termos da licença.
*   Selecione a opção de instalação **"Personalizada: Instalar apenas o Windows (avançado)"**.
*   Você verá uma lista de partições no seu disco. **SEJA CUIDADOSO AQUI.** Selecione cada partição do seu disco principal (geralmente "Unidade 0") e clique em **"Excluir"** até que reste apenas "Espaço não alocado na Unidade 0".
*   Selecione este "Espaço não alocado" e clique em "Avançar". O Windows começará a instalar os arquivos.
*   O computador será reiniciado várias vezes. Siga as instruções na tela para configurar sua conta, privacidade e outras preferências.
  `,
  "remove_bloatware": `
## Remoção de Bloatware

Este script utilizará o PowerShell para desinstalar uma série de aplicativos pré-instalados comuns do Windows que geralmente não são essenciais. Execute o arquivo .bat como administrador.

**Aplicativos a serem removidos:**
* 3D Viewer, Alarmes e Relógio, Email e Calendário, Portal de Realidade Mista, Coleção de Solitário, Pessoas, Print 3D, Captura e Esboço, Notas Autoadesivas, Gravador de Voz, Clima, apps relacionados ao Xbox, Seu Telefone.

\`\`\`cmd
powershell -Command "Get-AppxPackage *3DViewer* | Remove-AppxPackage; Get-AppxPackage *WindowsAlarms* | Remove-AppxPackage; Get-AppxPackage *windowscommunicationsapps* | Remove-AppxPackage; Get-AppxPackage *MixedReality.Portal* | Remove-AppxPackage; Get-AppxPackage *MicrosoftSolitaireCollection* | Remove-AppxPackage; Get-AppxPackage *People* | Remove-AppxPackage; Get-AppxPackage *Print3D* | Remove-AppxPackage; Get-AppxPackage *ScreenSketch* | Remove-AppxPackage; Get-AppxPackage *MicrosoftStickyNotes* | Remove-AppxPackage; Get-AppxPackage *WindowsSoundRecorder* | Remove-AppxPackage; Get-AppxPackage *BingWeather* | Remove-AppxPackage; Get-AppxPackage *Xbox* | Remove-AppxPackage; Get-AppxPackage *YourPhone* | Remove-AppxPackage;"
\`\`\`
  `,
  "restore_apps": `
## Restaurar Aplicativos Padrão

Este script utilizará o PowerShell para registrar e reinstalar todos os aplicativos padrão do Windows para o usuário atual. É uma medida de segurança caso você queira reverter a remoção de bloatware.

**O que fazer:**
Execute o arquivo .bat como administrador. O processo pode levar alguns minutos e exibirá várias linhas de progresso no terminal.

\`\`\`cmd
powershell -Command "Get-AppxPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register \\"$($_.InstallLocation)\\AppXManifest.xml\\"}"
\`\`\`
  `,
  "open_task_manager_startup": `
## Gerenciar Aplicativos de Inicialização

Este comando abrirá o Gerenciador de Tarefas do Windows.

\`\`\`cmd
taskmgr
\`\`\`

**O que fazer:**
1.  Com o Gerenciador de Tarefas aberto, clique na aba **"Inicializar"** (em versões mais recentes do Windows 11, pode estar em **"Aplicativos de Inicialização"**).
2.  Nesta lista, você pode ver todos os programas que iniciam com o seu PC.
3.  Para impedir que um programa inicie, clique com o botão direito sobre ele e selecione **"Desabilitar"**.
  `,
  "open_user_startup_folder": `
## Abrir Pasta de Inicialização do Usuário

Este comando abrirá a pasta de inicialização específica para o seu perfil de usuário.

\`\`\`cmd
explorer shell:startup
\`\`\`

**O que fazer:**
Qualquer atalho de programa que você colocar ou remover desta pasta afetará apenas os programas que iniciam quando *você* faz login.
  `,
  "open_all_users_startup_folder": `
## Abrir Pasta de Inicialização para Todos os Usuários

Este comando abrirá a pasta de inicialização comum a todos os usuários do computador.

\`\`\`cmd
explorer shell:common startup
\`\`\`

**O que fazer:**
Programas cujos atalhos estão nesta pasta iniciarão para *qualquer* usuário que fizer login no computador. Você pode precisar de permissão de administrador para modificar o conteúdo desta pasta.
  `
};

export const generateReport = async (prompt: string, promptKey: string): Promise<string> => {
  if (!API_KEY) {
    console.log(`Usando resposta simulada para a chave: ${promptKey}`);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockResponses[promptKey] || mockResponses.default);
      }, MOCK_DELAY);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao gerar relatório da API Gemini:", error);
    return "Ocorreu um erro ao gerar o relatório. Por favor, verifique o console para mais detalhes.";
  }
};