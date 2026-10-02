import React from 'react';
import { Activity, AlertTriangle, BarChart3, Banknote, BellRing, Boxes, CalendarDays, CircleDollarSign, GitCompareArrows, Megaphone, Plane, RefreshCw, Target, TrendingUp, UserCheck, Users, WalletCards } from 'lucide-react';

const empty='Belum ada data';
const ownerKpis=[
 ['Revenue',CircleDollarSign,empty],['Target Achievement',Target,'Belum ada target'],['Leads',Users,empty],['Booking',CalendarDays,empty],
 ['Show Up',UserCheck,empty],['Treatment',Activity,empty],['Rebooking',RefreshCw,empty],['VIP',Users,empty],['Referral',UserCheck,empty],
 ['Ad Spend',WalletCards,empty],['ROAS',TrendingUp,empty],['Top Campaign',Megaphone,empty],['Top Treatment',BarChart3,empty],['Stock Critical',Boxes,empty],['Alert Bisnis',BellRing,empty]
];
const sources=['Input Divisi/Staf','Input Manager','Input Cabang','Input Agen','Jamaah Berangkat','Jamaah Cancel','Jumlah Keberangkatan'];
const alerts=['Follow Up','No Show','Stok Menipis','Konten Belum Publish','Input Terlambat','Mismatch','Journey Terputus'];
const journey=['Lead','Prospek','Booking','Show Up','Keberangkatan','Rebooking'];
const leadSources=['Meta Ads','Google Ads','TikTok Ads','Website','Referral','Offline','Lainnya'];
const reconciliation=['Marketing vs CRM','Operasional vs Finance','Revenue vs Cost','Cabang vs Pusat','Agen vs Pusat'];
const integrity=['Data kosong','Input terlambat','Mismatch','Jamaah journey terputus','Complaint','Revenue gap','Aftercare missing'];

function Empty(){return <span className="owner-empty">{empty}</span>}
function SectionTitle({icon:Icon,title,sub}){return <div className="owner-section-title"><span className="owner-icon3d"><Icon/></span><div><h3>{title}</h3>{sub&&<p>{sub}</p>}</div></div>}

