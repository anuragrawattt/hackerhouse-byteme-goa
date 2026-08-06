import React from 'react';

export default function SynapseNav({ onCtaClick }) {
  return (
    <nav className="synapse-nav-pill" aria-label="Synapse Navigation">
      {/* Left Logo: 4px gradient circle + Instrument Serif text */}
      <a href="#" className="nav-brand-logo">
        <div className="brand-dot-gradient" />
        <span className="brand-serif-title">Synapse</span>
      </a>

      {/* Center Links: 12px uppercase Inter, neutral-400 */}
      <ul className="nav-center-links">
        <li><a href="#features" className="nav-link-item">Features</a></li>
        <li><a href="#studio" className="nav-link-item">Studio</a></li>
        <li><a href="#code" className="nav-link-item">API</a></li>
        <li><a href="#docs" className="nav-link-item">Docs</a></li>
      </ul>

      {/* Right CTA: White background, black text, rounded-full */}
      <button onClick={onCtaClick} className="nav-cta-btn">
        Create Frame
      </button>
    </nav>
  );
}
