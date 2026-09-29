# Travel Umrah MDD - Recovered Prototype

Rekonstruksi source project Travel Umrah MDD dari prototype production yang masih aktif.

## Status

**Recovery baseline v0.1**

Project ini adalah rekonstruksi bersih. Source repository asli sudah tidak tersedia, sehingga bagian yang dapat diverifikasi dari prototype online direkonstruksi menjadi source React/Vite yang dapat dikembangkan kembali.

## Menjalankan project

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Struktur

- `src/main.jsx` - baseline dashboard
- `src/styles/app.css` - responsive dashboard styling
- `docs/RECOVERY_REPORT.md` - status dan batasan recovery

## Recovery berikutnya

1. Inventaris seluruh menu dan halaman prototype.
2. Pecah dashboard menjadi reusable components.
3. Rekonstruksi routing dan halaman detail.
4. Pisahkan mock data dari UI.
5. Recovery/replace assets yang masih tersedia.
6. Verifikasi desktop, tablet, dan mobile.
7. Tambahkan deployment setelah baseline stabil.
