import { WorkflowNode, ScenarioCard, AgentCard, ValueCard } from './types';

export const initialWorkflowNodes: WorkflowNode[] = [
  {
    id: 'step-1',
    name: '客戶填表',
    description: '客戶提交智能表單或發出郵件，驅動引擎首個能量起點',
    icon: 'FormInput',
    status: 'idle',
    color: '#3b82f6', // blue
  },
  {
    id: 'step-2',
    name: 'AI 分類',
    description: 'AI 顧問讀取意圖特徵，自動派標籤並分析急迫性與優先度',
    icon: 'Bot',
    status: 'idle',
    color: '#06b6d4', // cyan (electric blue)
    agentRef: 'AI 分類助理',
  },
  {
    id: 'step-3',
    name: '建立任務',
    description: '系統匹配專案模板，結構化拆解任務並載入工作指南',
    icon: 'Layers',
    status: 'idle',
    color: '#6366f1', // indigo
  },
  {
    id: 'step-4',
    name: '通知分派',
    description: '依排班與專長多管道（Slack/Teams）同步通知合適專家員',
    icon: 'Bell',
    status: 'idle',
    color: '#f59e0b', // amber
  },
  {
    id: 'step-5',
    name: 'CRM 紀錄',
    description: '背景寫入企業資料資產，更新潛在客戶生命週期與狀態',
    icon: 'Database',
    status: 'idle',
    color: '#10b981', // emerald
  },
  {
    id: 'step-6',
    name: '報表生成',
    description: 'AI 自動摘要決策、進度與處理工時，彙整成週期性統計',
    icon: 'FileSpreadsheet',
    status: 'idle',
    color: '#ec4899', // pink
    agentRef: 'AI 報表助理',
  },
  {
    id: 'step-7',
    name: 'AI Agent 接手',
    description: '自動運行後續跟進、智慧信件草擬等跨系統流程深度擴展',
    icon: 'Cpu',
    status: 'idle',
    color: '#8b5cf6', // purple
    agentRef: 'AI 專案助理',
  }
];

export const scenarios: ScenarioCard[] = [
  {
    id: 'sc-1',
    title: '客戶需求接收',
    description: '透過智能表單、郵件或對話，1秒內自動解析與收錄客戶核心需求，拒絕人工手動轉錄輸入。',
    flowStep: '客戶填表',
    icon: 'FormInput'
  },
  {
    id: 'sc-2',
    title: 'AI 自動分類',
    description: '深度理解上下文語意，自動判別緊急度與問題類型（售後/諮詢/商機），精確度高達98%。',
    flowStep: 'AI 分類',
    icon: 'Sparkles'
  },
  {
    id: 'sc-3',
    title: '任務分派',
    description: '根據分類意圖與即時業務排班標籤，智慧派發至最適合的負責人員或其看板，完美無縫協作。',
    flowStep: '建立任務',
    icon: 'UserCheck'
  },
  {
    id: 'sc-4',
    title: '通知與提醒',
    description: '第一時間透過 Line、Teams 或 Slack 自動推送通知給團隊，確保緊急需求在 5 分鐘內獲得響應。',
    flowStep: '通知分派',
    icon: 'BellRing'
  },
  {
    id: 'sc-5',
    title: '資料同步',
    description: '將流程產出、客戶檔案與進度即時雙向寫入企業內部 CRM 與內部資料庫，徹底打破資訊孤島。',
    flowStep: 'CRM 紀錄',
    icon: 'RefreshCw'
  },
  {
    id: 'sc-6',
    title: '報表與總結輸出',
    description: '定期將已完成與延宕的案件彙整，透過 AI 自動生成深度洞察報告，提供管理層最佳決策支援。',
    flowStep: '報表生成',
    icon: 'TrendingUp'
  }
];

export const agents: AgentCard[] = [
  {
    id: 'ag-1',
    name: 'AI 接待助理',
    role: '24/7 第一線需求收集與資訊完整度檢索，確保處理流暢度',
    description: '作為智能入口的守門員，負責引導客戶提問並捕捉完整的核心參數，避免後續重複追問。',
    emoji: '🤖',
    skills: ['多語言語意辨識', '表格參數提取', '智慧情境導向']
  },
  {
    id: 'ag-2',
    name: 'AI 分類助理',
    role: '專精於語意分析與需求分流，精準貼上業務與緊急標記',
    description: '智能解析業務意圖。一秒判定當前客戶是尋求售後支援還是具有商機潛力。',
    emoji: '🧭',
    skills: ['語意分類標記', '優先度階梯評估', '情緒特徵嗅探']
  },
  {
    id: 'ag-3',
    name: 'AI 行政助理',
    role: '自動化生成流程日曆、個人排程、信件草稿與資料對齊',
    description: '為跨部門成員免去瑣事，自動對接行事曆，並在一旁為您預寫信件草案、安排待辦日程。',
    emoji: '📅',
    skills: ['文字結構轉化', '會議日程對接', '自動化郵件對齊']
  },
  {
    id: 'ag-4',
    name: 'AI 報表助理',
    role: '整合多方資料來源，定時產出數據分析與執行成效建議',
    description: '在背景自動分析團隊處理時效、客戶滿意度，提供管理層實時且精準的量化決策優化大腦。',
    emoji: '📊',
    skills: ['自動數據建模', '時序趨勢分析', '關鍵詞瓶頸提取']
  },
  {
    id: 'ag-5',
    name: 'AI 客服助理',
    role: '結合企業知識庫，秒級生成精細專業且富有溫度的回覆',
    description: '隨時處於備戰狀態，深度爬梳內部 Wiki、產品白皮書，為客服團隊預先組裝最標準的回應範本。',
    emoji: '💬',
    skills: ['私有知識庫檢索', '語意生成優化', '高精準防幻覺']
  },
  {
    id: 'ag-6',
    name: 'AI 專案助理',
    role: '監控各節點的逾期狀況與交辦進度，自動催辦阻止延宕',
    description: '流程的智慧監管官。當任務停滯過久，將以溫克且精準的方式發出提醒，保持流程活絡通暢。',
    emoji: '🚀',
    skills: ['逾期阻礙警告', '全域進度追蹤', '節點瓶頸診斷']
  }
];

export const values: ValueCard[] = [
  {
    id: 'val-1',
    title: '減少人工重複作業',
    description: '將繁雜的派單、登打等行政流程自動化，釋放團隊時間，專注於更有價值的高毛利工作與核心策略。',
    metric: '95%',
    icon: 'Zap'
  },
  {
    id: 'val-2',
    title: '加速需求流轉',
    description: '打破部門與工具藩籬，使各階段資訊瞬時流向下一站，整個流程生命週期平均流轉速度提升 80% 以上。',
    metric: '80%+',
    icon: 'Activity'
  },
  {
    id: 'val-3',
    title: '提升內部效率',
    description: '自動派案與督辦提醒，杜絕溝通誤差與漏單可能。讓團隊協作升級，不掉鏈任何一次客戶託付。',
    metric: '10x',
    icon: 'TrendingUp'
  },
  {
    id: 'val-4',
    title: '建立可持續優化的工作流',
    description: '流程全程數位化留痕，配合報表助理量化產出瓶頸，讓管理機制能因應市場變化即時靈活調諧。',
    metric: '100%',
    icon: 'RefreshCw'
  }
];
