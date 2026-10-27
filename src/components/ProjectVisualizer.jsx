"use client";

import React, { useState } from "react";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Sliders, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  DollarSign,
  PieChart
} from "lucide-react";

export default function ProjectVisualizer({ project }) {
  // State for interactive simulator (used in Streamlit / Predictive Analytics)
  const [pclass, setPclass] = useState(1);
  const [isFemale, setIsFemale] = useState(true);
  const [hasFamily, setHasFamily] = useState(true);
  const [ageGroup, setAgeGroup] = useState(1); // 0: Child, 1: Adult, 2: Senior

  // Simulated live probability calculator based on trained tree weights
  const calculateProbability = () => {
    let score = 50;
    if (isFemale) score += 35; else score -= 25;
    if (pclass === 1) score += 20; else if (pclass === 3) score -= 18;
    if (ageGroup === 0) score += 15; else if (ageGroup === 2) score -= 10;
    if (hasFamily) score += 8; else score -= 5;
    return Math.min(Math.max(score, 4), 98);
  };

  const prob = calculateProbability();

  if (project.visualType === "streamlit") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-cyan-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
              <Sliders className="w-4 h-4" /> Live Streamlit Inference Simulator
            </h4>
          </div>
          <span className="text-[11px] bg-cyan-950/80 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
            Real-Time Decision Tree
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Controls */}
          <div className="space-y-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div>
              <label className="text-slate-400 block mb-1">Passenger Class (Pclass):</label>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setPclass(cls)}
                    className={`py-1 rounded text-center font-medium transition ${
                      pclass === cls 
                        ? "bg-cyan-500 text-slate-950 font-bold" 
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-400 block mb-1">Gender:</label>
                <button
                  onClick={() => setIsFemale(!isFemale)}
                  className={`w-full py-1 rounded text-center font-medium transition ${
                    isFemale ? "bg-rose-500/80 text-white" : "bg-blue-500/80 text-white"
                  }`}
                >
                  {isFemale ? "Female" : "Male"}
                </button>
              </div>
              <div>
                <label className="text-slate-400 block mb-1">Family Onboard:</label>
                <button
                  onClick={() => setHasFamily(!hasFamily)}
                  className={`w-full py-1 rounded text-center font-medium transition ${
                    hasFamily ? "bg-emerald-500/80 text-white" : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {hasFamily ? "Yes (With Family)" : "No (Solo)"}
                </button>
              </div>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">
                Age Bracket: {ageGroup === 0 ? "Child (<15)" : ageGroup === 1 ? "Adult (16-55)" : "Senior (55+)"}
              </label>
              <input
                type="range"
                min="0"
                max="2"
                step="1"
                value={ageGroup}
                onChange={(e) => setAgeGroup(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </div>
          </div>

          {/* Outcome Gauge */}
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-between items-center text-center">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Estimated Model Prediction</span>
            
            <div className="my-2">
              <div className="text-3xl font-extrabold tracking-tight">
                <span className={prob >= 50 ? "text-emerald-400" : "text-rose-400"}>
                  {prob}%
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-1">Survival Probability Score</div>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
              <div 
                className={`h-full transition-all duration-300 ${prob >= 50 ? "bg-emerald-400" : "bg-rose-500"}`}
                style={{ width: `${prob}%` }}
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold">
              {prob >= 50 ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> High Survival Likelihood
                </span>
              ) : (
                <span className="text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> High Attrition / Mortality Risk
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === "healthcare") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-blue-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-400" />
            <h4 className="text-sm font-semibold text-blue-300">Tableau Clinical Capacity & Billing Monitor</h4>
          </div>
          <span className="text-[11px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
            5 Relational Entities
          </span>
        </div>

        <div className="space-y-2.5">
          {project.chartData.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300 font-medium">
                <span>{item.label}</span>
                <span className="text-slate-400">
                  ₹{item.revenue}k Revenue | <strong className="text-cyan-400">{item.bedOcc}% Bed Occ</strong>
                </span>
              </div>
              <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden flex">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(item.revenue / 450) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center text-xs">
          <div className="bg-slate-900/60 p-2 rounded">
            <div className="text-blue-400 font-bold">87.4%</div>
            <div className="text-[10px] text-slate-400">Avg Bed Occupancy</div>
          </div>
          <div className="bg-slate-900/60 p-2 rounded">
            <div className="text-emerald-400 font-bold">-22%</div>
            <div className="text-[10px] text-slate-400">Clinic Idle Time</div>
          </div>
          <div className="bg-slate-900/60 p-2 rounded">
            <div className="text-amber-400 font-bold">+18%</div>
            <div className="text-[10px] text-slate-400">Cash Flow Cycle</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visualType === "sales") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-cyan-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-semibold text-cyan-300">Power BI MoM Revenue Velocity vs Target</h4>
          </div>
          <span className="text-[11px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
            Window Function Lag/Lead
          </span>
        </div>

        {/* Bar comparison */}
        <div className="grid grid-cols-6 gap-2 items-end h-28 pt-4 pb-2 px-1 bg-slate-900/50 rounded-lg">
          {project.chartData.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center h-full justify-end group">
              <div className="flex items-end gap-1 w-full justify-center h-20">
                <div 
                  className="w-3 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all duration-300 group-hover:brightness-125"
                  style={{ height: `${(m.sales / 250) * 100}%` }}
                  title={`Actual: ₹${m.sales}k`}
                />
                <div 
                  className="w-2 bg-slate-700 rounded-t border-t border-amber-400/60"
                  style={{ height: `${(m.target / 250) * 100}%` }}
                  title={`Target: ₹${m.target}k`}
                />
              </div>
              <span className="text-[10px] text-slate-400 mt-1 font-medium">{m.month}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3 text-xs text-slate-400 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-sm" /> Actual Sales
            <span className="w-2.5 h-2.5 bg-slate-700 border-t border-amber-400 rounded-sm ml-2" /> Target Quota
          </div>
          <span className="text-emerald-400 font-bold">+14.8% MoM Velocity</span>
        </div>
      </div>
    );
  }

  if (project.visualType === "telecom") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-rose-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-rose-400" />
            <h4 className="text-sm font-semibold text-rose-300">Telecom Churn Velocity by Contract Cohort</h4>
          </div>
          <span className="text-[11px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">
            7,043 Records Analyzed
          </span>
        </div>

        <div className="space-y-3">
          {project.chartData.map((c, idx) => (
            <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-slate-200">{c.contract}</span>
                <span className="font-bold" style={{ color: c.color }}>
                  {c.churnRate}% Attrition ({c.subCount.toLocaleString()} Subscribers)
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${c.churnRate}%`, backgroundColor: c.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 p-2 bg-rose-950/30 border border-rose-900/40 rounded text-xs text-rose-200">
          💡 <strong>Key Finding:</strong> Month-to-month contracts trigger <strong>3.5x higher churn</strong>. Annual incentive roadmap preserves <strong>14% recurring ARR</strong>.
        </div>
      </div>
    );
  }

  if (project.visualType === "banking") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-amber-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-semibold text-amber-300">BFSI Wealth Tiering & Liquidity Breakdown</h4>
          </div>
          <span className="text-[11px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
            PostgreSQL Case Logic
          </span>
        </div>

        <div className="space-y-3">
          {project.chartData.map((b, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span className="font-semibold">{b.tier}</span>
                <span className="text-amber-400 font-bold">Avg Bal: ₹{b.avgBalance.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full"
                  style={{ width: `${b.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-center text-xs">
          <div className="bg-slate-900/60 p-2 rounded">
            <span className="text-slate-400 block text-[10px]">Zero Division Protected</span>
            <span className="text-cyan-400 font-mono font-bold">NULLIF(val, 0)</span>
          </div>
          <div className="bg-slate-900/60 p-2 rounded">
            <span className="text-slate-400 block text-[10px]">Missing Contact Handled</span>
            <span className="text-emerald-400 font-mono font-bold">COALESCE(email, ...)</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: HR Compensation
  return (
    <div className="bg-slate-950/90 rounded-xl p-4 border border-indigo-500/30 text-white">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-indigo-400" />
          <h4 className="text-sm font-semibold text-indigo-300">HR Compensation Bands & Headcount Analytics</h4>
        </div>
        <span className="text-[11px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
          Power BI & Excel
        </span>
      </div>

      <div className="space-y-2.5">
        {project.chartData.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs text-slate-300">
              <span>{h.role}</span>
              <span className="text-indigo-300 font-semibold">₹{h.avgSalary.toLocaleString()} (Staff: {h.headcount})</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-400 h-full rounded-full"
                style={{ width: `${(h.avgSalary / 150000) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
