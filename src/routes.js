export const routes = [
 {path:'/',label:'Dashboard'},
 {path:'/crm',label:'CRM & Leads'},
 {path:'/jamaah',label:'Jamaah'},
 {path:'/paket',label:'Paket Umrah'},
 {path:'/booking',label:'Booking & Invoice'},
 {path:'/pembayaran',label:'Pembayaran'},
 {path:'/keberangkatan',label:'Keberangkatan'},
 {path:'/agen',label:'Agen & Mitra'},
 {path:'/cabang',label:'Cabang'},
 {path:'/keuangan',label:'Keuangan'},
 {path:'/laporan',label:'Laporan'},
 {path:'/pengaturan',label:'Pengaturan'}
];
export const routeByLabel = Object.fromEntries(routes.map(x=>[x.label,x.path]));