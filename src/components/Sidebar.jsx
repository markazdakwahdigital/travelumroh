import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ArrowLeftRight, Landmark, Boxes, ContactRound, UsersRound, FileBarChart, Package, Clock3, Plane, Hotel, Utensils, FileText, Building2, Handshake, UserRoundCheck, Database, CircleDot, Star, Play, Grid3X3, FolderKanban, Headphones, Mail, ListChecks, Settings, MessageCircle } from 'lucide-react';

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
  <nav>{groups.map(([label,items])=><React.Fragment key={label}><label>{label}</label>{items.map(([x,Icon,to])=><NavLink end={to==='/'} key={x} to={to} onClick={onNavigate} className={({isActive})=>isActive?'active':''}><Icon size={17}/><span>{x}</span>{x==='CRM Jamaah'&&<em className="nav-badge">28</em>}</NavLink>)}</React.Fragment>)}</nav>
  <div className="system-ok"><i/>Semua sistem normal</div>
  <div className="support-card"><MessageCircle size={24}/><div><b>Butuh Bantuan?</b><small>Hubungi tim support</small></div><button type="button">Chat WhatsApp</button></div>
 </aside>
}