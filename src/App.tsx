import React, { useState } from 'react';
import TargetCursor from './components/TargetCursor';
import BrandHero from './components/BrandHero';
import WorkflowEngine from './components/WorkflowEngine';
import ScenarioSection from './components/ScenarioSection';
import AgentPart from './components/AgentPart';
import ValueSection from './components/ValueSection';
import CTASection from './components/CTASection';
import LucideIcon from './components/LucideIcon';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-brand-warm-white overflow-x-hidden text-brand-text-dark selection:bg-brand-orange selection:text-white">
      
      {/* Tech Collimator target follow cursor for Desktops */}
      <TargetCursor />

      {/* FIXED HEADER / NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-warm-white/90 backdrop-blur-xl border-b border-brand-gray-light/80 shadow-xs">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl h-20 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-white shadow-md">
              <LucideIcon name="Cpu" size={20} />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-extrabold tracking-wider text-brand-text-dark text-base md:text-lg">達創智能科技 AI</span>
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase mt-0.5 font-bold">SMART FLOW ENGINE</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-brand-text-muted">
            <button 
              onClick={() => scrollToSection('workflow-section')} 
              className="hover:text-brand-orange transition-colors uppercase tracking-wider cursor-pointer"
              id="nav-workflow"
            >
              工作流總覽
            </button>
            <button 
              onClick={() => scrollToSection('scenarios-section')} 
              className="hover:text-brand-orange transition-colors uppercase tracking-wider cursor-pointer"
              id="nav-scenarios"
            >
              應用場景
            </button>
            <button 
              onClick={() => scrollToSection('agents-section')} 
              className="hover:text-brand-orange transition-colors uppercase tracking-wider cursor-pointer"
              id="nav-agents"
            >
              AI 智能部隊
            </button>
            <button 
              onClick={() => scrollToSection('values-section')} 
              className="hover:text-brand-orange transition-colors uppercase tracking-wider cursor-pointer"
              id="nav-values"
            >
              核心價值
            </button>
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection('booking-consultation-btn')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white text-xs font-bold tracking-wider uppercase transition-all duration-305 shadow-md hover:shadow-lg glow-btn-3d hover:glow-btn-3d-hover hover:-translate-y-0.5 cursor-pointer"
              id="nav-cta-btn"
            >
              立刻預約評估
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-brand-gray-light text-brand-text-muted hover:text-brand-text-dark transition-colors cursor-pointer"
            id="mobile-nav-toggle"
          >
            <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-warm-white border-b border-brand-gray-light px-6 py-6 space-y-4 shadow-md animate-[fadeIn_0.2s_ease-out]">
            <button 
              onClick={() => scrollToSection('workflow-section')} 
              className="block w-full text-left py-2 font-semibold text-brand-text-muted hover:text-brand-orange transition-colors cursor-pointer"
            >
              工作流總覽
            </button>
            <button 
              onClick={() => scrollToSection('scenarios-section')} 
              className="block w-full text-left py-2 font-semibold text-brand-text-muted hover:text-brand-orange transition-colors cursor-pointer"
            >
              應用場景
            </button>
            <button 
              onClick={() => scrollToSection('agents-section')} 
              className="block w-full text-left py-2 font-semibold text-brand-text-muted hover:text-brand-orange transition-colors cursor-pointer"
            >
              AI 智能部隊
            </button>
            <button 
              onClick={() => scrollToSection('values-section')} 
              className="block w-full text-left py-2 font-semibold text-brand-text-muted hover:text-brand-orange transition-colors cursor-pointer"
            >
              核心價值
            </button>
            <button
              onClick={() => scrollToSection('booking-consultation-btn')}
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-sm shadow-md"
            >
              立刻預約評估
            </button>
          </div>
        )}
      </header>

      {/* Adjust viewport top offset */}
      <div className="h-20" />

      {/* HERO SECTION */}
      <BrandHero />

      {/* MAIN ENGINE ACTIVE DEMO / WORKFLOW SECTION */}
      <section id="workflow-section" className="py-24 bg-brand-ivory/40 border-b border-brand-gray-light relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Section Heading */}
          <div className="text-center md:max-w-3xl mx-auto mb-16">
            <div className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 mb-4">
              INTERACTIVE DEMO MAP
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">
              企業自動化主工作流運作全覽
            </h2>
            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed">
              檢視達創如何重新架構企業運作。下圖完整展示一組客戶請求在 7 個核心智能節點間，進行多代理人協同運算與自動派單的精密拓樸。
            </p>
          </div>

          {/* Interactive engine component integration */}
          <WorkflowEngine />

        </div>
      </section>

      {/* SCENARIOS SECTION */}
      <ScenarioSection />

      {/* AGENTS ROLES GRID */}
      <AgentPart />

      {/* CORE BUSINESS VALUES */}
      <div id="values-section">
        <ValueSection />
      </div>

      {/* CONCLUDING CALL TO ACTION WITH PLANNER */}
      <CTASection />

      {/* FOOTER - Polished Light Consulting Footer */}
      <footer className="bg-[#F3F0EB] border-t border-[#E6DFD5] text-brand-text-muted py-16 px-6 relative z-15">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Left Brand info */}
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-white shadow-xs">
                <LucideIcon name="Cpu" size={15} />
              </div>
              <span className="font-extrabold text-[#2E2A26] text-base tracking-wide">達創智能科技 AI</span>
            </div>
            <p className="text-[#6F675F] text-sm max-w-md leading-relaxed">
              致力於為大中型企業重塑自動化與 AI 顧問落地環境。讓多維度任務排班、自動化通知提醒、資訊留痕回報，在底層引擎架構下安全、閉環地運作。
            </p>
          </div>

          {/* Right signature parameters as requested */}
          <div className="flex flex-col items-center md:items-end gap-1 font-mono">
            <div className="text-15px text-[#2E2A26] font-sans font-bold tracking-wide">
              達創智能科技 AI
            </div>
            <p className="text-xs text-[#6F675F]">
              Flow Design by 達創智能科技 AI
            </p>
            <div className="text-[10px] text-[#2E2A26]/60 mt-2">
              © {new Date().getFullYear()} Datron Smart Tech AI. All rights reserved.
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
