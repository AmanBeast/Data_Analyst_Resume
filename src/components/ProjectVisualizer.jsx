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
  PieChart,
  HeartPulse,
  Sparkles,
  MessageSquare,
  Target,
  Bot,
  Zap,
  Cpu
} from "lucide-react";

export default function ProjectVisualizer({ project }) {
  // State for interactive simulator (used in Streamlit / Predictive Analytics)
  const [pclass, setPclass] = useState(1);
  const [isFemale, setIsFemale] = useState(true);
  const [hasFamily, setHasFamily] = useState(true);
  const [ageGroup, setAgeGroup] = useState(1); // 0: Child, 1: Adult, 2: Senior

  // State for Cardio Simulator
  const [troponin, setTroponin] = useState(0.045); // ng/mL
  const [ckmb, setCkmb] = useState(6.5); // ng/mL
  const [systolic, setSystolic] = useState(145); // mmHg
  const [glucose, setGlucose] = useState(130); // mg/dL

  // State for NLP Simulator
  const [nlpText, setNlpText] = useState("An absolute cinematic masterpiece with breathtaking direction and brilliant acting!");

  // State for Clustering Explorer
  const [selectedCluster, setSelectedCluster] = useState(0);

  // State for RAG Simulator
  const [selectedChunkIdx, setSelectedChunkIdx] = useState(2); // index 2 = 1000 tokens

  // Simulated live probability calculator for Titanic Streamlit
  const calculateProbability = () => {
    let score = 50;
    if (isFemale) score += 35; else score -= 25;
    if (pclass === 1) score += 20; else if (pclass === 3) score -= 18;
    if (ageGroup === 0) score += 15; else if (ageGroup === 2) score -= 10;
    if (hasFamily) score += 8; else score -= 5;
    return Math.min(Math.max(score, 4), 98);
  };
  const prob = calculateProbability();

  // Cardio Risk Score Calculation
  const calculateCardioRisk = () => {
    let risk = 20;
    if (troponin > 0.014) risk += 45 + Math.min(troponin * 20, 25);
    if (ckmb > 5.0) risk += 15;
    if (systolic >= 140) risk += 10;
    if (glucose >= 140) risk += 8;
    return Math.min(Math.round(risk), 99);
  };
  const cardioRisk = calculateCardioRisk();

  // NLP Sentiment Calculation
  const evaluateSentiment = (text) => {
    const lower = text.toLowerCase();
    const posWords = ["masterpiece", "brilliant", "superb", "loved", "delightful", "outstanding", "flawless", "breathtaking", "great", "excellent", "good", "amazing"];
    const negWords = ["waste", "terrible", "awful", "boring", "disaster", "unwatchable", "pathetic", "poorly", "bad", "horrible", "worst", "rubbish"];
    
    let posScore = 0;
    let negScore = 0;
    posWords.forEach(w => { if (lower.includes(w)) posScore += 1; });
    negWords.forEach(w => { if (lower.includes(w)) negScore += 1; });

    if (posScore > negScore) {
      return { label: "Positive", confidence: Math.min(78 + posScore * 7, 98), isPositive: true };
    } else if (negScore > posScore) {
      return { label: "Negative", confidence: Math.min(78 + negScore * 7, 98), isPositive: false };
    } else {
      return { label: "Neutral / Mixed", confidence: 54, isPositive: true };
    }
  };
  const nlpResult = evaluateSentiment(nlpText);

  // 1. Cardio Clinical Risk Triage Simulator
  if (project.visualType === "cardio") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-rose-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-400 animate-pulse" />
            <h4 className="text-sm font-semibold text-rose-300">Clinical Emergency Triage Calculator</h4>
          </div>
          <span className="text-[11px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">
            Random Forest (Recall 98.4%)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Controls */}
          <div className="space-y-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Cardiac Troponin I (cTnI):</span>
                <span className="font-bold text-rose-400">{troponin.toFixed(3)} ng/mL</span>
              </div>
              <input
                type="range"
                min="0.001"
                max="0.2"
                step="0.005"
                value={troponin}
                onChange={(e) => setTroponin(parseFloat(e.target.value))}
                className="w-full accent-rose-400"
              />
              <span className="text-[10px] text-slate-500 block">Normal reference &lt; 0.014 ng/mL</span>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Creatine Kinase-MB (kcm):</span>
                <span className="font-bold text-amber-400">{ckmb.toFixed(1)} ng/mL</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="25"
                step="0.5"
                value={ckmb}
                onChange={(e) => setCkmb(parseFloat(e.target.value))}
                className="w-full accent-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-400 text-[10px] block mb-1">Systolic BP: {systolic} mmHg</label>
                <input
                  type="range"
                  min="90"
                  max="190"
                  step="5"
                  value={systolic}
                  onChange={(e) => setSystolic(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
              <div>
                <label className="text-slate-400 text-[10px] block mb-1">Blood Glucose: {glucose} mg/dL</label>
                <input
                  type="range"
                  min="70"
                  max="250"
                  step="5"
                  value={glucose}
                  onChange={(e) => setGlucose(parseInt(e.target.value))}
                  className="w-full accent-indigo-400"
                />
              </div>
            </div>
          </div>

          {/* Outcome Gauge */}
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex flex-col justify-between items-center text-center">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Acute Coronary Risk Probability</span>
            
            <div className="my-1">
              <div className="text-3xl font-extrabold tracking-tight">
                <span className={cardioRisk >= 60 ? "text-rose-400" : "text-emerald-400"}>
                  {cardioRisk}%
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {cardioRisk >= 60 ? "High Risk: Acute Event" : "Low Risk: Hemodynamically Stable"}
              </div>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
              <div 
                className={`h-full transition-all duration-300 ${cardioRisk >= 60 ? "bg-rose-500" : "bg-emerald-400"}`}
                style={{ width: `${cardioRisk}%` }}
              />
            </div>

            <div className="p-2 w-full rounded bg-slate-950/80 border border-slate-800 text-[11px] text-left">
              {cardioRisk >= 60 ? (
                <span className="text-rose-300 font-medium block">
                  🚨 <strong>Triage Action:</strong> Troponin elevation detected ({troponin} ng/mL). Immediate ECG & Emergency Cath Lab protocol initiated.
                </span>
              ) : (
                <span className="text-emerald-300 font-medium block">
                  ✅ <strong>Triage Action:</strong> Cardiac enzymes within normal baseline. Patient scheduled for standard observational telemetry.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. NLP Sentiment Intelligence
  if (project.visualType === "nlp") {
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-cyan-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <h4 className="text-sm font-semibold text-cyan-300">Live NLP Sentiment Playground</h4>
          </div>
          <span className="text-[11px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
            TF-IDF + Naive Bayes (88.6%)
          </span>
        </div>

        {/* Text Input & Quick Prompts */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400">Quick Test Cases:</span>
            <button
              onClick={() => setNlpText("An absolute masterpiece with breathtaking direction, superb soundtrack, and brilliant acting!")}
              className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition"
            >
              + Positive Critique
            </button>
            <button
              onClick={() => setNlpText("A complete waste of time. Terribly slow, boring script, awful dialogue, and unwatchable plot.")}
              className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 hover:bg-rose-900 transition"
            >
              - Negative Critique
            </button>
          </div>

          <textarea
            rows="2"
            value={nlpText}
            onChange={(e) => setNlpText(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
            placeholder="Type any review text to test real-time classification..."
          />

          {/* Classification Output Banner */}
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3.5 h-3.5 rounded-full ${nlpResult.isPositive ? "bg-emerald-400 animate-pulse" : "bg-rose-400 animate-pulse"}`} />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Predicted Sentiment Class</span>
                <span className={`text-sm font-bold ${nlpResult.isPositive ? "text-emerald-400" : "text-rose-400"}`}>
                  {nlpResult.label} Review
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Model Confidence</span>
              <span className="text-sm font-bold text-white">{nlpResult.confidence}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Customer Clustering Explorer
  if (project.visualType === "clustering") {
    const activePersona = project.chartData[selectedCluster];
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-emerald-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-semibold text-emerald-300">K-Means++ Persona Cohort Explorer</h4>
          </div>
          <span className="text-[11px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
            Silhouette: 0.554 | k = 5
          </span>
        </div>

        {/* Persona Selectors */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.chartData.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCluster(idx)}
              className={`text-xs px-2.5 py-1 rounded font-medium transition ${
                selectedCluster === idx
                  ? "bg-emerald-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
              }`}
            >
              {p.persona}
            </button>
          ))}
        </div>

        {/* Selected Persona Stats */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 grid grid-cols-3 gap-2 text-center text-xs mb-3">
          <div className="p-1.5 bg-slate-950/60 rounded">
            <span className="text-slate-400 block text-[10px]">Cohort Size</span>
            <span className="font-bold text-white">{activePersona.count} Patrons</span>
          </div>
          <div className="p-1.5 bg-slate-950/60 rounded">
            <span className="text-slate-400 block text-[10px]">Avg Annual Income</span>
            <span className="font-bold text-cyan-400">${activePersona.income}k / yr</span>
          </div>
          <div className="p-1.5 bg-slate-950/60 rounded">
            <span className="text-slate-400 block text-[10px]">Spending Score</span>
            <span className="font-bold text-emerald-400">{activePersona.spend} / 100</span>
          </div>
        </div>

        <div className="p-2 bg-slate-900/60 rounded border border-slate-800 text-[11px] text-slate-300">
          💡 <strong>Targeting Playbook:</strong> {
            selectedCluster === 0 ? "High earning & high spending. Priority concierge, VIP invites, high-margin luxury events." :
            selectedCluster === 1 ? "High earning but conservative. Long-term warranty offers, premium durable products, wealth advisories." :
            selectedCluster === 2 ? "Middle ground volume core. Seasonal promos, family retail packages, everyday rewards." :
            selectedCluster === 3 ? "Younger impulsive buyers. Flash promotions, trending social media apparel, zero-interest EMI." :
            "Price sensitive shoppers. Clearance discount coupons, budget bundles, cash-back loyalty points."
          }
        </div>
      </div>
    );
  }

  // 4. Enterprise RAG Document Intelligence
  if (project.visualType === "rag") {
    const activeChunk = project.chartData[selectedChunkIdx];
    return (
      <div className="bg-slate-950/90 rounded-xl p-4 border border-indigo-500/30 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-indigo-400" />
            <h4 className="text-sm font-semibold text-indigo-300">RAG Chunking & Retrieval Latency Benchmark</h4>
          </div>
          <span className="text-[11px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
            Groq LLaMA-3 + FAISS
          </span>
        </div>

        {/* Chunk selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Select Chunk Window Size:</span>
            <span className="font-bold text-cyan-400">{activeChunk.chunk}</span>
          </div>
          <div className="grid grid-cols-5 gap-1 text-center">
            {project.chartData.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedChunkIdx(idx)}
                className={`py-1.5 px-1 rounded text-[11px] transition ${
                  selectedChunkIdx === idx
                    ? "bg-indigo-600 text-white font-bold ring-1 ring-indigo-400"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {c.chunk.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Context Recall</span>
              <div className="text-xl font-extrabold text-cyan-400 mt-1">{activeChunk.recall}%</div>
              <span className="text-[10px] text-slate-500">Semantic accuracy</span>
            </div>

            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">FAISS Query Latency</span>
              <div className="text-xl font-extrabold text-indigo-400 mt-1">{activeChunk.latency} ms</div>
              <span className="text-[10px] text-slate-500">Sub-second vector lookup</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Titanic Streamlit
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

  // 6. Healthcare
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

  // 7. Sales
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

  // 8. Telecom Churn
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

  // 9. Banking Wealth
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

  // 10. Default: HR Compensation
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
