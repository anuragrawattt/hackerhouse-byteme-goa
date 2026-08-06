import React from 'react';

export default function AuroraBackdrop() {
  return (
    <div className="aurora-container" aria-hidden="true">
      <div className="aurora-blade blade-1" />
      <div className="aurora-blade blade-2" />
      <div className="aurora-blade blade-3" />
      <div className="aurora-blade blade-4" />
      <div className="aurora-grain-overlay" />
      <div className="aurora-vignette" />
    </div>
  );
}
