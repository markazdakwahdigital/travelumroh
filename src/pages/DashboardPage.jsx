import React from 'react';
import { Wallet,CircleDollarSign,Boxes,UserRound } from 'lucide-react';
import KpiGrid from '../components/KpiGrid'; import CrmPipeline from '../components/CrmPipeline';
import RevenuePanel from '../components/RevenuePanel'; import TargetPanel from '../components/TargetPanel';
import {kpis,pipeline,transactions,departures} from '../data/dashboard';
export default function DashboardPage(){return <section className="content">
 <div className="date">KAMIS, 23 JULI 2026 • 7 MUHARRAM 1448 H</div>
 <div className="hello"><div><h1>Assalamu'alaikum, Abu Adzka</h1><p>Berikut ringkasan performa Travel Umrah MDD hari ini.</p></div><div><button>Buka Laporan</button> <button className="primary">＋ Transaksi Baru</button></div></div>
 <KpiGrid items={kpis}/><div className="grid"><RevenuePanel/><TargetPanel/></div><CrmPipeline items={pipeline}/>
 <div className="grid"><article className="panel"><h3>Transaksi Terbaru</h3><table><tbody>{transactions.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></article>
 <article className="panel"><h3>Keberangkatan Terdekat</h3>{departures.map(r=><div className="trip" key={r[0]}><b>{r[0]}</b><span>{r[1]}</span><em>{r[2]}</em></div>)}</article></div>
 <div className="mini"><article><Wallet/><span>Kas & Bank<b>Rp 6,24 M</b><small>12 rekening aktif</small></span></article><article><Boxes/><span>Persediaan<b>94,2%</b><small>Stok perlengkapan aman</small></span></article><article><CircleDollarSign/><span>Piutang<b>Rp 842 jt</b><small>18 jatuh tempo minggu ini</small></span></article><article><UserRound/><span>Karyawan<b>126</b><small>96% hadir hari ini</small></span></article></div>
 </section>}