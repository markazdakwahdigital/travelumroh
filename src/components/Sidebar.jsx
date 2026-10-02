import React from 'react';
import {NavLink} from 'react-router-dom';
import * as I from 'lucide-react';

const base=[
 ['Command Center',I.LayoutDashboard,'/'],['Manajer Marketing',I.Megaphone,'/manajer-marketing'],['Manajer Operasional',I.BriefcaseBusiness,'/manajer-operasional'],['Manajer Finance',I.Landmark,'/manajer-finance'],
 ['Marketing Offline',I.Store,'/marketing-offline'],['Digital Marketing & Ads',I.MousePointerClick,'/digital-marketing'],['CRM & Leads',I.ContactRound,'/crm'],['Creative Performance',I.Sparkles,'/creative-performance'],['Visa & Dokumen',I.Stamp,'/visa-dokumen'],['Inventory',I.Boxes,'/inventory'],['Paket Haji',I.Landmark,'/paket-haji'],['Paket Umrah',I.Package,'/paket'],['Booking & Pembayaran',I.ReceiptText,'/booking'],['Daftar Jamaah',I.UsersRound,'/jamaah'],['Jadwal Keberangkatan',I.CalendarClock,'/keberangkatan'],['Transportasi & Maskapai',I.Plane,'/transportasi'],['Akomodasi',I.Hotel,'/akomodasi'],['Konsumsi',I.Utensils,'/konsumsi'],['Dokumen Perjalanan',I.FileText,'/dokumen'],['Daftar Vendor',I.Building2,'/vendor'],['Notifikasi & Broadcast',I.Radio,'/broadcast'],['Testimoni Jamaah',I.MessageSquareQuote,'/testimoni'],['Galeri Video & Foto',I.Images,'/galeri'],['Alumni & Referral',I.UserRoundCheck,'/alumni']
];
function items(role){
 const x=[...base];
 if(role==='pusat') x.splice(1,0,['Dashboard Owner',I.Crown,'/dashboard-owner']);
 x.push([role==='cabang'?'Profile Cabang':role==='agen'?'Profile Agen':'Profile Pusat',I.BadgeInfo,'/profile']);
 if(role!=='pusat') x.push(['Setting',I.Settings,'/pengaturan']);
 return x;
}
export default function Sidebar({open=false,onNavigate,role='pusat',onLogout}){
 return <aside className={open?'open':''}>
  <div className="brand brand-mdd"><img src="/travelumroh/mdd-logo.jpg" alt="Markaz Dakwah Digital"/><div><b>MDD TRAVEL</b><strong>HAJI & UMRAH</strong><small>{role.toUpperCase()}</small></div></div>
  <nav><label>MANAJEMEN {role.toUpperCase()}</label>{items(role).map(([x,Icon,to])=><NavLink end={to==='/' } key={x} to={to} onClick={onNavigate} className={({isActive})=>isActive?'active':''}><Icon size={17}/><span>{x}</span></NavLink>)}</nav>
  <div className="support-card"><svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Z"/><path d="M11.2 9.8c.3-.7.7-.7 1-.7h.7c.2 0 .5.1.6.5l1 2.5c.1.3.1.6-.1.9l-.8 1c-.2.2-.3.5-.1.8.6 1.2 1.5 2.2 2.6 3 1.3.9 2.3 1.2 2.7 1.3.3.1.6 0 .8-.2l1.2-1.4c.3-.3.6-.4.9-.2l2.4 1.1c.4.2.6.3.7.5.1.2.1 1-.2 1.9-.3.9-1.8 1.7-2.5 1.8-.7.1-1.6.2-2.6-.1-.6-.2-1.4-.4-2.4-.9-4.2-1.8-7-6.1-7.2-6.4-.2-.3-1.7-2.2-1.7-4.2 0-2 .9-3 1.2-3.4Z"/></svg><div><b>Butuh Bantuan?</b><small>Hubungi tim support kami</small></div><button type="button" onClick={()=>window.open('https://wa.me/6285196965326','_blank')}>Chat WhatsApp</button></div>
  <button className="logout-side" onClick={onLogout}><I.LogOut size={16}/> Keluar</button>
 </aside>
}