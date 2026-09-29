import React from 'react';
import { ShieldCheck, Users, Star, Plane, WalletCards, Target, CalendarDays, ArrowUpRight, Package, ReceiptText, ContactRound } from 'lucide-react';
import KpiGrid from '../components/KpiGrid';
import CrmPipeline from '../components/CrmPipeline';
import RevenuePanel from '../components/RevenuePanel';
import TargetPanel from '../components/TargetPanel';
import {kpis,pipeline,transactions,departures} from '../data/dashboard';

export default function DashboardPage(){
 return <section className="content dashboard-mdd">
  <section className="mdd-hero">
   <div className="hero-copy"><span>Selamat Datang di</span><h1><b>MARKAZ DAKWAH DIGITAL</b></h1><p>Melayani perjalanan ibadah ke Baitullah dengan amanah, profesional dan penuh berkah.</p><div className="hero-values"><span><ShieldCheck/>Amanah</span><span><Users/>Profesional</span><span><Star/>Penuh Berkah</span></div></div>
   <div className="hero-emblem islamic-arch"><div className="arabic">لَبَّيْكَ اللَّهُمَّ لَبَّيْك</div><small>LABBAIKALLAAHUMMA LABBAIK</small></div>
  </section>
  <div className="mobile-greeting"><img src="/travelumroh/mdd-logo.jpg" alt="MDD"/><div><small>Assalamu'alaikum</small><b>Admin Pusat</b></div></div>
  <KpiGrid items={kpis}/>
  <div className="mobile-shortcuts"><a href="#/jamaah"><Users/><span>Jamaah</span></a><a href="#/paket"><Package/><span>Paket</span></a><a href="#/booking"><ReceiptText/><span>Booking</span></a><a href="#/keberangkatan"><Plane/><span>Keberangkatan</span></a><a href="#/pembayaran"><WalletCards/><span>Pembayaran</span></a><a href="#/crm"><ContactRound/><span>CRM & Leads</span></a></div>
  <div className="grid dashboard-charts"><RevenuePanel/><TargetPanel/></div>
  <CrmPipeline items={pipeline}/>
  <div className="grid dashboard-lists"><article className="panel"><div className="title"><h3>Transaksi Terbaru</h3><a href="#/pembayaran">Lihat Semua <ArrowUpRight size={14}/></a></div><table><tbody>{transactions.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></article>
  <article className="panel"><div className="title"><h3>Keberangkatan Terdekat</h3><a href="#/keberangkatan">Lihat Semua <ArrowUpRight size={14}/></a></div>{departures.map(r=><div className="trip" key={r[0]}><CalendarDays/><span><b>{r[1]}</b><small>{r[0]}</small></span><em>{r[2]}</em></div>)}</article></div>
 </section>
}