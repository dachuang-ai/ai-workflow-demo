import React, { useState } from 'react';
import { agents } from '../data';
import LucideIcon from './LucideIcon';

export default function AgentPart() {
  const [activeAgentId, setActiveAgentId] = useState<string | null>(null);

  const selectedAgent = agents.find(a => a.id === activeAgentId);

  return (
    <section id="agents-section" className="py-20 bg-white relative border-b border-brand-gray-light/65">
      {/* Absolute warm orange background meshes */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-brand-orange/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-80 h-80 bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 mb-4">
            AI AGENTS CLAN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">
            AI Agent 專業智能分工部隊
          </h2>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed font-medium">
            單靠回答問題不是 AI 的終點。達創設計的專業 Agent 角色，各司其職、緊密扣合、即時通訊，讓流程中的每個指令流精確執行。
          </p>
        </div>

        {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {agents.map((ag) => (
            <div
              key={ag.id}
              className="group relative flex flex-col justify-between h-full bg-brand-warm-white/70 border border-brand-orange/15 rounded-3xl p-6 hover:border-brand-orange/35 hover:bg-white transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden hover:shadow-xs"
              id={`agent-card-${ag.id}`}
            >
              {/* Vertical side glowing accent */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-brand-gray-light group-hover:bg-gradient-to-b group-hover:from-brand-orange group-hover:to-brand-gold transition-all" />

              <div>
                {/* Header with Emoji and Designation */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-ivory border border-brand-orange/10 flex items-center justify-center text-2xl group-hover:border-brand-orange/20 transition-all shadow-xs">
                      {ag.emoji}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-brand-text-dark text-lg group-hover:text-brand-orange transition-colors">{ag.name}</h3>
                      <p className="text-[10px] font-mono text-brand-orange uppercase tracking-wider font-bold mt-0.5">D_AGENT ROLE</p>
                    </div>
                  </div>
                </div>

                {/* Sub-description with requested details */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-brand-text-dark leading-normal border-l-2 border-brand-orange/40 pl-3 py-1 bg-brand-ivory/50 mb-4 min-h-[48px]">
                    {ag.role}
                  </p>
                  <p className="text-brand-text-muted text-sm md:text-base leading-relaxed break-words min-h-[72px] font-medium">
                    {ag.description}
                  </p>
                </div>
              </div>

              {/* Skills Capsule badging */}
              <div className="mt-6 pt-4 border-t border-brand-gray-light/80">
                <p className="text-xs text-brand-text-muted font-mono font-bold uppercase tracking-wider mb-2.5">CORE SKILLSETS</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ag.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs text-brand-text-dark font-medium bg-brand-ivory/75 py-1 px-2.5 rounded-lg border border-brand-orange/10 group-hover:border-brand-orange/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Micro-interactive trigger */}
                <button
                  type="button"
                  onClick={() => setActiveAgentId(ag.id)}
                  className="w-full py-2.5 rounded-xl border border-brand-orange/25 bg-white text-brand-text-muted hover:text-brand-orange text-xs font-semibold hover:bg-brand-ivory transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  id={`agent-detail-trigger-${ag.id}`}
                >
                  <LucideIcon name="Bot" size={13} className="text-brand-orange" />
                  <span>檢視連線協定</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal showing agent logs/connection schema for immersive feel */}
        {activeAgentId && selectedAgent && (
          <div className="fixed inset-0 bg-brand-text-dark/40 flex items-center justify-center z-50 p-4 backdrop-blur-md">
            <div className="bg-[#FAF6F0] border border-[#E6DFD5] rounded-3xl w-full max-w-xl overflow-hidden shadow-xl relative animate-[zoomIn_0.2s_ease-out]">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-[#E6DFD5] bg-[#F0E9DF]/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedAgent.emoji}</span>
                  <div>
                    <h3 className="text-brand-text-dark font-extrabold text-xl">{selectedAgent.name}</h3>
                    <p className="text-xs font-mono text-brand-orange font-bold">STATUS: ON_LINE_READY（特徵憑證通過）</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveAgentId(null)}
                  className="p-1.5 rounded-lg border border-brand-orange/20 text-[#877F74] hover:text-brand-orange bg-white transition-colors cursor-pointer shadow-xs"
                  id="close-agent-modal"
                >
                  <LucideIcon name="X" size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-brand-text-muted text-xs font-mono font-bold uppercase tracking-widest mb-2">專屬職責描述</h4>
                  <p className="text-brand-text-dark text-sm md:text-base leading-relaxed font-semibold">
                    {selectedAgent.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-brand-text-muted text-xs font-mono font-bold uppercase tracking-widest mb-3">調用核心參數協定 (Protocols)</h4>
                  <div className="bg-white border border-[#E6DFD5] rounded-xl p-4 font-mono text-xs text-brand-text-dark space-y-2 shadow-xs">
                    <p className="text-brand-orange font-bold"># d_tech_agent_schema_v1.0</p>
                    <p><span className="text-[#877F74]">AGENT_ID:</span> "{selectedAgent.id}"</p>
                    <p><span className="text-[#877F74]">CAPABILITIES:</span> [{selectedAgent.skills.map(s => `"${s}"`).join(', ')}]</p>
                    <p><span className="text-[#877F74]">INPUT_CHANNELS:</span> ["Smart_Form", "Webhook_Payload", "Email_IMAP_Fetch"]</p>
                    <p><span className="text-[#877F74]">OUTPUT_ACTION:</span> ["Auto_Respond", "Update_CRM_Lead", "Deliver_Instant_Push"]</p>
                    <p className="text-[#877F74]"># 達創智能科技 AI 引擎專屬特徵</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-[#E6DFD5] bg-[#F0E9DF]/30 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveAgentId(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white text-xs font-bold tracking-wide transition-all hover:opacity-95 shadow-xs cursor-pointer"
                  id="modal-confirm-btn"
                >
                  確認並返回
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
