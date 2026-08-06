import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, Download, Share2, RefreshCw, ZoomIn, Move, Palmtree, User, Code, Users, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { drawFrameOnCanvas } from '../utils/frameOverlay';
import { loadImageFromFile } from '../utils/imageLoader';

export default function CommandStudio({ uploadTriggerRef }) {
  const [zoom, setZoom] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Custom Builder ID fields
  const [builderName, setBuilderName] = useState('Anurag Rawat');
  const [builderStack, setBuilderStack] = useState('Frontend developer');
  const [builderTeam, setBuilderTeam] = useState('Byte Me');
  const [builderTime, setBuilderTime] = useState('2:47 pm studio');

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [loadedImage, setLoadedImage] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Default sample image (Anurag Rawat)
  useEffect(() => {
    const defaultImg = new window.Image();
    defaultImg.crossOrigin = 'anonymous';
    defaultImg.src = '/default-avatar.jpg';
    defaultImg.onload = () => {
      setLoadedImage(defaultImg);
    };
  }, []);

  // Redraw canvas whenever options change
  useEffect(() => {
    if (canvasRef.current && loadedImage) {
      drawFrameOnCanvas(canvasRef.current, loadedImage, {
        zoom,
        offsetX,
        offsetY,
        builderName,
        builderStack,
        builderTeam,
        builderTime
      });
    }
  }, [loadedImage, zoom, offsetX, offsetY, builderName, builderStack, builderTeam, builderTime]);

  // Connect external trigger
  useEffect(() => {
    if (uploadTriggerRef) {
      uploadTriggerRef.current = () => {
        if (fileInputRef.current) fileInputRef.current.click();
      };
    }
  }, [uploadTriggerRef]);

  // Handle user photo file selection
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsConverting(true);
      const img = await loadImageFromFile(file);
      setLoadedImage(img);
      setZoom(1);
      setOffsetX(0);
      setOffsetY(0);
    } catch (err) {
      alert('Failed to load image. Please select a valid JPG, PNG, or HEIC file.');
    } finally {
      setIsConverting(false);
    }
  };

  // Drag-to-reposition handlers
  const handleMouseDown = (e) => {
    if (!loadedImage) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offsetX, y: e.clientY - offsetY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffsetX(e.clientX - dragStart.x);
    setOffsetY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag support for mobile
  const handleTouchStart = (e) => {
    if (!loadedImage || !e.touches[0]) return;
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX - offsetX, y: e.touches[0].clientY - offsetY });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches[0]) return;
    setOffsetX(e.touches[0].clientX - dragStart.x);
    setOffsetY(e.touches[0].clientY - dragStart.y);
  };

  // Download high-res PNG export
  const handleDownloadPNG = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `HH_Goa_2026_Pass_${builderName.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#064e3b', '#ec4899', '#eab308', '#ffffff']
    });
  };

  // Share to X intent
  const handleShareToX = () => {
    const tweetText = encodeURIComponent(`Just got my official HH Goa 2026 Builder Pass! 🔥 #FrameInGoa`);
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  return (
    <div className="command-mockup-wrapper" id="studio">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/heic,image/heif"
        style={{ display: 'none' }}
      />

      <div className="command-glass-panel">
        {/* Studio Header */}
        <div className="command-input-row">
          <div className="command-input-left">
            <Palmtree className="command-search-icon" style={{ color: '#4ade80' }} />
            <span className="typed-query" style={{ fontWeight: 600 }}>
              HH GOA 2026 • Official Builder Pass Studio
            </span>
          </div>
          <span className="command-mode-pill" style={{ color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.3)', background: 'rgba(74, 222, 128, 0.1)' }}>
            1080×1080 HD Pass
          </span>
        </div>

        {/* Interactive Canvas Studio Workspace */}
        <div className="studio-workspace-container">
          {/* Interactive Drag & Zoom Canvas Preview */}
          <div 
            className="canvas-preview-box"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <canvas ref={canvasRef} className="frame-canvas-element" />

            {isConverting && (
              <div className="upload-dropzone">
                <RefreshCw size={32} style={{ animation: 'spin 1s linear infinite' }} />
                <span>Converting HEIC image...</span>
              </div>
            )}

            {/* Subtle drag hint overlay */}
            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '9999px', fontSize: '11px', color: '#e6e6e6', display: 'flex', alignItems: 'center', gap: '6px', pointerEvents: 'none' }}>
              <Move size={12} />
              <span>Drag photo to align inside frame</span>
            </div>
          </div>

          {/* Studio Controls Panel */}
          <div className="studio-controls-panel">
            {/* Upload Photo Button */}
            <button 
              className="preset-card-btn selected"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: 'linear-gradient(135deg, rgba(6,78,59,0.4), rgba(236,72,153,0.2))', borderColor: '#4ade80' }}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud size={16} />
              <span>Upload Photo (JPG/PNG/HEIC)</span>
            </button>

            {/* Editable Builder Pass Details */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div className="control-group-title" style={{ color: '#4ade80', marginBottom: '2px' }}>Customize Builder ID Card</div>
              
              {/* Name Input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <User size={14} style={{ color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  value={builderName}
                  onChange={(e) => setBuilderName(e.target.value)}
                  placeholder="Your Name"
                  style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }}
                />
              </div>

              {/* Stack / Role Input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Code size={14} style={{ color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  value={builderStack}
                  onChange={(e) => setBuilderStack(e.target.value)}
                  placeholder="Stack / Role (e.g. Frontend developer)"
                  style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }}
                />
              </div>

              {/* Team Input & Time Input Side by Side */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ display: 'flex', flex: 1.2, alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Users size={14} style={{ color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    value={builderTeam}
                    onChange={(e) => setBuilderTeam(e.target.value)}
                    placeholder="Team (e.g. Byte Me)"
                    style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Clock size={14} style={{ color: 'var(--text-muted)' }} />
                  <input
                    type="text"
                    value={builderTime}
                    onChange={(e) => setBuilderTime(e.target.value)}
                    placeholder="Time (e.g. 2:47 pm)"
                    style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '13px', width: '100%', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Zoom Slider */}
            <div className="slider-control">
              <div className="slider-label">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ZoomIn size={12} />
                  <span>Photo Zoom</span>
                </span>
                <span>{Math.round(zoom * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="custom-range-slider"
              />
            </div>

            {/* Action Buttons: Download & Share to X */}
            <div className="action-buttons-group">
              <button onClick={handleDownloadPNG} className="export-download-btn">
                <Download size={16} />
                <span>Download HD Builder Pass</span>
              </button>

              <button onClick={handleShareToX} className="share-x-btn">
                <Share2 size={16} />
                <span>Share to X (#FrameInGoa)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="command-footer-strip">
          <div className="footer-hints">
            <span>Client-side render</span>
            <span>•</span>
            <span>Zero data stored</span>
          </div>
          <div className="footer-brand">
            HH GOA 2026 BUILDER PASS
          </div>
        </div>
      </div>
    </div>
  );
}
