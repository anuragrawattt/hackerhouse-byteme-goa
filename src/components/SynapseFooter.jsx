import React from 'react';

export default function SynapseFooter() {
  return (
    <footer className="synapse-footer">
      <div className="footer-grid-container">
        {/* Col 1: Brand & Logo */}
        <div className="footer-brand-col">
          <div className="footer-serif-logo">Synapse</div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '280px' }}>
            A futuristic dark-themed design system combining high-contrast typography, ambient glowing orbs, and instant PFP compositing.
          </p>
        </div>

        {/* Col 2: Design Tokens */}
        <div>
          <div className="footer-category-title">TOKENS</div>
          <ul className="footer-links-list">
            <li><a href="#" className="footer-link">Vantablack Ground</a></li>
            <li><a href="#" className="footer-link">Violet & Cyan Glows</a></li>
            <li><a href="#" className="footer-link">Instrument Serif</a></li>
            <li><a href="#" className="footer-link">Geist Monospace</a></li>
          </ul>
        </div>

        {/* Col 3: Components */}
        <div>
          <div className="footer-category-title">COMPONENTS</div>
          <ul className="footer-links-list">
            <li><a href="#studio" className="footer-link">PFP Canvas Studio</a></li>
            <li><a href="#" className="footer-link">Shiny Border Button</a></li>
            <li><a href="#" className="footer-link">Navigation Glass Pill</a></li>
            <li><a href="#" className="footer-link">Metrics Ticker</a></li>
          </ul>
        </div>

        {/* Col 4: Event & Community */}
        <div>
          <div className="footer-category-title">COMMUNITY</div>
          <ul className="footer-links-list">
            <li><a href="#" className="footer-link">Hacker House Goa '26</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer" className="footer-link">Share on X (#FrameInGoa)</a></li>
            <li><a href="#" className="footer-link">GitHub Repository</a></li>
            <li><a href="#" className="footer-link">Documentation</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Emerald Operational Status Indicator */}
      <div className="footer-bottom-bar">
        <div>© 2026 Synapse Design System • All Rights Reserved</div>

        <div className="status-indicator-pill">
          <span className="status-pulse-dot" />
          <span>All Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
