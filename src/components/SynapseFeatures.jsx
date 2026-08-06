import React from 'react';
import { Cpu, Zap, ShieldCheck, Image, Code2, Layers } from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: <Zap size={22} />,
    title: 'Sub-Millisecond Canvas Render',
    desc: 'Render crisp 1080x1080 PFP badges directly inside client V8 runtime with zero network rounds.'
  },
  {
    icon: <Cpu size={22} />,
    title: 'Floating Ambient Shader Glows',
    desc: 'Deep Vantablack backdrop layered with procedural Violet & Cyan radial blurs for cinematic depth.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Zero-Server Privacy Guarantee',
    desc: 'Your photos and HEIC images never touch a backend server. Everything executes locally.'
  },
  {
    icon: <Image size={22} />,
    title: 'Native HEIC & High-DPI Support',
    desc: 'Automatic client-side HEIC conversion and vector overlay compositing for mobile & desktop photos.'
  },
  {
    icon: <Code2 size={22} />,
    title: 'Monospaced Syntax Highlighting',
    desc: 'Integrate the Synapse design token API directly into your React, Next.js, or Vite applications.'
  },
  {
    icon: <Layers size={22} />,
    title: 'Instrument Serif Editorial Type',
    desc: 'Ultra-refined editorial typography paired with Inter body text and Geist Mono data indicators.'
  }
];

export default function SynapseFeatures() {
  return (
    <section className="feature-grid-section" id="features">
      <h2 className="section-serif-header">
        Engineered for <span className="shimmer-text">Extreme Contrast</span>
      </h2>

      <div className="cards-grid-layout">
        {FEATURES_DATA.map((feat, idx) => (
          <div key={idx} className="interactive-feature-card">
            <div className="card-icon-square">
              {feat.icon}
            </div>
            <h3 className="card-serif-title">{feat.title}</h3>
            <p className="card-body-desc">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
