import { useState, useEffect, useRef } from "react";
import image from "@/assets/image.jpeg";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const data = {
  name: "SK Shahid Shahriyor Ahmed",
  role: "Backend Developer",
  taglines: [
    "Architecting Scalable Systems",
    "Engineering Low-Latency Solutions",
    "Building Secure Backends",
    "Crafting Robust APIs",
    "Designing System Architecture",
  ],
  contact: {
    phone: "+91 7047736047",
    email: "01.shahriyor@gmail.com",
    linkedin: "https://www.linkedin.com/in/shahid-shahriyor-8b0417339/",
    github: "https://github.com/RIYO-pixel",
    location: "Sector-I, Kolkata-700064",
  },
  summary:
    "Computer engineering graduate with technical and analytical skills, passionate about designing innovative software and hardware solutions. Seeking to apply knowledge in programming, system architecture, and emerging technologies.",
  education: [
    { institution: "Meghnad Saha Institute of Technology", degree: "B.Tech CSE (affiliated to MAKAUT)", year: "2022 – 2026", location: "Kolkata", score: "GPA: 7.2" },
    { institution: "Burdwan CMS High School", degree: "Higher Secondary (WBCHSE)", year: "2020 – 2022", location: "Burdwan", score: "74%" },
    { institution: "Kusumgram Tyeba Institution", degree: "Secondary (WBBSE)", year: "2019 – 2020", location: "Burdwan", score: "83.14%" },
  ],
  internships: [
    {
      role: "Java Development Intern",
      company: "Pinnacle Labs",
      duration: "Aug 2025 – Sep 2025 · 4 Weeks · Virtual",
      points: [
        "Developed and tested Java-based applications using core OOP, collections, and exception handling.",
        "Completed coding tasks and mini-projects, improving debugging and problem-solving skills.",
        "Applied software development best practices and contributed to project deliverables.",
      ],
    },
  ],
  projects: [
    {
      name: "Khan Trading World",
      subtitle: "Trading Platform",
      url: "https://www.khantrader.in/",
      color: "#00f5ff",
      description: "Full-stack trading platform enabling real-time market tracking, portfolio management, and secure transaction processing with optimized backend performance.",
      points: [
        "Real-time market tracking & portfolio management",
        "Live price updates & analytics dashboards",
        "Secure authentication with encrypted data transmission",
        "Scalable database & cloud hosting infrastructure",
      ],
      tech: ["Java", "SQL", "HTML5", "CSS", "Git"],
    },
    {
      name: "Gyanin Academy",
      subtitle: "Educational Platform",
      url: "https://gyanin.academy/",
      color: "#3b82f6",
      description: "Real-time academic management system providing instant updates on courses, assignments, announcements, and performance analytics for students and faculty.",
      points: [
        "Role-based dashboards for student, teacher & admin",
        "Real-time updates on courses & assignments",
        "Secure login & dynamic content management",
        "Optimized backend for peak-load performance",
      ],
      tech: ["Java", "MySQL", "HTML5", "CSS", "Selenium"],
    },
    {
      name: "Biometric Voting System",
      subtitle: "Final Year Project – Patent Applied",
      url: null,
      color: "#a855f7",
      description: "Hybrid hardware-software voting system integrating fingerprint, facial recognition, and retina biometrics. Indian Provisional Patent Applied (App. No. 202631006669).",
      points: [
        "Multi-biometric: fingerprint, face & retina recognition",
        "Fake voter detection with cloud-based token validation",
        "Air-gapped EVM control for tamper-proof offline voting",
        "Provisional Patent Filed – App. No. 202631006669",
      ],
      tech: ["Python", "Biometrics", "Cloud", "Hardware", "Security"],
    },
  ],
  skills: {
    "Programming Languages": ["C", "Java", "SQL", "HTML5", "CSS"],
    "Tools & Platforms": ["Git", "JDK", "VS Code", "MySQL", "Power BI", "Colab", "JIRA", "Postman", "Selenium"],
    "Soft Skills": ["Problem Solving", "Team Collaboration", "Agile Development"],
  },
  certifications: ["Preparing Data for Analysis with Microsoft Excel"],
  languages: ["Bengali", "English", "Hindi"],
  quotes: [
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Any fool can write code a computer understands. Good programmers write code humans understand.", author: "Martin Fowler" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  ],
};

/* ══════════════════════════════════════════════
   PROFESSIONAL SVG ICONS
══════════════════════════════════════════════ */
const Icons = {
  GitHub: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  LinkedIn: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Email: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Phone: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Location: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  ExternalLink: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Shield: ({ size = 28, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Chart: ({ size = 28, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  Book: ({ size = 28, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      <line x1="12" y1="6" x2="16" y2="6"/>
      <line x1="12" y1="10" x2="16" y2="10"/>
    </svg>
  ),
  Award: ({ size = 22, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Code: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Terminal: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
  Users: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Globe: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Lock: ({ size = 28, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  ),
  Send: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  ChevronRight: ({ size = 16, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  Fingerprint: ({ size = 28, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/>
      <path d="M5 19.5C5.5 18 6 15 6 12c0-3.87 2.69-7 6-7 1.6 0 3.07.62 4.18 1.65"/>
      <path d="M11 19.93c.05-.79.15-1.57.3-2.33"/>
      <path d="M14 13a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2 0 1.4-.29 2.73-.8 3.93"/>
      <path d="M17 13c0 1.65-.35 3.22-1 4.63"/>
      <path d="M20 13c0 3.87-1.34 7.4-3.56 10.07"/>
      <path d="M2 17c.56-.35 1.14-.65 1.75-.9"/>
    </svg>
  ),
};

/* ══════════════════════════════════════════════
   HOOKS & UTILITIES
══════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "education", "contact"];
    const fn = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return active;
}

/* ══════════════════════════════════════════════
   ANIMATION WRAPPER  (slide-in from left/right/bottom)
══════════════════════════════════════════════ */
function SlideIn({ children, direction = "up", delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  const origins = {
    up: "translateY(40px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
    down: "translateY(-30px)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translate(0,0)" : origins[direction],
        transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   TYPEWRITER
══════════════════════════════════════════════ */
function Typewriter({ strings, speed = 80, pause = 1800 }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const cur = strings[idx % strings.length];
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplay(cur.slice(0, display.length + 1));
        if (display.length + 1 === cur.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(cur.slice(0, display.length - 1));
        if (display.length === 0) { setDeleting(false); setIdx(i => i + 1); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [display, deleting, idx, strings, speed, pause]);
  return <span>{display}<span className="text-cyan-400 animate-pulse">|</span></span>;
}

/* ══════════════════════════════════════════════
   COUNTER
══════════════════════════════════════════════ */
function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let c = 0;
        const step = Math.ceil(to / 55);
        const t = setInterval(() => { c += step; if (c >= to) { setN(to); clearInterval(t); } else setN(c); }, 22);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ══════════════════════════════════════════════
   PARTICLES
══════════════════════════════════════════════ */
function Particles() {
  const dots = Array.from({ length: 55 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 1.8 + 0.4,
    delay: Math.random() * 5, dur: Math.random() * 8 + 6,
  }));
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map(d => (
        <div key={d.id} className="absolute rounded-full bg-cyan-400"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size,
            animation: `floatDot ${d.dur}s ease-in-out ${d.delay}s infinite alternate`, opacity: 0.18 }} />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════
   QUOTE ROTATOR
══════════════════════════════════════════════ */
function QuoteRotator() {
  const [qi, setQi] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setQi(i => (i + 1) % data.quotes.length); setFade(true); }, 380);
    }, 4200);
    return () => clearInterval(t);
  }, []);
  const q = data.quotes[qi];
  return (
    <div className={`transition-all duration-400 ${fade ? "opacity-100" : "opacity-0"} py-5 px-4`}
      style={{ transition: "opacity 0.38s ease" }}>
      <div className="border-l-2 border-cyan-500/40 pl-4 max-w-lg mx-auto text-left">
        <p className="text-cyan-300/65 font-mono text-sm italic leading-relaxed">"{q.text}"</p>
        <p className="text-slate-600 text-xs font-mono mt-1.5">— {q.author}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   SKILL BADGE
══════════════════════════════════════════════ */
function SkillBadge({ name }) {
  return (
    <span className="inline-block px-3 py-1 m-1 text-xs font-mono rounded border border-cyan-500/25 bg-cyan-500/5
      text-cyan-300 hover:bg-cyan-500/18 hover:border-cyan-400 hover:text-white
      transition-all duration-250 cursor-default hover:scale-105"
      style={{ transition: "all 0.25s ease" }}>
      {name}
    </span>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
const NAV_LINKS = ["home", "about", "skills", "projects", "education", "contact"];

function Nav({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-900/30 bg-black/75 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-cyan-400 text-base font-bold tracking-wider select-none">
          &lt;SK_<span className="text-white">Shahriyor</span><span className="text-cyan-400">/&gt;</span>
        </span>
        <div className="hidden md:flex gap-7">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`}
              className={`capitalize text-sm font-mono transition-all duration-200 hover:text-cyan-400
                ${active === l ? "text-cyan-400 border-b border-cyan-400 pb-0.5" : "text-slate-500"}`}>
              {l}
            </a>
          ))}
        </div>
        <button className="md:hidden text-cyan-400" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-cyan-900/30 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}
              className="capitalize text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ══════════════════════════════════════════════
   SECTION TITLE
══════════════════════════════════════════════ */
function SectionTitle({ num, title, center = false }) {
  return (
    <SlideIn direction="left">
      <div className={center ? "text-center" : ""}>
        <span className="font-mono text-cyan-500/45 text-sm">{num}.</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-1 inline-block ml-2 tracking-tight">
          {title}<span className="text-cyan-400">.</span>
        </h2>
        <div className={`mt-3 h-px bg-gradient-to-r from-cyan-500/50 to-transparent ${center ? "mx-auto max-w-xs" : "max-w-xs"}`} />
      </div>
    </SlideIn>
  );
}

/* ══════════════════════════════════════════════
   PROJECT ICON MAP
══════════════════════════════════════════════ */
function ProjectIcon({ name, color, size = 28 }) {
  const props = { size, className: "" , style: { color } };
  if (name.toLowerCase().includes("trading")) return <Icons.Chart {...props} />;
  if (name.toLowerCase().includes("academy") || name.toLowerCase().includes("gyanin")) return <Icons.Book {...props} />;
  return <Icons.Fingerprint {...props} />;
}

/* ══════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════ */
export default function Portfolio() {
  const active = useActiveSection();

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-x-hidden"
      style={{ fontFamily: "'Syne', 'Segoe UI', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Syne:wght@400;600;700;800;900&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace !important; }
        @keyframes floatDot {
          from { transform: translateY(0) scale(1); opacity: 0.12; }
          to   { transform: translateY(-28px) scale(1.6); opacity: 0.35; }
        }
        @keyframes scanLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg,rgba(0,245,255,0.025) 1px, transparent 1px);
          background-size: 42px 42px;
        }
        .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,245,255,0.07); }
        .neon { text-shadow: 0 0 10px rgba(0,245,255,0.7), 0 0 22px rgba(0,245,255,0.35); }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #030712; }
        ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.3); border-radius: 2px; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(0,245,255,0.25); }
        @keyframes pulseRing {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,245,255,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(0,245,255,0.08); }
        }
        .pulse-ring { animation: pulseRing 2.8s ease-in-out infinite; }
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .spin-slow { animation: spinSlow 22s linear infinite; }
        .spin-rev  { animation: spinSlow 32s linear infinite reverse; }
      `}</style>

      {/* BG layers */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-70" />
      <Particles />
      {/* Ambient glow */}
      <div className="fixed top-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }} />
      <div className="fixed bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-[0.05] blur-3xl pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

      <Nav active={active} />

      {/* ── HERO ─────────────────────────────────────── */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="text-center px-6 max-w-4xl mx-auto">

          {/* Avatar */}
          <SlideIn direction="down" delay={0}>
            <div className="relative inline-block mb-8">
              <div className="w-28 h-28 rounded-2xl border border-cyan-400/40 pulse-ring overflow-hidden
                mx-auto shadow-[0_0_50px_rgba(0,245,255,0.12)]">
                <img
                  src={image}
                  alt="SK Shahid Shahriyor Ahmed"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-3 rounded-2xl border border-cyan-500/15 spin-slow pointer-events-none" />
              <div className="absolute -inset-6 rounded-3xl border border-blue-500/08 spin-rev pointer-events-none" />
              {/* Status */}
              <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-black/80 border border-green-500/40 rounded-full px-2 py-1">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.9)]" />
                <span className="font-mono text-green-400 text-[10px]">Available</span>
              </div>
            </div>
          </SlideIn>

          {/* Badge */}
          <SlideIn direction="up" delay={80}>
            <div className="inline-flex items-center gap-2 font-mono text-cyan-400/60 text-xs tracking-widest uppercase mb-4
              border border-cyan-900/50 rounded-full px-4 py-1.5 bg-cyan-950/20">
              <Icons.Terminal size={12} className="text-cyan-400/60" />
              Backend Developer · Kolkata, IN
            </div>
          </SlideIn>

          {/* Name */}
          <SlideIn direction="up" delay={140}>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-3">
              SK Shahid{" "}
              <span className="text-cyan-400 neon">Shahriyor</span>{" "}
              Ahmed
            </h1>
          </SlideIn>

          {/* Typewriter */}
          <SlideIn direction="up" delay={200}>
            <div className="text-lg md:text-xl text-slate-400 font-mono mb-8 h-8">
              <Typewriter strings={data.taglines} />
            </div>
          </SlideIn>

          {/* Quote */}
          <SlideIn direction="up" delay={260}>
            <QuoteRotator />
          </SlideIn>

          {/* Stats */}
          <SlideIn direction="up" delay={320}>
            <div className="flex flex-wrap justify-center gap-5 mb-8 mt-2">
              {[
                { label: "Projects", value: 3, suffix: "+" },
                { label: "Technologies", value: 14, suffix: "+" },
                { label: "Internship", value: 1, suffix: "" },
                { label: "Patent Filed", value: 1, suffix: "" },
              ].map(s => (
                <div key={s.label} className="text-center bg-cyan-500/5 border border-cyan-500/20 rounded-xl px-5 py-3
                  hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300">
                  <div className="text-2xl font-black text-cyan-400 font-mono neon">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </SlideIn>

          {/* CTAs */}
          <SlideIn direction="up" delay={380}>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#projects" className="group flex items-center gap-2 px-7 py-3 bg-cyan-500 hover:bg-cyan-400
                text-black font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]
                hover:shadow-[0_0_24px_rgba(0,245,255,0.45)]">
                View Projects
                <Icons.ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center gap-2 px-7 py-3 border border-cyan-500/40
                text-cyan-400 font-bold text-sm rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10
                transition-all duration-200">
                Contact Me
              </a>
              <a href={data.contact.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-slate-700 text-slate-400
                font-bold text-sm rounded-xl hover:border-slate-500 hover:text-white hover:bg-white/5
                transition-all duration-200">
                <Icons.GitHub size={16} />
                GitHub
              </a>
            </div>
          </SlideIn>

          {/* Scroll hint */}
          <SlideIn direction="up" delay={440}>
            <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
              <span className="font-mono text-xs text-slate-600">scroll</span>
              <div className="w-px h-10 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle num="01" title="About Me" />

          <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
            {/* Bio */}
            <SlideIn direction="left" delay={0}>
              <p className="text-slate-300 text-base leading-relaxed mb-6">{data.summary}</p>
              <div className="space-y-3">
                {[
                  { Icon: Icons.Location, label: "Location", value: data.contact.location },
                  { Icon: Icons.Email,    label: "Email",    value: data.contact.email },
                  { Icon: Icons.Phone,    label: "Phone",    value: data.contact.phone },
                  { Icon: Icons.Globe,    label: "Languages", value: data.languages.join(" · ") },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <item.Icon size={15} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">{item.label}</div>
                      <div className="text-slate-300 text-sm font-mono">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <a href={data.contact.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10
                  rounded-lg hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-sm text-slate-300">
                  <Icons.GitHub size={16} />
                  GitHub
                </a>
                <a href={data.contact.linkedin} rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10
                  rounded-lg hover:border-blue-500/40 hover:text-blue-400 transition-all text-sm text-slate-300">
                  <Icons.LinkedIn size={16} />
                  LinkedIn
                </a>
              </div>
            </SlideIn>

            {/* Terminal card */}
            <SlideIn direction="right" delay={100}>
              <div className="bg-[#0d1117] border border-cyan-900/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,245,255,0.05)]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-slate-600 ml-2">shahriyor@portfolio ~ </span>
                </div>
                <div className="p-5 font-mono text-sm space-y-2 leading-relaxed">
                  <div><span className="text-green-400">$ </span><span className="text-cyan-300">whoami</span></div>
                  <div className="text-slate-400 pl-3">SK Shahid Shahriyor Ahmed</div>
                  <div className="mt-1"><span className="text-green-400">$ </span><span className="text-cyan-300">cat role.txt</span></div>
                  <div className="text-slate-400 pl-3">Backend Developer</div>
                  <div className="mt-1"><span className="text-green-400">$ </span><span className="text-cyan-300">ls ./certifications</span></div>
                  <div className="text-yellow-400/80 pl-3">MS_Excel_Data_Analysis.cert</div>
                  <div className="mt-1"><span className="text-green-400">$ </span><span className="text-cyan-300">cat ./patent.txt</span></div>
                  <div className="text-purple-400 pl-3">Indian Provisional Patent</div>
                  <div className="text-purple-300/70 pl-3">App. No. 202631006669</div>
                  <div className="mt-1"><span className="text-green-400">$ </span><span className="text-cyan-300">echo $STATUS</span></div>
                  <div className="text-green-400 pl-3">Open to opportunities ✓</div>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-green-400">$ </span>
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────── */}
      <section id="skills" className="py-24 px-6 bg-cyan-950/[0.04]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle num="02" title="Skills & Tools" />

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {Object.entries(data.skills).map(([cat, items], i) => (
              <SlideIn key={cat} direction="up" delay={i * 90}>
                <div className="bg-white/[0.02] border border-white/[0.07] hover:border-cyan-500/30 rounded-xl p-5 card-hover h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,245,255,0.8)]" />
                    <span className="font-mono text-cyan-400 text-xs font-bold uppercase tracking-wider">{cat}</span>
                  </div>
                  <div className="flex flex-wrap">{items.map(s => <SkillBadge key={s} name={s} />)}</div>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Internship */}
          <SlideIn direction="up" delay={300} className="mt-8">
            <div className="bg-white/[0.02] border border-blue-500/20 hover:border-blue-400/35 rounded-xl p-6 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
              <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                <div>
                  <div className="font-mono text-blue-400 text-[10px] uppercase tracking-widest mb-1">Internship</div>
                  <h4 className="text-white font-bold text-lg">Java Development Intern</h4>
                  <span className="text-blue-400 font-mono text-sm">Pinnacle Labs</span>
                </div>
                <span className="font-mono text-xs text-slate-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  Aug – Sep 2025 · 4 Weeks
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {data.internships[0].points.map((p, i) => (
                  <div key={i} className="flex gap-2.5 text-sm text-slate-300">
                    <Icons.ChevronRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle num="03" title="Featured Projects" />
          <div className="mt-10 space-y-6">
            {data.projects.map((p, i) => (
              <SlideIn key={p.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <article className="group relative bg-white/[0.02] border border-white/[0.07]
                  hover:border-white/[0.16] rounded-2xl overflow-hidden card-hover">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        {/* Professional icon instead of emoji */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0"
                          style={{ borderColor: `${p.color}30`, backgroundColor: `${p.color}10` }}>
                          <ProjectIcon name={p.name} color={p.color} size={26} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-tight">
                            {p.name}
                          </h3>
                          <span className="font-mono text-xs" style={{ color: `${p.color}cc` }}>{p.subtitle}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        {p.url ? (
                          <a href={p.url} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono
                            hover:bg-white/5 transition-all"
                            style={{ borderColor: `${p.color}40`, color: p.color }}>
                            <Icons.ExternalLink size={12} />
                            Live Site
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border
                            border-violet-500/30 text-violet-400 text-xs font-mono">
                            <Icons.Lock size={12} />
                            Patent Filed
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

                    <div className="grid md:grid-cols-2 gap-2.5 mb-5">
                      {p.points.map((pt, j) => (
                        <div key={j} className="flex gap-2.5 text-sm text-slate-300">
                          <Icons.ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: p.color }} />
                          {pt}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {p.tech.map(t => (
                        <span key={t} className="font-mono text-xs px-2.5 py-1 rounded border border-white/10
                          text-slate-500 bg-white/[0.03] hover:text-slate-300 hover:border-white/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none
                    transition-opacity duration-400"
                    style={{ boxShadow: `inset 0 0 80px ${p.color}06` }} />
                </article>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────── */}
      <section id="education" className="py-24 px-6 bg-cyan-950/[0.04]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle num="04" title="Education" />

          <div className="mt-10 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent hidden md:block" />
            <div className="space-y-5 md:pl-12">
              {data.education.map((e, i) => (
                <SlideIn key={i} direction="left" delay={i * 100}>
                  <div className="relative group bg-white/[0.02] border border-white/[0.07]
                    hover:border-cyan-500/25 rounded-xl p-5 card-hover">
                    {/* Timeline dot */}
                    <div className="absolute -left-14 top-5 w-5 h-5 rounded-full border-2 border-cyan-400
                      bg-[#030712] shadow-[0_0_10px_rgba(0,245,255,0.5)] hidden md:flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <div>
                        <h4 className="font-bold text-white group-hover:text-cyan-200 transition-colors">{e.institution}</h4>
                        <p className="text-slate-400 text-sm mt-1">{e.degree}</p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <Icons.Location size={11} className="text-slate-600" />
                          <span className="font-mono text-xs text-slate-600">{e.location}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-400">{e.year}</span>
                        <div className="font-mono text-cyan-400 text-sm font-bold mt-2 neon">{e.score}</div>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <SlideIn direction="up" delay={350} className="mt-10">
            <div className="font-mono text-slate-600 text-xs uppercase tracking-widest mb-4">Certifications</div>
            <div className="flex items-center gap-4 bg-white/[0.02] border border-yellow-500/20
              hover:border-yellow-500/40 rounded-xl px-5 py-4 transition-all duration-300 card-hover">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/25
                flex items-center justify-center shrink-0">
                <Icons.Award size={20} className="text-yellow-400" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-yellow-600 uppercase tracking-wider mb-0.5">Microsoft Certified</div>
                <span className="text-yellow-300 font-medium text-sm">{data.certifications[0]}</span>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle num="05" title="Get In Touch" center />
          <SlideIn direction="up" delay={80}>
            <p className="text-slate-400 mt-4 mb-10 text-base leading-relaxed max-w-xl mx-auto">
              Open to new opportunities, collaborations, and interesting projects.<br />
              Let's build something remarkable together.
            </p>
          </SlideIn>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { Icon: Icons.Email,    label: "Email",    value: data.contact.email,    href: `mailto:${data.contact.email}` },
              { Icon: Icons.Phone,    label: "Phone",    value: data.contact.phone,    href: `tel:${data.contact.phone}` },
              { Icon: Icons.GitHub,   label: "GitHub",   value: "github.com/RIYO-pixel", href: data.contact.github },
              { Icon: Icons.LinkedIn, label: "LinkedIn", value: "linkedin.com/in/shahid-shahriyor", href: data.contact.linkedin },
            ].map((c, i) => (
              <SlideIn key={c.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <a href={c.href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.07]
                  hover:border-cyan-500/35 rounded-xl p-4 card-hover text-left group w-full">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20
                    flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <c.Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-600 uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">{c.value}</div>
                  </div>
                  <Icons.ExternalLink size={13} className="ml-auto text-slate-700 group-hover:text-cyan-500 transition-colors" />
                </a>
              </SlideIn>
            ))}
          </div>

          <SlideIn direction="up" delay={360}>
            <a href={`mailto:${data.contact.email}`}
              className="group inline-flex items-center gap-3 px-10 py-4
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
              text-black font-extrabold rounded-xl transition-all duration-300
              hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(0,245,255,0.38)] font-mono text-sm">
              <Icons.Send size={17} />
              Send a Message
            </a>
          </SlideIn>

          {/* Footer */}
          <SlideIn direction="up" delay={440}>
            <div className="mt-16 pt-8 border-t border-white/5 font-mono text-xs text-slate-700">
              <p>Designed & Built by <span className="text-cyan-500/70">SK Shahid Shahriyor Ahmed</span> · {new Date().getFullYear()}</p>
              <p className="mt-1 text-slate-800">&lt;/portfolio&gt;</p>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
