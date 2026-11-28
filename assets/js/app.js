/* =========================================================
   SDN 22 PONTIANAK BARAT — MESIN TAMPILAN
   Layout, komponen, render data, dan interaksi.
   ========================================================= */

/* ---------- Helper dasar ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const esc = (v) =>
  String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const cfgGet = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), SITE_CONFIG);
const fmtNum = (n) => String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const BULAN_S = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

function toDate(iso) {
  if (!iso) return null;
  const d = new Date(iso.length <= 10 ? iso + "T00:00:00" : iso);
  return Number.isNaN(d.getTime()) ? null : d;
}
function fmtDate(iso) {
  const d = toDate(iso);
  return d ? `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}` : "";
}
function fmtDateShort(iso) {
  const d = toDate(iso);
  return d ? `${d.getDate()} ${BULAN_S[d.getMonth()]} ${d.getFullYear()}` : "";
}
function dayNum(iso) {
  const d = toDate(iso);
  return d ? String(d.getDate()).padStart(2, "0") : "—";
}
function monthShort(iso) {
  const d = toDate(iso);
  return d ? BULAN_S[d.getMonth()] : "";
}
function readingTime(item) {
  const words = (item.isi || []).join(" ").split(/\s+/).length + String(item.ringkas || "").split(/\s+/).length;
  return Math.max(2, Math.round(words / 180));
}
function initials(name) {
  const clean = String(name).split(",")[0].trim().replace(/[^A-Za-z\s]/g, " ");
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0] || "?")[0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
}
function staffPhoto(nama) {
  const id = STAFF_FOTO[nama];
  if (!id) return "";
  return id.startsWith("assets/") ? id : `https://lh3.googleusercontent.com/d/${id}=w600`;
}
function youtubeId(src) {
  if (!src) return "";
  if (/^[\w-]{11}$/.test(src)) return src;
  const m = String(src).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : "";
}
function driveId(url) {
  const m = String(url).match(/(?:\/file\/d\/|\/d\/|id=)([\w-]{20,})/);
  return m ? m[1] : "";
}
function mediaThumb(item) {
  const yt = youtubeId(item.src);
  if (item.jenis === "video" && yt) return `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`;
  const d = driveId(item.src);
  if (d) return `https://lh3.googleusercontent.com/d/${d}=w1200`;
  return item.src;
}
function link(key) {
  return (SITE_CONFIG.links && SITE_CONFIG.links[key]) || "#";
}
function ext(url, label, cls = "btn btn--ghost btn--sm", iconName = "") {
  return `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${iconName ? icon(iconName, 16) : ""}${label}</a>`;
}

/* ---------- Ikon ---------- */
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  library: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
  classroom: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  mosque: '<path d="M3 21h18M5 21V10a7 7 0 0 1 14 0v11"/><path d="M12 3V1"/>',
  health: '<path d="M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10Z"/><path d="M12 11v6M9 14h6"/>',
  canteen: '<path d="M3 11h18M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><path d="M4 11v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/>',
  field: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/>',
  building: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
  graduation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4a2 2 0 0 0 2 4M17 6h3a2 2 0 0 1-2 4"/>',
  star: '<path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.8l6.5-.9L12 3Z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  video: '<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15v3M12 10v8M17 6v12"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 8.5c.3 2.4 2.6 4.7 5 5l1-1.5 2 1"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  facebook: '<path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"/>',
  youtube: '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z"/>',
  tiktok: '<path d="M16 3c.4 2.3 1.9 3.9 4 4.3v3c-1.6 0-3-.5-4-1.3V15a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.5 2.5 0 1 0 1.7 2.4V3H16Z"/>',
  telegram: '<path d="m21 4-3 16-6-4-3 3-1-6 9-6-11 5-5-2 20-6Z"/>',
  wallet: '<path d="M20 7H5a2 2 0 0 1 0-4h13v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16V7H5"/><path d="M16 13h.01"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  quote: '<path d="M10 11H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4"/><path d="M20 11h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4"/>',
  arrowUp: '<path d="m6 14 6-6 6 6"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z"/><path d="M4 21c4-7 8-10 13-12"/>',
  laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>',
};
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.sparkle}</svg>`;
}

/* ---------- Navigasi ---------- */
const NAV = [
  { label: "Beranda", page: "beranda", href: "index.html" },
  {
    label: "Profil", page: "profil", href: "profil.html",
    children: [
      { label: "Profil Sekolah", href: "profil.html", desc: "Identitas & sejarah" },
      { label: "Visi & Misi", href: "profil.html#visi", desc: "Arah pendidikan" },
      { label: "Sarana Sekolah", href: "profil.html#sarana", desc: "Fasilitas belajar" },
      { label: "Komite Sekolah", href: "profil.html#komite", desc: "Peran orang tua" },
      { label: "Kontak", href: "kontak.html", desc: "Alamat & layanan" },
    ],
  },
  {
    label: "Akademik", page: "akademik", href: "akademik.html",
    children: [
      { label: "Program Unggulan", href: "akademik.html#program", desc: "Pembelajaran adaptif" },
      { label: "Agenda Akademik", href: "akademik.html#agenda", desc: "Kalender kegiatan" },
      { label: "Prestasi", href: "akademik.html#prestasi", desc: "Capaian sekolah" },
      { label: "Ekstrakurikuler", href: "akademik.html#ekskul", desc: "Minat & bakat" },
    ],
  },
  {
    label: "Warga Sekolah", page: "guru", href: "guru-pegawai.html",
    children: [
      { label: "Guru & Pegawai", href: "guru-pegawai.html", desc: "Direktori pendidik" },
      { label: "Data Siswa", href: "profil.html#siswa", desc: "Rekap peserta didik" },
      { label: "Rekap Absensi", href: "absensi.html", desc: "Kehadiran pegawai" },
    ],
  },
  { label: "Berita", page: "berita", href: "berita.html" },
  {
    label: "Galeri", page: "galeri", href: "galeri.html",
    children: [
      { label: "Galeri Foto", href: "galeri.html#foto", desc: "Dokumentasi kegiatan" },
      { label: "Galeri Video", href: "galeri.html#video", desc: "Video sekolah" },
      { label: "Live TV", href: "live-tv.html", desc: "Siaran informasi" },
    ],
  },
  {
    label: "Informasi", page: "informasi", href: "informasi.html",
    children: [
      { label: "Pengumuman", href: "informasi.html#pengumuman", desc: "Informasi resmi" },
      { label: "Unduhan", href: "informasi.html#unduhan", desc: "Aplikasi & dokumen" },
      { label: "FAQ", href: "informasi.html#faq", desc: "Pertanyaan umum" },
      { label: "Mading Online", href: "informasi.html#mading", desc: "Karya warga sekolah" },
      { label: "Buku Tamu", href: "informasi.html#buku-tamu", desc: "Sampaikan pesan" },
    ],
  },
];

/* ---------- Layout: header ---------- */
function topbarHtml() {
  const s = SITE_CONFIG.sekolah;
  return `<div class="topbar">
    <div class="container topbar__in">
      <div class="topbar__left">
        <span class="topbar__badge">${icon("shield", 14)} Website Resmi</span>
        <span class="topbar__item">NPSN ${esc(s.npsn)}</span>
        <span class="topbar__sep"></span>
        <span class="topbar__item">Akreditasi ${esc(s.akreditasi)}</span>
      </div>
      <div class="topbar__right">
        <a class="topbar__item" href="tel:+62${esc(String(s.whatsapp).replace(/^0/, ""))}">${icon("phone", 14)} ${esc(s.telepon)}</a>
        <a class="topbar__item" href="mailto:${esc(s.email)}">${icon("mail", 14)} ${esc(s.email)}</a>
        <div class="topbar__social">
          <a href="${esc(link("instagram"))}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram", 15)}</a>
          <a href="${esc(link("facebook"))}" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook", 15)}</a>
          <a href="${esc(link("youtube"))}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube", 15)}</a>
        </div>
      </div>
    </div>
  </div>`;
}

function navHtml() {
  const page = document.body.dataset.page || "";
  return NAV.map((item) => {
    const active = item.page === page ? " is-active" : "";
    if (!item.children) {
      return `<li class="nav__item"><a class="nav__link${active}" href="${item.href}">${item.label}</a></li>`;
    }
    return `<li class="nav__item has-drop${active}">
      <button class="nav__link nav__btn" type="button" aria-expanded="false">${item.label} ${icon("chevron", 14)}</button>
      <div class="drop">
        <div class="drop__grid">
          ${item.children.map((c) => `<a class="drop__link" href="${c.href}"><span class="drop__t">${c.label}</span><span class="drop__s">${c.desc || ""}</span></a>`).join("")}
        </div>
      </div>
    </li>`;
  }).join("");
}

function headerHtml() {
  const s = SITE_CONFIG.sekolah;
  return `<header class="masthead" data-masthead>
    <div class="container masthead__in">
      <a class="brand" href="index.html" aria-label="${esc(s.nama)}">
        <img class="brand__logo" src="${esc(s.logo)}" alt="Logo ${esc(s.nama)}" />
        <span class="brand__text">
          <span class="brand__name">SDN 22 <span class="brand__place">Pontianak Barat</span></span>
          <span class="brand__tag">${esc(s.motto)}</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="nav-utama">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" id="nav-utama" aria-label="Navigasi utama">
        <ul class="nav__list">${navHtml()}</ul>
        <div class="nav__mobile-extra">
          <a class="btn btn--primary btn--block" href="${esc(link("spmb"))}" target="_blank" rel="noopener">SPMB Online</a>
          <a class="btn btn--ghost btn--block" href="kontak.html">Hubungi Sekolah</a>
        </div>
      </nav>
      <div class="masthead__actions">
        <a class="btn btn--primary btn--sm" href="${esc(link("spmb"))}" target="_blank" rel="noopener">SPMB</a>
      </div>
    </div>
  </header>`;
}

/* ---------- Layout: footer ---------- */
function footerHtml() {
  const s = SITE_CONFIG.sekolah;
  return `<footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brandcol">
          <a class="brand brand--footer" href="index.html">
            <img class="brand__logo" src="${esc(s.logo)}" alt="Logo ${esc(s.nama)}" />
            <span class="brand__text">
              <span class="brand__name">SD Negeri 22</span>
              <span class="brand__place">Pontianak Barat</span>
            </span>
          </a>
          <p class="footer__desc">Portal informasi sekolah untuk publikasi berita, profil lembaga, dan dokumentasi kegiatan akademik.</p>
          <ul class="footer__contact">
            <li>${icon("pin", 16)}<span>${esc(s.alamat)}</span></li>
            <li>${icon("phone", 16)}<a href="https://wa.me/${esc(s.whatsapp)}" target="_blank" rel="noopener">${esc(s.telepon)}</a></li>
            <li>${icon("mail", 16)}<a href="mailto:${esc(s.email)}">${esc(s.email)}</a></li>
            <li>${icon("clock", 16)}<span>${esc(s.jamLayanan)}</span></li>
          </ul>
        </div>
        <div>
          <h4>Profil</h4>
          <ul class="footer__list">
            <li><a href="profil.html">Profil Sekolah</a></li>
            <li><a href="profil.html#visi">Visi &amp; Misi</a></li>
            <li><a href="profil.html#struktur">Struktur Organisasi</a></li>
            <li><a href="profil.html#sarana">Sarana Sekolah</a></li>
            <li><a href="profil.html#komite">Komite Sekolah</a></li>
          </ul>
        </div>
        <div>
          <h4>Akademik</h4>
          <ul class="footer__list">
            <li><a href="akademik.html#program">Program Unggulan</a></li>
            <li><a href="akademik.html#agenda">Agenda Akademik</a></li>
            <li><a href="akademik.html#prestasi">Prestasi</a></li>
            <li><a href="akademik.html#ekskul">Ekstrakurikuler</a></li>
            <li><a href="guru-pegawai.html">Guru &amp; Pegawai</a></li>
          </ul>
        </div>
        <div>
          <h4>Informasi</h4>
          <ul class="footer__list">
            <li><a href="berita.html">Berita</a></li>
            <li><a href="galeri.html">Galeri</a></li>
            <li><a href="informasi.html#unduhan">Unduhan</a></li>
            <li><a href="informasi.html#faq">FAQ</a></li>
            <li><a href="absensi.html">Rekap Absensi</a></li>
          </ul>
          <div class="footer__social">
            <a href="${esc(link("instagram"))}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram", 16)}</a>
            <a href="${esc(link("facebook"))}" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook", 16)}</a>
            <a href="${esc(link("tiktok"))}" target="_blank" rel="noopener" aria-label="TikTok">${icon("tiktok", 16)}</a>
            <a href="${esc(link("youtube"))}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube", 16)}</a>
            <a href="${esc(link("telegram"))}" target="_blank" rel="noopener" aria-label="Telegram">${icon("telegram", 16)}</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span data-year>2026</span> ${esc(s.nama)}. Seluruh hak cipta dilindungi.</span>
        <span>${esc(s.editor)}</span>
      </div>
    </div>
  </footer>`;
}

function floatingHtml() {
  const s = SITE_CONFIG.sekolah;
  const page = document.body.dataset.page || "";
  const items = [
    { label: "Beranda", href: "index.html", icon: "home", page: "beranda" },
    { label: "Berita", href: "berita.html", icon: "megaphone", page: "berita" },
    { label: "Profil", href: "profil.html", icon: "building", page: "profil" },
    { label: "Galeri", href: "galeri.html", icon: "image", page: "galeri" },
    { label: "Kontak", href: "kontak.html", icon: "phone", page: "kontak" },
  ];
  return `<nav class="bottomnav" aria-label="Navigasi cepat">
    ${items.map((i) => `<a class="bottomnav__item${i.page === page ? " is-active" : ""}" href="${i.href}">${icon(i.icon, 20)}<span>${i.label}</span></a>`).join("")}
  </nav>
  <a class="wa-float" href="https://wa.me/${esc(s.whatsapp)}?text=${encodeURIComponent("Halo " + s.nama + ", saya ingin bertanya.")}" target="_blank" rel="noopener" aria-label="Chat WhatsApp sekolah">${icon("whatsapp", 24)}</a>
  <button class="to-top" type="button" aria-label="Kembali ke atas">${icon("arrowUp", 18)}</button>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Pratinjau media">
    <button class="lightbox__close" type="button" aria-label="Tutup">${icon("close", 24)}</button>
    <div class="lightbox__body"></div>
  </div>`;
}

function mountLayout() {
  const headHost = $("[data-site-header]");
  if (headHost) {
    headHost.insertAdjacentHTML("beforebegin", topbarHtml() + headerHtml());
    headHost.remove();
  }
  const footHost = $("[data-site-footer]");
  if (footHost) {
    footHost.insertAdjacentHTML("beforebegin", footerHtml() + floatingHtml());
    footHost.remove();
  }
}

/* ---------- Terapkan konfigurasi ---------- */
function applyConfig() {
  $$("[data-cfg]").forEach((el) => {
    const val = cfgGet(el.getAttribute("data-cfg"));
    if (val !== undefined && val !== "") el.textContent = val;
  });
  $$("[data-img]").forEach((el) => {
    const val = cfgGet(el.getAttribute("data-img"));
    if (val) el.setAttribute("src", val);
  });
  $$("[data-hero-img]").forEach((el) => {
    if (SITE_CONFIG.sekolah.hero) el.setAttribute("src", SITE_CONFIG.sekolah.hero);
  });
  $$("[data-link]").forEach((el) => {
    const key = el.getAttribute("data-link");
    const url = SITE_CONFIG.links[key];
    if (url) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.setAttribute("href", "#");
      el.addEventListener("click", (e) => e.preventDefault());
    }
  });
  $$("[data-count]").forEach((el) => {
    const key = el.getAttribute("data-count");
    if (SITE_CONFIG.statistik[key] !== undefined) el.setAttribute("data-count", SITE_CONFIG.statistik[key]);
  });
  $$("[data-year]").forEach((el) => {
    const offset = Number(el.getAttribute("data-year-offset") || 0);
    el.textContent = new Date().getFullYear() + offset;
  });
  $$("[data-wa]").forEach((el) => {
    el.setAttribute("href", `https://wa.me/${SITE_CONFIG.sekolah.whatsapp}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  $$("[data-email]").forEach((el) => {
    el.setAttribute("href", `mailto:${SITE_CONFIG.sekolah.email}`);
  });
}

