import React from 'react';

export default function HeroHeadline() {
  return (
    <header className="hero-content-section">
      {/* Eyebrow Chip */}
      <div className="eyebrow-chip">
        <span className="eyebrow-dot" />
        <span>🌴 HACKER HOUSE GOA • OCTOBER 2026</span>
      </div>

      {/* Human, authentic headline */}
      <h1 className="hero-h1-title">
        See you in <span className="warm-accent-word">Goa.</span>
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Claim your official HH Goa '26 profile badge. Drop a photo, customize your frame preset, and share with fellow builders.
      </p>
    </header>
  );
}
