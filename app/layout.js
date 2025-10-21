
export const metadata = { title: 'TookTang', description: 'Waste sorting assistant' };

import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return React.createElement(
    'html', { lang: 'th' },
    React.createElement(
      'body', null,
      React.createElement(
        'nav', { className: 'navbar' },
        React.createElement(Link, { href: '/', className: 'nav-item' }, '🗑️ แยกขยะ'),
        React.createElement(Link, { href: '/about', className: 'nav-item' }, 'ℹ️ เกี่ยวกับ TookTang')
      ),
      React.createElement('main', { className: 'container' }, children)
    )
  );
}
