
import React from 'react';
import Image from 'next/image';
// import Navbar from '/compo/Navbar';


export default function Page() {
  return React.createElement(
    React.Fragment, null,
    React.createElement('h1', null, '🤔 TookTang คืออะไร?'),
    React.createElement('p', { className: 'subtitle' }, 'AI ที่ช่วยบอกคุณว่า “ขยะชิ้นนี้ควรไปถังไหน” แถมยังแนะนำวิธีทำให้ขยะสะอาดพร้อมรีไซเคิล'),
    React.createElement('div', { className: 'card' },
      React.createElement('h2', null, '🛠️ วิธีการใช้งาน'),
      React.createElement('div', { className: 'steps' },
        React.createElement('div', { className: 'step' }, '📸 ', React.createElement('strong', null, 'ถ่ายภาพ'),
          React.createElement('p', null, 'ถ่ายภาพขยะที่ต้องการทิ้ง')
        ),
        React.createElement('div', { className: 'step' }, '🤖 ', React.createElement('strong', null, 'AI ให้คำแนะนำ'),
          React.createElement('p', null, 'ระบบ AI จะระบุประเภทขยะและถังที่เหมาะสม')
        ),
        React.createElement('div', { className: 'step' }, '✅ ', React.createElement('strong', null, 'ทิ้งขยะถูกถัง'),
          React.createElement('p', null, 'ทิ้งตามที่ระบบแนะนำได้เลย')
        )
      )
    ),
    React.createElement('h2', null, '🗑️ ประเภทถังขยะ'),
    React.createElement('div', { className: 'bins' },
      React.createElement('div', { className: 'bin-card blue' },
        React.createElement(Image, { src: '/Blue_Bin.png', alt: 'ขยะทั่วไป', width: 84, height: 84 }),
        React.createElement('h3', null, 'ขยะทั่วไป'),
        React.createElement('p', null, 'ขยะทั่วไปย่อยสลายได้ยาก')
      ),
      React.createElement('div', { className: 'bin-card yellow' },
        React.createElement(Image, { src: '/Yellow_Bin.png', alt: 'ขยะรีไซเคิล', width: 84, height: 84 }),
        React.createElement('h3', null, 'ขยะรีไซเคิล'),
        React.createElement('p', null, 'ขยะที่นำกลับมาใช้ผลิตใหม่ได้')
      ),
      React.createElement('div', { className: 'bin-card green' },
        React.createElement(Image, { src: '/Green_Bin.png', alt: 'ขยะเปียก', width: 84, height: 84 }),
        React.createElement('h3', null, 'ขยะเปียก'),
        React.createElement('p', null, 'ขยะที่ย่อยสลายได้ตามธรรมชาติ')
      )
    ),
    React.createElement('h2', null, '🌱 ประโยชน์ของการแยกขยะ'),
    React.createElement('ul', { className: 'benefits' },
      React.createElement('li', null, '♻️ ลดขยะ: ช่วยลดปริมาณขยะที่ต้องกำจัด'),
      React.createElement('li', null, '🌍 ช่วยสิ่งแวดล้อม: ลดมลพิษและลดการใช้ทรัพยากรใหม่'),
      React.createElement('li', null, '💰 ประหยัด: สร้างมูลค่าจากการรีไซเคิล'),
      React.createElement('li', null, '📘 เรียนรู้: เพิ่มความรู้เรื่องการจัดการขยะ')
    ),
    React.createElement('footer', null,
      React.createElement('p', null, 'พัฒนาโดยทีม ', React.createElement('strong', null, 'TookTang'), ' เพื่อสิ่งแวดล้อมที่ดีขึ้น 🌿'),
      React.createElement('p', null, '📸 ติดตามพวกเราได้ที่ ',
        React.createElement('a', { href: 'https://www.instagram.com/tooktang.kmutt?igsh=M2d6dnRtaDU0aGo5', target: '_blank', rel: 'noopener noreferrer', className: 'follow-link' }, '@tooktang.kmutt')
      )
    )
  );
}
