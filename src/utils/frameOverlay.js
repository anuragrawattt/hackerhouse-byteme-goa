export const FRAME_PRESETS = [
  {
    id: 'official-builder-id',
    name: 'Official Builder ID Pass',
    desc: 'Dark green grid with stickers, stamps & Builder ID badge',
    primaryColor: '#064e3b',
    secondaryColor: '#ec4899'
  }
];

export function drawFrameOnCanvas(canvas, imgElement, config) {
  if (!canvas || !imgElement) return;

  const ctx = canvas.getContext('2d');
  const width = 1080;
  const height = 1080;

  canvas.width = width;
  canvas.height = height;

  const {
    zoom = 1,
    offsetX = 0,
    offsetY = 0,
    builderName = 'Anurag Rawat',
    builderStack = 'Frontend developer',
    builderTeam = 'Byte Me',
    builderTime = '2:47 pm studio',
    brightness = 0,
    contrast = 0,
    showStickers = true
  } = config;

  ctx.fillStyle = '#07080a';
  ctx.fillRect(0, 0, width, height);

  drawOfficialBuilderIdPass(ctx, imgElement, width, height, {
    zoom, offsetX, offsetY, builderName, builderStack, builderTeam, builderTime, brightness, contrast, showStickers
  });
}

function drawOfficialBuilderIdPass(ctx, imgElement, w, h, config) {
  const { zoom, offsetX, offsetY, builderName, builderStack, builderTeam, builderTime, brightness, contrast, showStickers } = config;

  ctx.fillStyle = '#0b1a14';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const gridSize = 24;
  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  ctx.font = '700 48px Georgia, serif';
  ctx.fillStyle = '#fdfbf7';
  ctx.fillText('HH GOA', 60, 75);

  ctx.font = '700 48px Georgia, serif';
  ctx.fillStyle = '#eab308';
  ctx.fillText(' 2026', 255, 75);

  ctx.font = '600 24px Inter, sans-serif';
  ctx.fillStyle = '#ec4899';
  ctx.textAlign = 'right';
  ctx.fillText('#FrameInGoa', w - 60, 70);
  ctx.textAlign = 'left';

  const frameX = 110;
  const frameY = 110;
  const frameW = 860;
  const frameH = 720;
  const radius = 32;

  ctx.save();
  ctx.fillStyle = '#f5f2e9';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 12;
  ctx.beginPath();
  ctx.roundRect(frameX, frameY, frameW, frameH, radius);
  ctx.fill();
  ctx.restore();

  const innerPad = 14;
  const photoX = frameX + innerPad;
  const photoY = frameY + innerPad;
  const photoW = frameW - innerPad * 2;
  const photoH = frameH - innerPad * 2;

  ctx.save();
  ctx.beginPath();
  ctx.roundRect(photoX, photoY, photoW, photoH, radius - 8);
  ctx.clip();

  if (imgElement && (imgElement.naturalWidth || imgElement.width)) {
    const bVal = 100 + brightness;
    const cVal = 100 + contrast;
    ctx.filter = `brightness(${bVal}%) contrast(${cVal}%)`;

    const imgWidth = imgElement.naturalWidth || imgElement.width || 800;
    const imgHeight = imgElement.naturalHeight || imgElement.height || 800;
    const aspect = imgWidth / imgHeight;

    let drawW, drawH;
    if (aspect > photoW / photoH) {
      drawH = photoH * zoom;
      drawW = drawH * aspect;
    } else {
      drawW = photoW * zoom;
      drawH = drawW / aspect;
    }

    const posX = photoX + (photoW - drawW) / 2 + offsetX;
    const posY = photoY + (photoH - drawH) / 2 + offsetY;

    ctx.drawImage(imgElement, posX, posY, drawW, drawH);
  } else {
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(photoX, photoY, photoW, photoH);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 24px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Loading photo...', photoX + photoW / 2, photoY + photoH / 2);
  }
  ctx.restore();

  if (showStickers) {
    ctx.save();
    ctx.translate(190, 220);
    ctx.rotate(-7 * Math.PI / 180);

    ctx.fillStyle = '#fdfbf7';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 6;
    ctx.beginPath();
    ctx.roundRect(-100, -45, 200, 90, 16);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'center';
    ctx.font = '700 20px Inter, sans-serif';
    ctx.fillStyle = '#064e3b';
    ctx.fillText('BUILD', 0, -12);

    ctx.font = '800 22px Inter, sans-serif';
    ctx.fillStyle = '#ec4899';
    ctx.fillText('IN PUBLIC', 0, 14);

    ctx.font = '600 14px monospace';
    ctx.fillStyle = '#064e3b';
    ctx.fillText('</>', 0, 32);

    ctx.restore();
  }

  if (showStickers) {
    ctx.save();
    ctx.translate(860, 230);
    ctx.rotate(12 * Math.PI / 180);

    ctx.fillStyle = '#fdfbf7';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(0, 0, 72, 0, Math.PI * 2);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.textAlign = 'center';
    ctx.font = '700 13px Inter, sans-serif';
    ctx.fillStyle = '#ec4899';
    ctx.fillText('HACK HARD', 0, -32);

    ctx.font = '800 32px Georgia, serif';
    ctx.fillStyle = '#064e3b';
    ctx.fillText('2026', 0, 8);

    ctx.font = '700 13px Inter, sans-serif';
    ctx.fillStyle = '#ec4899';
    ctx.fillText('GOA HARDER', 0, 42);

    ctx.restore();
  }

  ctx.save();
  ctx.translate(280, 680);
  ctx.rotate(-2 * Math.PI / 180);

  ctx.fillStyle = '#fdfbf7';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
  ctx.shadowBlur = 16;
  ctx.shadowOffsetY = 8;
  ctx.beginPath();
  ctx.roundRect(-210, -95, 420, 190, 16);
  ctx.fill();

  ctx.shadowColor = 'transparent';
  ctx.textAlign = 'left';
  ctx.font = '700 14px Inter, sans-serif';
  ctx.fillStyle = '#064e3b';
  ctx.fillText('HH GOA BUILDER ID', -185, -65);

  ctx.font = '600 11px Inter, sans-serif';
  ctx.fillStyle = '#6b7280';
  ctx.fillText('NAME', -185, -42);
  ctx.font = '700 20px Inter, sans-serif';
  ctx.fillStyle = '#064e3b';
  ctx.fillText(builderName || 'Anurag Rawat', -185, -18);

  ctx.font = '600 11px Inter, sans-serif';
  ctx.fillStyle = '#6b7280';
  ctx.fillText('STACK', -185, 4);
  ctx.font = '700 17px Inter, sans-serif';
  ctx.fillStyle = '#064e3b';
  ctx.fillText(builderStack || 'Frontend developer', -185, 26);

  ctx.font = '600 11px Inter, sans-serif';
  ctx.fillStyle = '#6b7280';
  ctx.fillText('TEAM', -185, 48);
  ctx.font = '700 17px Inter, sans-serif';
  ctx.fillStyle = '#064e3b';
  ctx.fillText(builderTeam || 'Byte Me', -185, 70);

  ctx.beginPath();
  ctx.arc(170, 52, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#eab308';
  ctx.fill();

  ctx.font = '700 16px Inter, sans-serif';
  ctx.fillStyle = '#064e3b';
  ctx.textAlign = 'center';
  ctx.fillText('GOA', 170, 58);

  ctx.restore();

  if (showStickers) {
    ctx.save();
    ctx.translate(790, 680);
    ctx.rotate(5 * Math.PI / 180);

    ctx.fillStyle = '#fdfbf7';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 8;
    ctx.beginPath();
    ctx.roundRect(-140, -45, 280, 90, 16);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'center';
    ctx.font = '800 20px Inter, sans-serif';
    ctx.fillStyle = '#064e3b';
    ctx.fillText('BUILT DIFFERENT', 0, -8);

    ctx.font = '800 22px Inter, sans-serif';
    ctx.fillStyle = '#ec4899';
    ctx.fillText('BUILT IN GOA', 0, 22);

    ctx.restore();
  }

  ctx.save();
  ctx.translate(45, 460);
  ctx.rotate(-90 * Math.PI / 180);
  ctx.font = '700 12px Inter, sans-serif';
  ctx.fillStyle = '#fdfbf7';
  ctx.textAlign = 'center';
  ctx.fillText('CONNECT  >  BUILD  >  GROW', 0, 0);
  ctx.restore();

  ctx.save();
  ctx.translate(w - 45, 460);
  ctx.rotate(90 * Math.PI / 180);
  ctx.font = '700 12px Inter, sans-serif';
  ctx.fillStyle = '#fdfbf7';
  ctx.textAlign = 'center';
  ctx.fillText('SHIP  •  LEARN  •  REPEAT', 0, 0);
  ctx.restore();

  const navW = 720;
  const navH = 124;
  const navX = (w - navW) / 2;
  const navY = 890;

  ctx.save();
  ctx.fillStyle = 'rgba(12, 28, 20, 0.92)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 1.5;
  ctx.shadowColor = 'rgba(0,0,0,0.6)';
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.roundRect(navX, navY, navW, navH, 24);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.font = '700 26px Georgia, serif';
  ctx.fillStyle = '#fdfbf7';
  ctx.fillText('HACKER HOUSE GOA 2026', w / 2, navY + 40);

  ctx.font = '700 16px Inter, sans-serif';
  ctx.fillStyle = '#eab308';
  ctx.fillText('CONNECT  •  BUILD  •  GROW', w / 2, navY + 68);

  ctx.font = '600 17px "Geist Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.fillText(builderTime || '2:47 pm studio', w / 2, navY + 98);

  ctx.restore();
}
