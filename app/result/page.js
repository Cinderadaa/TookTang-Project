'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// import Navbar from '/compo/Navbar';


export default function Page({ searchParams }) {
  const label = searchParams?.label || 'ไม่ทราบ';
  const bin = searchParams?.bin || 'blue';
  const binSrc =
    bin === 'yellow'
      ? '/Yellow_Bin.png'
      : bin === 'green'
      ? '/Green_Bin.png'
      : '/Blue_Bin.png';

  // ✅ state สำหรับ popup
  const [activeBin, setActiveBin] = useState(null);

  // ✅ รายละเอียดแต่ละถัง
  const binDetails = {
    blue: {
      title: 'ขยะทั่วไป',
      color: '#2D6EF2',
      image: '/Blue_Bin.png',
      desc: 'สำหรับขยะที่ไม่สามารถนำกลับมาใช้ใหม่หรือรีไซเคิลได้ เช่น ซองขนม เศษกระดาษเปื้อนน้ำมัน หรือทิชชูที่ใช้แล้ว',
      tip: '💡 หลีกเลี่ยงการทิ้งของเปียกหรือของเหลวลงในถังนี้นะ!',
    },
    yellow: {
      title: 'ขยะรีไซเคิล',
      color: '#FFD43B',
      image: '/Yellow_Bin.png',
      desc: 'สำหรับวัสดุที่สามารถนำกลับมาใช้ใหม่ได้ เช่น แก้ว ขวดพลาสติก กระป๋องอลูมิเนียม กล่องเครื่องดื่ม',
      tip: '🧴 ล้าง-แยก-อบให้แห้งก่อนทิ้ง จะช่วยให้รีไซเคิลได้ 100%',
    },
    green: {
      title: 'ขยะเปียก',
      color: '#34C759',
      image: '/Green_Bin.png',
      desc: 'สำหรับเศษอาหาร เปลือกผลไม้ หรือวัสดุที่ย่อยสลายได้ตามธรรมชาติ',
      tip: '🌱 ช่วยลดกลิ่น ลดแมลง และเปลี่ยนเป็นปุ๋ยได้ด้วยนะ!',
    },
  };

  // ✅ การ์ดถัง (คลิกเปิด popup)
  function binCard(src, text, active, colorKey) {
    return React.createElement(
      'div',
      {
        className: 'bin-card',
        style: active
          ? {
              filter:
                'drop-shadow(0 0 18px rgba(45,110,242,0.35))',
            }
          : {},
        onClick: () => setActiveBin(colorKey),
      },
      React.createElement(Image, {
        src: src,
        alt: text,
        width: 84,
        height: 84,
        className: 'bin-img',
      }),
      React.createElement('span', null, text)
    );
  }

  // ✅ หน้า Result + Popup
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'section-title' },
      '📦 ',
      React.createElement('span', null, 'คู่มือการทิ้งขยะ')
    ),
    React.createElement(
      'div',
      { className: 'step-card' },
      React.createElement(
        'div',
        { className: 'step' },
        React.createElement('div', { className: 'num' }, '1'),
        React.createElement('div', { className: 'step-label' }, 'เท'),
        React.createElement(Image, {
          src: '/เทไอคอน.png',
          alt: 'เท',
          width: 64,
          height: 64,
          className: 'icon-bin',
        })
      ),
      React.createElement(Image, {
        src: '/ลูกศร.png',
        alt: 'ลูกศร',
        width: 44,
        height: 44,
        className: 'arrow-icon',
      }),
      React.createElement(
        'div',
        { className: 'step' },
        React.createElement('div', { className: 'num' }, '2'),
        React.createElement('div', { className: 'step-label' }, 'ทิ้ง'),
        React.createElement(Image, {
          src: binSrc,
          alt: 'ถัง',
          width: 64,
          height: 64,
          className: 'icon-bin',
        })
      ),
      React.createElement(
        'p',
        { className: 'reminder' },
        'ขยะที่ตรวจพบ: ',
        label,
        ' • ควรทิ้งใน: ',
        bin
      )
    ),
    React.createElement(
      'div',
      { className: 'section-title' },
      '🗑️ ',
      React.createElement('span', null, 'คู่มือถังขยะ')
    ),
    React.createElement(
      'div',
      { className: 'bin-guide' },
      binCard('/Blue_Bin.png', 'ขยะทั่วไป', bin === 'blue', 'blue'),
      binCard('/Yellow_Bin.png', 'ขยะรีไซเคิล', bin === 'yellow', 'yellow'),
      binCard('/Green_Bin.png', 'ขยะเปียก', bin === 'green', 'green')
    ),
    React.createElement(
      'a',
      {
        href: '/',
        className: 'button',
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '12px',
        },
      },
      React.createElement('span', { className: 'checkbox' }, '✅'),
      'กลับไปถ่ายใหม่'
    ),

    // ✅ Popup Modal
    activeBin &&
      React.createElement(
        'div',
        { className: 'modal-overlay', onClick: () => setActiveBin(null) },
        React.createElement(
          'div',
          {
            className: 'modal-content',
            style: { background: binDetails[activeBin].color },
            onClick: (e) => e.stopPropagation(),
          },
          React.createElement(
            'button',
            { className: 'close-btn', onClick: () => setActiveBin(null) },
            '✖'
          ),
          React.createElement(
            'div',
            { className: 'popup-body' },
            // ✅ เพิ่ม className .popup-img ให้ภาพถัง
            React.createElement(Image, {
              src: binDetails[activeBin].image,
              alt: binDetails[activeBin].title,
              width: 100,
              height: 100,
              className: 'popup-img',
            }),
            React.createElement('h2', null, binDetails[activeBin].title),
            React.createElement(
              'div',
              { className: 'popup-box' },
              React.createElement('p', null, 'เหมาะสำหรับ:'),
              React.createElement('p', null, binDetails[activeBin].desc)
            ),
            React.createElement(
              'div',
              { className: 'popup-tip' },
              binDetails[activeBin].tip
            )
          )
        )
      )
  );
}