/* ---------- Kartu berita ---------- */
function newsCard(item) {
  const url = `berita.html?slug=${encodeURIComponent(item.slug)}`;
  return `<article class="news-card">
    <a class="news-card__media" href="${url}">
      <img src="${esc(item.gambar)}" alt="${esc(item.judul)}" loading="lazy" />
      <span class="chip chip--solid">${esc(item.kategori)}</span>
    </a>
    <div class="news-card__body">
      <div class="meta">${icon("calendar", 14)}<time datetime="${item.tanggal}">${fmtDateShort(item.tanggal)}</time><span class="meta__dot"></span><span>${esc(item.penulis)}</span></div>
      <h3 class="news-card__title"><a href="${url}">${esc(item.judul)}</a></h3>
      <p class="news-card__desc">${esc(item.ringkas)}</p>
      <a class="link-arrow" href="${url}">Baca selengkapnya ${icon("arrow", 15)}</a>
    </div>
  </article>`;
}

function newsCompact(item) {
  return `<a class="news-mini" href="berita.html?slug=${encodeURIComponent(item.slug)}">
    <img src="${esc(item.gambar)}" alt="" loading="lazy" />
    <span class="news-mini__body">
      <span class="chip chip--soft">${esc(item.kategori)}</span>
      <strong>${esc(item.judul)}</strong>
      <span class="meta">${fmtDateShort(item.tanggal)}</span>
    </span>
  </a>`;
}

