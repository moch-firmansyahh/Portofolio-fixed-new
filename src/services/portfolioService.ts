import { supabase } from "@/lib/supabase";
import { 
  PROJECTS as STATIC_PROJECTS, 
  Project, 
  SKILL_CATEGORIES as STATIC_SKILL_CATEGORIES, 
  SkillCategory,
  PERSONAL_INFO as STATIC_PERSONAL_INFO,
  EXPERIENCES as STATIC_EXPERIENCES,
  ExperienceItem
} from "@/data/portfolioData";

export interface SupabaseProjectRaw {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  longDescription?: string;
  tags?: string[] | string;
  category?: string;
  featured?: boolean;
  image?: string;
  link?: string;
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string;
  highlights?: string[] | string;
  year?: string | number;
  createdAt?: any;
  updatedAt?: any;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Timeout helper to avoid infinite hanging when network is slow
function withTimeout<T>(promiseLike: PromiseLike<T>, timeoutMs = 4000): Promise<T> {
  const promise = Promise.resolve(promiseLike);
  let timer: NodeJS.Timeout;
  const timeoutPromise = new Promise<T>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs);
  });
  return Promise.race([
    promise.then((res) => {
      clearTimeout(timer);
      return res;
    }),
    timeoutPromise,
  ]);
}

// Generate URL slug from title
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Clean and sanitize project payload to prevent undefined runtime errors
export function sanitizeProject(data: SupabaseProjectRaw, docId: string): Project {
  const title = (data.title && typeof data.title === "string" && data.title.trim()) 
    ? data.title.trim() 
    : "Untitled Project";

  const slug = slugify(title) || docId;

  // Process Tags
  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags.filter((t) => typeof t === "string" && t.trim().length > 0).map((t) => t.trim());
  } else if (typeof data.tags === "string" && data.tags.trim()) {
    try {
      const parsed = JSON.parse(data.tags);
      if (Array.isArray(parsed)) tags = parsed;
    } catch {
      tags = data.tags.split(",").map((t) => t.trim()).filter(Boolean);
    }
  }
  if (tags.length === 0) {
    tags = ["Web Development", "Modern UI"];
  }

  // Process Highlights
  let highlights: string[] = [];
  if (Array.isArray(data.highlights)) {
    highlights = data.highlights.filter((h) => typeof h === "string" && h.trim().length > 0).map((h) => h.trim());
  } else if (typeof data.highlights === "string" && data.highlights.trim()) {
    try {
      const parsed = JSON.parse(data.highlights);
      if (Array.isArray(parsed)) highlights = parsed;
    } catch {
      highlights = data.highlights.split("\n").map((h) => h.trim()).filter(Boolean);
    }
  }
  if (highlights.length === 0) {
    highlights = [
      data.description || "Arsitektur frontend modern dan responsif.",
      "Optimasi performa tinggi dengan user experience interaktif."
    ];
  }

  // Process Images with safe fallback
  let image = data.image && typeof data.image === "string" ? data.image.trim() : "";
  if (!image || image === "/assets/portofolio.png") {
    const link = data.githubUrl || data.demoUrl || data.link || "";
    if (link.includes("github.com/")) {
      const parts = link.split("github.com/");
      if (parts.length > 1) {
        const repoPath = parts[1].split("?")[0].replace(/\/$/, "");
        image = `https://opengraph.githubassets.com/1/${repoPath}`;
      }
    }
  }
  if (!image) {
    image = "/projects/manajemen-kontrakan.png";
  }

  const demoUrl = data.demoUrl || data.link || "";
  const githubUrl = data.githubUrl || (data.link && data.link.includes("github.com") ? data.link : "");

  return {
    id: slug,
    title,
    subtitle: data.subtitle || data.description || "Proyek Web Responsif & Interaktif",
    description: data.description || "Proyek pengembangan aplikasi web modern dengan performa optimal.",
    longDescription: data.longDescription || data.description || "Studi kasus komprehensif mengenai perancangan dan implementasi aplikasi web modern.",
    tags,
    category: data.category && typeof data.category === "string" && data.category.trim() ? data.category.trim() : "Web App",
    featured: data.featured !== undefined ? !!data.featured : true,
    image,
    demoUrl: demoUrl || "#",
    githubUrl: githubUrl || "#",
    metrics: data.metrics || "Full-Stack • Interactive UI",
    highlights,
    year: data.year ? data.year.toString() : new Date().getFullYear().toString(),
  };
}

