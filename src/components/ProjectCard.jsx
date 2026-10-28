"use client";

import React, { useState } from "react";
import ProjectVisualizer from "./ProjectVisualizer";
import { 
  Code2, 
  BarChart2, 
  ExternalLink, 
  Eye, 
  Layers, 
  Sparkles, 
  CheckCircle,
  Database,
  ArrowUpRight
} from "lucide-react";

export default function ProjectCard({ project, onSelect, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("visuals"); // visuals | sql | architecture

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        if (onSelect) onSelect(project);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer border ${
        isSelected || isHovered
          ? "bg-slate-900/90 border-cyan-400/60 shadow-[0_0_30px_rgba(0,240,255,0.18)] translate-y-[-4px]"
          : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
      }`}
    >
      {/* Top Banner & Badge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-cyan-400" /> {project.domain}
          </span>
          <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="View on GitHub"
              className="p-1 rounded hover:bg-slate-800 text-cyan-400 transition"
            >
              <ArrowUpRight className={`w-5 h-5 transition-transform ${isHovered ? "translate-x-0.5 -translate-y-0.5" : "opacity-60"}`} />
            </a>
          ) : (
            <ArrowUpRight className={`w-5 h-5 text-cyan-400 transition-transform ${isHovered ? "translate-x-0.5 -translate-y-0.5" : "opacity-40"}`} />
          )}
        </h3>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
          {project.summary}
        </p>

        {/* Key Metrics Pills */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.metrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
              <div className="text-base font-extrabold text-cyan-400">{m.value}</div>
              <div className="text-[11px] text-slate-400 truncate">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-[11px] bg-slate-800/60 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Preview Reveal Drawer / Section */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Eye className="w-4 h-4 animate-pulse" />
            <span>{isHovered ? "Active Hover Preview" : "Hover or Click to Inspect"}</span>
          </div>
          <span className="text-slate-500 text-[11px]">Interactive Dashboard & SQL</span>
        </div>

        {/* Dynamic Expand on Hover / Selection */}
        {(isHovered || isSelected) && (
          <div className="mt-4 pt-3 border-t border-slate-800 animate-fadeIn">
            {/* View Tabs */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveTab("visuals"); }}
                className={`text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 transition ${
                  activeTab === "visuals" 
                    ? "bg-cyan-500 text-slate-950 font-bold" 
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" /> Visualizations
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveTab("sql"); }}
                className={`text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 transition ${
                  activeTab === "sql" 
                    ? "bg-cyan-500 text-slate-950 font-bold" 
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" /> Query / Logic
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveTab("architecture"); }}
                className={`text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 transition ${
                  activeTab === "architecture" 
                    ? "bg-cyan-500 text-slate-950 font-bold" 
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <Database className="w-3.5 h-3.5" /> Pipeline
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="ml-auto text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 bg-slate-900 border border-slate-700 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500 transition"
                  title="View Source on GitHub"
                >
                  <ExternalLink className="w-3 h-3" /> GitHub Repo
                </a>
              )}
            </div>

            {/* Tab Contents */}
            {activeTab === "visuals" && (
              <div className="mt-2">
                <ProjectVisualizer project={project} />
              </div>
            )}

            {activeTab === "sql" && (
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto max-h-56">
                <div className="flex items-center justify-between pb-1 mb-2 border-b border-slate-800 text-slate-400 text-[10px]">
                  <span>PRODUCTION CODE SNIPPET</span>
                  <span>SQL / DAX / Python</span>
                </div>
                <pre className="whitespace-pre-wrap">{project.sqlSnippet}</pre>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Business Problem:</span>
                  <p className="text-slate-200 mt-0.5">{project.businessProblem}</p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-cyan-400 block text-[10px] uppercase font-semibold">Data Pipeline Flow:</span>
                  <p className="text-slate-300 mt-0.5 font-mono text-[11px]">{project.architecture}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
