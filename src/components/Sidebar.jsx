import React from 'react';
const groups=[
  ['UTAMA',['Dashboard']],
  ['OPERASIONAL UMRAH',['CRM & Leads','Jamaah','Paket Umrah','Booking & Invoice','Pembayaran','Keberangkatan']],
  ['JARINGAN & JAMAAH',['Agen & Mitra','Cabang']],
  ['PENDUKUNG',['Keuangan','Laporan','Pengaturan']]
];
export default function Sidebar({active='Dashboard'}){
 return <aside><div className="brand"><div className="mark">MDD</div><div><b>Travel Umrah MDD</b><small>Smart Management</small></div></div>
 <nav>{groups.map(([label,items])=><React.Fragment key={label}><label>{label}</label>{items.map(x=><a key={x} className={x===active?'active':''} href="#">{x}</a>)}</React.Fragment>)}</nav>
 <div className="sync">● Semua sistem normal<br/><small>Terakhir sinkron 10:24 WIB</small></div></aside>
}