// In-memory cache for client sessions
let cachedProjects: Project[] | null = null;
let cachedSkills: SkillCategory[] | null = null;
let cachedProfile: typeof STATIC_PERSONAL_INFO | null = null;
let cachedExperiences: ExperienceItem[] | null = null;

/**
 * 🛡️ 3-TIER ERROR-SAFE PROJECT FETCHER (Supabase -> Cached -> Static)
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const { data: rows, error } = await withTimeout(
      supabase.from("projects").select("*").order("createdAt", { ascending: false })
    );

    if (!error && rows && rows.length > 0) {
      const projects: Project[] = rows.map((row: any) => sanitizeProject(row, row.id));
      if (projects.length > 0) {
        cachedProjects = projects;
        return projects;
      }
    }
  } catch (error) {
    console.warn("⚠️ Supabase Live projects fetch fallback:", error);
  }

  if (cachedProjects && cachedProjects.length > 0) {
    return cachedProjects;
  }

  return STATIC_PROJECTS;
}

/**
 * 🛡️ SINGLE PROJECT LOOKUP BY SLUG OR ID
 */
export async function getProjectById(idOrSlug: string): Promise<Project | null> {
  const normalizedSearch = idOrSlug.toLowerCase().trim();

  try {
    const allProjects = await getProjects();
    const found = allProjects.find((p) => {
      const pSlug = slugify(p.title);
      return (
        p.id.toLowerCase() === normalizedSearch ||
        pSlug === normalizedSearch ||
        p.title.toLowerCase() === normalizedSearch
      );
    });

    if (found) return found;
  } catch (error) {
    console.warn("⚠️ getProjectById fetch error, checking static data:", error);
  }

  const staticFound = STATIC_PROJECTS.find(
    (p) => p.id.toLowerCase() === normalizedSearch || slugify(p.title) === normalizedSearch
  );
  return staticFound || null;
}

/**
 * 🛡️ 3-TIER ERROR-SAFE SKILLS FETCHER
 */
export async function getSkillCategories(): Promise<SkillCategory[]> {
  try {
    const { data: rows, error } = await withTimeout(
      supabase.from("skills").select("*").order("name")
    );

    if (!error && rows && rows.length > 0) {
      const dynamicSkills = rows.map((d: any) => {
        const percentNum = typeof d.percent === "number" ? d.percent : parseInt(d.percent || "80", 10);
        return {
          name: d.name || "Skill",
          level: !isNaN(percentNum) ? `${percentNum}%` : "80%",
          highlight: percentNum >= 75,
        };
      });

      if (dynamicSkills.length > 0) {
        const mergedCategories: SkillCategory[] = [
          {
            title: "Live Skills & Stack",
            description: "Keahlian teknis dan bahasa pemrograman yang tersinkronisasi langsung dari database admin.",
            skills: dynamicSkills,
          },
          ...STATIC_SKILL_CATEGORIES,
        ];
        cachedSkills = mergedCategories;
        return mergedCategories;
      }
    }
  } catch (error) {
    console.warn("⚠️ Supabase Live skills fetch fallback:", error);
  }

  if (cachedSkills && cachedSkills.length > 0) {
    return cachedSkills;
  }

  return STATIC_SKILL_CATEGORIES;
}

/**
 * 🛡️ 3-TIER ERROR-SAFE PROFILE / ABOUT FETCHER
 */
