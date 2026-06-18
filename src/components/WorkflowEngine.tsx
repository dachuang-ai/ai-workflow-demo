import { useState, useEffect } from 'react';
import { initialWorkflowNodes, scenarios } from '../data';
import { WorkflowNode, LogMessage } from '../types';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export default function WorkflowEngine() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialWorkflowNodes);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [selectedPreset, setSelectedPreset] = useState<string>('preset-1');

  // Simulation presets content
  const presets = [
    {
      id: 'preset-1',
      title: '💼 客戶商務與技術諮詢',
      desc: '評估 AI 導入流程時間、預算與技術細節。',
      payload: {
        customerName: '安捷電子有限公司 - 林經理',
        issueType: 'AI 導入諮詢',
        email: 'manager.lin@angetech.tw',
        content: '我們希望在客服部門引進 AI 語意Agent，將表單自動更新到舊版資料庫中，請問可行的串接時間與計費方式？',
        priority: 'Medium',
      }
    },
    {
      id: 'preset-2',
      title: '🚨 緊急系統 API 斷線警報',
      desc: '自動化調用警示、備份策略與工程師團隊分派。',
      payload: {
        customerName: '網際數據雲端 - SRE 自動警報系統',
        issueType: '主系統 API 連線超時 (Timeout)',
        email: 'sre-alert@cloudnet.com',
        content: '警告：亞太三號節點連線重試三次皆失敗，錯誤代碼 504 Gateway Timeout，預估已影響 22% 購物車寫入。',
        priority: 'High',
      }
    },
    {
      id: 'preset-3',
      title: '🛠️ 顧客售後 CRM 報表卡頓求助',
      desc: '引導客戶自檢、提取日誌、調用知識庫指引。',
      payload: {
        customerName: '泰峰行銷 - 吳特助',
        issueType: '售後使用求助與效能卡頓',
        email: 'wu_assistant@taifeng-marketing.com',
        content: '今天早上十點以後，開啟 AI 自動生成的月度流量報表時一直顯示載入中，無法正常轉存 PDF 報表。',
        priority: 'Low',
      }
    }
  ];

  const currentPreset = presets.find(p => p.id === selectedPreset) || presets[0];

  const addLog = (content: string, type: 'info' | 'success' | 'agent' | 'system' = 'info', nodeName?: string) => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${(now.getMilliseconds() / 10).toFixed(0).padStart(2, '0')}`;
    const newLog: LogMessage = {
      id: Math.random().toString(),
      time: timeStr,
      type,
      nodeName,
      content
    };
    setLogs(prev => [newLog, ...prev].slice(0, 50)); // Keep latest 50 logs
  };

  const handleStartSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setCurrentStepIndex(0);
    
    // Reset all node statuses
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
    addLog(`⚙️ 達創智能流程引擎啟動：載入 ${currentPreset.title} 測試負載...`, 'system');
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setNodes(initialWorkflowNodes);
    setLogs([]);
    addLog('♻️ 流程引擎已重置，準備接收下一項任務負載。', 'info');
  };

  useEffect(() => {
    if (currentStepIndex === -1 || !isRunning) return;

    const currentStep = nodes[currentStepIndex];
    if (!currentStep) {
      setIsRunning(false);
      addLog('🏁 【流程執行完畢】所有自動化節點皆高效率運轉並成功交付！', 'success');
      return;
    }

    // Set current step active
    setNodes(prev => prev.map((n, idx) => {
      if (idx === currentStepIndex) return { ...n, status: 'active' };
      if (idx < currentStepIndex) return { ...n, status: 'completed' };
      return { ...n, status: 'idle' };
    }));

    addLog(`⚡ [正在執行] 節點：${currentStep.name}`, 'info', currentStep.name);

    let timerDuration = 2200;

    // Simulation simulation text generations depending on node ID
    const executeStepDetails = () => {
      const payload = currentPreset.payload;
      switch (currentStep.id) {
        case 'step-1':
          addLog(`📥 偵測到表單資料送入：來自 ${payload.customerName} (${payload.email})`, 'success', currentStep.name);
          addLog(`📄 需求內容："${payload.content}"`, 'info', currentStep.name);
          break;
        case 'step-2':
          addLog(`🧠 AI 分類顧問已指派。讀取語義特徵...`, 'info', currentStep.name);
          const urgency = payload.priority === 'High' ? '🔴 急迫性：高 (Immediate)' : payload.priority === 'Medium' ? '🟡 急迫性：中 (Normal)' : '🟢 急迫性：低 (Routine)';
          addLog(`🤖 智慧神經決策完成： 類別判定為「${payload.issueType}」。${urgency}`, 'agent', currentStep.name);
          break;
        case 'step-3':
          addLog(`⚙️ 自動匹配「企業自動化流程-處理工作範本集」...`, 'info', currentStep.name);
          addLog(`📋 已自動建立看板卡片，系統調配 SLA 處理時效閾值：${payload.priority === 'High' ? '2 小時內' : '24 小時內'}`, 'success', currentStep.name);
          break;
        case 'step-4':
          addLog(`🔔 通知引擎啟動：正在調用 Line Developer API / Slack Webhook ...`, 'info', currentStep.name);
          const channel = payload.priority === 'High' ? '【緊急頻道】' : '【技術對接小組】';
          addLog(`💬 已自動發送推播至 "${channel}"：通知相關工程師與 AI 專案經理`, 'success', currentStep.name);
          break;
        case 'step-5':
          addLog(`🗄️ CRM 資料寫入模組連線中... 驗證安全憑證。`, 'info', currentStep.name);
          addLog(`💾 客戶 [${payload.customerName}] 建檔、事件日誌與通訊進度已寫入雲端伺服器 (狀態：待處理)`, 'success', currentStep.name);
          break;
        case 'step-6':
          addLog(`📊 AI 報表助理開始提取本案時間戳、關鍵字群與處理軌跡。`, 'agent', currentStep.name);
          addLog(`📎 已自動摘要本案核心標籤並寫入主管日報，歸類：[${payload.issueType}] - 自動留痕率 100%`, 'success', currentStep.name);
          break;
        case 'step-7':
          addLog(`🚀 AI Agent 工作模組啟動。為專屬團隊自動生成後續答覆指引 & 郵件草稿：`, 'agent', currentStep.name);
          const responseDraft = payload.priority === 'High' 
            ? `「我們已收到您的系統連線超時警告，系統在背景重試中，已為您自動同步給備援路由...」`
            : `「林經理收信愉快，針對您諮詢的 AI 客服導入，基本串接時段大約 21 天，附上我們先前的案例白皮書...」`;
          addLog(`📬 AI 完成自動跟進信件草稿預寫：\n${responseDraft}`, 'agent', currentStep.name);
          break;
      }
      
      // Delay step completion visually
      setTimeout(() => {
        setNodes(prev => prev.map((n, idx) => {
          if (idx === currentStepIndex) return { ...n, status: 'completed' };
          return n;
        }));
        setCurrentStepIndex(prev => prev + 1);
      }, timerDuration - 400);
    };

    const runTimer = setTimeout(executeStepDetails, 400);
    return () => clearTimeout(runTimer);
  }, [currentStepIndex, isRunning]);

  return (
    <div className="w-full">
      {/* Top Controller */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Preset selector */}
        <div className="lg:col-span-4 bg-white border border-brand-orange/15 rounded-2xl p-6 shadow-xs relative overflow-hidden backdrop-blur-md">
          {/* Accent Corner Line */}
          <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-brand-orange to-transparent" />
          <div className="absolute top-0 right-0 h-32 w-[1px] bg-gradient-to-b from-brand-orange to-transparent" />
          
          <h4 className="text-xs font-mono text-brand-orange font-bold tracking-wider mb-2">SIMULATION SCENARIOS</h4>
          <h3 className="text-xl font-bold font-sans text-brand-text-dark mb-4">選擇模擬案例負載</h3>
          
          <div className="space-y-3">
            {presets.map((p) => (
              <button
                key={p.id}
                onClick={() => !isRunning && setSelectedPreset(p.id)}
                disabled={isRunning}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col gap-1 cursor-pointer ${
                  selectedPreset === p.id 
                    ? 'border-brand-orange bg-brand-ivory shadow-xs text-brand-orange' 
                    : 'border-brand-gray-light bg-brand-warm-white/60 hover:border-brand-orange/30 text-brand-text-muted hover:text-brand-text-dark'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                id={`preset-btn-${p.id}`}
              >
                <span className="font-semibold text-sm leading-tight">{p.title}</span>
                <span className="text-xs text-brand-text-muted line-clamp-1">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Engine status monitor & triggers */}
        <div className="lg:col-span-8 bg-white border border-brand-orange/15 rounded-2xl p-6 shadow-xs flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
          {/* Silver Accent Line */}
          <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-brand-orange/30 to-transparent" />
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-brand-orange animate-pulse' : 'bg-slate-300'}`} />
              <h4 className="text-xs font-mono text-brand-orange font-bold tracking-wider">ENGINE CONTROLLER</h4>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-text-dark mb-2 font-sans">
              {isRunning ? '智能工作流正在運轉中...' : '準備啟動流程引擎'}
            </h3>
            
            <p className="text-brand-text-muted text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
              配合下方活的任務地圖，當您按下啟動時，系統將模擬高併發客戶端送出的 Payload，在達創 AI 管理層架構下，自動無縫調配 7 大工作節點特徵。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-brand-gray-light/80 pt-6">
            <button
              onClick={handleStartSimulation}
              disabled={isRunning}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isRunning 
                  ? 'bg-brand-gray-light text-brand-text-muted cursor-not-allowed' 
                  : 'bg-gradient-to-r from-brand-orange to-brand-gold text-white hover:opacity-95 shadow-md glow-btn-3d hover:glow-btn-3d-hover relative group overflow-hidden'
              }`}
              id="start-simulation-btn"
            >
              {/* Scan effect on button */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:animate-[sweep_1.5s_ease_infinite]" style={{ animation: 'sweep 1.5s ease infinite' }} />
              
              {isRunning ? (
                <>
                  <LucideIcon name="Loader2" className="animate-spin text-white" size={18} />
                  自動流轉中...
                </>
              ) : (
                <>
                  <LucideIcon name="Play" size={18} />
                  啟動流程引擎
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              disabled={!isRunning && logs.length === 0}
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all border cursor-pointer ${
                isRunning || logs.length === 0
                  ? 'border-brand-gray-light text-[#A89F93] cursor-not-allowed bg-transparent'
                  : 'border-brand-orange/30 text-brand-text-muted hover:text-brand-text-dark hover:bg-brand-orange/5 hover:border-brand-orange'
              }`}
              id="reset-simulation-btn"
            >
              重置引擎
            </button>

            {isRunning && (
              <div className="flex items-center gap-2 ml-auto text-xs font-mono text-brand-orange bg-brand-ivory px-3 py-1.5 rounded-lg border border-brand-orange/20 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                SLA MONITORING: ACTIVE
              </div>
            )}
          </div>
        </div>
      </div>

      {/* WORKFLOW ROADMAP (DESKTOP AND MOBILE) */}
      <div className="bg-white border border-brand-orange/15 rounded-3xl p-6 md:p-8 mb-8 relative shadow-sm overflow-hidden backdrop-blur-lg">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,140,82,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,140,82,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-100 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8 border-b border-brand-gray-light/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-ivory rounded-lg border border-brand-orange/25 text-brand-orange">
                <LucideIcon name="Activity" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-text-dark">智慧流程引擎決策脈絡圖</h3>
                <p className="text-xs text-brand-text-muted font-mono tracking-wider uppercase mt-0.5">Live Agent Circuit Mapping v2.1</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-5 text-sm font-semibold text-brand-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gray-light border border-slate-300" />
                <span>閒置等待</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange border border-brand-gold shadow-md" />
                <span className="text-brand-orange">運算中</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-400 shadow-md" />
                <span className="text-emerald-600">處理完成</span>
              </div>
            </div>
          </div>

          {/* DESKTOP TIMELINE ROADMAP (>=1024px) */}
          <div className="hidden lg:block relative py-12 px-2 overflow-x-auto">
            {/* Connection Flow Background Lines */}
            <div className="absolute top-[88px] left-[6%] right-[6%] h-[2px] bg-brand-gray-light -z-10" />
            
            {/* Laser flow energy dynamic lines overlay */}
            <AnimatePresence>
              {isRunning && currentStepIndex >= 0 && (
                <div 
                  className="absolute top-[88px] left-[6%] h-[2px] bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange -z-10 transition-all duration-300"
                  style={{ 
                    width: `${Math.min(((currentStepIndex) / 6) * 88, 88)}%`,
                    boxShadow: '0 0 10px rgba(242, 140, 82, 0.4), 0 0 20px rgba(255, 179, 107, 0.2)'
                  }}
                />
              )}
            </AnimatePresence>

            <div className="grid grid-cols-7 gap-4 relative">
              {nodes.map((node, idx) => {
                const isActive = node.status === 'active';
                const isCompleted = node.status === 'completed';
                
                return (
                  <div key={node.id} className="flex flex-col items-center text-center group interactive-node">
                    {/* Glowing circular node dot */}
                    <div className="relative mb-6 text-brand-text-dark">
                      {/* Active Ripple Animation */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-brand-orange/20 animate-ping -m-3" />
                          <div className="absolute inset-0 rounded-full bg-brand-gold/10 animate-pulse -m-6" />
                        </>
                      )}

                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative z-10 ${
                          isCompleted
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-600 shadow-xs'
                            : isActive
                              ? 'bg-brand-ivory border-brand-orange text-brand-orange shadow-md scale-105'
                              : 'bg-brand-warm-white border-brand-gray-light text-brand-text-muted group-hover:border-brand-orange/40 group-hover:text-brand-text-dark'
                        }`}
                        style={{
                          borderColor: isActive ? '#F28C52' : isCompleted ? '#10b981' : undefined
                        }}
                      >
                        <LucideIcon name={node.icon} size={24} />
                        
                        {/* Number label */}
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center font-mono border ${
                          isCompleted
                            ? 'bg-emerald-500 border-emerald-300 text-white'
                            : isActive
                              ? 'bg-brand-orange border-brand-gold text-white'
                              : 'bg-brand-gray-light border-slate-300 text-brand-text-muted'
                        }`}>
                          {idx + 1}
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Details */}
                    <div>
                      <h4 className={`text-md font-bold mb-1.5 transition-colors duration-300 ${
                        isActive 
                          ? 'text-brand-orange' 
                          : isCompleted 
                            ? 'text-emerald-600' 
                            : 'text-brand-text-dark group-hover:text-brand-orange'
                      }`}>
                        {node.name}
                      </h4>
                      <p className="text-xs text-brand-text-muted font-medium leading-normal max-w-[150px] mx-auto group-hover:text-brand-text-dark transition-colors duration-300">
                        {node.description}
                      </p>

                      {/* Display Assistant tagging is there is one */}
                      {node.agentRef && (
                        <div className={`mt-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide ${
                          isActive 
                            ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20 animate-pulse'
                            : isCompleted
                              ? 'bg-brand-gray-light text-brand-text-muted border border-brand-gray-light/80'
                              : 'bg-brand-warm-white text-brand-text-muted/60 border border-brand-gray-light'
                        }`}>
                          <LucideIcon name="Bot" size={11} className="text-brand-orange" />
                          <span>{node.agentRef}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE TIMELINE ROADMAP (<1024px) - Vertical Linear Flow */}
          <div className="lg:hidden relative pl-8 py-4 space-y-8">
            {/* Vertical Connecting Line Wire */}
            <div className="absolute top-4 bottom-4 left-[15px] w-[2px] bg-brand-gray-light" />
            
            {/* Active Vertical Progress Overlay */}
            <AnimatePresence>
              {isRunning && currentStepIndex >= 0 && (
                <div 
                  className="absolute top-4 left-[15px] w-[2px] bg-gradient-to-b from-brand-orange to-brand-gold transition-all duration-300"
                  style={{ 
                    height: `${Math.min(((currentStepIndex) / 6) * 100, 100)}%`,
                    boxShadow: '0 0 8px rgba(242, 140, 82, 0.4)'
                  }}
                />
              )}
            </AnimatePresence>

            {nodes.map((node, idx) => {
              const isActive = node.status === 'active';
              const isCompleted = node.status === 'completed';
              
              return (
                <div key={node.id} className="relative flex gap-5 items-start">
                  {/* Glowing Node Dot outside stack */}
                  <div className="absolute left-[-25px] transform translate-y-1 z-10">
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-brand-orange/30 animate-ping -m-1" />
                    )}
                    <div 
                      className={`w-[18px] h-[18px] rounded-full border-2 transition-all duration-500 ${
                        isCompleted
                          ? 'bg-emerald-500 border-emerald-300 shadow-sm'
                          : isActive
                            ? 'bg-brand-orange border-brand-gold shadow-sm'
                            : 'bg-brand-warm-white border-slate-300'
                      }`}
                    />
                  </div>

                  {/* Node icon box */}
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 transition-all duration-500 ${
                    isCompleted
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                      : isActive
                        ? 'bg-brand-ivory border-brand-orange text-brand-orange scale-105 shadow-sm'
                        : 'bg-brand-warm-white border-brand-gray-light text-brand-text-muted'
                  }`}>
                    <LucideIcon name={node.icon} size={20} />
                  </div>

                  {/* Text descriptions */}
                  <div className="flex-1 min-w-0 text-brand-text-dark">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-mono text-brand-text-muted font-bold">STEP {idx + 1}</span>
                      <h4 className={`text-md font-bold leading-tight ${
                        isActive 
                          ? 'text-brand-orange' 
                          : isCompleted 
                            ? 'text-emerald-600' 
                            : 'text-brand-text-dark'
                      }`}>
                        {node.name}
                      </h4>

                      {node.agentRef && (
                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide font-semibold ${
                          isActive 
                            ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20'
                            : 'bg-brand-gray-light text-brand-text-muted'
                        }`}>
                          🤖 {node.agentRef}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-brand-text-muted font-medium leading-relaxed break-words">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* REAL-TIME SIMULATED LOG TERMINAL PANEL */}
      <div className="bg-[#FAF6F0] border border-[#E6DFD5] rounded-2xl overflow-hidden relative shadow-sm">
        {/* Terminal Header */}
        <div className="bg-[#F0E9DF] border-b border-[#E6DFD5] px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-450/80 bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-450/80 bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-450/80 bg-emerald-400" />
            <span className="text-xs font-mono text-brand-text-muted ml-2 tracking-wider font-bold">PROCESS_ENGINE_SHELL (v5.0-C_Run)</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-text-muted font-bold">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>STREAM LOGS</span>
          </div>
        </div>

        {/* Terminal logs stack */}
        <div className="p-5 font-mono text-xs md:text-sm text-brand-text-dark h-64 overflow-y-auto space-y-3 flex flex-col-reverse divide-y divide-[#E6DFD5]/40 bg-white">
          <AnimatePresence>
            {logs.length > 0 ? (
              logs.map((log) => {
                const isAgent = log.type === 'agent';
                const isSuccess = log.type === 'success';
                const isSystem = log.type === 'system';

                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className={`pt-3 flex gap-3 ${
                      isSystem 
                        ? 'text-brand-orange font-bold bg-brand-orange/5 -mx-3 px-3 py-1.5 rounded border-l-2 border-brand-orange' 
                        : isAgent 
                          ? 'text-[#C67E13]' 
                          : isSuccess 
                            ? 'text-emerald-600' 
                            : 'text-brand-text-dark font-medium'
                    }`}
                  >
                    <span className="text-[#A89F93] flex-shrink-0 select-none">[{log.time}]</span>
                    
                    <div className="flex-1 whitespace-pre-wrap leading-relaxed">
                      {log.nodeName && (
                        <span className={`inline-block text-[11px] px-1.5 py-0.5 rounded font-bold mr-2 uppercase tracking-wide ${
                          isSuccess 
                            ? 'bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]' 
                            : isAgent
                              ? 'bg-[#FEF3C7] text-[#C67E13] border border-[#FDE68A]'
                              : 'bg-brand-gray-light text-brand-text-muted'
                        }`}>
                          {log.nodeName}
                        </span>
                      )}
                      {log.content}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-brand-text-muted text-center py-6 bg-white">
                <LucideIcon name="Layers" size={32} className="text-[#D5CEBF] mb-3 animate-pulse" />
                <p className="font-sans font-semibold text-sm text-[#877F74]">無執行歷史紀錄</p>
                <p className="text-xs text-[#A89F93] max-w-xs mt-1">請點擊上方「啟動流程引擎」按鈕來模擬任務自動分流。</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
