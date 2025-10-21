
import React from 'react';
import Image from 'next/image';

export default function Page({ searchParams }) {
  const label = searchParams?.label || 'ไม่ทราบ';
  const bin = searchParams?.bin || 'blue';
  const binSrc = bin === 'yellow' ? '/Yellow_Bin.png' : bin === 'green' ? '/Green_Bin.png' : '/Blue_Bin.png';

  function binCard(src, text, active) {
    return React.createElement(
      'div',
      { className: 'bin-card', style: active ? { filter: 'drop-shadow(0 0 18px rgba(45,110,242,0.35))' } : {} },
      React.createElement(Image, { src: src, alt: text, width: 84, height: 84, className: 'bin-img' }),
      React.createElement('span', null, text)
    );
  }

  return React.createElement(
    React.Fragment, null,
    React.createElement('div', { className: 'section-title' }, '📦 ',
      React.createElement('span', null, 'คู่มือการทิ้งขยะ')
    ),
    React.createElement('div', { className: 'step-card' },
      React.createElement('div', { className: 'step' },
        React.createElement('div', { className: 'num' }, '1'),
        React.createElement('div', { className: 'step-label' }, 'เท'),
        React.createElement(Image, { src: '/เทไอคอน.png', alt: 'เท', width: 64, height: 64, className: 'icon-bin' })
      ),
      React.createElement(Image, { src: '/ลูกศร.png', alt: 'ลูกศร', width: 44, height: 44, className: 'arrow-icon' }),
      React.createElement('div', { className: 'step' },
        React.createElement('div', { className: 'num' }, '2'),
        React.createElement('div', { className: 'step-label' }, 'ทิ้ง'),
        React.createElement(Image, { src: binSrc, alt: 'ถัง', width: 64, height: 64, className: 'icon-bin' })
      ),
      React.createElement('p', { className: 'reminder' }, 'ขยะที่ตรวจพบ: ', label, ' • ควรทิ้งใน: ', bin)
    ),
    React.createElement('div', { className: 'section-title' }, '🗑️ ',
      React.createElement('span', null, 'คู่มือถังขยะ')
    ),
    React.createElement('div', { className: 'bin-guide' },
      binCard('/Blue_Bin.png', 'ขยะทั่วไป', bin==='blue'),
      binCard('/Yellow_Bin.png', 'ขยะรีไซเคิล', bin==='yellow'),
      binCard('/Green_Bin.png', 'ขยะเปียก', bin==='green')
    ),
    React.createElement('a', { href: '/', className: 'button', style: { display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' } },
      React.createElement('span', { className: 'checkbox' }, '✅'),
      'กลับไปถ่ายใหม่'
    )
  );
}
