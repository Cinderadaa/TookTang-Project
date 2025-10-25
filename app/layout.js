import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'TookTang',
  description: 'IoT ถังขยะอัจฉริยะเพื่อช่วยนักศึกษาคัดแยกขยะอย่างถูกต้อง',
};

export default function RootLayout({ children }) {
  return React.createElement(
    'html', 
    { lang: 'th' },
    React.createElement(
      'body', 
      null,
      // ✅ Navbar
      React.createElement(
        'nav', 
        { className: 'navbar' },
        React.createElement(Link, { href: '/', className: 'nav-item' }, '🗑️ แยกขยะ'),
        React.createElement(Link, { href: '/about', className: 'nav-item' }, 'ℹ️ เกี่ยวกับ TookTang'),
        React.createElement(Link, { href: '/dashboard', className: 'nav-item' }, '📊 Dashboard')
        
      ),
      // ✅ เนื้อหาหลักของแต่ละหน้า
      React.createElement('main', { className: 'container' }, children)
    )
  );
}
