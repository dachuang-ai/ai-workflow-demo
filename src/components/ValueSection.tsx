import React from 'react';
import { values } from '../data';
import LucideIcon from './LucideIcon';

export default function ValueSection() {
  return (
    <section className="py-20 bg-brand-warm-white relative border-b border-brand-gray-light/65">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20 mb-4">
            BUSINESS VALUES & BENEFITS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark mb-4 tracking-tight">
            自動化改造：為企業注入百倍增長動力
          </h2>
          <p className="text-brand-text-muted text-base md:text-lg leading-relaxed font-medium">
            引進達創智能流程引擎，不僅僅是導入單點工具，而是將全域產銷、客服、行政網絡整合成自我修正的數位神經鏈。
          </p>
        </div>

        {/* 4 columns layout on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((v) => (
            <div
              key={v.id}
              className="group relative flex flex-col justify-between h-full bg-white border border-brand-orange/10 hover:bg-brand-ivory/50 hover:border-brand-orange/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden shadow-xs"
              id={`value-card-${v.id}`}
            >
              {/* Card top flare line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gray-light group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-gold transition-all duration-500" />

              <div>
                {/* Metric Display */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-4xl lg:text-5xl font-extrabold font-display bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {v.metric}
                  </span>
                  <div className="text-brand-orange/70 group-hover:text-brand-orange transition-colors">
                    <LucideIcon name={v.icon} size={22} className="opacity-75 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Info block */}
                <h3 className="text-lg font-bold text-brand-text-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {v.title}
                </h3>
                <p className="text-brand-text-muted text-sm md:text-base leading-relaxed break-words font-medium">
                  {v.description}
                </p>
              </div>

              {/* Silver status badge inside card */}
              <div className="mt-8 pt-4 border-t border-brand-gray-light/80 flex items-center justify-between text-[11px] font-mono text-brand-text-muted uppercase tracking-wider font-semibold">
                <span>IMPACT RATIO</span>
                <span className="font-extrabold text-brand-orange/80 group-hover:text-brand-orange">OPTIMIZED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
