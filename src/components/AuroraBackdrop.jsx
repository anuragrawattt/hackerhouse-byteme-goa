import React from 'react';

export default function AuroraBackdrop() {
  return (
    <div className="synapse-bg-layer" aria-hidden="true">
      {/* Floating Violet & Cyan Ambient Glowing Orbs */}
      <div className="ambient-orb orb-violet-top" />
      <div className="ambient-orb orb-cyan-left" />
      <div className="ambient-orb orb-violet-right" />

      {/* SVG feTurbulence Film Grain Filter */}
      <div className="aurora-grain-overlay" style={{ opacity: 0.4 }} />
    </div>
  );
}
