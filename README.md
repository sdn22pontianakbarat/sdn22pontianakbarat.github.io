# Website SDN 22 Pontianak Barat

Website resmi **SD Negeri 22 Pontianak Barat**, Kecamatan Pontianak Barat, Kota Pontianak.
Tampilan modern bertema putih–merah dengan struktur konten yang tertata: berita,
profil sekolah, direktori guru, akademik, galeri, absensi, informasi, dan kontak.

Seluruh isi website diatur dari **satu file data**: `assets/js/data.js`.
Tidak perlu build tool, framework, atau database. Cukup unggah ke GitHub Pages.

---

## 1. Halaman

| File | Isi |
|---|---|
| `index.html` | Beranda: hero, statistik, sorotan berita, berita terbaru, layanan cepat, sarana, warga sekolah, sambutan, program, ekstrakurikuler, prestasi, mitra, galeri foto/video, unduhan, komite, statistik kunjungan, mading |
| `berita.html` | Daftar berita dengan filter kategori & pencarian. Detail artikel: `berita.html?slug=...` |
| `profil.html` | Identitas sekolah, visi & misi, tujuan, struktur organisasi, data siswa, sarana, komite |
| `guru-pegawai.html` | Direktori 23 pendidik & tenaga kependidikan dengan pencarian dan filter |
| `akademik.html` | Program unggulan, agenda + kalender pendidikan, prestasi, ekstrakurikuler |
| `galeri.html` | Tab galeri foto & video, dokumentasi Telegram, kanal resmi |
| `absensi.html` | Rekap kehadiran pegawai per bulan (tahun berjalan & sebelumnya) |
| `informasi.html` | Pengumuman, unduhan/aplikasi, FAQ, mading online, buku tamu, pengaduan, tautan penting |
| `kontak.html` | Alamat, telepon/WhatsApp, email, jam layanan, formulir kontak, peta lokasi, media sosial |
| `live-tv.html` | Halaman Live TV mandiri (CSS internal, tidak bergantung pada aset lain) |

---

## 2. Struktur folder

```
sdn22-website-v2/
├─ index.html
├─ berita.html
├─ profil.html
├─ guru-pegawai.html
├─ akademik.html
├─ galeri.html
├─ absensi.html
├─ informasi.html
├─ kontak.html
├─ live-tv.html
├─ .nojekyll                  Wajib untuk GitHub Pages
├─ README.md
└─ assets/
   ├─ css/style.css           Seluruh tampilan, responsif, dan gaya cetak
   ├─ js/data.js              SEMUA DATA & KONFIGURASI (edit di sini)
   ├─ js/app.js               Header/footer, renderer, dan interaksi
   ├─ data/telegram.js        Data dokumentasi Telegram
   └─ img/*.svg               Ilustrasi & gambar bawaan
```

---

## 3. Menjalankan di komputer

Buka `index.html` langsung, atau jalankan server lokal agar semua tautan dan embed
berperilaku normal:

```bat
cd C:\Users\BOGEM\sdn22-website-v2
python -m http.server 8787
```

Lalu buka <http://localhost:8787/>.

---

## 4. Mengubah isi website

Semua konten ada di `assets/js/data.js`.

| Variabel | Isi |
|---|---|
| `SITE_CONFIG.sekolah` | Nama, motto, alamat, telepon, WhatsApp, email, NPSN, NSS, akreditasi, jam layanan, kepala sekolah, editor, tahun pelajaran, logo, foto kepala sekolah, hero, visi, misi, tujuan, sambutan, sejarah |
| `SITE_CONFIG.statistik` | Jumlah siswa (L/P), rombel, personil, tingkat, PNS, PPPK, honor |
| `SITE_CONFIG.rekap` | Rekap absensi per bulan, dikelompokkan per tahun |
| `SITE_CONFIG.embeds` | Peta lokasi dan kalender pendidikan/sekolah |
| `SITE_CONFIG.links` | SPMB, Dapodik, E-Rapor, PMM, BOS, KIP, media sosial, dan tautan resmi lain |
| `SITE_CONFIG.media` | Daftar foto & video galeri |
| `SITE_CONFIG.staff` | 23 data pendidik & tenaga kependidikan |
| `BERITA` | Artikel berita & pengumuman |
| `PRESTASI`, `EKSKUL`, `PROGRAM`, `SARANA`, `MITRA`, `KOMITE`, `AGENDA` | Konten halaman akademik & profil |
| `FAQ`, `UNDUHAN`, `TAUTAN`, `MADING`, `TICKER` | Konten halaman informasi & ticker beranda |

