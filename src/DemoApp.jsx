import React,{useState} from 'react';
import {Routes,Route,NavLink,useNavigate} from 'react-router-dom';
import {Home,Users,Package,ReceiptText,Menu as MenuIcon} from 'lucide-react';
import {UIProvider} from './context/UIContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import ModulePage from './components/ModulePage';
const pages=[['/dashboard-owner','Dashboard Owner'],['/manajer-marketing','Manajer Marketing'],['/manajer-operasional','Manajer Operasional'],['/manajer-finance','Manajer Finance'],['/marketing-offline','Marketing Offline'],['/digital-marketing','Digital Marketing & Ads'],['/crm','CRM & Leads'],['/creative-performance','Creative Performance'],['/visa-dokumen','Visa & Dokumen'],['/inventory','Inventory'],['/paket-haji','Paket Haji'],['/paket','Paket Umrah'],['/booking','Booking & Pembayaran'],['/jamaah','Daftar Jamaah'],['/keberangkatan','Jadwal Keberangkatan'],['/transportasi','Transportasi & Maskapai'],['/akomodasi','Akomodasi'],['/konsumsi','Konsumsi'],['/dokumen','Dokumen Perjalanan'],['/vendor','Daftar Vendor'],['/broadcast','Notifikasi & Broadcast'],['/testimoni','Testimoni Jamaah'],['/galeri','Galeri Video & Foto'],['/alumni','Alumni & Referral'],['/profile','Profile'],['/pengaturan','Setting']];
export default function DemoApp(){
 const [role,setRole]=useState('pusat'),[open,setOpen]=useState(false);
 const navigate=useNavigate();
 const switchRole=r=>{setRole(r);navigate('/',{replace:true});setOpen(false)};
 return <UIProvider><div className="demo-shell">
 <div className="demo-banner"><span>MODE DEMO — HANYA LIHAT · Data ilustrasi bukan data bisnis nyata</span><a href="https://wa.me/6285196965326?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20aplikasi%20MDD%20Travel" target="_blank" rel="noopener noreferrer">Hubungi Marketing</a></div>
 <button type="button" className="demo-menu-trigger" onClick={()=>setOpen(true)} aria-label="Buka semua menu demo"><MenuIcon size={20}/> <span>SEMUA MENU</span></button><div className="app"><Sidebar role={role} isOwner={true} onRoleChange={switchRole} open={open} onNavigate={()=>setOpen(false)} onLogout={()=>navigate('/')}/>
 {open&&<button className="scrim" onClick={()=>setOpen(false)} aria-label="Tutup menu"/>}
 <main><Header onMenu={()=>setOpen(v=>!v)}/><Routes><Route path="/" element={<DashboardPage/>}/>{pages.map(([path,title])=><Route key={path} path={path} element={<ModulePage title={title} description={'Pratinjau modul '+title+' (hanya lihat).'} demo={true}/>}/>)}</Routes>
 <nav className="mobile-bottom"><NavLink to="/"><Home/><span>Beranda</span></NavLink><NavLink to="/jamaah"><Users/><span>Jamaah</span></NavLink><NavLink to="/paket"><Package/><span>Paket</span></NavLink><NavLink to="/booking"><ReceiptText/><span>Booking</span></NavLink><button onClick={()=>setOpen(true)}><MenuIcon/><span>Menu</span></button></nav></main></div></div></UIProvider>
}
