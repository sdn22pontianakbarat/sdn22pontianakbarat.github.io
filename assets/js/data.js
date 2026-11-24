/* =========================================================
   SDN 22 PONTIANAK BARAT — DATA & KONFIGURASI
   ---------------------------------------------------------
   Semua isi website diatur di file ini.
   Ubah teks/angka di sini, seluruh halaman ikut berubah.
   ========================================================= */

const U = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const SITE_CONFIG = {
  sekolah: {
    nama: "SD Negeri 22 Pontianak Barat",
    namaPendek: "SDN 22 Pontianak Barat",
    motto: "Cerdas, Berkarakter, Berbudaya",
    alamat:
      "Jl. H. Rais A. Rahman, Gg. Selamat III, Sungai Jawi Dalam, Kec. Pontianak Barat, Kota Pontianak, Kalimantan Barat 78244",
    kecamatan: "Pontianak Barat",
    kota: "Pontianak",
    provinsi: "Kalimantan Barat",
    kodePos: "78244",
    telepon: "0812-5414-9295",
    whatsapp: "6281254149295",
    email: "sdn22pontianakbarat@gmail.com",
    npsn: "30105373",
    nss: "101136004022",
    akreditasi: "A",
    jamLayanan: "Senin – Jumat, 07.00 – 15.30 WIB",
    kepalaSekolah: "Amalia Lamuri, S.Pd.",
    editor: "Rendra Setiadi, S.Kom — TU & Operator Sekolah",
    tahunPelajaran: "2026/2027",
    logo: "https://lh3.googleusercontent.com/d/1qIecAxdkPr3Aswl0EKl4QcpUTXXmB_S0=w512",
    fotoKepsek: "https://lh3.googleusercontent.com/d/1YVoHog2kG9OpDnzcEwGal63nplIoQcbP=w600",
    hero: U("photo-1577896851231-70ef18881754", 1800),
    visi:
      "Terwujudnya peserta didik yang beriman, cerdas, berkarakter, mandiri, dan berbudaya, serta peduli terhadap lingkungan.",
    misi: [
      "Menanamkan keimanan dan ketakwaan melalui pembiasaan keagamaan.",
      "Meningkatkan mutu pembelajaran yang aktif, kreatif, dan menyenangkan.",
      "Mengembangkan budaya literasi dan numerasi di seluruh kelas.",
      "Membina karakter disiplin, jujur, santun, dan bertanggung jawab.",
      "Mengembangkan bakat dan minat melalui kegiatan ekstrakurikuler.",
      "Mewujudkan lingkungan sekolah yang bersih, sehat, dan ramah anak.",
      "Membangun kemitraan yang harmonis dengan orang tua dan masyarakat.",
    ],
    tujuan: [
      "Peserta didik lulus dengan kompetensi literasi dan numerasi yang baik.",
      "Terbentuknya profil pelajar Pancasila pada setiap peserta didik.",
      "Meningkatnya kompetensi guru melalui komunitas belajar sekolah.",
      "Terlaksananya layanan administrasi dan presensi yang tertib dan digital.",
    ],
    sambutan: [
      "Assalamu’alaikum warahmatullahi wabarakatuh. Selamat datang di website resmi SD Negeri 22 Pontianak Barat.",
      "Website ini kami hadirkan sebagai jendela informasi sekolah sekaligus sarana komunikasi antara sekolah, orang tua, dan masyarakat. Melalui halaman ini, Anda dapat mengikuti berita kegiatan, mengenal para pendidik, melihat dokumentasi, serta mengakses layanan digital sekolah.",
      "Kami berkomitmen menghadirkan pembelajaran yang menyenangkan, aman, dan bermakna, dengan dukungan guru-guru yang terus belajar. Semoga kehadiran layanan digital ini memudahkan seluruh warga sekolah.",
    ],
    sejarah: [
      "SD Negeri 22 Pontianak Barat berdiri dan berkembang sebagai sekolah dasar negeri di Kecamatan Pontianak Barat, Kota Pontianak. Sekolah menyelenggarakan pendidikan dasar enam tahun dengan menekankan pembentukan karakter, literasi, numerasi, dan pembiasaan keagamaan.",
      "Seiring berjalannya waktu, sekolah terus menata layanan akademik dan administrasi, termasuk digitalisasi presensi, publikasi kegiatan, serta keterbukaan informasi kepada orang tua dan masyarakat.",
    ],
  },

  statistik: {
    siswa: 392,
    laki: 206,
    perempuan: 186,
    rombel: 14,
    personil: 23,
    tingkat: 6,
    pns: 8,
    pppk: 11,
    honor: 4,
  },

  rekap: {
    sumber: "Rekap fingerprint SDN 22 Pontianak Barat",
    diperbarui: "November 2026",
    2026: [
      { bulan: "Januari", hari: 20, pegawai: 24, hadir: 480 },
      { bulan: "Februari", hari: 18, pegawai: 23, hadir: 414 },
      { bulan: "Maret", hari: 17, pegawai: 22, hadir: 374 },
      { bulan: "April", hari: 21, pegawai: 22, hadir: 462 },
      { bulan: "Mei", hari: 16, pegawai: 23, hadir: 365 },
      { bulan: "Juni", hari: 20, pegawai: 23, hadir: 426 },
      { bulan: "Juli", hari: 23, pegawai: 23, hadir: 500 },
      { bulan: "Agustus", hari: 19, pegawai: 23, hadir: 436 },
      { bulan: "September", hari: 22, pegawai: 23, hadir: 506 },
      { bulan: "Oktober", hari: 22, pegawai: 22, hadir: 484 },
    ],
    2025: [
      { bulan: "September", hari: 21, pegawai: 22, hadir: 462 },
      { bulan: "Oktober", hari: 23, pegawai: 23, hadir: 520 },
      { bulan: "November", hari: 20, pegawai: 23, hadir: 460 },
      { bulan: "Desember", hari: 21, pegawai: 23, hadir: 380 },
    ],
  },

  embeds: {
    maps: "https://www.google.com/maps?q=SDN%2022%20Pontianak%20Barat&output=embed",
    kalenderPendidikan:
      "https://script.google.com/macros/s/AKfycbw6eN0bod7b-YxijMDdnsUDeDPeT_GZJxMUirdANQUEfKbd_uP_eeFpDL7o_UZJnK8o/exec",
    kalenderSekolah:
      "https://script.google.com/macros/s/AKfycbyWmZ3a3KKgdbVXB1X582k3jYhOC5c0mElSMKKn_9oRzSossNw8DM-8_mQLLtd82vQs/exec",
  },

  telegram: { channel: "sdn22pontianakbarat", judul: "SDN 22 Pontianak Barat" },

  links: {
    spmb: "https://spmb.pontianak.go.id/",
    spmbToken: "https://siswa.spmb.id/pontianak/login",
    erapor: "https://ditsd.kemendikdasmen.go.id/s/erapor2025",
    pmm: "https://guru.kemendikdasmen.go.id/",
    dapodik: "https://dapo.kemendikdasmen.go.id/",
    canvaStruktur: "https://canva.link/0srchjtd0mdni95",
    kalenderPendidikan:
      "https://script.google.com/macros/s/AKfycbw6eN0bod7b-YxijMDdnsUDeDPeT_GZJxMUirdANQUEfKbd_uP_eeFpDL7o_UZJnK8o/exec",
    youtube: "https://www.youtube.com/@sdn22pontianakbarat",
    instagram: "https://www.instagram.com/sdn22ponbar",
    facebook: "https://www.facebook.com/sdn22ponbar/",
    facebookPage: "https://www.facebook.com/sdn22pontianakbarat/",
    tiktok: "https://www.tiktok.com/@esdeenduaduaponba",
    telegram: "https://t.me/sdn22pontianakbarat",
    kemdikdasmen: "https://www.kemendikdasmen.go.id/",
    pontianak: "https://pontianak.go.id/",
    raporPendidikan: "https://raporpendidikan.kemendikdasmen.go.id/",
    bos: "https://bos.kemendikdasmen.go.id/",
    kip: "https://kip.kemendikdasmen.go.id/",
  },

  media: [
    { jenis: "video", src: "evGm9PC0E18", judul: "Menyambut Isra Mi'raj", ket: "Kegiatan keagamaan" },
    { jenis: "video", src: "u_TewnKguAw", judul: "Persari Pramuka", ket: "Ekstrakurikuler" },
    { jenis: "video", src: "R0fTYYP_yR0", judul: "Pembukaan Kegiatan P5", ket: "Projek Penguatan Profil Pelajar" },
    { jenis: "video", src: "6FO_z-O9LhM", judul: "Prestasi Karate Siswa", ket: "Prestasi non-akademik" },
    { jenis: "video", src: "Y0VJrWeMxaM", judul: "Latihan Pencak Silat Wekasan22", ket: "Ekstrakurikuler" },
    { jenis: "foto", src: "assets/img/gedung.svg", judul: "Gedung & Halaman Sekolah", ket: "Sarana" },
    { jenis: "foto", src: "assets/img/upacara.svg", judul: "Upacara Bendera", ket: "Kegiatan rutin" },
    { jenis: "foto", src: "assets/img/belajar.svg", judul: "Pembelajaran di Kelas", ket: "Akademik" },
    { jenis: "foto", src: "assets/img/prestasi.svg", judul: "Prestasi Siswa", ket: "Capaian" },
    { jenis: "foto", src: "assets/img/ekskul.svg", judul: "Ekstrakurikuler", ket: "Minat & bakat" },
    { jenis: "foto", src: "assets/img/kantin.svg", judul: "Kantin Sehat", ket: "Layanan sekolah" },
  ],

  staff: [
    { nama: "AMALIA LAMURI, S.Pd", jk: "P", nip: "197910242009022001", pend: "S.1 PGSD", status: "PNS", tugas: "Kepala Sekolah", kategori: "kepsek" },
    { nama: "SRI SUYATI, S.Pd", jk: "P", nip: "197903022009022002", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "JULIANI, S.Pd", jk: "P", nip: "198607122010012001", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NOVITA AYU WARDANI, S.Pd", jk: "P", nip: "199406252019032007", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas · GPK", kategori: "guru" },
    { nama: "IRMA CHABRINA YANH PURBOSARI, S.Pd", jk: "P", nip: "199001192020122011", pend: "S.1 PJOK", status: "PNS", tugas: "Guru Mapel · Wali Kelas", kategori: "guru" },
    { nama: "ARTIYA NENGSIH, S.Pd", jk: "P", nip: "199010252020122010", pend: "S.1 PGSD", status: "PNS", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NAYANK RAGILIA, M.Pd", jk: "P", nip: "199301302020122009", pend: "S.2 PGSD", status: "PNS", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "SYUKRON MAKMUN, S.Pd", jk: "L", nip: "199311202020121006", pend: "S.1 PGSD", status: "PNS", tugas: "Wali Kelas · Bendahara BOSP", kategori: "guru" },
    { nama: "EARLYA REZKIANA, S.Pd", jk: "P", nip: "197310102023212007", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "TRI RAHAYU FITRIASARI, S.Pd", jk: "P", nip: "198905052023212034", pend: "S.1 PJOK", status: "PPPK", tugas: "Guru Mapel PJOK", kategori: "guru" },
    { nama: "NADIA HIDAYATI, S.Pd", jk: "P", nip: "199301122023212027", pend: "S.1 PGSD", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "ELLA KURNIAWATI, S.Pd", jk: "P", nip: "199502222023212031", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "NURUL FAHMI, S.Pd", jk: "P", nip: "199512112023212019", pend: "S.1 Bahasa Indonesia", status: "PPPK", tugas: "Guru Mapel", kategori: "guru" },
    { nama: "ERAWATI RIZKY, S.Pd", jk: "P", nip: "199408212023212020", pend: "S.1 PGSD", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "SAERANI, S.Pd", jk: "L", nip: "199207072024211008", pend: "S.1 PAI", status: "PPPK", tugas: "Guru PAI & BP · Koordinator Keagamaan", kategori: "guru" },
    { nama: "JUNI ELSA, S.Pd", jk: "P", nip: "198006252024212002", pend: "S.1 PGSD", status: "PPPK", tugas: "Guru Kelas", kategori: "guru" },
    { nama: "SAPARINA RAHMA, S.Pd., Gr", jk: "P", nip: "200105052025212010", pend: "S.1 Pendidikan Kimia", status: "PPPK", tugas: "Wali Kelas", kategori: "guru" },
    { nama: "ANDI MARIFA", jk: "P", nip: "198005152025212005", pend: "SMA IPS", status: "PPPK", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "AYU SUFA ARFIARDJA", jk: "P", nip: "199610032025212002", pend: "SMK Akuntansi", status: "PPPK", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "RENDRA SETIADI, S.Kom", jk: "L", nip: "", pend: "S.1 Sistem Informasi", status: "Honor", tugas: "Tata Usaha & Operator Sekolah", kategori: "pegawai" },
    { nama: "DIAN SAPUTRA, A.Ma", jk: "L", nip: "", pend: "D.2 PJOK", status: "Honor", tugas: "Guru PJOK", kategori: "guru" },
    { nama: "HERI", jk: "L", nip: "", pend: "SMA", status: "Honor", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
    { nama: "HERI GUAN", jk: "L", nip: "", pend: "SMA", status: "Honor", tugas: "Tenaga Kependidikan", kategori: "pegawai" },
  ],
};

const STAFF_FOTO = {
  "AMALIA LAMURI, S.Pd": "1YVoHog2kG9OpDnzcEwGal63nplIoQcbP",
  "SRI SUYATI, S.Pd": "1TNYTmhktKtZAkk2wSMj5O86tuy1_dqJw",
  "JULIANI, S.Pd": "1gHy3HxsHVdeTfxSPYuzOhHG2PBFQknuE",
  "NOVITA AYU WARDANI, S.Pd": "1u22eY7TDmnoK-mQ1oj4Fk1u-_1onrWWZ",
  "IRMA CHABRINA YANH PURBOSARI, S.Pd": "1c3x2JjRsu8tiz1eWc7Paoy4vcJez6lMV",
  "ARTIYA NENGSIH, S.Pd": "1w0ebu3HyKLWJE_F8zpCs2K3GM5jWBqCe",
  "NAYANK RAGILIA, M.Pd": "1zxZTBNMbXaMoU09cLiEUws8ejZK5wnqp",
  "SYUKRON MAKMUN, S.Pd": "1jjaYW-oMpiDoxWcMTBcL_61-e6v-qnu0",
  "EARLYA REZKIANA, S.Pd": "17e0Jwzur5RVNhGJ3lE9pVeu6_9Mlh-KJ",
  "TRI RAHAYU FITRIASARI, S.Pd": "14ZL0XpSir1sAw6neRFeQ56qQb5eGJTR1",
  "NADIA HIDAYATI, S.Pd": "1Ni501p-xx2rrmUZ2-34X_5rahYYhk36K",
  "ELLA KURNIAWATI, S.Pd": "1MM-u-eZ_EegMOWy2v9EPWszh8Uji9p79",
  "NURUL FAHMI, S.Pd": "1yUcZ2dcDt9URhGo9GFqdx7jwhetJrSX8",
  "ERAWATI RIZKY, S.Pd": "1jDyjTZM_CQzxrWvruTdjFcY0Myd7VFmE",
  "SAERANI, S.Pd": "1xI9wuRec3hMUjbyL5NufXEJS3DC4lnla",
  "JUNI ELSA, S.Pd": "124j8jg8TuQelL_uYOfxMmWcp_svwGTQL",
  "SAPARINA RAHMA, S.Pd., Gr": "1jRdK7hviaq0fbbtwlNAEyVICI2djsAfQ",
  "ANDI MARIFA": "1ko7qHSJ3jOPdSlTePI7UBzUPYJNIZOA7",
  "AYU SUFA ARFIARDJA": "1uuhufZ688MZvk6bHGcUZ-ovK25nUgrne",
  "RENDRA SETIADI, S.Kom": "19uQJ5UjT-__sUqoeUD4y-1Ym1ujcLpdi",
  "DIAN SAPUTRA, A.Ma": "1hqtAD1drodzHSu9jgh_zSyYoSaXWdjeb",
  "HERI": "1wSl7qvweP1_-eJ67vGMQOPuuB5LZ5WLC",
  "HERI GUAN": "1nmBXaIaNQomsoSk141KHjzfIhBOt3XtQ",
};

/* =========================================================
   BERITA
   ========================================================= */
const BERITA = [
  {
    slug: "gerakan-literasi-pagi",
    judul: "Gerakan Literasi Pagi Menghidupkan Budaya Baca",
    kategori: "Kegiatan Siswa",
    tanggal: "2026-11-20",
    penulis: "Tim Literasi Sekolah",
    gambar: U("photo-1497633762265-9d179a990aa6"),
    ringkas:
      "Pembiasaan membaca 15 menit sebelum pembelajaran diisi dengan diskusi singkat dan pencatatan karya bacaan siswa.",
    isi: [
      "SD Negeri 22 Pontianak Barat menggelar Gerakan Literasi Pagi setiap hari Selasa hingga Kamis. Selama 15 menit sebelum pembelajaran dimulai, seluruh peserta didik membaca buku pilihan mereka, lalu menuliskan satu hal menarik yang ditemukan dalam bacaan.",
      "Kegiatan ini bukan sekadar membaca. Guru kelas memandu diskusi singkat agar siswa berani menyampaikan pendapat, menceritakan tokoh favorit, atau menghubungkan isi bacaan dengan pengalaman sehari-hari. Hasil catatan siswa ditempel pada papan literasi kelas.",
      "Kepala sekolah menyampaikan bahwa program ini bertujuan menumbuhkan kebiasaan membaca yang menyenangkan, bukan menjadi beban tugas. Dukungan buku dari perpustakaan sekolah dan pojok baca kelas menjadi bagian penting dari kegiatan.",
    ],
    tags: ["Literasi", "Kegiatan Siswa", "Pembiasaan"],
  },
  {
    slug: "pembelajaran-berbasis-projek",
    judul: "Pembelajaran Berbasis Projek Menguatkan Kolaborasi Antar Kelas",
    kategori: "Akademik",
    tanggal: "2026-11-18",
    penulis: "Koordinator Kurikulum",
    gambar: U("photo-1509062522246-3755977927d7"),
    ringkas:
      "Siswa kelas tinggi belajar melalui projek lintas mata pelajaran, mulai dari meneliti, berdiskusi, hingga mempresentasikan hasil karya.",
    isi: [
      "Pembelajaran berbasis projek kembali dilaksanakan di kelas IV, V, dan VI. Setiap kelompok memilih tema yang dekat dengan kehidupan sehari-hari, seperti pengelolaan sampah, makanan sehat, dan transportasi di lingkungan sekolah.",
      "Guru memposisikan diri sebagai fasilitator. Siswa belajar menyusun pertanyaan, mengumpulkan informasi, membagi tugas, dan menyusun laporan sederhana. Presentasi hasil projek dilakukan di depan kelas dengan media poster dan produk daur ulang.",
      "Melalui kegiatan ini, siswa berlatih berkolaborasi, berkomunikasi, dan berpikir kritis. Penilaian tidak hanya melihat hasil akhir, tetapi juga proses kerja kelompok dan refleksi yang dituliskan siswa.",
    ],
    tags: ["Akademik", "Projek", "Kolaborasi"],
  },
  {
    slug: "pameran-karya-siswa",
    judul: "Pameran Karya Siswa Merangkum Proses Belajar Satu Semester",
    kategori: "Kegiatan Siswa",
    tanggal: "2026-11-16",
    penulis: "Tim Publikasi",
    gambar: U("photo-1523580846011-d3a5bc25702b"),
    ringkas:
      "Karya tulis, poster, dan produk daur ulang siswa dipamerkan di aula sekolah sebagai bentuk apresiasi proses belajar.",
    isi: [
      "Aula sekolah berubah menjadi ruang pameran pada pekan lalu. Berbagai karya peserta didik dipajang, mulai dari poster literasi, buku catatan projek, hingga produk kerajinan dari bahan bekas.",
      "Orang tua dan guru berkesempatan melihat langsung proses belajar siswa. Setiap stan dijaga oleh siswa yang menjelaskan karya mereka kepada pengunjung, termasuk tantangan yang dihadapi saat mengerjakan projek.",
      "Pameran ini menjadi bentuk apresiasi terhadap usaha siswa, bukan hanya hasil akhir. Sekolah berencana menjadikan pameran karya sebagai agenda rutin setiap akhir semester.",
    ],
    tags: ["Kegiatan Siswa", "Pameran", "Apresiasi"],
  },
  {
    slug: "perpustakaan-pojok-baca",
    judul: "Ruang Perpustakaan Menjadi Titik Temu Belajar dan Referensi",
    kategori: "Layanan Sekolah",
    tanggal: "2026-11-14",
    penulis: "Pengelola Perpustakaan",
    gambar: U("photo-1524995997946-a1c2e315a42f"),
    ringkas:
      "Penataan ulang perpustakaan menghadirkan area baca yang nyaman, koleksi buku baru, dan pojok referensi untuk tugas siswa.",
    isi: [
      "Perpustakaan sekolah ditata ulang agar lebih nyaman dan ramah anak. Rak buku disusun berdasarkan jenjang kelas, sementara area baca dilengkapi meja rendah dan karpet untuk membaca bersama.",
      "Koleksi buku cerita, buku pengetahuan, dan referensi pelajaran terus ditambah. Pojok referensi disiapkan untuk membantu siswa mengerjakan tugas projek dan laporan sederhana.",
      "Perpustakaan buka setiap hari pada jam istirahat dan setelah pembelajaran. Guru dapat mendaftarkan kelas untuk kegiatan membaca bersama atau kunjungan literasi.",
    ],
    tags: ["Layanan Sekolah", "Perpustakaan", "Literasi"],
  },
  {
    slug: "workshop-asesmen-guru",
    judul: "Workshop Guru Membahas Asesmen yang Lebih Informatif",
    kategori: "Berita Sekolah",
    tanggal: "2026-11-12",
    penulis: "Komunitas Belajar Sekolah",
    gambar: U("photo-1513258496099-48168024aec0"),
    ringkas:
      "Guru menguatkan pemahaman tentang asesmen formatif, umpan balik, dan pemanfaatan hasil belajar untuk perbaikan pembelajaran.",
    isi: [
      "Komunitas belajar sekolah mengadakan workshop asesmen yang diikuti seluruh guru. Kegiatan membahas perbedaan asesmen formatif dan sumatif serta cara memberi umpan balik yang membantu siswa berkembang.",
      "Guru berlatih menyusun instrumen penilaian sederhana, membaca hasil asesmen, dan menentukan tindak lanjut pembelajaran. Diskusi kelompok menjadi bagian utama karena setiap kelas memiliki tantangan yang berbeda.",
      "Hasil workshop akan diterapkan secara bertahap. Sekolah mendorong guru untuk berbagi praktik baik pada pertemuan komunitas belajar berikutnya.",
    ],
    tags: ["Berita Sekolah", "Guru", "Asesmen"],
  },
  {
    slug: "persari-pramuka-2026",
    judul: "Persari Pramuka Melatih Kemandirian dan Kerja Sama",
    kategori: "Ekstrakurikuler",
    tanggal: "2026-11-08",
    penulis: "Pembina Pramuka",
    gambar: U("photo-1503454537195-1dcabb73ffb9"),
    ringkas:
      "Kegiatan Persari diikuti siswa penggalang dengan permainan kepramukaan, jelajah, dan aktivitas kerja sama kelompok.",
    isi: [
      "Persari Pramuka tahun ini berlangsung meriah. Peserta mengikuti kegiatan jelajah, permainan ketangkasan, dan tantangan kerja sama kelompok di lingkungan sekolah.",
      "Setiap regu belajar mengambil keputusan bersama, membagi tugas, dan saling membantu menyelesaikan tantangan. Pembina mendampingi peserta dengan menekankan nilai disiplin, tanggung jawab, dan persaudaraan.",
      "Kegiatan ditutup dengan api unggun dan refleksi. Siswa menuliskan pengalaman yang paling berkesan serta hal baru yang mereka pelajari dari teman satu regu.",
    ],
    tags: ["Ekstrakurikuler", "Pramuka", "Karakter"],
  },
  {
    slug: "peringatan-isra-miraj",
    judul: "Peringatan Isra Mi'raj Diisi Tausiyah dan Pentas Seni Islami",
    kategori: "Keagamaan",
    tanggal: "2026-11-05",
    penulis: "Koordinator Keagamaan",
    gambar: U("photo-1519817650390-64a93db51149"),
    ringkas:
      "Kegiatan keagamaan sekolah menghadirkan tausiyah, pembacaan selawat, dan penampilan siswa dalam suasana khidmat.",
    isi: [
      "Peringatan Isra Mi'raj dilaksanakan di musala sekolah. Kegiatan diawali dengan pembacaan ayat suci Al-Qur'an, selawat bersama, dan tausiyah yang disampaikan oleh narasumber.",
      "Siswa menampilkan hafalan surat pendek, puisi islami, dan lagu religi. Penampilan ini menjadi bagian dari pembinaan keberanian dan kecintaan terhadap kegiatan keagamaan.",
      "Sekolah mengucapkan terima kasih kepada orang tua dan komite yang mendukung jalannya kegiatan. Semoga pembiasaan keagamaan terus tumbuh dalam keseharian siswa.",
    ],
    tags: ["Keagamaan", "Kegiatan Sekolah", "Karakter"],
  },
  {
    slug: "kantin-sehat-jumat-bersih",
    judul: "Kantin Sehat dan Jumat Bersih Jaga Lingkungan Sekolah",
    kategori: "Layanan Sekolah",
    tanggal: "2026-10-30",
    penulis: "Tim Usaha Kesehatan Sekolah",
    gambar: U("photo-1504674900247-0877df9cc836"),
    ringkas:
      "Program kantin sehat dan kerja bakti Jumat pagi melibatkan siswa, guru, dan pengelola kantin untuk lingkungan yang lebih bersih.",
    isi: [
      "Setiap Jumat pagi, siswa dan guru melaksanakan kerja bakti membersihkan kelas, halaman, dan area sekitar sekolah. Kegiatan dibagi per kelas dengan pendampingan wali kelas.",
      "Kantin sekolah juga menerapkan menu sehat dan mengurangi kemasan plastik sekali pakai. Pengelola kantin menyediakan air minum isi ulang dan makanan yang diolah secara higienis.",
      "Program ini bertujuan membiasakan siswa peduli terhadap kebersihan dan kesehatan. Sekolah mengajak orang tua untuk mendukung pembiasaan tersebut di rumah.",
    ],
    tags: ["Layanan Sekolah", "Kesehatan", "Lingkungan"],
  },
  {
    slug: "pengumuman-jadwal-sumatif",
    judul: "Pengumuman Jadwal Penilaian Sumatif Akhir Semester",
    kategori: "Pengumuman",
    tanggal: "2026-11-22",
    penulis: "Wakil Kepala Sekolah",
    gambar: U("photo-1427504494785-3a9ca7044f45"),
    ringkas:
      "Penilaian sumatif akhir semester ganjil dilaksanakan 1–5 Desember 2026. Siswa diimbau menyiapkan diri dan membawa perlengkapan belajar.",
    isi: [
      "Diberitahukan kepada seluruh peserta didik bahwa Penilaian Sumatif Akhir Semester Ganjil Tahun Pelajaran 2026/2027 dilaksanakan pada 1–5 Desember 2026.",
      "Jadwal rinci per kelas akan dibagikan oleh wali kelas. Siswa diimbau hadir tepat waktu, membawa alat tulis, dan mengikuti seluruh rangkaian penilaian dengan jujur.",
      "Orang tua diharapkan mendukung kesiapan belajar siswa di rumah. Informasi lebih lanjut dapat ditanyakan kepada wali kelas masing-masing.",
    ],
    tags: ["Pengumuman", "Akademik", "Penilaian"],
  },
  {
    slug: "pengumuman-pembagian-rapor",
    judul: "Pengumuman Jadwal Pembagian Rapor Semester Ganjil",
    kategori: "Pengumuman",
    tanggal: "2026-11-21",
    penulis: "Tata Usaha",
    gambar: U("photo-1544717297-fa95b6ee9643"),
    ringkas:
      "Pembagian rapor semester ganjil dijadwalkan pada 19 Desember 2026 dan dihadiri orang tua/wali peserta didik.",
    isi: [
      "Pembagian rapor hasil belajar semester ganjil akan dilaksanakan pada Jumat, 19 Desember 2026. Orang tua/wali peserta didik diharapkan hadir sesuai jadwal kelas.",
      "Pada kesempatan tersebut, wali kelas akan menyampaikan perkembangan belajar siswa serta catatan tindak lanjut untuk semester berikutnya.",
      "Mohon membawa kartu identitas dan hadir tepat waktu. Terima kasih atas perhatian dan kerja sama orang tua/wali.",
    ],
    tags: ["Pengumuman", "Rapor", "Orang Tua"],
  },
  {
    slug: "pengumuman-spmb-2027",
    judul: "Informasi Awal SPMB Kota Pontianak Tahun 2027",
    kategori: "Pengumuman",
    tanggal: "2026-11-19",
    penulis: "Panitia SPMB Sekolah",
    gambar: U("photo-1523240795612-9a054b0db644"),
    ringkas:
      "Calon peserta didik baru dapat menyiapkan dokumen sejak dini. Pendaftaran dilakukan melalui portal resmi SPMB Kota Pontianak.",
    isi: [
      "Menjelang penerimaan peserta didik baru, sekolah mengimbau orang tua untuk menyiapkan dokumen seperti akta kelahiran, kartu keluarga, dan pas foto.",
      "Pendaftaran SPMB dilakukan melalui portal resmi Pemerintah Kota Pontianak. Ikuti informasi jadwal dan persyaratan dari kanal resmi Dinas Pendidikan.",
      "Sekolah tidak memungut biaya pendaftaran. Jika ada pihak yang menawarkan bantuan dengan biaya tertentu, harap berhati-hati dan konfirmasi langsung ke sekolah.",
    ],
    tags: ["Pengumuman", "SPMB", "Pendaftaran"],
  },
];

/* =========================================================
   PRESTASI
   ========================================================= */
const PRESTASI = [
  { kategori: "sekolah", judul: "Akreditasi Sekolah Predikat A", tingkat: "Nasional", tahun: "2026", nama: "SD Negeri 22 Pontianak Barat", ket: "Pengakuan mutu penyelenggaraan pendidikan berdasarkan penilaian akreditasi.", gambar: U("photo-1541339907198-e08756dedf3f") },
  { kategori: "sekolah", judul: "Sekolah Adiwiyata Tingkat Kota", tingkat: "Kota", tahun: "2026", nama: "Tim Adiwiyata Sekolah", ket: "Penghargaan atas komitmen sekolah dalam budaya lingkungan dan kebersihan.", gambar: U("photo-1497486751825-1233686d5d80") },
  { kategori: "sekolah", judul: "Juara Lomba Sekolah Sehat", tingkat: "Kecamatan", tahun: "2026", nama: "Tim UKS Sekolah", ket: "Capaian pembinaan kesehatan dan kebersihan lingkungan sekolah.", gambar: U("photo-1584515933487-779824d29309") },
  { kategori: "siswa", judul: "Juara 1 Karate O2SN", tingkat: "Kota", tahun: "2026", nama: "Peserta Didik Kelas VI", ket: "Prestasi non-akademik bidang olahraga karate pada Olimpiade Olahraga Siswa Nasional.", gambar: U("photo-1517649763962-0c623066013b") },
  { kategori: "siswa", judul: "Juara 2 Lomba Menyanyi Solo", tingkat: "Kecamatan", tahun: "2026", nama: "Peserta Didik Kelas V", ket: "Penampilan olah vokal pada kegiatan festival seni pelajar.", gambar: U("photo-1516280440614-37939bbacd81") },
  { kategori: "siswa", judul: "Finalis Olimpiade Matematika", tingkat: "Kota", tahun: "2026", nama: "Peserta Didik Kelas VI", ket: "Peserta didik lolos babak final olimpiade matematika tingkat kota.", gambar: U("photo-1503676260728-1c00da094a0b") },
  { kategori: "guru", judul: "Guru Inovatif Pembelajaran Digital", tingkat: "Kota", tahun: "2026", nama: "Rendra Setiadi, S.Kom", ket: "Pengembangan media pembelajaran digital dan layanan informasi sekolah.", gambar: U("photo-1516321318423-f06f85e504b3") },
  { kategori: "guru", judul: "Karya Praktik Baik Pembelajaran", tingkat: "Provinsi", tahun: "2026", nama: "Nayank Ragilia, M.Pd", ket: "Praktik baik pembelajaran berdiferensiasi di kelas tinggi.", gambar: U("photo-1524178232363-1fb2b075b655") },
  { kategori: "guru", judul: "Pembimbing Olimpiade Berprestasi", tingkat: "Kota", tahun: "2026", nama: "Saparina Rahma, S.Pd., Gr", ket: "Pendampingan siswa pada olimpiade matematika tingkat kota.", gambar: U("photo-1577896851231-70ef18881754") },
];

/* =========================================================
   EKSTRAKURIKULER
   ========================================================= */
const EKSKUL = [
  { nama: "Pramuka", kategori: "Kepramukaan", gambar: U("photo-1503454537195-1dcabb73ffb9"), ket: "Membentuk kemandirian, kedisiplinan, dan kerja sama melalui kegiatan penggalang.", pembina: "SAERANI, S.Pd", jadwal: "Sabtu, 08.00–10.00" },
  { nama: "Futsal", kategori: "Olahraga", gambar: U("photo-1574629810360-7efbbe195018"), ket: "Melatih kebugaran, strategi permainan, sportivitas, dan kerja sama tim.", pembina: "DIAN SAPUTRA, A.Ma", jadwal: "Rabu, 15.00–16.30" },
  { nama: "Pencak Silat", kategori: "Bela Diri", gambar: U("photo-1547347298-4074fc3086f0"), ket: "Latihan rutin Pencak Silat Wekasan22 untuk ketangkasan dan percaya diri.", pembina: "TRI RAHAYU FITRIASARI, S.Pd", jadwal: "Jumat, 15.00–16.30" },
  { nama: "Menyanyi Solo", kategori: "Seni", gambar: U("photo-1516280440614-37939bbacd81"), ket: "Pembinaan olah vokal dan penampilan pada kegiatan sekolah.", pembina: "NURUL FAHMI, S.Pd", jadwal: "Selasa, 14.30–16.00" },
  { nama: "Seni Tari", kategori: "Seni", gambar: U("photo-1508700115892-45ecd05ae2ad"), ket: "Latihan tari tradisional dan tampil pada acara sekolah.", pembina: "ELLA KURNIAWATI, S.Pd", jadwal: "Kamis, 14.30–16.00" },
  { nama: "Karate", kategori: "Olahraga", gambar: U("photo-1518611012118-696072aa579a"), ket: "Pembinaan bela diri karate dan persiapan kejuaraan siswa.", pembina: "IRMA CHABRINA YANH PURBOSARI, S.Pd", jadwal: "Sabtu, 09.00–11.00" },
];

/* =========================================================
   PROGRAM UNGGULAN
   ========================================================= */
const PROGRAM = [
  { judul: "Literasi & Numerasi", tag: "Akademik", gambar: U("photo-1497486751825-1233686d5d80"), ket: "Pembiasaan membaca, menulis, dan berhitung melalui kegiatan yang dekat dengan kehidupan siswa.", label: "Budaya belajar" },
  { judul: "Projek Penguatan Profil Pelajar Pancasila", tag: "Karakter", gambar: U("photo-1522202176988-66273c2fd55f"), ket: "Siswa belajar melalui projek lintas mata pelajaran, berkolaborasi, dan mempresentasikan karya.", label: "Projek kolaboratif" },
  { judul: "Digital & Teknologi", tag: "Teknologi", gambar: U("photo-1516321318423-f06f85e504b3"), ket: "Pemanfaatan perangkat digital secara aman untuk belajar, berkarya, dan mencari informasi.", label: "Literasi digital" },
  { judul: "Pembinaan Karakter & Keagamaan", tag: "Karakter", gambar: U("photo-1542816417-0983c9c9ad53"), ket: "Pembiasaan ibadah, kesantunan, kedisiplinan, dan kepedulian terhadap lingkungan.", label: "Pembiasaan harian" },
];

/* =========================================================
   SARANA
   ========================================================= */
const SARANA = [
  { nama: "Ruang Kelas", jumlah: "14", satuan: "Ruang", ket: "Gedung A dan B", ikon: "classroom" },
  { nama: "Perpustakaan", jumlah: "1", satuan: "Ruang", ket: "Pojok baca & referensi", ikon: "library" },
  { nama: "Musala", jumlah: "1", satuan: "Ruang", ket: "Kegiatan keagamaan", ikon: "mosque" },
  { nama: "UKS", jumlah: "1", satuan: "Ruang", ket: "Layanan kesehatan dasar", ikon: "health" },
  { nama: "Kantin Sehat", jumlah: "1", satuan: "Ruang", ket: "Makanan higienis", ikon: "canteen" },
  { nama: "Lapangan", jumlah: "2", satuan: "Area", ket: "Upacara & olahraga", ikon: "field" },
];

/* =========================================================
   MITRA
   ========================================================= */
const MITRA = [
  { nama: "Dinas Pendidikan Kota Pontianak", kategori: "Institusi Pendidikan", ket: "Pembinaan mutu sekolah, pendampingan kebijakan, dan penguatan layanan pendidikan publik.", ikon: "building" },
  { nama: "Puskesmas Pontianak Barat", kategori: "Kesehatan", ket: "Edukasi kesehatan remaja, pemeriksaan berkala, dan kampanye sekolah sehat.", ikon: "health" },
  { nama: "Perpustakaan Kota Pontianak", kategori: "Literasi", ket: "Penguatan minat baca melalui kunjungan literasi dan donasi buku.", ikon: "library" },
  { nama: "Polsek Pontianak Barat", kategori: "Keamanan", ket: "Edukasi keselamatan, ketertiban, dan program sekolah ramah anak.", ikon: "shield" },
  { nama: "Universitas Tanjungpura", kategori: "Perguruan Tinggi", ket: "Pendampingan praktik mengajar, riset sederhana, dan kegiatan kampus mengajar.", ikon: "graduation" },
  { nama: "Komunitas Literasi Pontianak", kategori: "Komunitas", ket: "Kegiatan membaca bersama, pelatihan pengelolaan pojok baca, dan donasi buku.", ikon: "book" },
];

/* =========================================================
   KOMITE SEKOLAH (struktur peran)
   ========================================================= */
const KOMITE = [
  { jabatan: "Ketua Komite", tugas: "Menguatkan komunikasi strategis antara sekolah, orang tua, dan masyarakat.", ikon: "users" },
  { jabatan: "Wakil Ketua", tugas: "Mendampingi koordinasi program kemitraan dan aspirasi orang tua siswa.", ikon: "users" },
  { jabatan: "Sekretaris", tugas: "Mengelola dokumentasi rapat, agenda, dan komunikasi administrasi komite.", ikon: "file" },
  { jabatan: "Bendahara", tugas: "Mendukung tata kelola kegiatan komite secara transparan dan akuntabel.", ikon: "chart" },
  { jabatan: "Bidang Sarana", tugas: "Memberi masukan untuk pengembangan fasilitas belajar dan kenyamanan lingkungan.", ikon: "building" },
  { jabatan: "Bidang Humas", tugas: "Menjembatani informasi komite dengan orang tua, alumni, dan komunitas sekitar.", ikon: "megaphone" },
];

/* =========================================================
   AGENDA
   ========================================================= */
const AGENDA = [
  { mulai: "2026-11-28", selesai: "2026-11-29", judul: "Persami Pramuka", tag: "Ekstrakurikuler", lokasi: "Lingkungan sekolah", ket: "Kegiatan perkemahan Sabtu–Minggu bagi peserta didik penggalang." },
  { mulai: "2026-12-01", selesai: "2026-12-05", judul: "Penilaian Sumatif Akhir Semester", tag: "Akademik", lokasi: "Ruang kelas", ket: "Penilaian sumatif semester ganjil tahun pelajaran 2026/2027." },
  { mulai: "2026-12-12", selesai: "2026-12-12", judul: "Rapat Orang Tua/Wali Siswa", tag: "Kemitraan", lokasi: "Aula sekolah", ket: "Koordinasi perkembangan belajar dan persiapan pembagian rapor." },
  { mulai: "2026-12-19", selesai: "2026-12-19", judul: "Pembagian Rapor Semester Ganjil", tag: "Akademik", lokasi: "Ruang kelas", ket: "Orang tua/wali peserta didik diharapkan hadir sesuai jadwal kelas." },
  { mulai: "2026-12-21", selesai: "2027-01-03", judul: "Libur Semester Ganjil", tag: "Kalender", lokasi: "—", ket: "Libur semester ganjil sesuai kalender pendidikan Kota Pontianak." },
];

/* =========================================================
   FAQ
   ========================================================= */
const FAQ = [
  { t: "Kapan pendaftaran SPMB dibuka?", j: "Jadwal SPMB mengikuti ketetapan Dinas Pendidikan Kota Pontianak. Pantau halaman Pengumuman dan portal resmi SPMB untuk informasi terbaru." },
  { t: "Apakah pendaftaran di sekolah dikenakan biaya?", j: "Tidak. Pendaftaran SPMB tidak dipungut biaya. Waspadai pihak yang menawarkan bantuan dengan imbalan tertentu." },
  { t: "Bagaimana cara menghubungi sekolah?", j: "Sekolah dapat dihubungi melalui WhatsApp 0812-5414-9295 atau email sdn22pontianakbarat@gmail.com pada jam layanan Senin–Jumat, 07.00–15.30 WIB." },
  { t: "Apa saja dokumen untuk pendaftaran?", j: "Umumnya akta kelahiran, kartu keluarga, pas foto, dan dokumen pendukung lain sesuai ketentuan SPMB. Siapkan salinan dan dokumen asli untuk verifikasi." },
  { t: "Bagaimana prosedur pindah sekolah?", j: "Orang tua dapat menghubungi Tata Usaha untuk informasi persyaratan dan alur perpindahan peserta didik. Proses mengikuti ketentuan Dapodik dan Dinas Pendidikan." },
  { t: "Apakah website ini menyediakan data pribadi siswa?", j: "Tidak. Website hanya menampilkan informasi publik dan data agregat. Data pribadi peserta didik dikelola melalui sistem resmi sekolah dan Dapodik." },
];

/* =========================================================
   UNDUHAN & APLIKASI
   ========================================================= */
const UNDUHAN = [
  { judul: "Aplikasi E-Rapor SD", jenis: "Aplikasi", ket: "Aplikasi rapor resmi Kemendikdasmen.", ukuran: "Situs resmi", link: "erapor", ikon: "file" },
  { judul: "Platform Merdeka Mengajar", jenis: "Aplikasi", ket: "Pengembangan kompetensi dan perangkat ajar guru.", ukuran: "Situs resmi", link: "pmm", ikon: "graduation" },
  { judul: "Dapodik", jenis: "Aplikasi", ket: "Data Pokok Pendidikan Kemendikdasmen.", ukuran: "Situs resmi", link: "dapodik", ikon: "database" },
  { judul: "Kalender Pendidikan", jenis: "Dokumen", ket: "Kalender pendidikan dan agenda sekolah.", ukuran: "Tautan", link: "kalenderPendidikan", ikon: "calendar" },
  { judul: "Struktur Organisasi Sekolah", jenis: "Dokumen", ket: "Bagan struktur organisasi resmi sekolah.", ukuran: "Canva", link: "canvaStruktur", ikon: "users" },
  { judul: "Portal SPMB Kota Pontianak", jenis: "Layanan", ket: "Pendaftaran peserta didik baru.", ukuran: "Situs resmi", link: "spmb", ikon: "link" },
];

/* =========================================================
   TAUTAN PENTING
   ========================================================= */
const TAUTAN = [
  { nama: "Kemendikdasmen", ket: "Kementerian Pendidikan Dasar dan Menengah", link: "kemdikdasmen", ikon: "building" },
  { nama: "Dapodik", ket: "Data Pokok Pendidikan", link: "dapodik", ikon: "database" },
  { nama: "SPMB Pontianak", ket: "Penerimaan peserta didik baru", link: "spmb", ikon: "users" },
  { nama: "E-Rapor SD", ket: "Aplikasi rapor resmi", link: "erapor", ikon: "file" },
  { nama: "PMM", ket: "Platform Merdeka Mengajar", link: "pmm", ikon: "graduation" },
  { nama: "Rapor Pendidikan", ket: "Evaluasi mutu pendidikan", link: "raporPendidikan", ikon: "chart" },
  { nama: "BOS", ket: "Bantuan Operasional Sekolah", link: "bos", ikon: "wallet" },
  { nama: "KIP", ket: "Kartu Indonesia Pintar", link: "kip", ikon: "card" },
];

/* Mading online — kosongkan bila belum ada karya. */
const MADING = [];

/* Pengumuman berjalan (ticker). */
const TICKER = [
  "Penilaian Sumatif Akhir Semester Ganjil: 1–5 Desember 2026",
  "Pembagian rapor semester ganjil: 19 Desember 2026",
  "Persami Pramuka: 28–29 November 2026",
];