function renderSpotlight() {
  const host = $("[data-spotlight]");
  if (!host) return;
  const items = BERITA.slice().sort((a, b) => {
    const dateA = toDate(a.tanggal);
    const dateB = toDate(b.tanggal);
    return (dateB ? dateB.getTime() : 0) - (dateA ? dateA.getTime() : 0);
  });
  if (!items.length) return;

  let current = 0;
  let timer = null;
  let paused = false;
  let touchStart = null;
  let suppressClick = false;
  let suppressClickTimer = null;

  function stopAutoplay() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }
  function startAutoplay() {
    if (timer !== null || paused || items.length < 2 || document.hidden) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = window.setInterval(() => changeSlide(1), 6000);
  }
  function renderSlide(direction) {
    const item = items[current];
    host.innerHTML = `<div class="spot__slide" data-direction="${direction < 0 ? "prev" : "next"}">
      <a class="spot__card" href="berita.html?slug=${encodeURIComponent(item.slug)}">
        <div class="spot__img">
          <img src="${esc(item.gambar)}" alt="${esc(item.judul)}" />
          <span class="chip chip--solid">Sorotan</span>
        </div>
        <div class="spot__body">
          <span class="eyebrow eyebrow--tight">${esc(item.kategori)}</span>
          <h2>${esc(item.judul)}</h2>
          <p>${esc(item.ringkas)}</p>
          <span class="meta">${icon("calendar", 14)} ${fmtDateShort(item.tanggal)} <span class="meta__dot"></span> ${readingTime(item)} menit baca</span>
        </div>
      </a>
    </div>
    <div class="spot__controls" aria-label="Navigasi sorotan berita">
      <button class="spot__arrow" type="button" data-spot-prev aria-label="Berita lebih baru">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <span class="spot__count" aria-label="Berita ${current + 1} dari ${items.length}">${current + 1} / ${items.length}</span>
      <button class="spot__arrow" type="button" data-spot-next aria-label="Berita lebih lama">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>`;
  }
  function changeSlide(direction) {
    current = (current + direction + items.length) % items.length;
    renderSlide(direction);
    stopAutoplay();
    startAutoplay();
  }

  renderSlide(1);
  host.addEventListener("click", (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
      window.clearTimeout(suppressClickTimer);
      return;
    }
    if (event.target.closest("[data-spot-prev]")) changeSlide(-1);
    if (event.target.closest("[data-spot-next]")) changeSlide(1);
  }, true);
  host.addEventListener("mouseenter", () => {
    paused = true;
    stopAutoplay();
  });
  host.addEventListener("mouseleave", () => {
    paused = false;
    startAutoplay();
  });
  host.addEventListener("focusin", () => {
    paused = true;
    stopAutoplay();
  });
  host.addEventListener("focusout", (event) => {
    if (!host.contains(event.relatedTarget)) {
      paused = false;
      startAutoplay();
    }
  });
  host.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch") return;
    touchStart = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    stopAutoplay();
  });
  host.addEventListener("pointerup", (event) => {
    if (!touchStart) return;
    const deltaX = event.clientX - touchStart.x;
    const deltaY = event.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) {
      startAutoplay();
      return;
    }
    suppressClick = true;
    window.clearTimeout(suppressClickTimer);
    suppressClickTimer = window.setTimeout(() => { suppressClick = false; }, 500);
    changeSlide(deltaX < 0 ? 1 : -1);
  });
  host.addEventListener("pointercancel", () => {
    touchStart = null;
    startAutoplay();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });
  startAutoplay();
}

