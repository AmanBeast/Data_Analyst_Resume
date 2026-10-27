"use client";

import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectVisualizer from "../components/ProjectVisualizer";
import ContactSection from "../components/ContactSection";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import {
  FileText,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Database,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Code2
} from "lucide-react";

export default function Home() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  const domains = [
    "All",
    "Healthcare & Operations",
    "Retail & E-Commerce",
    "Telecom & Subscription Analytics",
    "Predictive Analytics & Web Deployment",
    "BFSI & Wealth Management",
    "People Analytics & HR"
  ];

  const filteredProjects = selectedDomain === "All"
    ? projectsData
    : projectsData.filter((p) => p.domain === selectedDomain);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Floating Glass Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20">
              AB
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base block">Aman Bisht</span>
              <span className="text-[11px] text-cyan-400 font-medium block">Data Analyst & BI Engineer</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition">Projects & Visualizations</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills Matrix</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact Me</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/AmanBeast"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/aman-bisht"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-800 transition"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden">
        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Data Analyst & BI Roles in MNCs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Transforming Complex Data into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Executive Decisions
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Hi, I’m <strong>Aman Bisht</strong>. I build enterprise-grade data models, automated SQL ETL pipelines,
              and dynamic Power BI & Tableau dashboards. Plus, I bridge the gap between analytics and deployment by building
              interactive decision-support web applications using Streamlit, Python, and modern web frameworks.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 shadow-xl shadow-cyan-500/25 transition flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" /> Explore Hover Visualizations
              </a>

              <a
                href="/Aman_Bisht_Data_Analyst_Resume_1Page.docx"
                download
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm hover:bg-slate-800 hover:border-slate-600 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" /> Download 1-Page ATS Resume
              </a>

              <a
                href="/Aman_Bisht_Data_Analyst_Resume_2Page.docx"
                download
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:border-slate-600 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-400" /> Download 2-Page Detailed Resume
              </a>
            </div>
          </div>

          {/* Key Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">+32%</div>
              <div className="text-xs text-slate-300 font-medium">Data Integrity Boost</div>
              <div className="text-[11px] text-slate-500">Alpha IT Mohali ETL Pipelines</div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">-60%</div>
              <div className="text-xs text-slate-300 font-medium">Reporting Turnaround Time</div>
              <div className="text-[11px] text-slate-500">Replaced manual Excel with SQL views</div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">-22%</div>
              <div className="text-xs text-slate-300 font-medium">Hospital Clinic Idle Time</div>
              <div className="text-[11px] text-slate-500">Tableau 5-Entity Clinical Model</div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-rose-400 mb-1">14% ARR</div>
              <div className="text-xs text-slate-300 font-medium">Subscription Churn Protected</div>
              <div className="text-[11px] text-slate-500">Telecom Diagnostic EDA Model</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Hover Visualizations */}
      <section id="projects" className="py-16 px-6 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                Interactive Project Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Hover to Inspect Summaries & Visualizations
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md mt-2 md:mt-0">
              Hover over or click any project to reveal live dashboard charts, SQL CTE queries, and business architecture.
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
            {domains.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${selectedDomain === dom
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
              >
                {dom}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={activeProject?.id === project.id}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section id="skills" className="py-16 px-6 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white">Technical Skills Matrix</h2>
            <p className="text-sm text-slate-400 mt-2">
              Equipped with enterprise-grade data tools across the complete data lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: BI & Visualization */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-800">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">BI & Visualization</h3>
              <p className="text-xs text-slate-400 mb-4">
                Executive dashboard creation, DAX modeling, and visual storytelling.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Power BI (Power Query, DAX, Star Schema)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Tableau (LOD Calculations, Action Filters)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Advanced Excel (Pivot Tables, XLOOKUP, Modeling)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Power BI Service & Automated Gateways</li>
              </ul>
            </div>

            {/* Card 2: Databases & SQL */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-800">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Databases & Advanced SQL</h3>
              <p className="text-xs text-slate-400 mb-4">
                Complex data manipulation, analytical querying, and data warehousing.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> PostgreSQL & MySQL Database Systems</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Window Functions (RANK, DENSE_RANK, LAG, LEAD)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Common Table Expressions (CTEs) & Subqueries</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Stored Procedures, Views & Index Tuning</li>
              </ul>
            </div>

            {/* Card 3: Programming, ML & Web Apps */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 mb-4 border border-emerald-800">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Python, ML & Web Apps</h3>
              <p className="text-xs text-slate-400 mb-4">
                Full-stack analytics: from predictive modeling to live cloud application deployment.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Scikit-Learn (Classification, Regression, Pipelines)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Streamlit Interactive Web Dashboards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> React.js, Next.js, TypeScript & REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-16 px-6 bg-slate-950/60 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-cyan-500/50">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400" />
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-bold text-white">Data Science & Analytics Intern</h4>
                    <span className="text-xs text-cyan-400 font-semibold">Jan 2026 – July 2026</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">Alpha IT Mohali</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Engineered automated data preprocessing pipelines in Python (Pandas, NumPy), lifting data integrity by 32%.</li>
                    <li>• Built automated batch scripts converting raw client logs into structured tables for BI consumption.</li>
                    <li>• Tuned supervised machine learning models with Scikit-Learn, enhancing predictive precision by 18%.</li>
                    <li>• Formulated KPI dashboards reducing manual weekly reporting turnaround by 75%.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-700">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-600" />
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base font-bold text-white">Software Engineering Training</h4>
                    <span className="text-xs text-slate-400">June 2025 – Aug 2025</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">Tech Training</div>
                  <p className="text-xs text-slate-300">
                    Built dynamic frontend components using React.js and integrated backend REST APIs to render interactive tabular analytics and user views.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">Education & Certifications</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-sm font-bold text-white">Bachelor of Technology (B.Tech) - CSE</h4>
                    <span className="text-xs text-indigo-400 font-semibold">2022 – 2026</span>
                  </div>
                  <div className="text-xs text-slate-400 mb-2">
                    Baba Banda Singh Bahadur Engineering College, Punjab
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Cumulative Grade Point Average: <strong className="text-cyan-400">CGPA 7.58</strong>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Professional Certifications:
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    Advanced SQL for Data Analytics & Business Intelligence (PostgreSQL/MySQL)
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    Microsoft Power BI Desktop & DAX for Enterprise Business Intelligence
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    Exploratory Data Analysis & Machine Learning with Python (Scikit-Learn)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section with Resend Email Dispatch */}
      <ContactSection />

      {/* Footer */}
      <footer className="mt-auto py-10 px-6 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">Aman Bisht</span>
            <span>|</span>
            <span>amanbishtab99@gmail.com</span>
            <span>|</span>
            <span>+91 7973478552</span>
          </div>

          <div className="flex items-center gap-4">

            <a href="https://linkedin.com/in/aman-bisht" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
              <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="https://github.com/AmanBeast" target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-1">
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
