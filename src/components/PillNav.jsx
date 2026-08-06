import React from 'react';

export default function PillNav() {
  return (
    <nav className="floating-pill-nav" aria-label="Event Navigation">
      {/* Brand logo & event title */}
      <a href="#" className="nav-logo-group">
        <div className="nav-diamond-glyph" />
        <span className="nav-brand-text">
          Hacker House Goa <span style={{ color: 'var(--aurora-amber)', fontSize: '12px', fontWeight: '600', marginLeft: '6px' }}>'26</span>
        </span>
      </a>

      {/* Right Event Badge Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        <span style={{ color: '#4ade80', fontSize: '10px' }}>●</span>
        <span>October 2026 • Goa, India</span>
      </div>
    </nav>
  );
}