function renderTicker() {
  const host = $("[data-ticker]");
  if (!host) return;
  const items = TICKER.map((t) => `<span class="ticker__item">${icon("megaphone", 15)} ${esc(t)}</span>`).join("");
  host.innerHTML = `<div class="ticker__label">${icon("megaphone", 16)} Pengumuman</div>
    <div class="ticker__viewport"><div class="ticker__track">${items}${items}</div></div>`;
}

function renderNewsLead() {
  const host = $("[data-news-lead]");
  if (!host) return;
  const lead = BERITA[0];
  const rest = BERITA.slice(1, 4);
  host.innerHTML = `<a class="lead-card" href="berita.html?slug=${encodeURIComponent(lead.slug)}">
      <img src="${esc(lead.gambar)}" alt="${esc(lead.judul)}" />
      <div class="lead-card__overlay">
        <span class="chip chip--light">${esc(lead.kategori)}</span>
        <h2>${esc(lead.judul)}</h2>
        <p>${esc(lead.ringkas)}</p>
        <span class="meta meta--light">${fmtDateShort(lead.tanggal)} <span class="meta__dot"></span> ${esc(lead.penulis)}</span>
      </div>
    </a>
    <div class="lead-side">${rest.map(newsCompact).join("")}</div>`;
}

function renderNewsCarousel() {
  const host = $("[data-news-carousel]");
  if (!host) return;
  host.innerHTML = BERITA.slice(0, 8).map((n) => `<div class="carousel__cell">${newsCard(n)}</div>`).join("");
}

function renderHomeStaff() {
  const host = $("[data-staff-home]");
  if (!host) return;
  const list = [SITE_CONFIG.staff[0], ...SITE_CONFIG.staff.filter((s) => s.kategori === "guru").slice(0, 5)];
  host.innerHTML = list.map((s) => personCard(s, true)).join("");
}

/* ---------- Orang ---------- */
function personCard(s, compact = false) {
  const foto = staffPhoto(s.nama);
  const ini = initials(s.nama);
  return `<article class="person${compact ? " person--compact" : ""}">
    <div class="person__avatar">
      ${foto ? `<img src="${esc(foto)}" alt="Foto ${esc(s.nama)}" loading="lazy" data-fallback="initials" /><span class="person__initials">${ini}</span>` : `<span class="person__initials is-visible">${ini}</span>`}
    </div>
    <h3 class="person__name">${esc(s.nama)}</h3>
    <div class="person__role">${esc(s.tugas || "Guru")}</div>
    ${compact ? "" : `<div class="person__meta">${esc(s.pend || "")}</div><div class="person__meta">${esc(s.status || "")}${s.nip ? ` · NIP ${esc(s.nip)}` : ""}</div>`}
  </article>`;
}

