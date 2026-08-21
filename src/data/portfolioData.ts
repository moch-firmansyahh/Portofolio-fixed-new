export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Web App" | "E-Commerce" | "Dashboard" | "Landing Page";
  featured: boolean;
  image: string;
  demoUrl: string;
  githubUrl: string;
  metrics?: string;
  highlights: string[];
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  type: "Work" | "Education" | "Freelance";
}

export const PERSONAL_INFO = {
  name: "Moch. Firmansyah",
  shortName: "Firman",
  role: "Frontend Developer",
  tagline: "Mahasiswa Informatika Telkom University yang fokus mendalami Frontend Development untuk menciptakan pengalaman web yang nyaman, responsif, dan interaktif.",
  bio: "Halo, saya Moch Firmansyah. Mahasiswa S1 Teknik Informatika di Telkom University yang berfokus pada Front-End Development. Saya berdedikasi membangun aplikasi web modern yang bersih, performan, dan memiliki animasi yang memikat menggunakan React, Next.js, TypeScript, dan Tailwind CSS.",
  status: "Available for opportunities",
  location: "Bandung, Indonesia",
  email: "mochfirmansyah244@gmail.com",
  phone: "+62 812-3456-7890",
  resumeUrl: "#contact",
  socialLinks: {
    github: "https://github.com/moch-firmansyahh",
    linkedin: "https://www.linkedin.com/in/firman-ajah-681637313/",
    instagram: "https://www.instagram.com/frmzyx/",
    tiktok: "https://www.tiktok.com/@frmnzy_",
  },
  stats: [
    { label: "Tahun Belajar & Berkarya", value: "2+" },
    { label: "Proyek Selesai", value: "5+" },
    { label: "Lighthouse Performance", value: "98%" },
    { label: "Dedikasi & Presisi", value: "100%" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Front-End Core",
    description: "Fondasi utama dalam membangun antarmuka web modern, cepat, dan semantik.",
    skills: [
      { name: "React.js", level: "Expert", highlight: true },
      { name: "Next.js (App Router)", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: true },
      { name: "HTML5 Semantic", level: "Expert" },
      { name: "CSS3 / Modern Layout", level: "Expert" },
    ],
  },
  {
    title: "Styling & Motion",
    description: "Menciptakan estetika visual yang elegan dan animasi mikro interaktif yang halus.",
    skills: [
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "Framer Motion", level: "Advanced", highlight: true },
      { name: "GSAP Animation", level: "Proficient", highlight: true },
      { name: "Responsive Design", level: "Expert" },
      { name: "CSS Grid & Flexbox", level: "Expert" },
    ],
  },
  {
    title: "Programming & Backend",
    description: "Bahasa pemrograman dasar dan integrasi layanan data.",
    skills: [
      { name: "Golang (Go)", level: "Proficient", highlight: true },
      { name: "C++", level: "Proficient" },
      { name: "RESTful API Integration", level: "Advanced", highlight: true },
      { name: "Git & Version Control", level: "Advanced" },
    ],
  },
  {
    title: "Design & Workflow",
    description: "Desain antarmuka, prototyping, dan alur kerja pengembangan modern.",
    skills: [
      { name: "Figma (UI/UX Design)", level: "Expert", highlight: true },
      { name: "Canva", level: "Expert" },
      { name: "Vercel Deployment", level: "Advanced", highlight: true },
      { name: "Web Performance & SEO", level: "Advanced" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "manajemen-kontrakan-pa-iman",
    title: "Manajemen Kontrakan Pa Iman",
    subtitle: "Sistem Manajemen Kost & Kontrakan Digital Modern",
    description: "Aplikasi sistem manajemen kost digital modern dan responsif yang dirancang untuk pemilik kost dalam mengelola unit kamar, data penghuni, dan pencatatan pembayaran bulanan secara efisien.",
    longDescription: "Dibangun dengan Next.js App Router dan Tailwind CSS, aplikasi Manajemen Kontrakan Pa Iman mempermudah operasional sewa kamar. Dilengkapi dengan antarmuka modern yang bersih, status ketersediaan unit kamar, rekapitulasi data penghuni, dan aksesibilitas mobile yang fleksibel.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
    category: "Web App",
    featured: true,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://manajemen-kontrakan-iman.vercel.app/",
    githubUrl: "https://github.com/moch-firmansyahh/manajemen-kontrakan-iman",
    metrics: "PWA Enabled • Real-time Data Management",
    highlights: [
      "Pencatatan dan pemantauan status unit kamar (tersedia / terisi / masa sewa)",
      "Manajemen data penghuni dan riwayat tagihan sewa bulanan",
      "Desain antarmuka responsif ramah mobile untuk kemudahan akses pemilik di mana saja",
    ],
    year: "2024",
  },
  {
    id: "voluntrip",
    title: "Voluntrip",
    subtitle: "Aplikasi Perencana Trip & Rundown Perjalanan Komunitas",
    description: "Aplikasi perencana perjalanan (trip planner) dan manajemen rundown kegiatan sosial/komunitas untuk menyusun jadwal, estimasi rute, dan koordinasi volunteer secara kolaboratif.",
    longDescription: "Voluntrip mempermudah komunitas dan pelancong dalam merancang itinerary perjalanan secara terstruktur. Fitur mencakup penyusunan rundown interaktif, sistem autentikasi dan manajemen akun, serta tampilan visual modern dengan palet warna terkurasi dan transisi halus.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    category: "Web App",
    featured: true,
    image: "/projects/voluntrip.png",
    demoUrl: "https://voluntrip-five.vercel.app/",
    githubUrl: "https://github.com/moch-firmansyahh/voluntrip",
    metrics: "Interactive Itinerary • Dynamic Rundown Planner",
    highlights: [
      "Perencana itinerary dan rundown kegiatan dengan alur jadwal interaktif",
      "Sistem login & registrasi terintegrasi dengan validasi formulir",
      "Animasi transisi antarmuka yang mulus dan pengalaman pengguna responsif",
    ],
    year: "2024",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Nov 2024 — Jun 2025",
    role: "Study Group Member — Web Development",
    company: "GDGoC Telkom University Bandung",
    location: "Bandung, West Java, Indonesia",
    description: "Anggota aktif Study Group Web Development di Google Developer Groups on Campus (GDGoC). Mempelajari dan mempraktikkan pengembangan web modern bersama sesama anggota, berpartisipasi dalam sesi pembelajaran kelompok, diskusi teknis, dan proyek kolaboratif.",
    technologies: ["Web Development", "Web Design", "JavaScript", "React", "Collaborative Learning"],
    type: "Work",
  },
  {
    period: "Feb 2026 — Sekarang",
    role: "Study Group Member — Web Development",
    company: "Central Computer Improvement (CCI) Telkom University",
    location: "Bandung, West Java, Indonesia",
    description: "Berpartisipasi aktif dalam Study Group CCI yang berfokus pada pengembangan web modern. Mendapatkan pengalaman hands-on membangun antarmuka pengguna responsif dengan Tailwind CSS, serta memperdalam pemahaman arsitektur sistem perangkat lunak.",
    technologies: ["Front-End Development", "Software System Analysis", "Tailwind CSS", "React"],
    type: "Work",
  },
  {
    period: "Nov 2025 — Des 2025",
    role: "Study Group Member — Website Development",
    company: "Cyber Physical System Laboratory",
    location: "Bandung, West Java, Indonesia",
    description: "Berpartisipasi aktif dalam Study Group Website Development untuk membangun aplikasi web secara end-to-end. Praktik langsung meliputi pengembangan Front-End dengan React.js dan Tailwind CSS, serta Back-End dengan arsitektur REST API menggunakan Node.js.",
    technologies: ["Front-End Development", "Back-End Web Development", "React.js", "Node.js"],
    type: "Work",
  },
];
