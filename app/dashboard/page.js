'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import Image from 'next/image';

export default function DashboardPage() {
  const [bins, setBins] = useState([]);
  const [selectedBin, setSelectedBin] = useState(null);
  const [items, setItems] = useState([]);

  // ✅ ดึงข้อมูลถังทั้งหมด
  useEffect(() => {
    async function fetchBins() {
      const { data, error } = await supabase.from('bins').select('*');
      if (error) console.error(error);
      else setBins(data);
    }
    fetchBins();
  }, []);

  // ✅ ถ้ามีการเลือกถัง → ดึงรายการขยะของถังนั้น
  useEffect(() => {
    if (!selectedBin) return;
    async function fetchItems() {
      const { data, error } = await supabase
        .from('waste_items')
        .select('*')
        .eq('bin_id', selectedBin.id);
      if (error) console.error(error);
      else setItems(data);
    }
    fetchItems();
  }, [selectedBin]);

  // ✅ ถ้ายังไม่ได้เลือก → แสดงสรุปถังทั้งหมด
  if (!selectedBin) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('div', { className: 'container' },
        React.createElement('h1', null, '📊 Dashboard'),
        React.createElement('div', { className: 'bin-summary' },
          bins.map(bin =>
            React.createElement(
              'div',
              {
                key: bin.id,
                className: 'bin-card',
                style: { border: `2px solid ${bin.color}`, cursor: 'pointer' },
                onClick: () => setSelectedBin(bin),
              },
              React.createElement(Image, {
                src: `/` + bin.slug.charAt(0).toUpperCase() + bin.slug.slice(1) + `_Bin.png`,
                alt: bin.name,
                width: 70,
                height: 70
              }),
              React.createElement('h2', null, bin.name),
              React.createElement('p', { style: { fontSize: '24px', fontWeight: 'bold' } }, bin.count, ' ชิ้น')
            )
          )
        )
      )
    );
  }

  // ✅ ถ้าเลือกแล้ว → แสดงรายละเอียดรายการในถัง
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('div', { className: 'container' },
      React.createElement('h1', null, `🗑️ ${selectedBin.name} (${selectedBin.count} ชิ้น)`),
      React.createElement(
        'div',
        { className: 'detail-box', style: { border: `2px solid ${selectedBin.color}` } },
        items.map(item =>
          React.createElement('div', { key: item.id, className: 'item-row' },
            React.createElement('span', null, '✅'),
            React.createElement('span', null, item.label)
          )
        )
      ),
      React.createElement('button',
        { className: 'button', onClick: () => setSelectedBin(null), style: { marginTop: '24px' } },
        '⬅️ กลับไปหน้าหลัก'
      )
    )
  );
}

console.log('🧩 FILE PATH CHECK:', import.meta.url);