function renderStaffDirectory() {
  const host = $("[data-staff-grid]");
  if (!host) return;
  const search = $("[data-staff-search]");
  const chips = $$("[data-staff-filter]");
  const count = $("[data-staff-count-label]");
  let active = "semua";
  let q = "";

  const draw = () => {
    const list = SITE_CONFIG.staff.filter((s) => {
      const okCat = active === "semua" || s.kategori === active;
      const okQ = !q || `${s.nama} ${s.tugas} ${s.status} ${s.pend}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
    host.innerHTML = list.length
      ? list.map((s) => personCard(s)).join("")
      : `<div class="empty" style="grid-column:1/-1">${icon("search", 26)}<h3>Tidak ada data</h3><p>Coba ubah kata kunci atau filter.</p></div>`;
    if (count) count.textContent = `${list.length} personil ditampilkan`;
  };

  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("is-active", c === chip));
    active = chip.getAttribute("data-staff-filter");
    draw();
  }));
  if (search) search.addEventListener("input", () => { q = search.value.trim().toLowerCase(); draw(); });
  draw();
}

/* ---------- Prestasi ---------- */
function achievementCard(a) {
  return `<article class="ach-card">
    <div class="ach-card__media"><img src="${esc(a.gambar)}" alt="${esc(a.judul)}" loading="lazy" /><span class="chip chip--solid">${esc(a.tingkat)} ${esc(a.tahun)}</span></div>
    <div class="ach-card__body">
      <span class="badge">${esc(a.nama)}</span>
      <h3>${esc(a.judul)}</h3>
      <p>${esc(a.ket)}</p>
    </div>
  </article>`;
}

function renderAchievements() {
  const host = $("[data-achievements]");
  if (!host) return;
  const groups = [
    { id: "sekolah", label: "Prestasi Sekolah" },
    { id: "siswa", label: "Prestasi Siswa" },
    { id: "guru", label: "Prestasi Guru" },
  ];
  host.setAttribute("data-tabs", "");
  host.innerHTML = `<div class="tabs" role="tablist">
      ${groups.map((g, i) => `<button class="tab${i === 0 ? " is-active" : ""}" type="button" data-tab="ach-${g.id}" role="tab" aria-selected="${i === 0}">${g.label}</button>`).join("")}
    </div>
    ${groups.map((g, i) => `<div class="tab-panel" data-panel="ach-${g.id}"${i === 0 ? "" : " hidden"}>
      <div class="grid grid--3">${PRESTASI.filter((a) => a.kategori === g.id).map(achievementCard).join("")}</div>
    </div>`).join("")}`;
}

/* ---------- Program / ekskul / sarana / mitra / komite ---------- */
function renderProgram() {
  const host = $("[data-program]");
  if (!host) return;
  host.innerHTML = PROGRAM.map((p) => `<article class="program-card">
    <div class="program-card__media"><img src="${esc(p.gambar)}" alt="${esc(p.judul)}" loading="lazy" /><span class="chip chip--solid">${esc(p.tag)}</span></div>
    <div class="program-card__body">
      <h3>${esc(p.judul)}</h3>
      <p>${esc(p.ket)}</p>
      <span class="program-card__tag">${icon("sparkle", 14)} ${esc(p.label)}</span>
    </div>
  </article>`).join("");
}

function renderEkskul() {
  const host = $("[data-ekskul]");
  if (!host) return;
  host.innerHTML = EKSKUL.map((e) => `<article class="ekskul-card">
    <div class="ekskul-card__media"><img src="${esc(e.gambar)}" alt="${esc(e.nama)}" loading="lazy" /><span class="chip chip--solid">${esc(e.kategori)}</span></div>
    <div class="ekskul-card__body">
      <h3>${esc(e.nama)}</h3>
      <p>${esc(e.ket)}</p>
      <div class="ekskul-card__meta"><span>${icon("user", 14)} ${esc(e.pembina.split(",")[0])}</span><span>${icon("clock", 14)} ${esc(e.jadwal)}</span></div>
    </div>
  </article>`).join("");
}

function renderSarana() {
  const host = $("[data-sarana]");
  if (!host) return;
  host.innerHTML = SARANA.map((s) => `<article class="facility">
    <span class="facility__icon">${icon(s.ikon, 22)}</span>
    <div><strong>${esc(s.nama)}</strong><span>${esc(s.jumlah)} ${esc(s.satuan)} · ${esc(s.ket)}</span></div>
  </article>`).join("");
}

function renderMitra() {
  const host = $("[data-mitra]");
  if (!host) return;
  host.innerHTML = MITRA.map((m) => `<article class="partner">
    <span class="partner__logo">${icon(m.ikon, 22)}</span>
    <div>
      <span class="badge">${esc(m.kategori)}</span>
      <h3>${esc(m.nama)}</h3>
      <p>${esc(m.ket)}</p>
    </div>
  </article>`).join("");
}

function renderKomite() {
  const host = $("[data-komite]");
  if (!host) return;
  host.innerHTML = KOMITE.map((k) => `<article class="committee">
    <span class="committee__avatar">${icon(k.ikon, 22)}</span>
    <h3>${esc(k.jabatan)}</h3>
    <p>${esc(k.tugas)}</p>
    <span class="committee__period">Periode 2026/2027</span>
  </article>`).join("");
}

/* ---------- Agenda / FAQ / unduhan / tautan ---------- */
function renderAgenda() {
  const host = $("[data-agenda]");
  if (!host) return;
  host.innerHTML = AGENDA.map((a) => `<article class="agenda-item">
    <div class="agenda-item__date"><strong>${dayNum(a.mulai)}</strong><span>${monthShort(a.mulai)}</span></div>
    <div class="agenda-item__body">
      <span class="badge">${esc(a.tag)}</span>
      <h3>${esc(a.judul)}</h3>
      <p>${esc(a.ket)}</p>
      <div class="agenda-item__meta"><span>${icon("calendar", 14)} ${fmtDateShort(a.mulai)}${a.selesai && a.selesai !== a.mulai ? ` – ${fmtDateShort(a.selesai)}` : ""}</span><span>${icon("pin", 14)} ${esc(a.lokasi)}</span></div>
    </div>
  </article>`).join("");
}

function renderFAQ() {
  const host = $("[data-faq]");
  if (!host) return;
  host.innerHTML = FAQ.map((f, i) => `<div class="acc${i === 0 ? " is-open" : ""}">
    <button class="acc__head" type="button" aria-expanded="${i === 0}"><span>${esc(f.t)}</span><span class="acc__sign">+</span></button>
    <div class="acc__body"${i === 0 ? "" : " hidden"}><p>${esc(f.j)}</p></div>
  </div>`).join("");
}

function renderUnduhan() {
  const host = $("[data-unduhan]");
  if (!host) return;
  host.innerHTML = UNDUHAN.map((u) => `<a class="download" href="${esc(link(u.link))}" target="_blank" rel="noopener">
    <span class="download__icon">${icon(u.ikon, 20)}</span>
    <span class="download__body"><strong>${esc(u.judul)}</strong><span>${esc(u.ket)}</span><em>${esc(u.jenis)} · ${esc(u.ukuran)}</em></span>
    <span class="download__go">${icon("download", 18)}</span>
  </a>`).join("");
}

function renderTautan() {
  const host = $("[data-tautan]");
  if (!host) return;
  host.innerHTML = TAUTAN.map((t) => `<a class="quick" href="${esc(link(t.link))}" target="_blank" rel="noopener">
    <span class="quick__icon">${icon(t.ikon, 20)}</span>
    <span class="quick__t">${esc(t.nama)}</span>
    <span class="quick__s">${esc(t.ket)}</span>
  </a>`).join("");
}

function renderPengumuman() {
  const host = $("[data-pengumuman]");
  if (!host) return;
  const list = BERITA.filter((b) => b.kategori === "Pengumuman")
    .slice()
    .sort((a, b) => String(b.tanggal).localeCompare(String(a.tanggal)));
  if (!list.length) {
    host.innerHTML = `<div class="empty">${icon("megaphone", 28)}<h3>Belum ada pengumuman</h3><p>Informasi resmi sekolah akan ditampilkan di sini.</p><a class="btn btn--ghost btn--sm" href="berita.html">Lihat berita sekolah</a></div>`;
    return;
  }
  host.innerHTML = list.map((b) => `<a class="notice" href="berita.html?slug=${encodeURIComponent(b.slug)}">
    <span class="notice__date"><strong>${dayNum(b.tanggal)}</strong><span>${monthShort(b.tanggal)}</span></span>
    <span class="notice__body">
      <strong>${esc(b.judul)}</strong>
      <span>${esc(b.ringkas)}</span>
      <em>${icon("user", 13)} ${esc(b.penulis)} · ${icon("calendar", 13)} ${fmtDate(b.tanggal)}</em>
    </span>
    <span class="notice__go">${icon("arrow", 18)}</span>
  </a>`).join("");
}

function renderMading() {
  const host = $("[data-mading]");
  if (!host) return;
  if (!MADING.length) {
    host.innerHTML = `<div class="empty empty--soft">${icon("pen", 28)}<h3>Belum ada karya tayang</h3><p>Karya terbaik warga sekolah akan hadir di sini. Kirimkan puisi, cerpen, atau karya visual melalui WhatsApp sekolah.</p><a class="btn btn--ghost btn--sm" href="https://wa.me/${esc(SITE_CONFIG.sekolah.whatsapp)}?text=${encodeURIComponent("Halo, saya ingin mengirim karya untuk Mading Online.")}" target="_blank" rel="noopener">${icon("whatsapp", 16)} Kirim karya</a></div>`;
    return;
  }
  host.innerHTML = MADING.map((m) => `<article class="mading-card"><h3>${esc(m.judul)}</h3><p>${esc(m.isi)}</p><span class="meta">${esc(m.penulis || "Warga Sekolah")}</span></article>`).join("");
}

/* ---------- Galeri ---------- */
function mediaButton(item) {
  const isVideo = item.jenis === "video";
  const thumb = mediaThumb(item);
  return `<button class="media-tile" type="button" data-media="${isVideo ? "video" : "foto"}" data-src="${esc(item.src)}" data-caption="${esc(item.judul || "")}">
    <img src="${esc(thumb)}" alt="${esc(item.judul || "Kegiatan sekolah")}" loading="lazy" />
    ${isVideo ? `<span class="media-tile__play">${icon("play", 22)}</span>` : ""}
    <span class="media-tile__cap">${esc(item.judul || "")}${item.ket ? `<em>${esc(item.ket)}</em>` : ""}</span>
  </button>`;
}

function renderMedia() {
  const foto = SITE_CONFIG.media.filter((m) => m.jenis === "foto");
  const video = SITE_CONFIG.media.filter((m) => m.jenis === "video");

  const homePhotos = $("[data-home-photos]");
  if (homePhotos) homePhotos.innerHTML = foto.slice(0, 6).map(mediaButton).join("");

  const homeVideos = $("[data-home-videos]");
  if (homeVideos) homeVideos.innerHTML = video.slice(0, 3).map((v) => `<div class="carousel__cell">${videoCard(v)}</div>`).join("");

  const photoGrid = $("[data-photo-grid]");
  if (photoGrid) photoGrid.innerHTML = foto.map(mediaButton).join("");

  const videoGrid = $("[data-video-grid]");
  if (videoGrid) videoGrid.innerHTML = video.map(videoCard).join("");

  const allGallery = $("[data-gallery-all]");
  if (allGallery) allGallery.innerHTML = SITE_CONFIG.media.map(mediaButton).join("");
}

function videoCard(v) {
  const yt = youtubeId(v.src);
  const thumb = yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : mediaThumb(v);
  return `<button class="video-card" type="button" data-media="video" data-src="${esc(v.src)}" data-caption="${esc(v.judul || "")}">
    <span class="video-card__media"><img src="${esc(thumb)}" alt="${esc(v.judul || "")}" loading="lazy" /><span class="video-card__play">${icon("play", 20)}</span></span>
    <span class="video-card__body"><span class="badge">${esc(v.ket || "Video")}</span><strong>${esc(v.judul || "")}</strong></span>
  </button>`;
}

function renderTelegram() {
  const wrap = $("[data-telegram-gallery]");
  if (!wrap) return;
  const data = window.TELEGRAM_GALLERY;
  const note = $("[data-telegram-updated]");
  const posts = data && Array.isArray(data.posts) ? data.posts : [];
  if (!posts.length) {
    wrap.innerHTML = `<div class="empty" style="grid-column:1/-1">${icon("telegram", 28)}<h3>Dokumentasi di Telegram</h3><p>Foto kegiatan sekolah dapat dilihat langsung di channel Telegram <strong>@${esc(SITE_CONFIG.telegram.channel)}</strong>.</p>${ext(link("telegram"), "Buka Channel Telegram", "btn btn--ghost btn--sm", "telegram")}</div>`;
    return;
  }
  const photos = [];
  posts.forEach((p) => (p.photos || []).forEach((src) => photos.push({ src, date: p.date })));
  wrap.innerHTML = photos.map((p) => `<button class="media-tile" type="button" data-media="foto" data-src="${esc(p.src)}" data-caption="Dokumentasi ${fmtDateShort(p.date)}">
    <img src="${esc(p.src)}" alt="Dokumentasi ${fmtDateShort(p.date)}" loading="lazy" />
    <span class="media-tile__cap">Dokumentasi Kegiatan<em>${fmtDateShort(p.date)}</em></span>
  </button>`).join("");
  if (note) note.textContent = `Diperbarui otomatis dari Telegram · ${fmtDateShort(data.updated) || "baru saja"}`;
}

/* ---------- Berita halaman ---------- */
function renderNewsPage() {
  const listHost = $("[data-news-list]");
  const detailHost = $("[data-news-detail]");
  if (!listHost && !detailHost) return;
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");

  if (slug && detailHost) {
    const item = BERITA.find((b) => b.slug === slug);
    if (!item) {
      detailHost.innerHTML = `<div class="empty">${icon("search", 28)}<h3>Berita tidak ditemukan</h3><p>Artikel yang Anda cari mungkin sudah dipindahkan.</p><a class="btn btn--primary btn--sm" href="berita.html">Lihat semua berita</a></div>`;
      return;
    }
    document.title = `${item.judul} — ${SITE_CONFIG.sekolah.namaPendek}`;
    const related = BERITA.filter((b) => b.slug !== item.slug).slice(0, 3);
    detailHost.innerHTML = `<article class="article">
      <div class="article__head">
        <span class="chip chip--solid">${esc(item.kategori)}</span>
        <h1>${esc(item.judul)}</h1>
        <div class="article__meta">
          <span>${icon("user", 15)} ${esc(item.penulis)}</span>
          <span>${icon("calendar", 15)} ${fmtDate(item.tanggal)}</span>
          <span>${icon("clock", 15)} ${readingTime(item)} menit baca</span>
        </div>
      </div>
      <figure class="article__figure"><img src="${esc(item.gambar)}" alt="${esc(item.judul)}" /></figure>
      <div class="article__body">
        <p class="article__lead">${esc(item.ringkas)}</p>
        ${item.isi.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>
      <div class="article__tags">${item.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
      <div class="article__share">
        <strong>Bagikan:</strong>
        <a class="share-btn share-btn--wa" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(item.judul + " " + location.href)}">${icon("whatsapp", 16)} WhatsApp</a>
        <a class="share-btn" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}">${icon("facebook", 16)} Facebook</a>
        <button class="share-btn" type="button" data-copy>${icon("link", 16)} Salin tautan</button>
      </div>
    </article>
    <div class="related">
      <div class="section-head section-head--sm"><span class="eyebrow">Baca juga</span><h2>Berita lainnya</h2></div>
      <div class="grid grid--3">${related.map(newsCard).join("")}</div>
    </div>`;
    if (listHost) listHost.hidden = true;
    const crumb = $("[data-article-crumb]");
    if (crumb) crumb.textContent = item.judul;
    return;
  }

  if (detailHost) detailHost.hidden = true;
  if (!listHost) return;
  const grid = $("[data-news-grid]");
  const count = $("[data-news-count]");
  const search = $("[data-news-search]");
  const chips = $$("[data-news-cat]");
  const initialCat = params.get("kategori") || "Semua";
  let active = initialCat;
  let q = "";
  const cats = ["Semua", ...Array.from(new Set(BERITA.map((b) => b.kategori)))];

  if (chips.length) {
    chips.forEach((c) => c.classList.toggle("is-active", c.getAttribute("data-news-cat") === active));
  }

  const draw = () => {
    const list = BERITA.filter((b) => {
      const okCat = active === "Semua" || b.kategori === active;
      const okQ = !q || `${b.judul} ${b.ringkas} ${b.kategori} ${b.penulis}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
    grid.innerHTML = list.length ? list.map(newsCard).join("") : `<div class="empty" style="grid-column:1/-1">${icon("search", 28)}<h3>Belum ada berita</h3><p>Coba kata kunci atau kategori lain.</p></div>`;
    if (count) count.textContent = `${list.length} berita`;
  };

  chips.forEach((c) => c.addEventListener("click", () => {
    chips.forEach((x) => x.classList.toggle("is-active", x === c));
    active = c.getAttribute("data-news-cat");
    draw();
  }));
  if (search) search.addEventListener("input", () => { q = search.value.trim().toLowerCase(); draw(); });
  draw();
}

/* ---------- Rekap absensi ---------- */
function renderRekap() {
  const groups = $$("[data-rekap-stats]");
  if (!groups.length) return;
  const now = new Date().getFullYear();
  const years = { now, prev: now - 1 };
  const fmtAvg = (n) => (Number(n) || 0).toFixed(1).replace(".", ",");
  const rentang = (list) => {
    if (!list.length) return "";
    const out = [];
    let start = list[0], prev = list[0];
    for (let i = 1; i <= list.length; i++) {
      const cur = list[i];
      if (cur === prev + 1) { prev = cur; continue; }
      out.push(start === prev ? BULAN[start] : `${BULAN[start]}–${BULAN[prev]}`);
      start = cur; prev = cur;
    }
    return out.join(", ");
  };

  Object.entries(years).forEach(([suffix, year]) => {
    const rows = (SITE_CONFIG.rekap[year] || []).slice();
    const statsEl = $(`[data-rekap-stats="${suffix}"]`);
    const bodyEl = $(`[data-rekap-body="${suffix}"]`);
    const footEl = $(`[data-rekap-foot="${suffix}"]`);
    const noteEl = $(`[data-rekap-note="${suffix}"]`);
    if (!statsEl || !bodyEl) return;

    if (!rows.length) {
      statsEl.innerHTML = ["Bulan Tercatat", "Total Kehadiran", "Rata-rata per Hari", "Hari Tercatat"]
        .map((lbl) => `<div class="stat"><div class="stat__num">—</div><div class="stat__lbl">${lbl}</div></div>`).join("");
      bodyEl.innerHTML = `<tr><td colspan="5" class="muted">Belum ada rekap untuk tahun ${year}.</td></tr>`;
      if (footEl) footEl.innerHTML = "";
      if (noteEl) noteEl.textContent = `Rekap tahun ${year} belum tersedia. Data akan ditampilkan setelah operator sekolah memperbaruinya.`;
      return;
    }

    const totalHari = rows.reduce((a, r) => a + Number(r.hari || 0), 0);
    const totalHadir = rows.reduce((a, r) => a + Number(r.hadir || 0), 0);
    const pegawaiMaks = rows.reduce((a, r) => Math.max(a, Number(r.pegawai || 0)), 0);
    const rata = totalHari ? totalHadir / totalHari : 0;

    statsEl.innerHTML = [
      { num: fmtNum(rows.length), lbl: "Bulan Tercatat" },
      { num: fmtNum(totalHadir), lbl: "Total Kehadiran" },
      { num: fmtAvg(rata), lbl: "Rata-rata per Hari" },
      { num: fmtNum(totalHari), lbl: "Hari Tercatat" },
    ].map((s) => `<div class="stat"><div class="stat__num">${s.num}</div><div class="stat__lbl">${s.lbl}</div></div>`).join("");

    bodyEl.innerHTML = rows.map((r) => `<tr>
      <td>${esc(r.bulan)}</td>
      <td>${fmtNum(r.hari)}</td>
      <td>${fmtNum(r.pegawai)}</td>
      <td>${fmtNum(r.hadir)}</td>
      <td>${fmtAvg(Number(r.hari) ? Number(r.hadir) / Number(r.hari) : 0)}</td>
    </tr>`).join("");

    if (footEl) footEl.innerHTML = `<tr>
      <td>Total ${fmtNum(rows.length)} bulan</td>
      <td>${fmtNum(totalHari)}</td>
      <td>${fmtNum(pegawaiMaks)} <small class="muted">maks.</small></td>
      <td>${fmtNum(totalHadir)}</td>
      <td>${fmtAvg(rata)}</td>
    </tr>`;

    if (noteEl) {
      const tersedia = rows.map((r) => BULAN.indexOf(r.bulan)).filter((i) => i >= 0).sort((a, b) => a - b);
      const belum = BULAN.map((_, i) => i).filter((i) => !tersedia.includes(i));
      noteEl.textContent = `Data tersedia: ${rentang(tersedia)} ${year} (${rows.length} bulan).` +
        (belum.length ? ` Belum tersedia: ${rentang(belum)} ${year}.` : "");
    }
  });

  $$("[data-rekap-meta]").forEach((el) => {
    el.textContent = `Sumber: ${SITE_CONFIG.rekap.sumber}${SITE_CONFIG.rekap.diperbarui ? ` · Diperbarui ${SITE_CONFIG.rekap.diperbarui}` : ""}.`;
  });
}

/* ---------- Statistik pengunjung (perangkat ini) ---------- */
function renderVisitorStats() {
  const host = $("[data-visitor-stats]");
  if (!host) return;
  const KEY = "sdn22_kunjungan_v1";
  const today = new Date().toISOString().slice(0, 10);
  let store = { total: 0, days: {}, pages: {} };
  try {
    store = JSON.parse(localStorage.getItem(KEY) || "null") || store;
    store.days = store.days || {};
    store.pages = store.pages || {};
    store.total = Number(store.total || 0) + 1;
    store.days[today] = Number(store.days[today] || 0) + 1;
    const pageKey = location.pathname.split("/").pop() || "index.html";
    store.pages[pageKey] = Number(store.pages[pageKey] || 0) + 1;
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch (e) { /* localStorage tidak tersedia */ }

  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ key, label: `${d.getDate()} ${BULAN_S[d.getMonth()]}`, count: Number(store.days[key] || 0) });
  }
  const max = Math.max(1, ...days.map((d) => d.count));
  const week = days.reduce((a, d) => a + d.count, 0);
  const top = Object.entries(store.pages).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const names = { "index.html": "Beranda", "berita.html": "Berita", "profil.html": "Profil", "akademik.html": "Akademik", "guru-pegawai.html": "Guru & Pegawai", "galeri.html": "Galeri", "absensi.html": "Absensi", "informasi.html": "Informasi", "kontak.html": "Kontak" };

  host.innerHTML = `<div class="visit__grid">
      <div class="visit__stat"><strong>${fmtNum(store.total)}</strong><span>Total kunjungan</span></div>
      <div class="visit__stat"><strong>${fmtNum(store.days[today] || 0)}</strong><span>Kunjungan hari ini</span></div>
      <div class="visit__stat"><strong>${fmtNum(week)}</strong><span>7 hari terakhir</span></div>
    </div>
    <div class="visit__bars">${days.map((d) => `<div class="visit__bar"><span style="height:${Math.max(4, Math.round((d.count / max) * 100))}%"></span><small>${d.label}</small></div>`).join("")}</div>
    <div class="visit__pages"><strong>Halaman sering dibuka</strong>
      ${top.length ? top.map(([p, n]) => `<span><em>${esc(names[p] || p)}</em><b>${fmtNum(n)}</b></span>`).join("") : `<span class="muted">Belum ada data.</span>`}
    </div>
    <p class="visit__note">Statistik dihitung dari kunjungan perangkat ini. Untuk data seluruh pengunjung, hubungkan Google Analytics atau GoatCounter (lihat README).</p>`;
}

