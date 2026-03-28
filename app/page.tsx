import Image from "next/image";
import {
  CalendarDays,
  Code2,
  Download,
  Mail,
} from "lucide-react";
import AnimatedSection from "./components/AnimatedSection";
import HeroIntro from "./components/HeroIntro";
import NeuralParticles from "./components/NeuralParticles";

const navLinks = [
  "Home",
  "Experience",
  "Projects",
  "Publications",
  "Blog",
  "Contact",
];
const resumeLink = "/Resume_Devershika.pdf";

const experience = [
  {
    role: "Research Intern",
    company: "Symbiosis Centre for Applied Artificial Intelligence",
    wins: [
      "Built a multimodal deep learning pipeline combining fundus imagery with clinical parameters for early-stage prediction.",
      "Improved model accuracy from 41.8% to 72.7% using targeted preprocessing, augmentation, and architecture tuning.",
      "Applied domain-adversarial training to reduce cross-cohort performance gaps between IDRiD and MAL datasets.",
      "Improved fairness by reducing demographic parity gap while keeping overall model performance stable.",
      "Developed GAN-based synthetic traffic generation and adversarial debiasing for robust anomaly detection.",
      "Improved inference accuracy from 50% to 72% and enhanced generalization to evolving attack patterns.",
    ],
  },
  {
    role: "AI Club",
    company: "AI Club - SIT Pune (Full-time, 2 yrs 8 mos) | Pune District, Maharashtra, India",
    wins: [
      "Events Head (Jan 2026 - Present): Leading event planning and execution for technical and community initiatives.",
      "Events Co-head (Mar 2025 - Feb 2026): Co-led event management operations, coordination, and analytical reporting of engagement outcomes.",
      "Media & Events Member (Aug 2023 - Mar 2025): Supported media design and event operations with Canva and prompt engineering workflows.",
    ],
  },
  {
    role: "BrushesToPixels",
    company: "BrushesToPixels (Full-time, 2 yrs) | Pune District, Maharashtra, India",
    wins: [
      "Documentation Head (Mar 2025 - Jul 2025, 5 mos): Led documentation planning, structuring, and content quality for team deliverables.",
      "Design Volunteer (Aug 2023 - Mar 2025, 1 yr 8 mos, On-site): Supported design execution and visual communication for events and initiatives.",
    ],
  },
];

