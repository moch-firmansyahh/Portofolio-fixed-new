"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, TiktokIcon } from "./icons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate sending email / submission
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#059669", "#10B981", "#34D399", "#0F172A", "#ECFDF5"],
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] mb-3">
            <span className="w-6 h-[2px] bg-[#059669]" />
            <span>Hubungi Saya</span>
            <span className="w-6 h-[2px] bg-[#059669]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
            Mari Berkolaborasi &amp; Terhubung.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Punya ide proyek menarik, tawaran kerja sama, atau ingin berdiskusi seputar Front-End? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left Column: Direct Contact Info & Social Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            {/* Email Direct Action Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-soft flex flex-col gap-5"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] flex items-center justify-center shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">Direct Email</h3>
                  <p className="text-xs text-[#64748B]">Selalu terbuka untuk peluang baru</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">
                  {PERSONAL_INFO.email}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#FFFFFF] hover:bg-[#ECFDF5] text-[#64748B] hover:text-[#059669] border border-[#E2E8F0] transition-colors shrink-0 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <MapPin className="w-4 h-4 text-[#059669]" />
                <span>Berdomisili di {PERSONAL_INFO.location}</span>
              </div>
            </motion.div>

            {/* Social Channels Card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-soft space-y-4"
            >
              <h3 className="text-base font-bold text-[#0F172A]">
                Media Sosial &amp; Profil
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-[#A7F3D0] flex items-center justify-between text-sm font-semibold text-[#0F172A] hover:text-[#059669] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-[#A7F3D0] flex items-center justify-between text-sm font-semibold text-[#0F172A] hover:text-[#059669] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-[#A7F3D0] flex items-center justify-between text-sm font-semibold text-[#0F172A] hover:text-[#059669] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={PERSONAL_INFO.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#ECFDF5] border border-[#E2E8F0] hover:border-[#A7F3D0] flex items-center justify-between text-sm font-semibold text-[#0F172A] hover:text-[#059669] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <TiktokIcon className="w-4 h-4" />
                    <span>TikTok</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-soft">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-[#059669]" />
                <h3 className="text-xl font-bold text-[#0F172A]">Kirim Pesan</h3>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda melalui email secepatnya.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] hover:text-[#059669] cursor-pointer shadow-xs"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-wider text-[#64748B]"
                      >
                        Nama Anda
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Nama Lengkap"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B]/50 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-[#64748B]"
                      >
                        Alamat Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B]/50 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-wider text-[#64748B]"
                    >
                      Topik / Subjek
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Peluang Kolaborasi / Proyek Web"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B]/50 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-[#64748B]"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tuliskan pesan, lingkup proyek, atau pertanyaan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#64748B]/50 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-base transition-colors shadow-soft hover:shadow-xl disabled:opacity-70 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span>Mengirim Pesan...</span>
                    ) : (
                      <>
                        <span>Kirim Pesan</span>
                        <Send className="w-4 h-4 text-[#94A3B8]" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
