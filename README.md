# Travel Umrah MDD - Recovered Prototype

Rekonstruksi source project Travel Umrah MDD dari prototype lama yang source repository aslinya sudah tidak tersedia.

## Status

**Recovery Pass 9 / 10**

Project ini adalah rekonstruksi bersih. Bagian yang dapat diverifikasi direkonstruksi menjadi source React/Vite yang dapat dikembangkan kembali. Data operasional yang tidak dapat diverifikasi tidak dibuat secara fiktif.

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

GitHub Actions menjalankan build verification pada push dan pull request ke `main`.

## Struktur utama

- `src/App.jsx` - routing aplikasi
- `src/components/` - komponen reusable
- `src/pages/` - halaman modul recovery
- `src/data/` - snapshot/mock recovery yang dipisahkan dari UI
- `src/context/UIContext.jsx` - state UI bersama
- `src/styles/app.css` - responsive styling
- `docs/RECOVERY_REPORT.md` - laporan recovery awal
- `docs/FEATURE_MAP.md` - peta fitur
- `docs/DATA_MODEL.md` - model data konseptual
- `docs/PASS9_AUDIT.md` - audit teknis dan release gate

## Batasan penting

- Belum terhubung ke backend/database production.
- Nilai dashboard recovery bukan data realtime.
- Detail yang tidak dapat diverifikasi dari prototype lama tidak diasumsikan.
- Deployment final dan release v1.0 dilakukan pada Pass 10 setelah build gate lulus.