const projects = [
  {
    title:
      "Development of Prototype for Automated Detection of Retinopathy of Prematurity (ROP)",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    stack: "TensorFlow · Keras · OpenCV · EfficientNetB0",
    details:
      "Multimodal ROP prototype combining fundus images and clinical features to support affordable, early-stage neonatal eye screening.",
  },
  {
    title:
      "Domain Adversarial Neural Networks for mitigating Ethnic bias in Diabetic Retinopathy (DR) Datasets",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    stack: "PyTorch · TensorFlow · DANN · Scikit-learn",
    details:
      "Studied cross-cohort DR domain shift (IDRiD vs MAL) and applied DANN to learn cohort-invariant features and improve fairness.",
  },
  {
    title:
      "Adversarial Debiasing of Machine Learning Models for Enhanced Network Security against DDoS Attack",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · TensorFlow · GANs · Random Forest",
    details:
      "Used GAN-based synthetic traffic and adversarial debiasing to boost DDoS detection robustness and reduce bias in packet-level features.",
  },
  {
    title: "Demand Forecasting Using Time Series & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · Pandas · Scikit-learn · Statsmodels · Prophet",
    details:
      "Store × Product level forecasting engine comparing ARIMA, Holt-Winters, Prophet and ML baselines per SKU with leakage-free splits, achieving 15–30% MAPE reduction and R² up to 0.75.",
  },
  {
    title:
      "AI-Based Recognition of High-Resolution Transmission Electron Microscopy (HRTEM) in Rare Earth Orthoferrites",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e7d6a4c2f56?auto=format&fit=crop&w=1200&q=80",
    stack: "PyTorch · abTEM/ASE · SimCLR · CUDA · scikit-image",
    details:
      "Physics-informed HRTEM classifier that fuses image features with crystallographic signals to identify all 14 Bravais lattice types and reduces expert analysis from hours to sub-second inference.",
  },
  {
    title: "Data-Driven Menstrual Analysis of Stress and Mood in Indian Women",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · Pandas · NumPy · Matplotlib · Seaborn",
    details:
      "Survey-based analysis of stress and mood patterns across life stages for 219 Indian women, linking occupation and hormonal transitions.",
  },
  {
    title: "Suspicious vs Non-suspicious Transaction Analysis",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · Scikit-learn · Pandas · Power BI · GANs",
    details:
      "AML-oriented analytics pipeline using GAN-based synthetic data and ensemble models to flag suspicious transactions and cut false positives.",
  },
  {
    title: "Real Estate Management System",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · SQL · Pandas · Streamlit",
    details:
      "Centralized property and transaction management with optimized SQL queries, CRM modules, and reporting dashboards.",
  },
  {
    title: "Student Course Management System",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    stack: "Java · OOP · File I/O/DB",
    details:
      "Role-based student platform for Admin, Student, and Faculty with secure auth, course management, and modular OOP design.",
  },
  {
    title: "GenAI Marketing Content Assistant",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · Transformers · OpenAI API · Flask",
    details:
      "Fine-tuned transformer assistant that generates brand-aligned marketing copy with prompt templates and human-in-the-loop review.",
  },
  {
    title:
      "Multimodal Deep Learning and Agentic AI for Context-Aware Legal Reasoning in the Indian Judiciary",
    image:
      "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1200&q=80",
    stack: "FastAPI · Sentence-BERT · Qdrant · LangGraph · Next.js",
    details:
      "Agentic legal search system combining retrieval, summarization, and verification agents for faster, reliable case reasoning.",
  },
  {
    title: "Sustainable Fashion Discovery (NLP)",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    stack: "Python · DistilBERT · ALBERT · ELECTRA · spaCy",
    details:
      "NLP pipeline for sustainability-focused text classification, NER, and sentiment analysis over fashion content and brand reports.",
  },
];

const publications = [
  {
    title: "Data-Driven Menstrual Analysis of Stress and Mood in Indian Women",
    venue: "International Conference on Artificial Intelligence and Data Engineering",
    pdf: "https://doi.org/10.1109/AIDE64228.2025.10987426",
    citation: "https://doi.org/10.1109/AIDE64228.2025.10987426",
  },
];

const blogPosts = [
  {
    title: "Security Failed. Resilience Survived: The AI Shift in Cyber Defense",
    date: "Medium",
    time: "Article",
    link: "https://medium.com/@devershikam/security-failed-resilience-survived-the-ai-shift-in-cyber-defense-6fc811a691a8",
  },
  {
    title:
      "Understanding the Link Layer — The Bridge Between Physical Signals and Network Communication",
    date: "Medium",
    time: "Article",
    link: "https://medium.com/@devershikam/understanding-the-link-layer-the-bridge-between-physical-signals-and-network-communication-955094408d7e",
  },
];

