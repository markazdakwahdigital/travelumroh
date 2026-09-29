# Data Model Recovery - Pass 7

Dokumen ini memisahkan **entitas yang sudah dapat diidentifikasi** dari detail field yang belum dapat diverifikasi.

## Entitas teridentifikasi
- Lead / Prospek
- Jamaah
- Paket Umrah
- Booking
- Invoice
- Pembayaran
- Keberangkatan
- Agen / Mitra
- Cabang
- Transaksi Keuangan
- Pengguna

## Relasi konseptual recovery
Lead -> Jamaah -> Booking -> Paket
Booking -> Invoice -> Pembayaran
Booking -> Keberangkatan
Agen/Mitra -> Lead/Booking
Cabang -> Jamaah/Booking
Pembayaran -> Keuangan

## Aturan recovery
1. Tidak menetapkan primary key lama karena source/database asli belum tersedia.
2. Tidak mengarang nomor invoice, nomor jamaah, saldo, komisi, atau identitas individual.
3. Data dashboard yang telah terverifikasi diperlakukan sebagai snapshot UI, bukan ledger akuntansi.
4. Skema database production akan dirancang setelah recovery source selesai dan kebutuhan final tervalidasi.
5. Nilai uang nantinya harus menggunakan tipe numerik presisi, bukan floating point.
6. Transaksi finansial production harus memiliki audit trail dan idempotency.

## Kandidat struktur production
Entitas di atas akan menjadi dasar perancangan database baru, tetapi kolom, constraint, indeks, permission, dan lifecycle belum dianggap recovered source.
