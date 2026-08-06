import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SynapseHero({ onPrimaryClick }) {
  return (
    <section className="synapse-hero-section">
      {/* Eyebrow Pill */}
      <div className="eyebrow-chip" style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.25)', color: '#c4b5fd' }}>
        <span className="eyebrow-dot" style={{ background: 'var(--accent-violet)', boxShadow: '0 0 8px var(--accent-violet)' }} />
        <span>SYNAPSE DESIGN SYSTEM v2.4</span>
      </div>

      {/* Massive Instrument Serif Title with Shimmer Last Word */}
      <h1 className="hero-serif-title">
        Intelligent. Neural. <span className="shimmer-text">Framed.</span>
      </h1>

      {/* Subtext max 2xl, Inter neutral-400 18px */}
      <p className="hero-body-subtext">
        The high-contrast dark design system for next-generation developer tools & instant PFP badge generation. Powered by client-side compositing and high-frequency motion.
      </p>

      {/* Interactive Actions: Shiny Border Button & Secondary Link */}
      <div className="hero-actions-row">
        {/* Shiny Border Button (Spinning Conic Gradient Border) */}
        <div onClick={onPrimaryClick} className="shiny-border-btn-wrapper">
          <div className="shiny-border-btn-inner">
            <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span>Launch PFP Studio</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Secondary Link */}
        <a href="#features" className="hero-secondary-link">
          <span>Explore Design System</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
