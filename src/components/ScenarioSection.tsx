import React from 'react';
import { scenarios } from '../data';
import LucideIcon from './LucideIcon';

export default function ScenarioSection() {
  return (
    <section id="scenarios-section" className="py-20 bg-brand-warm-white relative border-b border-brand-gray-light/65">
      {/* Background glow and subtle dots mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/4 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 mb-4">
            APPLICATION SCENARIOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">
            高適應性企業工作流應用場景
          </h2>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed font-medium">
            達創智能流程引擎具備高彈性串接能力，能夠在以下六個關鍵商務環節，將手動重複作業完整升級為全自動的精密能量流。
          </p>
        </div>

        {/* 3x2 Grid on desktop, 2x3 on tablet, 1x6 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scenarios.map((sc, idx) => (
            <div 
              key={sc.id} 
              className="group relative flex flex-col h-full bg-white border border-brand-orange/10 rounded-2xl p-6 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 text-left hover:shadow-md overflow-hidden"
              id={`scenario-card-${sc.id}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gray-light group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-gold transition-colors" />
              
              {/* Decorative step number floating in bg */}
              <div className="absolute top-4 right-4 text-xs font-mono font-bold text-brand-text-muted/40 group-hover:text-brand-orange transition-colors">
                CASE_0{idx + 1}
              </div>

              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/15 bg-brand-ivory text-brand-orange group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-gold mb-6 transition-all shadow-xs">
                <LucideIcon name={sc.icon} size={22} />
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-text-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {sc.title}
                </h3>
                <p className="text-brand-text-muted text-sm md:text-base leading-relaxed break-words font-medium">
                  {sc.description}
                </p>
              </div>

              {/* Map reference indicator */}
              <div className="mt-6 pt-4 border-t border-brand-gray-light/80 flex items-center justify-between text-xs font-mono text-brand-text-muted group-hover:text-brand-text-dark transition-colors">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>對應：{sc.flowStep}</span>
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 text-brand-orange font-bold">
                  ACTIVE
                  <LucideIcon name="ChevronRight" size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
