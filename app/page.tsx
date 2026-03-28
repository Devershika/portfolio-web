import Image from "next/image";
import { CalendarDays, Code2, Download } from "lucide-react";
import AnimatedSection from "./components/AnimatedSection";
import ContactForm from "./components/ContactForm";
import HeroIntro from "./components/HeroIntro";
import ThemeToggle from "./components/ThemeToggle";

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
    <main className="bg-page text-fg relative h-screen snap-y snap-mandatory overflow-y-auto">
      <ThemeToggle />

      <AnimatedSection id="home">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="ai-mosaic" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
          <HeroIntro />
        </div>
      </AnimatedSection>

      <AnimatedSection id="bio" className="border-section border-t">
        <div className="mx-auto w-full max-w-6xl px-6">
          <nav className="glass-card sticky top-4 z-20 mb-10 flex flex-wrap gap-3 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase() === "home" ? "home" : link.toLowerCase()}`}
                className="hover-accent-muted rounded-full border border-accent-soft px-4 py-1.5 text-sm text-accent transition"
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
                className="shadow-portrait h-[360px] w-full rounded-xl object-cover"
              />
            </div>

            <div className="glass-card p-7">
              <h2 className="text-accent mb-4 text-3xl font-bold">About Me</h2>
              <p className="text-body-mid mb-4 leading-relaxed">
                I am an AI Engineer and B.Tech student in Artificial Intelligence and
                Machine Learning at Symbiosis Institute of Technology, currently working
                as a Research Intern at the Symbiosis Centre for Applied Artificial
                Intelligence. My work focuses on computer vision, deep learning, and
                multimodal AI, aimed at building intelligent systems for real-world
                decision support.
              </p>
              <p className="text-body-soft leading-relaxed">
                I have gained hands-on experience working on diverse and impactful
                projects, including domain adaptation for diabetic retinopathy,
                automated detection of Retinopathy of Prematurity (ROP), GAN-based
                approaches for cybersecurity modeling, and the development of agentic AI
                systems for legal reasoning. These experiences have strengthened my
                ability to design scalable, data-driven, and reliable AI solutions. I
                adopt a research-oriented and analytical approach to problem-solving,
                with a focus on building robust and interpretable models for practical
                applications. I am particularly interested in leveraging advanced AI
                techniques to address complex challenges across healthcare, security, and
                intelligent automation, while continuously learning and maintaining a
                balance through activities such as badminton and performing arts.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a
                  href={resumeLink}
                  download
                  className="rounded-full border border-accent-soft px-3 py-1 text-accent"
                >
                  Download Resume
                </a>
                <a
                  href="mailto:devershikam@gmail.com"
                  className="rounded-full border border-accent-soft px-3 py-1 text-accent"
                >
                  devershikam@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/devershika-mohane"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-warm-soft px-3 py-1 text-warm-light"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Devershika"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-accent-soft px-3 py-1 text-accent"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" className="border-section border-t">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="text-warm mb-10 text-4xl font-bold">Career Timeline</h2>
          <div className="relative space-y-8 border-l border-warm-soft pl-8">
            {experience.map((item) => (
              <article key={item.role} className="group relative">
                <span className="bg-page absolute -left-[2.23rem] top-2 h-4 w-4 rounded-full border-2 border-[var(--accent-warm)] transition group-hover:bg-[var(--accent-warm)]" />
                <div className="glass-card p-6">
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-warm mb-3">{item.company}</p>
                  <ul className="text-body-mid list-disc space-y-2 pl-5">
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

      <AnimatedSection id="projects" className="border-section border-t">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-accent mb-10 text-4xl font-bold">Project Gallery</h2>
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
                      <span className="rounded-full border border-accent-soft px-3 py-1 text-sm text-accent">
                        {project.stack}
                      </span>
                    </div>
                  </div>
                  <div className="flip-card-face flip-back glass-card flex h-full flex-col justify-between p-5">
                    <p className="text-body-mid leading-relaxed">{project.details}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="publications" className="border-section border-t">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-2">
          <div className="glass-card p-6">
            <h2 className="text-accent mb-5 text-3xl font-bold">
              Publications
            </h2>
            <ul className="space-y-4">
              {publications.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] p-4"
                >
                  <p className="mb-1">{item.title}</p>
                  <p className="text-body-soft mb-3 text-sm">{item.venue}</p>
                  <div className="flex gap-3 text-sm">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent inline-flex items-center gap-1"
                    >
                      <Download size={15} /> Download PDF
                    </a>
                    <a
                      href={item.citation}
                      target="_blank"
                      rel="noreferrer"
                      className="text-warm inline-flex items-center gap-1"
                    >
                      <Code2 size={15} /> Citation
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="blog" className="glass-card p-6">
            <h2 className="text-warm mb-5 text-3xl font-bold">Blogs</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blog-card rounded-xl border border-warm-25 p-4 transition hover:-translate-y-1"
                >
                  <h3 className="mb-3 text-lg font-semibold">{post.title}</h3>
                  <div className="text-body-soft flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={14} /> {post.date}
                    </span>
                    <span className="bg-accent-faint text-warm-light rounded-md px-2 py-1">
                      {post.time}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="border-section border-t">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="terminal-shell overflow-hidden rounded-2xl border border-accent-soft">
            <div className="flex items-center gap-2 border-b border-accent-soft px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <p className="text-accent ml-2 text-xs">contact.sh</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