export default function Home() {
  return (
    <main className="relative h-screen snap-y snap-mandatory overflow-y-auto bg-[#0A192F] text-white">
      <NeuralParticles />

      <AnimatedSection id="home">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="ai-mosaic" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
          <HeroIntro />
        </div>
      </AnimatedSection>

      <AnimatedSection id="bio" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <nav className="glass-card sticky top-4 z-20 mb-10 flex flex-wrap gap-3 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase() === "home" ? "home" : link.toLowerCase()}`}
                className="rounded-full border border-[#64FFDA]/35 px-4 py-1.5 text-sm text-[#64FFDA] transition hover:bg-[#64FFDA]/10"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="grid items-center gap-8 md:grid-cols-[320px_1fr]">
            <div className="glass-card p-4">
              <Image
                src="/profile-photo.png"
                alt="Professional headshot"
                width={900}
                height={1200}
                className="h-[360px] w-full rounded-xl object-cover shadow-[0_0_30px_rgba(100,255,218,0.45)]"
              />
            </div>

            <div className="glass-card p-7">
              <h2 className="mb-4 text-3xl font-bold text-[#64FFDA]">About Me</h2>
              <p className="mb-4 leading-relaxed text-slate-200">
                I am an AI Engineer and B.Tech AIML student at Symbiosis Institute
                of Technology, currently working as a Research Intern at the Symbiosis
                Centre for Applied Artificial Intelligence. I focus on computer vision,
                deep learning, and multimodal AI for real-world decision support.
              </p>
              <p className="leading-relaxed text-slate-300">
                My recent work includes domain adaptation for diabetic retinopathy,
                automated ROP detection, GAN-based security modeling, and agentic AI
                systems for legal reasoning. I actively support Women in Tech through
                mentorship and collaborative technical communities.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={resumeLink}
                  download
                  className="rounded-full border border-[#64FFDA]/35 px-3 py-1 text-[#64FFDA]"
                >
                  Download Resume
                </a>
                <a
                  href="mailto:devershikam@gmail.com"
                  className="rounded-full border border-[#64FFDA]/35 px-3 py-1 text-[#64FFDA]"
                >
                  devershikam@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/devershika-mohane"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#FF7E5F]/35 px-3 py-1 text-[#FFBAA8]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Devershika"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#64FFDA]/35 px-3 py-1 text-[#64FFDA]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-[#FF7E5F]">Career Timeline</h2>
          <div className="relative space-y-8 border-l border-[#FF7E5F]/30 pl-8">
            {experience.map((item) => (
              <article key={item.role} className="group relative">
                <span className="absolute -left-[2.23rem] top-2 h-4 w-4 rounded-full border-2 border-[#FF7E5F] bg-[#0A192F] transition group-hover:bg-[#FF7E5F]" />
                <div className="glass-card p-6">
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="mb-3 text-[#FF7E5F]">{item.company}</p>
                  <ul className="list-disc space-y-2 pl-5 text-slate-200">
                    {item.wins.map((win) => (
                      <li key={win}>{win}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="mb-10 text-4xl font-bold text-[#64FFDA]">Project Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="flip-card h-96">
                <div className="flip-card-inner h-full w-full">
                  <div className="flip-card-face glass-card flex h-full flex-col overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                      <span className="rounded-full border border-[#64FFDA]/35 px-3 py-1 text-sm text-[#64FFDA]">
                        {project.stack}
                      </span>
                    </div>
                  </div>
                  <div className="flip-card-face flip-back glass-card flex h-full flex-col justify-between p-5">
                    <p className="leading-relaxed text-slate-200">{project.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="publications" className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-2">
          <div className="glass-card p-6">
            <h2 className="mb-5 text-3xl font-bold text-[#64FFDA]">
              Publications
            </h2>
            <ul className="space-y-4">
              {publications.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="mb-1">{item.title}</p>
                  <p className="mb-3 text-sm text-slate-300">{item.venue}</p>
                  <div className="flex gap-3 text-sm">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#64FFDA]"
                    >
                      <Download size={15} /> Download PDF
                    </a>
                    <a
                      href={item.citation}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#FF7E5F]"
                    >
                      <Code2 size={15} /> Citation
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="blog" className="glass-card p-6">
            <h2 className="mb-5 text-3xl font-bold text-[#FF7E5F]">Blogs</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[#FF7E5F]/25 bg-[#112240]/70 p-4 transition hover:-translate-y-1"
                >
                  <h3 className="mb-3 text-lg font-semibold">{post.title}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={14} /> {post.date}
                    </span>
                    <span className="rounded-md bg-[#FF7E5F]/20 px-2 py-1 text-[#FFBAA8]">
                      {post.time}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="terminal-shell overflow-hidden rounded-2xl border border-[#64FFDA]/35">
            <div className="flex items-center gap-2 border-b border-[#64FFDA]/25 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <p className="ml-2 text-xs text-[#64FFDA]">contact.sh</p>
            </div>
            <form className="grid gap-4 p-5">
              <label className="terminal-label">
                name:
                <input type="text" placeholder="Your Name" className="terminal-input" />
              </label>
              <label className="terminal-label">
                email:
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="terminal-input"
                />
              </label>
              <label className="terminal-label">
                message:
                <textarea
                  rows={4}
                  placeholder="Let's build something meaningful together."
                  className="terminal-input resize-none"
                />
              </label>
              <button type="submit" className="btn-teal w-fit">
                <Mail size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
