import React from 'react';

export default function PillNav() {
  return (
    <nav className="floating-pill-nav" aria-label="Event Navigation">
      <a href="#" className="nav-logo-group">
        <div className="nav-diamond-glyph" />
        <span className="nav-brand-text">
          Hacker House Goa <span style={{ color: 'var(--aurora-amber)', fontSize: '12px', fontWeight: '600', marginLeft: '6px' }}>'26</span>
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
        <span>October 2026 • Goa, India</span>
      </div>
    </nav>
  );
}
