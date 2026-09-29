import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/app.css';
import {
  Search, Menu, Plane, Users, TrendingUp, Target, Wallet,
  CircleDollarSign, Boxes, UserRound, ChevronRight
} from 'lucide-react';

const kpis = [
  ['Pendapatan Bulan Ini', 'Rp 2,48 M', '+18,4%', TrendingUp],
  ['Total Jamaah Aktif', '1.284', '+126 bulan ini', Users],
  ['Keberangkatan', '18', '5 dalam 14 hari', Plane],
  ['Rasio Konversi', '32,8%', '+4,2% vs Juni', Target],
];

const pipeline = [
  ['Prospek', '428', 'Lead aktif'],
  ['Follow Up', '286', '67% konversi'],
  ['Booking', '152', '53% konversi'],
  ['DP', '108', '71% konversi'],
  ['Pelunasan', '76', '70% konversi'],
  ['Berangkat', '48', '63% konversi'],
];

function App() {
  return (
    <div className="app">
      <aside>
        <div className="brand">
          <div className="mark">MDD</div>
          <div><b>Travel Umrah MDD</b><small>Smart Management</small></div>
        </div>
        <nav>
          <label>UTAMA</label><a className="active">Dashboard</a>
          <label>OPERASIONAL UMRAH</label>
          <a>CRM & Leads</a><a>Jamaah</a><a>Paket Umrah</a><a>Booking & Invoice</a>
          <a>Pembayaran</a><a>Keberangkatan</a>
          <label>JARINGAN & JAMAAH</label><a>Agen & Mitra</a><a>Cabang</a>
          <label>PENDUKUNG</label><a>Keuangan</a><a>Laporan</a><a>Pengaturan</a>
        </nav>
        <div className="sync">● Semua sistem normal<br/><small>Terakhir sinkron 10:24 WIB</small></div>
      </aside>

      <main>
        <header>
          <button aria-label="Menu"><Menu size={20}/></button>
          <div className="search"><Search size={18}/><span>Cari jamaah, invoice, paket...</span><kbd>⌘ K</kbd></div>
          <div className="user">AA <span><b>Abu Adzka</b><small>Owner</small></span></div>
        </header>

        <section className="content">
          <div className="date">KAMIS, 23 JULI 2026 • 7 MUHARRAM 1448 H</div>
          <div className="hello">
            <div><h1>Assalamu'alaikum, Abu Adzka</h1><p>Berikut ringkasan performa Travel Umrah MDD hari ini.</p></div>
            <div><button>Buka Laporan</button> <button className="primary">＋ Transaksi Baru</button></div>
          </div>

          <div className="kpis">
            {kpis.map(([title,value,status,Icon]) => (
              <article key={title}><Icon/><small>{title}</small><h2>{value}</h2><em>↗ {status}</em></article>
            ))}
          </div>

          <div className="grid">
            <article className="panel revenue">
              <h3>Arus Pendapatan</h3><p>Realisasi pendapatan bulan ini</p>
              <h2>Rp 14,82 M <em>↗ 21,6%</em></h2>
              <div className="bars">
                {[35,50,45,63,72,86,78].map((height,index) => (
                  <i key={index} style={{height: height+'%'}}><span>{['Jan','Feb','Mar','Apr','Mei','Jun','Jul'][index]}</span></i>
                ))}
              </div>
            </article>
            <article className="panel target">
              <h3>Target Penjualan</h3><p>Juli 2026</p><div className="ring">82%</div>
              <b>Realisasi Rp 2,48 M</b><span>Target Rp 3,00 M</span>
              <small>Kurang Rp 520 jt • 8 hari tersisa</small>
            </article>
          </div>

          <article className="panel">
            <div className="title">
              <div><h3>Pipeline CRM Jamaah</h3><p>Perjalanan calon jamaah secara realtime</p></div>
              <button>Lihat CRM lengkap →</button>
            </div>
            <div className="pipeline">
              {pipeline.map((item,index) => (
                <React.Fragment key={item[0]}>
                  <div><small>{item[0]}</small><b>{item[1]}</b><span>{item[2]}</span></div>
                  {index < pipeline.length - 1 && <ChevronRight/>}
                </React.Fragment>
              ))}
            </div>
          </article>

          <div className="grid">
            <article className="panel">
              <h3>Transaksi Terbaru</h3>
              <table><tbody>
                {[
                  ['Ahmad Fauzi','Umrah Maulid Premium','Rp 37.500.000','Lunas'],
                  ['Nur Aisyah','Umrah Hemat 9 Hari','Rp 12.000.000','DP'],
                  ['Keluarga H. Ramli','Umrah Plus Turki','Rp 126.000.000','Verifikasi'],
                  ['Siti Rahmah','Umrah Reguler','Rp 29.750.000','Lunas'],
                ].map((row,i) => <tr key={i}>{row.map((cell,j) => <td key={j}>{cell}</td>)}</tr>)}
              </tbody></table>
            </article>
            <article className="panel">
              <h3>Keberangkatan Terdekat</h3>
              {[['26 JUL','Umrah Reguler','42/45'],['02 AGU','Umrah Maulid Premium','38/40'],['08 AGU','Umrah Hemat 9 Hari','31/45']].map(row => (
                <div className="trip" key={row[0]}><b>{row[0]}</b><span>{row[1]}</span><em>{row[2]}</em></div>
              ))}
            </article>
          </div>

          <div className="mini">
            <article><Wallet/><span>Kas & Bank<b>Rp 6,24 M</b><small>12 rekening aktif</small></span></article>
            <article><Boxes/><span>Persediaan<b>94,2%</b><small>Stok perlengkapan aman</small></span></article>
            <article><CircleDollarSign/><span>Piutang<b>Rp 842 jt</b><small>18 jatuh tempo minggu ini</small></span></article>
            <article><UserRound/><span>Karyawan<b>126</b><small>96% hadir hari ini</small></span></article>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
