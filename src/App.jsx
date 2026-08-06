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
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', margin: 0, padding: 0, background: '#07080a', overflowX: 'hidden' }}>
      <AuroraBackdrop />

      <div style={{ position: 'relative', zIndex: 10, margin: 0, padding: 0 }}>
        <PillNav />
        <HeroHeadline />
        <KeycapButtons onUploadTrigger={handleTriggerUpload} />
        <CommandStudio uploadTriggerRef={uploadTriggerRef} />
        <FloatingBadge />
      </div>
    </div>
  );
}
