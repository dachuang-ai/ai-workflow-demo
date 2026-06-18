import React from 'react';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';

export default function BrandHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 border-b border-brand-gray-light/65 bg-brand-warm-white">
      {/* Absolute futuristic backgrounds */}
      <div className="absolute inset-0 bg-brand-warm-white -z-20" />
      
      {/* High-Contrast elegant Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,140,82,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,140,82,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-60 -z-10" />

      {/* Cyber Warm glowing spheres in background */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-brand-orange/6 rounded-full blur-[110px] -z-10 animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-brand-gold/6 rounded-full blur-[100px] -z-10 animate-pulse duration-[4000ms]" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Brand */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Matte consulting Badge Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-ivory/85 border border-brand-orange/20 mb-6 text-sm backdrop-blur-md shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="font-semibold text-brand-orange tracking-wide">達創智能科技 AI • 啟動流程革命</span>
            </div>

            {/* Display Headings */}
            <h1 className="font-display tracking-tight mb-4 leading-none text-brand-text-dark">
              <span className="block text-brand-text-muted font-bold text-2xl md:text-3xl tracking-[0.25em] font-mono mb-2 uppercase">FLOW ENGINE</span>
              <span className="block text-4xl md:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-brand-text-dark via-brand-text-dark to-brand-orange bg-clip-text text-transparent">
                AI 智能流程引擎
              </span>
            </h1>

            {/* Sub-heading with requested Chinese wording */}
            <h2 className="text-lg md:text-2xl text-brand-orange font-semibold mb-6 leading-relaxed max-w-2xl">
              讓需求、資料、任務與回應，<br className="block sm:hidden" />在同一套工作流中自動運轉。
            </h2>

            {/* Description */}
            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-medium">
              達創協助企業重新設計工作流程，透過 AI、自動化工具與系統串接，建立可執行、可追蹤、可放大的智能工作流。
            </p>

            {/* CTA Triggers */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('workflow-section')}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold leading-none tracking-wide text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform lg:hover:-translate-y-0.5 cursor-pointer glow-btn-3d hover:glow-btn-3d-hover"
                id="cta-explore-flow"
              >
                {/* Sweep light effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:animate-[sweep_1.5s_ease_infinite]" style={{ animation: 'sweep 1.5s ease infinite' }} />
                <span>探索流程</span>
                <LucideIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('scenarios-section')}
                className="px-8 py-4 rounded-xl border border-brand-orange/30 hover:border-brand-orange bg-brand-warm-white text-brand-text-muted hover:text-brand-text-dark font-semibold leading-none tracking-wide text-sm flex items-center justify-center gap-2 transition-all duration-305 shadow-xs cursor-pointer hover:bg-brand-orange/5"
                id="cta-view-scenarios"
              >
                <span>查看應用場景</span>
                <LucideIcon name="Layers" size={16} />
              </button>
            </div>
          </div>

          {/* Right Hero Interactive Visual Map with Logo Launch feeling */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            {/* Visual background circles and radar */}
            <div className="absolute w-[320px] md:w-[450px] h-[320px] md:h-[450px] rounded-full border border-brand-orange/15 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[240px] md:w-[320px] h-[240px] md:h-[320px] rounded-full border border-brand-gold/15 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[160px] md:w-[220px] h-[160px] md:h-[220px] rounded-full border border-brand-orange/10 border-dashed" />
            </div>

            {/* Logo and Core Radar container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Outer Pulsing Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/4 to-brand-gold/4 rounded-full blur-2xl animate-pulse" />

              {/* Glowing Silver and Electric Orange Logo Framing */}
              <div className="relative w-64 h-64 md:w-[310px] md:h-[310px] flex items-center justify-center rounded-3xl bg-white border border-brand-orange/15 shadow-xl p-4 group hover:border-brand-orange/40 transition-all duration-700">
                {/* Logo corners glow */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-brand-orange rounded-tl-lg opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-brand-orange rounded-br-lg opacity-40 group-hover:opacity-100 transition-opacity" />
                
                {/* Image Reference for formal logo with fallback */}
                <div className="w-full h-full relative overflow-hidden rounded-2xl flex items-center justify-center bg-brand-ivory/50">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-orange/5 to-transparent pointer-events-none" />
                  
                  {/* Image tag displaying /input_file_0.png as requested */}
                  <img 
                    src="/input_file_0.png" 
                    alt="達創智能科技 AI" 
                    className="object-contain w-full h-full z-10 p-2 transform group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback visual if image isn't loaded properly in the specific container
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      const fallback = document.getElementById('logo-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Elegant High-tech fallback */}
                  <div id="logo-fallback" className="hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-ivory to-white border border-brand-orange/20 flex items-center justify-center text-brand-orange font-mono shadow-sm mb-4">
                      <LucideIcon name="Cpu" size={38} className="animate-pulse" />
                    </div>
                    <h3 className="font-extrabold text-2xl tracking-wider text-brand-text-dark">達創智能</h3>
                    <p className="text-[11px] font-mono text-brand-orange tracking-[0.2em] uppercase mt-1">SMART TECH AI</p>
                  </div>
                </div>
              </div>

              {/* Dynamic floating network particles around the logo frame */}
              <div className="absolute -top-4 -right-2 bg-brand-warm-white border border-brand-orange/20 hover:border-brand-orange hover:shadow-xs px-3 py-1.5 rounded-lg text-xs font-mono text-brand-orange font-bold flex items-center gap-1.5 transition-all w-32 backdrop-blur-md pointer-events-none shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>AI_ENGINE: OK</span>
              </div>

              <div className="absolute -bottom-4 -left-3 bg-brand-warm-white border border-brand-orange/20 hover:border-brand-gold hover:shadow-xs px-3 py-1.5 rounded-lg text-xs font-mono text-brand-orange font-bold flex items-center gap-1.5 transition-all w-34 backdrop-blur-md pointer-events-none shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span>TASK_ROUTER: ON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
