# Prompt: Portofolio Frontend Developer

Buatkan saya website portofolio untuk seorang **Frontend Developer**, dengan spesifikasi berikut:

## Tech Stack

- Next.js (React) + TypeScript
- Tailwind CSS untuk styling
- Framer Motion untuk animasi UI (transisi, hover, reveal saat scroll)
- GSAP untuk animasi yang lebih kompleks (misal hero section, scroll-triggered animation)

## Visual & Desain

### Palet Warna (Hex)

- **Background utama**: `#F5EFE6` (krem hangat/soft)
- **Background sekunder** (section alternatif/card): `#EFE6D8` (krem sedikit lebih gelap, buat bedain section)
- **Teks utama**: `#1A1A1A` (hitam soft, bukan `#000000` murni biar gak terlalu keras)
- **Teks sekunder/muted**: `#5C564D` (abu-coklat, buat deskripsi/caption)
- **Aksen warna**: `#B5654A` (terracotta soft) — dipakai untuk CTA button, link hover, underline, atau highlight kecil
- **Aksen hover/darker**: `#9C4F38` (versi lebih gelap dari aksen, buat hover state button)
- **Border/divider**: `#DCD3C4` (krem keabuan tipis, buat garis pemisah section/card)

### Tipografi

- **Font heading**: sans-serif modern bold, contoh: `Inter`, `General Sans`, atau `Satoshi`
- **Font body**: sans-serif reguler, contoh: `Inter` atau `Manrope`
- **Skala ukuran**:
  - H1 (hero): 64–96px desktop / 40–56px mobile, font-weight 700–800, line-height 1.05–1.1
  - H2 (section title): 40–48px desktop / 28–32px mobile, font-weight 700
  - H3 (card title/subsection): 20–24px, font-weight 600
  - Body text: 16–18px, font-weight 400, line-height 1.6
  - Caption/small text: 13–14px, font-weight 400, letter-spacing 0.02em
- Heading pakai `letter-spacing: -0.02em` (sedikit rapat) biar terlihat modern dan tegas

### Layout & Spacing

- **Max content width**: 1200px (desktop), center-aligned dengan padding kiri-kanan 24px (mobile) / 80px (desktop)
- **Section vertical padding**: 96–120px (desktop) / 56–64px (mobile) antar section
- **Grid**: gunakan CSS Grid/Flexbox, project cards dalam grid 2 kolom (desktop) / 1 kolom (mobile), gap 32px
- **Whitespace**: minimal jarak antar elemen dalam 1 section 16–24px, jangan terlalu rapat
- **Border-radius**: 12–16px untuk card/button (soft rounded, bukan tajam, bukan terlalu bulat)
- **Shadow**: gunakan shadow sangat tipis/soft (`box-shadow: 0 4px 20px rgba(0,0,0,0.04)`) untuk card, hindari shadow tebal/hard

### Tone Visual

- Clean, profesional, sedikit editorial/modern-minimalist — bukan playful/colorful
- Kontras warna krem-hitam-terracotta harus tetap nyaman dibaca (cek kontras teks vs background minimal WCAG AA)

## Animasi

- Animasi harus terasa purposeful, bukan sekadar hiasan
- Gunakan Framer Motion untuk:
  - Fade/slide reveal saat elemen masuk viewport (scroll reveal)
  - Transisi antar halaman/section yang smooth
  - Hover state pada button, link, dan project card
- Gunakan GSAP untuk:
  - Animasi hero section (misal teks muncul bertahap/staggered, atau efek parallax ringan)
  - Scroll-triggered animation yang butuh kontrol timeline lebih presisi
- Hindari animasi berlebihan yang bikin lag atau mengganggu keterbacaan

## Struktur Halaman

1. **Hero Section**
   - Nama, role (Frontend Developer), dan tagline singkat
   - Animasi teks masuk (staggered/typing effect via GSAP)
   - CTA button ke section Projects atau Contact

2. **About**
   - Deskripsi singkat tentang diri, background, dan tools yang dikuasai
   - Bisa disertai foto atau elemen visual sederhana

3. **Skills**
   - List tech stack/tools (bisa dalam bentuk grid atau tag list)
   - Animasi reveal satu per satu saat discroll

4. **Projects**
   - Fokus 3-4 project terbaik saja (bukan semua project)
   - Setiap project card: thumbnail, judul, deskripsi singkat, tech stack yang dipakai, link demo/repo
   - Hover animation pada card (scale/lift effect)

5. **Contact**
   - Link ke email, LinkedIn, GitHub
   - Bisa tambahkan simple contact form (opsional)

## Responsiveness

- Wajib fully responsive (mobile, tablet, desktop)
- Pastikan animasi tetap smooth dan tidak berat di perangkat mobile

## Catatan Tambahan

- Kode harus clean, modular, dan mudah di-maintain (best practice React/Next.js)
- Gunakan semantic HTML dan pastikan accessibility dasar terpenuhi (alt text, kontras warna cukup, dll)