/* ---------- Embed ---------- */
function initEmbeds() {
  $$("[data-embed]").forEach((box) => {
    const key = box.getAttribute("data-embed");
    const url = SITE_CONFIG.embeds[key];
    const inner = box.querySelector(".embed__inner");
    const ph = box.querySelector(".embed__placeholder");
    if (!inner) return;
    if (!url) {
      const btn = ph && ph.querySelector("[data-load]");
      if (btn) btn.remove();
      if (ph) {
        const h = ph.querySelector("h4"), p = ph.querySelector("p");
        if (h) h.textContent = "Embed belum diatur";
        if (p) p.textContent = `Buka assets/js/data.js lalu isi SITE_CONFIG.embeds.${key}.`;
      }
      return;
    }
    const load = () => {
      if (box.classList.contains("is-loaded")) return;
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.title = box.getAttribute("data-title") || "Konten tersemat";
      iframe.loading = "lazy";
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "clipboard-write; encrypted-media; picture-in-picture");
      inner.appendChild(iframe);
      box.classList.add("is-loaded");
      fitCalendar();
      iframe.addEventListener("load", fitCalendar);
    };
    const btn = box.querySelector("[data-load]");
    if (btn) btn.addEventListener("click", load);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { load(); io.disconnect(); } });
      }, { rootMargin: "400px" });
      io.observe(box);
    } else { load(); }
  });
}

