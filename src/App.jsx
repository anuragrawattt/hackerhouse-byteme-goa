import React, { useRef } from 'react';
import AuroraBackdrop from './components/AuroraBackdrop';
import PillNav from './components/PillNav';
import HeroHeadline from './components/HeroHeadline';
import KeycapButtons from './components/KeycapButtons';
import CommandStudio from './components/CommandStudio';
import FloatingBadge from './components/FloatingBadge';

export default function App() {
  const uploadTriggerRef = useRef(null);

  const handleTriggerUpload = () => {
    if (uploadTriggerRef.current) {
      uploadTriggerRef.current();
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', background: '#07080a' }}>
      {/* Signature Living Animated Aurora Background */}
      <AuroraBackdrop />

      {/* Main Layout */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Floating Pill Nav */}
        <PillNav />

        {/* Hero Section: Eyebrow + H1 + Subtitle */}
        <HeroHeadline />

        {/* Tactile Keycap Buttons + GeistMono Caption */}
        <KeycapButtons onUploadTrigger={handleTriggerUpload} />

        {/* Dark-Glass Studio Panel */}
        <CommandStudio uploadTriggerRef={uploadTriggerRef} />

        {/* Floating Event Location Badge */}
        <FloatingBadge />
      </div>
    </div>
  );
}
