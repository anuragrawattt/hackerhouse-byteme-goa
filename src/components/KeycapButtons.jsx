import React from 'react';
import { UploadCloud, Sparkles } from 'lucide-react';

export default function KeycapButtons({ onUploadTrigger }) {
  const scrollToStudio = () => {
    document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-content-section" style={{ marginTop: 0 }}>
      {/* Tactile Keycap Buttons */}
      <div className="keycap-row">
        <button onClick={onUploadTrigger} className="keycap-btn" aria-label="Upload Photo">
          <UploadCloud size={18} />
          <span>Upload Photo</span>
        </button>

        <button onClick={scrollToStudio} className="keycap-btn" aria-label="Adjust Frame">
          <Sparkles size={18} />
          <span>Adjust Frame</span>
        </button>
      </div>

      {/* Caption */}
      <p className="install-caption">
        PNG, JPG, HEIC supported • Instant client-side render • 100% private
      </p>
    </div>
  );
}
