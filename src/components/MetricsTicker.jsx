import React from 'react';

const TICKER_ITEMS = [
  { label: 'SYSTEM STATUS', value: 'OPERATIONAL', accent: 'emerald' },
  { label: 'LATENCY', value: '0.8 MS', accent: 'cyan' },
  { label: 'FRAME RENDER', value: 'CLIENT-SIDE 60FPS', accent: 'violet' },
  { label: 'ACTIVE USERS', value: '42,890 LIVE', accent: 'white' },
  { label: 'TYPOGRAPHY', value: 'INSTRUMENT SERIF 400', accent: 'violet' },
  { label: 'CANVAS DPI', value: '1080×1080 CRISP', accent: 'cyan' },
  { label: 'ACCENT MATRIX', value: 'VIOLET & CYAN', accent: 'violet' },
  { label: 'SECURITY', value: 'ZERO UPLOAD PRIVACY', accent: 'emerald' }
];

export default function MetricsTicker() {
  // Duplicate array so seamless infinite marquee loop works without jump
  const marqueeItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="metrics-ticker-wrapper" aria-hidden="true">
      <div className="ticker-track">
        {marqueeItems.map((item, index) => (
          <div key={index} className="ticker-item-pair">
            <span className="ticker-label">{item.label}</span>
            <span className={`ticker-value ${item.accent}`}>{item.value}</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: '20px' }}>///</span>
          </div>
        ))}
      </div>
    </div>
  );
}