function fitCalendar() {
  const BASE_W = 640, BASE_H = 760;
  $$(".embed--kalender").forEach((box) => {
    const inner = box.querySelector(".embed__inner");
    const iframe = inner && inner.querySelector("iframe");
    if (!inner || !iframe) return;
    const w = inner.clientWidth;
    if (w > 0 && w < BASE_W) {
      const s = w / BASE_W;
      iframe.style.width = BASE_W + "px";
      iframe.style.height = BASE_H + "px";
      iframe.style.transform = `scale(${s})`;
      iframe.style.transformOrigin = "top left";
      inner.style.height = Math.round(BASE_H * s) + "px";
      inner.style.overflow = "hidden";
    } else {
      iframe.style.cssText = "";
      inner.style.height = "";
      inner.style.overflow = "";
    }
  });
}

/* ---------- Navigasi & interaksi ---------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $(".nav");
  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove("is-open");
    if (toggle) { toggle.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  };
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  $$(".nav__btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const item = btn.closest(".nav__item");
      const open = !item.classList.contains("is-open");
      $$(".nav__item.is-open").forEach((x) => { x.classList.remove("is-open"); const b = x.querySelector(".nav__btn"); if (b) b.setAttribute("aria-expanded", "false"); });
      item.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav__item")) $$(".nav__item.is-open").forEach((x) => { x.classList.remove("is-open"); const b = x.querySelector(".nav__btn"); if (b) b.setAttribute("aria-expanded", "false"); });
    if (!e.target.closest(".nav") && !e.target.closest(".nav-toggle")) closeNav();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeNav(); $$(".nav__item.is-open").forEach((x) => x.classList.remove("is-open")); }
  });
}

function initScrollFx() {
  const header = $(".masthead");
  const toTop = $(".to-top");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) toTop.classList.toggle("is-visible", y > 500);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const items = $$(".reveal");
  if ("IntersectionObserver" in window) {
    items.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach((el) => io.observe(el));
  } else { items.forEach((el) => el.classList.add("is-visible")); }
}

function initCounters() {
  const nums = $$("[data-count]");
  if (!nums.length) return;
  const run = (el) => {
    const target = Number(el.getAttribute("data-count"));
    if (!Number.isFinite(target)) { el.textContent = el.getAttribute("data-count"); return; }
    const suffix = el.getAttribute("data-suffix") || "";
    const dur = 900;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmtNum(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    nums.forEach((n) => io.observe(n));
  } else { nums.forEach(run); }
}

function activateTab(group, id) {
  if (!id) return false;
  const buttons = $$(".tab", group);
  const panels = $$(".tab-panel", group);
  const target =
    buttons.find((b) => b.getAttribute("data-tab") === id) ||
    buttons.find((b) => {
      const panel = panels.find((p) => p.getAttribute("data-panel") === b.getAttribute("data-tab"));
      return panel && panel.id === id;
    });
  if (!target) return false;
  const tabId = target.getAttribute("data-tab");
  buttons.forEach((b) => {
    const on = b === target;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });
  panels.forEach((p) => { p.hidden = p.getAttribute("data-panel") !== tabId; });
  return true;
}

function initTabs() {
  $$("[data-tabs]").forEach((group) => {
    const buttons = $$(".tab", group);
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => activateTab(group, btn.getAttribute("data-tab")));
    });
  });
  const applyHash = () => {
    const id = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (!id) return;
    $$("[data-tabs]").forEach((group) => activateTab(group, id));
  };
  applyHash();
  window.addEventListener("hashchange", applyHash);
}

function initAcc() {
  $$(".acc__head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.closest(".acc");
      const body = item.querySelector(".acc__body");
      const open = item.classList.toggle("is-open");
      body.hidden = !open;
      head.setAttribute("aria-expanded", String(open));
    });
  });
}

function initLightbox() {
  const box = $(".lightbox");
  if (!box) return;
  const body = $(".lightbox__body", box);
  const close = () => {
    box.classList.remove("is-open");
    body.innerHTML = "";
    document.body.classList.remove("is-locked");
  };
  document.addEventListener("click", (e) => {
    const item = e.target.closest("[data-media]");
    if (!item) return;
    const kind = item.getAttribute("data-media");
    const src = item.getAttribute("data-src");
    const caption = item.getAttribute("data-caption") || "Kegiatan";
    if (kind === "video") {
      const yt = youtubeId(src);
      const d = driveId(src);
      const url = yt ? `https://www.youtube.com/embed/${yt}?autoplay=1&rel=0` : d ? `https://drive.google.com/file/d/${d}/preview` : "";
      if (!url) return;
      body.innerHTML = `<iframe src="${url}" title="${esc(caption)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      const d = driveId(src);
      const url = d ? `https://lh3.googleusercontent.com/d/${d}=w1600` : src;
      body.innerHTML = `<img src="${esc(url)}" alt="${esc(caption)}" /><span class="lightbox__cap">${esc(caption)}</span>`;
    }
    box.classList.add("is-open");
    document.body.classList.add("is-locked");
  });
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

function initCarousel() {
  $$("[data-carousel]").forEach((wrap) => {
    const track = wrap.querySelector(".carousel__track");
    const prev = wrap.querySelector("[data-carousel-prev]");
    const next = wrap.querySelector("[data-carousel-next]");
    if (!track) return;
    const step = () => Math.max(280, track.clientWidth * 0.8);
    prev && prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next && next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 4;
      if (prev) prev.disabled = track.scrollLeft <= 4;
      if (next) next.disabled = track.scrollLeft >= max;
    };
    track.addEventListener("scroll", update, { passive: true });
    update();
  });
}

function initForms() {
  $$("[data-wa-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const subject = form.getAttribute("data-subject") || "Pesan dari website sekolah";
      const lines = [`Halo ${SITE_CONFIG.sekolah.nama},`, `Saya ingin menyampaikan: ${subject}`, ""];
      fd.forEach((val, key) => { if (val) lines.push(`${key}: ${val}`); });
      const url = `https://wa.me/${SITE_CONFIG.sekolah.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "Membuka WhatsApp…";
        setTimeout(() => { status.textContent = ""; }, 5000);
      }
      window.open(url, "_blank", "noopener");
    });
  });
}

function initCopy() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    const text = location.href;
    try {
      await navigator.clipboard.writeText(text);
      btn.innerHTML = `${icon("check", 16)} Tautan disalin`;
      setTimeout(() => { btn.innerHTML = `${icon("link", 16)} Salin tautan`; }, 2200);
    } catch (err) {
      window.prompt("Salin tautan berikut:", text);
    }
  });
}

function initImageFallback() {
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!img || img.tagName !== "IMG" || img.dataset.fallbackDone) return;
    img.dataset.fallbackDone = "1";
    if (img.dataset.fallback === "initials") {
      img.style.display = "none";
      const ini = img.parentElement && img.parentElement.querySelector(".person__initials");
      if (ini) ini.classList.add("is-visible");
      return;
    }
    img.src = "assets/img/gedung.svg";
  }, true);
}

/* ---------- Jalankan ---------- */
mountLayout();
applyConfig();
renderTicker();
renderSpotlight();
renderNewsLead();
renderNewsCarousel();
renderHomeStaff();
renderNewsPage();
renderStaffDirectory();
renderAchievements();
renderProgram();
renderEkskul();
renderSarana();
renderMitra();
renderKomite();
renderAgenda();
renderFAQ();
renderPengumuman();
renderUnduhan();
renderTautan();
renderMading();
renderMedia();
renderTelegram();
renderRekap();
renderVisitorStats();

initEmbeds();
initNav();
initScrollFx();
initCounters();
initTabs();
initAcc();
initLightbox();
initCarousel();
initForms();
initCopy();
initImageFallback();
window.addEventListener("resize", fitCalendar);
