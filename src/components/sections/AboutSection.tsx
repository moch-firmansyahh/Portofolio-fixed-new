"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { getProfile } from "@/services/portfolio";
import { PERSONAL_INFO as DEFAULT_INFO } from "@/data/portfolioData";
import type { PersonalInfo } from "@/types/profile";

export default function AboutSection() {
  const [profile, setProfile] = useState<PersonalInfo>(DEFAULT_INFO);

  useEffect(() => {
    let isMounted = true;
    async function loadLiveProfile() {
      try {
        const live = await getProfile();
        if (isMounted && live) {
          setProfile(live);
        }
      } catch (err) {
        console.warn("Using default profile in AboutSection:", err);
      }
    }
    loadLiveProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="about" className="py-32 md:py-44 relative">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        <ScrollReveal direction="up" distance={35} duration={0.8}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-8 tracking-tight">
            {profile.tagline || DEFAULT_INFO.tagline}
          </h2>

          <div className="space-y-5 text-base sm:text-lg md:text-[19px] text-neutral-600 leading-relaxed font-normal">
            {profile.bio && profile.bio.trim().length > 0 && profile.bio !== DEFAULT_INFO.bio ? (
              profile.bio.split("\n\n").map((paragraph, index) => (
                <p key={`bio-p-${index}`}>{paragraph}</p>
              ))
            ) : (
              <>
                <p>
                  Sebagai mahasiswa <strong className="text-neutral-900 font-semibold">Teknik Informatika di Telkom University</strong>, saya berdedikasi untuk menerapkan keterampilan analitis dan keahlian teknis saya dalam peran <strong className="text-neutral-900 font-semibold">Front-End Developer</strong> di industri teknologi. Latar belakang akademik telah membekali saya dengan fondasi yang kuat dalam pemrograman, pengembangan web modern, dan pengelolaan basis data.
                </p>
                <p>
                  Saya memiliki pengalaman langsung dalam membangun aplikasi web menggunakan <strong className="text-neutral-900 font-semibold">React</strong> dan <strong className="text-neutral-900 font-semibold">Next.js</strong>, didukung oleh pemahaman yang solid dalam pengembangan front-end maupun back-end, termasuk perancangan dan manajemen database.
                </p>
                <p>
                  Di samping pengembangan antarmuka, saya memiliki ketertarikan mendalam pada <strong className="text-neutral-900 font-semibold">Cyber Security</strong> dan <strong className="text-neutral-900 font-semibold">Network Security</strong>. Berbekal sertifikasi spesialisasi dari Google, saya aktif menerapkan prinsip <strong className="text-neutral-900 font-semibold">Secure Coding</strong> dan validasi data ketat guna memastikan setiap aplikasi web yang saya bangun tidak hanya estetik dan responsif, tetapi juga aman dan terlindungi.
                </p>
                <p>
                  Saya bersemangat untuk memanfaatkan keahlian ini dalam menciptakan antarmuka yang ramah pengguna, berkinerja tinggi, serta berkontribusi pada pengembangan solusi web yang inovatif dan terukur (<em className="italic">scalable</em>).
                </p>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
