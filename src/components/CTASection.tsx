import React, { useState } from 'react';
import LucideIcon from './LucideIcon';

export default function CTASection() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    flowNeed: '客戶售後與技術回覆流程',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      alert('請填寫完整資訊，以利 AI 流程助理快速建檔。');
      return;
    }
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      flowNeed: '客戶售後與技術回覆流程',
      message: ''
    });
    setFormSubmitted(false);
    setShowForm(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-warm-white border-b border-brand-gray-light/65 relative overflow-hidden">
      
      {/* Dynamic Laser matrix background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,140,82,0.06),transparent)] pointer-events-none" />
      <div className="absolute top-[2px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
      
      {/* Decorative Constellations SVG lines behind the CTA card */}
      <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20%" cy="30%" r="2.5" fill="#F28C52" />
        <circle cx="80%" cy="40%" r="3" fill="#FFB36B" />
        <circle cx="50%" cy="75%" r="1.5" fill="#F28C52" />
        <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="#F28C52" strokeWidth="0.5" />
        <line x1="80%" y1="40%" x2="50%" y2="75%" stroke="#FFB36B" strokeWidth="0.5" />
      </svg>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 text-center">
        
        {!showForm ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Minimal glowing shield indicator */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-ivory border border-brand-orange/20 text-brand-orange mb-2 shadow-xs">
              <LucideIcon name="Cpu" size={28} />
            </div>

            {/* Title with requested copy */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text-dark tracking-tight leading-tight">
              讓企業從單點工具走向自動化系統
            </h2>

            {/* Custom copy with precise formatting */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-brand-orange font-bold leading-relaxed">
                AI 的價值不只是回答問題，
              </p>
              <p className="text-xl md:text-2xl text-brand-orange font-bold leading-relaxed">
                而是讓一整條工作流程真正開始運轉。
              </p>
            </div>

            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              與其單打獨鬥串接各種零碎的 API，不如建置一套能自動適應、自動糾錯、且全天候運算運轉的智能流程引擎。立即與達創顧問聯繫。
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold tracking-wide text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-95 cursor-pointer"
                id="booking-consultation-btn"
              >
                {/* Sweep scan light */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:animate-[sweep_1.5s_ease_infinite]" style={{ animation: 'sweep 1.5s ease infinite' }} />
                <span>預約 AI 工作流規劃</span>
                <LucideIcon name="Calendar" size={16} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('scenarios-section')}
                className="px-8 py-4 rounded-xl border border-brand-orange/30 bg-white hover:border-brand-orange hover:bg-brand-orange/5 text-brand-text-muted hover:text-brand-text-dark font-semibold tracking-wide text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                id="cta-view-cases-alt"
              >
                <span>查看更多應用案例</span>
                <LucideIcon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white border border-brand-orange/15 rounded-3xl p-6 sm:p-8 text-left shadow-lg relative backdrop-blur-md">
            
            {/* Form Corners */}
            <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-brand-orange rounded-tl-lg" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-brand-orange rounded-br-lg" />

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-text-dark mb-2">預約 1 對 1 智能流程顧問規劃</h3>
                  <p className="text-xs text-brand-text-muted leading-normal font-medium">
                    提交此需求單後，達創的流程分析引擎將為您自動生成一份專屬的自動化流程架構草案，並在會議中進行演示對接。
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-text-muted uppercase tracking-wider mb-1.5">* 您的姓名 (Name)</label>
                    <input 
                      type="text" 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="林大同 經理"
                      className="w-full bg-[#FAF6F0] border border-[#E6DFD5] rounded-xl px-4 py-3 text-sm text-brand-text-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-text-muted uppercase tracking-wider mb-1.5">* 企業名稱 (Company)</label>
                      <input 
                        type="text" 
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="達創智能科技有限公司"
                        className="w-full bg-[#FAF6F0] border border-[#E6DFD5] rounded-xl px-4 py-3 text-sm text-brand-text-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-brand-text-muted uppercase tracking-wider mb-1.5">* 電子信箱 (Email)</label>
                      <input 
                        type="email" 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="service@datron.tech"
                        className="w-full bg-[#FAF6F0] border border-[#E6DFD5] rounded-xl px-4 py-3 text-sm text-brand-text-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-text-muted uppercase tracking-wider mb-1.5">預計想優化的核心流程</label>
                    <select
                      name="flowNeed"
                      value={formData.flowNeed}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF6F0] border border-[#E6DFD5] rounded-xl px-4 py-4 text-sm text-brand-text-dark focus:outline-none focus:border-brand-orange transition-all appearance-none cursor-pointer font-sans"
                    >
                      <option value="客戶售後與技術回覆流程">客戶售後與技術回覆流程 (Line/Email 自動分類並由 AI 指引)</option>
                      <option value="CRM 系統自動登錄與商機派單">CRM 系統自動登錄與商機派單 (SLA 多管道提醒與同步)</option>
                      <option value="AI 智慧報表生成與主管決策看板">AI 智慧報表生成與主管決策看板 (資料鏈整合與趨勢摘要)</option>
                      <option value="自定義多系統 RAG 知識庫串接">自定義跨系統 API 串接與 RAG 企業大腦整合</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-text-muted uppercase tracking-wider mb-1.5">簡單備註目前遇到的痛點描述 (選填)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="例如：目前每天要人工分類 200 封以上客戶求助郵件，回復速度太慢，且無法自動寫入 CRM看板。"
                      className="w-full bg-[#FAF6F0] border border-[#E6DFD5] rounded-xl px-4 py-3 text-sm text-brand-text-dark focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button 
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xs hover:opacity-95 cursor-pointer"
                    id="submit-booking-form"
                  >
                    提交預約單，啟動 AI 媒合
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-3.5 rounded-xl border border-brand-orange/20 hover:border-brand-orange text-[#877F74] hover:text-[#2E2A26] hover:bg-brand-orange/5 text-xs font-semibold transition-all cursor-pointer"
                    id="cancel-booking-form"
                  >
                    取消
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6 animate-[bounceIn_0.4s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <LucideIcon name="Check" size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-brand-text-dark">建檔成功！流程引擎運算中</h3>
                  <p className="text-sm text-brand-text-muted font-medium">
                    親愛的 <span className="text-brand-text-dark font-extrabold">{formData.name} ({formData.company})</span>，您好。
                  </p>
                  <p className="text-sm text-brand-text-muted leading-relaxed break-keep max-w-sm mx-auto font-medium">
                    達創 AI 行政助理已成功將您的預約與痛點參數，寫入本司智能數據庫。<br />
                    我們的 AI 流程顧問將基於您的特定優化目標，在 <strong>24 小時內</strong> 提供對應的解決方案初案。
                  </p>
                </div>

                <div className="bg-[#FAF6F0] border border-[#E6DFD5] rounded-2xl p-4 text-left font-mono text-xs text-brand-text-muted space-y-1">
                  <p className="text-brand-orange font-bold"># TRANSACTION_LOG_D_TECH_AI</p>
                  <p>ID: REC_{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p>TARGET_FLOW: "{formData.flowNeed}"</p>
                  <p>COMPLIANCE_STATUS: SECURE_ENCRYPTED [SSL_PASS]</p>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-3 rounded-xl bg-[#F0E9DF]/80 hover:bg-[#F0E9DF] hover:text-brand-text-dark border border-[#E6DFD5] text-[#877F74] text-xs font-bold transition-all cursor-pointer"
                  id="reset-form-back-btn"
                >
                  關閉並返回主頁
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
