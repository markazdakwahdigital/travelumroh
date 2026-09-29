import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ArrowLeftRight, Landmark, Boxes, ContactRound, UsersRound, FileBarChart, Package, Clock3, Plane, Hotel, Utensils, FileText, Building2, Handshake, UserRoundCheck, Database, CircleDot, Star, Play, Grid3X3, FolderKanban, Headphones, Mail, ListChecks, Settings } from 'lucide-react';

const groups=[
 ['UTAMA',[
  ['Command Center',LayoutDashboard,'/'],
  ['Transaksi',ArrowLeftRight,'/transaksi'],
  ['Keuangan',Landmark,'/keuangan'],
  ['Inventory',Boxes,'/inventory'],
  ['CRM Jamaah',ContactRound,'/crm'],
  ['HRIS',UsersRound,'/hris'],
  ['Laporan & BI',FileBarChart,'/laporan']]],
 ['OPERASIONAL UMRAH',[
  ['Paket Umrah',Package,'/paket'],
  ['Jadwal Keberangkatan',Clock3,'/keberangkatan'],
  ['Fasilitas Transportasi',Plane,'/transportasi'],
  ['Akomodasi',Hotel,'/akomodasi'],
  ['Konsumsi',Utensils,'/konsumsi'],
  ['Dokumen Perjalanan',FileText,'/dokumen']]],
 ['JARINGAN & JAMAAH',[
  ['Kantor Utama',Building2,'/kantor-utama'],
  ['Kantor Cabang',Building2,'/cabang'],
  ['Mitra Travel MDD',Handshake,'/mitra'],
  ['Agen Travel MDD',UserRoundCheck,'/agen'],
  ['Database Jamaah',Database,'/jamaah'],
  ['Calon Jamaah',CircleDot,'/calon-jamaah'],
  ['Alumni Jamaah',Star,'/alumni'],
  ['Video Testimoni',Play,'/testimoni']]],
 ['PENDUKUNG',[
  ['Vendor & Hotel',Grid3X3,'/vendor'],
  ['Manajemen Dokumen',FolderKanban,'/manajemen-dokumen'],
  ['Customer Service',Headphones,'/customer-service'],
  ['Notifikasi & Broadcast',Mail,'/broadcast'],
  ['Task & Reminder',ListChecks,'/task-reminder'],
  ['Pengaturan',Settings,'/pengaturan']]]
];

export default function Sidebar({open=false,onNavigate}){
 return <aside className={open?'open':''}>
  <div className="brand brand-mdd">
   <img src="/travelumroh/mdd-logo.jpg" alt="Markaz Dakwah Digital"/>
   <div><b>MARKAZ</b><strong>DAKWAH DIGITAL</strong><small>Kamu Fokus Ibadah,<br/>Urusan Lain Kami yang Jaga</small></div>
  </div>
  <nav>{groups.map(([label,items])=><React.Fragment key={label}><label>{label}</label>{items.map(([x,Icon,to])=><NavLink end={to==='/'} key={x} to={to} onClick={onNavigate} className={({isActive})=>isActive?'active':''}><Icon size={17}/><span>{x}</span>{x==='CRM Jamaah'&&<em className="nav-badge">12</em>}</NavLink>)}</React.Fragment>)}</nav>
  <div className="system-ok"><i/>Semua sistem normal</div>
  <div className="support-card"><svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12 12 0 0 0-10.3 18.2L4 28l7-1.8A12 12 0 1 0 16 3Z"/><path d="M11.2 9.8c.3-.7.7-.7 1-.7h.7c.2 0 .5.1.6.5l1 2.5c.1.3.1.6-.1.9l-.8 1c-.2.2-.3.5-.1.8.6 1.2 1.5 2.2 2.6 3 1.3.9 2.3 1.2 2.7 1.3.3.1.6 0 .8-.2l1.2-1.4c.3-.3.6-.4.9-.2l2.4 1.1c.4.2.6.3.7.5.1.2.1 1-.2 1.9-.3.9-1.8 1.7-2.5 1.8-.7.1-1.6.2-2.6-.1-.6-.2-1.4-.4-2.4-.9-4.2-1.8-7-6.1-7.2-6.4-.2-.3-1.7-2.2-1.7-4.2 0-2 .9-3 1.2-3.4Z"/></svg><div><b>Butuh Bantuan?</b><small>Hubungi CRM Kami</small></div><button type="button">Chat WhatsApp</button></div>
 </aside>
}