export default function DashboardPage(){
 const now=new Date(); const date=new Intl.DateTimeFormat('id-ID',{day:'2-digit',month:'long',year:'numeric'}).format(now);
 return <section className="content dashboard-mdd owner-dashboard">
  <div className="owner-heading"><div><small>DASHBOARD OWNER • {date}</small><h1>Owner Control Center</h1><p>Pusat kontrol tertinggi MDD Travel Haji & Umrah untuk monitoring, rekonsiliasi, alert, dan keputusan bisnis.</p></div><span className="owner-live"><i/> Data aktual sistem</span></div>

  <div className="owner-primary-kpis">
   {[['Omzet',CircleDollarSign,empty],['Target',Target,'Belum ada target'],['Cash In',Banknote,empty],['Outstanding Payment',WalletCards,empty],['Jamaah',Users,empty],['Booking',CalendarDays,empty],['Show Up',UserCheck,empty],['Keberangkatan',Plane,empty]].map(([t,I,v])=><article className="owner-3d-card" key={t}><span className="owner-icon3d"><I/></span><small>{t}</small><strong>{v}</strong></article>)}
  </div>

  <div className="owner-grid owner-grid-2">
   <article className="owner-panel owner-3d-card"><SectionTitle icon={BarChart3} title="Owner Executive Overview" sub="Ringkasan performa utama bisnis"/><div className="owner-kpi-matrix">{ownerKpis.map(([t,I,v])=><div className="owner-mini3d" key={t}><I/><span><small>{t}</small><b>{v}</b></span></div>)}</div></article>
   <article className="owner-panel owner-3d-card"><SectionTitle icon={Activity} title="Owner Control Tower" sub="Kondisi bisnis harian dan bulan berjalan"/><div className="owner-chart-empty"><div className="owner-chart-lines"/><BarChart3/><b>Grafik menunggu data aktual</b><small>Omzet • Booking • Show Up • Keberangkatan</small></div><div className="owner-source-tags">{sources.map(x=><span key={x}>{x}</span>)}</div></article>
  </div>

  <article className="owner-panel owner-3d-card"><SectionTitle icon={BellRing} title="Integrated Owner Dashboard MDD Travel Haji & Umrah" sub="Deteksi otomatis kualitas data dan journey jamaah"/><div className="owner-integrity">{integrity.map(x=><div className="owner-mini3d" key={x}><AlertTriangle/><span><small>{x}</small><b>{empty}</b></span></div>)}</div></article>

  <div className="owner-grid owner-grid-3">
   <article className="owner-panel owner-3d-card"><SectionTitle icon={GitCompareArrows} title="Cross-Division Reconciliation" sub="Perbandingan angka antar sumber"/><div className="owner-tabs3d">{reconciliation.map((x,i)=><button className={i===0?'active3d':''} key={x}>{x}</button>)}</div><table className="owner-table"><thead><tr><th>Indikator</th><th>Sumber A</th><th>Sumber B</th><th>Selisih</th><th>Status</th></tr></thead><tbody>{['Leads','Booking','Show Up','Keberangkatan','Revenue/Omzet'].map(x=><tr key={x}><td>{x}</td><td>{empty}</td><td>{empty}</td><td>—</td><td>—</td></tr>)}</tbody></table></article>
   <article className="owner-panel owner-3d-card"><SectionTitle icon={AlertTriangle} title="Lima Masalah Terbesar" sub="Berdasarkan data nyata seluruh divisi"/><div className="owner-ranked">{[1,2,3,4,5].map(n=><div key={n}><b>{n}</b><span>{empty}</span></div>)}</div></article>
   <article className="owner-panel owner-3d-card"><SectionTitle icon={BellRing} title="Decision Alerts" sub="Keputusan yang membutuhkan perhatian Owner"/><div className="owner-decisions">{[1,2,3,4,5].map(n=><div key={n}><AlertTriangle/><span>{empty}</span><b>—</b></div>)}</div></article>
  </div>

  <div className="owner-grid owner-grid-2">
   <article className="owner-panel owner-3d-card"><SectionTitle icon={TrendingUp} title="Funnel Travel" sub="Perjalanan lead sampai keberangkatan dan rebooking"/><div className="owner-funnel">{journey.map((x,i)=><div key={x} style={{width:`${100-i*10}%`}}><span>{x}</span><b>{empty}</b></div>)}</div></article>
   <article className="owner-panel owner-3d-card"><SectionTitle icon={Megaphone} title="Leads Berdasarkan Source" sub="Sumber leads dari platform iklan dan CRM"/><div className="owner-pie-wrap"><div className="owner-pie3d"><span>Belum ada<br/>data</span></div><div className="owner-pie-legend">{leadSources.map(x=><div key={x}><i/><span>{x}</span><b>—</b></div>)}</div></div></article>
  </div>

  <article className="owner-panel owner-3d-card"><SectionTitle icon={AlertTriangle} title="Tabel Alert" sub="Alert praktis yang dibentuk dari data sistem, bukan catatan manual"/><div className="owner-table-scroll"><table className="owner-table"><thead><tr><th>Tipe Alert</th><th>Deskripsi</th><th>Divisi</th><th>Status</th><th>Waktu</th><th>Aksi</th></tr></thead><tbody>{alerts.map(x=><tr key={x}><td>{x}</td><td>{empty}</td><td>—</td><td>{empty}</td><td>—</td><td><button>Detail</button></td></tr>)}</tbody></table></div></article>

  <div className="owner-data-note"><AlertTriangle/><div><b>Prinsip data Owner Dashboard</b><p>Semua angka wajib berasal dari input staf/divisi, Manager, Cabang, Agen, data jamaah dan keberangkatan. Jika sumber belum tersedia, sistem menampilkan “Belum ada data” atau “Belum ada target” — tidak membuat angka contoh.</p></div></div>
 </section>
}