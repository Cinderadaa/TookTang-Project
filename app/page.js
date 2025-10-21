
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function mockClassify(blob) {
  return new Promise((resolve) => {
    const options = [
      { label: 'ขวดพลาสติก', bin: 'yellow' },
      { label: 'เศษอาหาร', bin: 'green' },
      { label: 'ซองขนม', bin: 'blue' }
    ];
    const pick = options[Math.floor(Math.random()*options.length)];
    setTimeout(() => resolve(pick), 600);
  });
}

export default function Page() {
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const streamRef = React.useRef(null);
  const router = useRouter();

  React.useEffect(() => {
    async function startCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e) { console.warn('Camera error:', e); }
    }
    startCam();
    return () => { if (streamRef.current) streamRef.current.getTracks().forEach(t=>t.stop()); };
  }, []);

  function handleAnalyze() {
    const video = videoRef.current;
    if (!video) return;
    const w = video.videoWidth || 320, h = video.videoHeight || 240;
    const cvs = canvasRef.current;
    cvs.width = w; cvs.height = h;
    const ctx = cvs.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    cvs.toBlob(async (blob) => {
      const res = await mockClassify(blob);
      const q = new URLSearchParams(res).toString();
      router.push('/result?'+q);
    }, 'image/jpeg', 0.9);
  }

  return React.createElement(
    React.Fragment, null,
    React.createElement('header', null,
      React.createElement('h1', { className: 'logo' }, 'TookTang')
    ),
    React.createElement('div', { className: 'content' },
      React.createElement('h2', null, '📸 ถ่ายภาพขยะ'),
      React.createElement('p', { className: 'subtitle' }, 'ถ่ายภาพขยะของคุณเพื่อเริ่มวิเคราะห์'),
      React.createElement('div', { className: 'camera-box' },
        React.createElement('video', { ref: videoRef, playsInline: true, muted: true, style: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' } })
      ),
      React.createElement('button', { className: 'main-btn', onClick: handleAnalyze }, '🔍 วิเคราะห์ขยะ')
    ),
    React.createElement('canvas', { ref: canvasRef, style: { display: 'none' } })
  );
}
