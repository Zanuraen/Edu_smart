# EduSmart — Ruang Belajar Digital (React + Vite)

Website pembelajaran digital interaktif untuk mahasiswa Ilmu Komputer.
Proyek UTS mata kuliah Sistem Multimedia, S1 Ilmu Komputer, Universitas Bumigora.

## Fitur
- 6 mata kuliah (MK-01 sampai MK-06), masing-masing 3 bab materi bergaya buku dengan ilustrasi.
- Halaman Multimedia: gambar materi, video pembelajaran (YouTube embed), dan audio narasi (Text-to-Speech Bahasa Indonesia lewat Web Speech API browser).
- Kuis: 6 kategori, 8 soal per kategori (total 48 soal), batas waktu 20 detik per soal. Soal yang tidak dijawab dicatat sebagai "tidak dijawab".
- Evaluasi: nilai skala 100, jumlah benar, salah, tidak dijawab, dan waktu pengerjaan.
- Hasil & Progress: grafik komposisi jawaban dan progres belajar per materi.
- Bookmark materi; progres, jawaban, dan waktu disimpan di localStorage browser.
- Tampilan responsif (desktop, tablet, ponsel).

## Struktur navigasi
Dashboard, Materi, Multimedia, Kuis, Evaluasi, Hasil & Progress.

## Struktur berkas
```
edusmart/
├── index.html        Titik masuk halaman
├── package.json      Daftar dependensi dan skrip (react, react-dom, vite)
├── package-lock.json Versi dependensi terkunci
├── README.md         Dokumen ini
└── src/
    ├── main.jsx      Seluruh logika aplikasi dan data (courses, rawQuestions, quizBank)
    └── styles.css    Gaya visual dan tata letak responsif
```
Folder `node_modules` tidak disertakan; dibuat otomatis oleh `npm install`.

## Menjalankan
Pastikan Node.js (LTS) terpasang. Di terminal, dari folder proyek:

```bash
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite (umumnya http://localhost:5173).

Build produksi (hasil di folder `dist`):

```bash
npm run build
npm run preview
```

## Mengubah isi
Materi dan kuis berada di `src/main.jsx`:
- `courses` — data mata kuliah, bab materi, gambar, dan link video.
- `rawQuestions` — 48 soal (pertanyaan, 4 pilihan, indeks jawaban benar, penjelasan).

## Catatan
- Gambar (Unsplash), video (YouTube), dan font (Google Fonts) dimuat dari internet, sehingga produk memerlukan koneksi internet.
- Suara narasi memakai Web Speech API; ketersediaan suara Bahasa Indonesia bergantung pada browser dan sistem operasi.
