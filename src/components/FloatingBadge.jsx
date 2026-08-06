import React from 'react';
import { Palmtree } from 'lucide-react';

export default function FloatingBadge() {
  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 40 }}>
      <div 
        className="ph-badge-floating"
        style={{ pointerEvents: 'none' }}
      >
        <div className="ph-badge-icon" style={{ background: 'linear-gradient(135deg, var(--aurora-amber), var(--aurora-coral))' }}>
          <Palmtree size={14} color="#07080a" />
        </div>
        <div>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Hacker House Goa
          </div>
          <div style={{ fontWeight: 600, fontSize: '13px', color: '#ffffff' }}>
            October 2026 <span style={{ color: 'var(--aurora-amber)', fontWeight: '500', fontSize: '11px' }}>• Anjuna Beach</span>
          </div>
        </div>
      </div>
    </div>
  );
}