### Menambah berita

```js
{
  slug: "judul-artikel-unik",
  judul: "Judul Artikel",
  kategori: "Berita Sekolah",       // atau "Pengumuman", "Akademik", dll.
  tanggal: "2026-11-24",
  penulis: "Nama Penulis",
  gambar: "https://...",
  ringkas: "Ringkasan satu paragraf.",
  isi: ["Paragraf pertama.", "Paragraf kedua."],
  tags: ["Kegiatan", "Sekolah"],
}
```

Berita berkategori **Pengumuman** otomatis muncul di beranda (ticker) dan halaman
`informasi.html`.

### Menambah foto/video galeri

```js
{ jenis: "video", src: "ID_YOUTUBE", judul: "Nama Kegiatan", ket: "Keterangan" },
{ jenis: "foto",  src: "https://drive.google.com/file/d/ID_FILE/view", judul: "Foto Kegiatan", ket: "Keterangan" },
```

- `video` menerima ID YouTube, tautan `youtu.be`/`watch?v=`, atau tautan Drive.
- `foto` menerima tautan Drive, URL gambar, atau file lokal `assets/img/...`.
- Foto Drive otomatis dikonversi ke `lh3.googleusercontent.com`.

### Memperbarui rekap absensi

Edit `SITE_CONFIG.rekap`. Kunci tahun mengikuti tahun berjalan:

```js
rekap: {
  sumber: "Rekap fingerprint SDN 22 Pontianak Barat",
  diperbarui: "November 2026",
  2026: [
    { bulan: "Januari", hari: 20, pegawai: 24, hadir: 480 },
    // ...
  ],
},
```

`hari` = jumlah hari efektif, `pegawai` = jumlah pegawai tercatat,
`hadir` = total kehadiran dalam bulan tersebut.

### Mengganti foto personil

Foto diatur pada `STAFF_FOTO` di `assets/js/data.js`. Kunci harus **sama persis**
dengan `nama` pada `SITE_CONFIG.staff`, misalnya:

```js
"AMALIA LAMURI, S.Pd": "https://lh3.googleusercontent.com/d/ID_FILE=w600",
```

Bila foto gagal dimuat, kartu otomatis menampilkan inisial nama.

---

## 5. Catatan penting

- **Tidak ada login/database.** GitHub Pages hanya menyajikan file statis. Formulir
  buku tamu, pengaduan, dan kontak mengirim pesan melalui WhatsApp (pesan dibuka di
  aplikasi WhatsApp pengguna), bukan disimpan di server.
- **Statistik kunjungan** dihitung per perangkat menggunakan `localStorage`. Angka ini
  bukan analitik lintas pengunjung. Untuk data nyata, pasang Google Analytics atau
  GoatCounter dengan menambahkan skrip pelacak di setiap halaman.
- **Data pribadi siswa tidak ditampilkan.** Website hanya memuat data agregat.
- **Embed dimuat saat dibutuhkan** (tombol “Muat” atau saat mendekati viewport) agar
  halaman tetap ringan.
- **Gambar cadangan**: jika gambar eksternal gagal dimuat, situs memakai
  `assets/img/gedung.svg`; foto personil memakai inisial.

---

## 6. Publikasi ke GitHub Pages

Repositori: `eenking/eenking.github.io` — branch `main`, folder root.

1. Unduh/ekstrak paket ZIP website ini.
2. Buka repositori GitHub → **Add file → Upload files**.
3. Unggah **seluruh isi folder** (bukan folder pembungkusnya), termasuk
   `index.html`, semua halaman `.html`, folder `assets/`, dan file `.nojekyll`.
4. Commit ke branch `main`.
5. Tunggu 1–2 menit, lalu buka <https://eenking.github.io/>.
6. Jika halaman lama masih tampil, lakukan *hard refresh* (Ctrl + F5) atau cek
   **Settings → Pages** memastikan source = `Deploy from a branch`, branch `main`, folder `/ (root)`.

> Pastikan file `.nojekyll` ikut terunggah. File ini mencegah GitHub Pages memproses
> situs dengan Jekyll dan menjaga folder `assets/` tetap tersaji apa adanya.

---

## 7. Lisensi & kredit

- Konten sekolah: SD Negeri 22 Pontianak Barat.
- Foto stok: [Unsplash](https://unsplash.com) (lisensi Unsplash).
- Ilustrasi bawaan: SVG internal proyek.
- Dibangun tanpa framework, hanya HTML, CSS, dan JavaScript vanilla.
