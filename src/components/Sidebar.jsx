import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Package, ReceiptText, WalletCards, Plane, Handshake, Building2, ContactRound, Landmark, FileBarChart, Settings, MessageCircle } from 'lucide-react';
import { routeByLabel } from '../routes';

const groups=[
  ['UTAMA',[['Dashboard',LayoutDashboard]]],
  ['OPERASIONAL UMRAH',[['CRM & Leads',ContactRound],['Jamaah',Users],['Paket Umrah',Package],['Booking & Invoice',ReceiptText],['Pembayaran',WalletCards],['Keberangkatan',Plane]]],
  ['JARINGAN & JAMAAH',[['Agen & Mitra',Handshake],['Cabang',Building2]]],
  ['PENDUKUNG',[['Keuangan',Landmark],['Laporan',FileBarChart],['Pengaturan',Settings]]]
];

export default function Sidebar({open=false,onNavigate}){
 return <aside className={open?'open':''}>
  <div className="brand brand-mdd">
   <img src="/travelumroh/mdd-logo.jpg" alt="Markaz Dakwah Digital"/>
   <div><b>MARKAZ</b><strong>DAKWAH DIGITAL</strong><small>Travel Umrah & Haji</small></div>
  </div>
  <nav>{groups.map(([label,items])=><React.Fragment key={label}><label>{label}</label>{items.map(([x,Icon])=><NavLink key={x} to={routeByLabel[x]} onClick={onNavigate} className={({isActive})=>isActive?'active':''}><Icon size={18}/><span>{x}</span></NavLink>)}</React.Fragment>)}</nav>
  <div className="support-card"><MessageCircle size={24}/><div><b>Butuh Bantuan?</b><small>Hubungi tim support</small></div><button type="button">Chat WhatsApp</button></div>
 </aside>
}