export async function getProfile(): Promise<typeof STATIC_PERSONAL_INFO> {
  try {
    const { data, error } = await withTimeout(
      supabase.from("profile").select("*").eq("id", "main").maybeSingle()
    );

    if (!error && data) {
      const profile = {
        name: data.name || STATIC_PERSONAL_INFO.name,
        shortName: data.shortName || STATIC_PERSONAL_INFO.shortName,
        role: data.role || data.title || STATIC_PERSONAL_INFO.role,
        tagline: data.tagline || STATIC_PERSONAL_INFO.tagline,
        bio: data.bio || STATIC_PERSONAL_INFO.bio,
        status: data.status || STATIC_PERSONAL_INFO.status,
        location: data.location || STATIC_PERSONAL_INFO.location,
        email: data.email || STATIC_PERSONAL_INFO.email,
        phone: data.phone || STATIC_PERSONAL_INFO.phone,
        resumeUrl: data.resumeUrl || STATIC_PERSONAL_INFO.resumeUrl,
        socialLinks: {
          github: data.github || data.socialLinks?.github || STATIC_PERSONAL_INFO.socialLinks.github,
          linkedin: data.linkedin || data.socialLinks?.linkedin || STATIC_PERSONAL_INFO.socialLinks.linkedin,
          instagram: data.instagram || data.socialLinks?.instagram || STATIC_PERSONAL_INFO.socialLinks.instagram,
          tiktok: data.tiktok || data.socialLinks?.tiktok || STATIC_PERSONAL_INFO.socialLinks.tiktok,
        },
        stats: Array.isArray(data.stats) && data.stats.length > 0 ? data.stats : STATIC_PERSONAL_INFO.stats,
      };
      cachedProfile = profile;
      return profile;
    }
  } catch (error) {
    console.warn("⚠️ Supabase Live profile fetch fallback:", error);
  }

  if (cachedProfile) {
    return cachedProfile;
  }

  return STATIC_PERSONAL_INFO;
}

/**
 * 🛡️ 3-TIER ERROR-SAFE EXPERIENCES FETCHER
 */
export async function getExperiences(): Promise<ExperienceItem[]> {
  try {
    const { data: rows, error } = await withTimeout(
      supabase.from("experiences").select("*").order("createdAt", { ascending: false })
    );

    if (!error && rows && rows.length > 0) {
      const items: ExperienceItem[] = rows.map((data: any) => {
        let techs: string[] = [];
        if (Array.isArray(data.technologies)) {
          techs = data.technologies;
        } else if (typeof data.technologies === "string") {
          try {
            const parsed = JSON.parse(data.technologies);
            if (Array.isArray(parsed)) techs = parsed;
          } catch {
            techs = data.technologies.split(",").map((s: string) => s.trim()).filter(Boolean);
          }
        }

        return {
          period: data.period || "2026 - Present",
          role: data.role || "Developer",
          company: data.company || "Company",
          location: data.location || "Bandung, Indonesia",
          description: data.description || "",
          technologies: techs.length > 0 ? techs : ["Web Development"],
          type: (data.type === "Education" || data.type === "Freelance") ? data.type : "Work",
        };
      });

      if (items.length > 0) {
        cachedExperiences = items;
        return items;
      }
    }
  } catch (error) {
    console.warn("⚠️ Supabase Live experiences fetch fallback:", error);
  }

  if (cachedExperiences && cachedExperiences.length > 0) {
    return cachedExperiences;
  }

  return STATIC_EXPERIENCES;
}

/**
 * 📬 SEND MESSAGE HANDLER (From Web Visitor to Admin Inbox)
 */
export async function sendMessage(payload: ContactMessagePayload): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    if (!payload.name || !payload.email || !payload.message) {
      throw new Error("Nama, email, dan pesan wajib diisi.");
    }

    const { data, error } = await supabase.from("messages").insert([
      {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
        status: "unread",
      },
    ]).select("id").single();

    if (error) {
      throw error;
    }

    return { success: true, id: data?.id };
  } catch (err: any) {
    console.error("Failed to send message via Supabase:", err);
    return { success: false, error: err.message || "Gagal mengirim pesan." };
  }
}
