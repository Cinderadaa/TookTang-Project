'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(Link, { href: '/', className: 'nav-item' }, '🗑️ แยกขยะ'),
    React.createElement(Link, { href: '/dashboard', className: 'nav-item' }, '📊 Dashboard'),
    React.createElement(Link, { href: '/about', className: 'nav-item' }, 'ℹ️ เกี่ยวกับ TookTang')
  );
}
