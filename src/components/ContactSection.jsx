"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  User, 
  Briefcase, 
  MessageSquare, 
  Phone, 
  MapPin, 
  FileText, 
  Download,
  Sparkles
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "Data Analyst",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
        message: data.message || "Thank you! Your message has been delivered directly to Aman's inbox."
      });

      // Clear message on success
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "Data Analyst",
        message: ""
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message,
        message: ""
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-slate-800/80 bg-slate-950/70 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Connect With Me
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Hiring for a Data Analyst, BI, or Analytics Engineering role? Write me a message below, 
            and it will be delivered directly to my email (<strong className="text-cyan-300">amanbishtab99@gmail.com</strong>) via Resend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information & Quick Resume Pills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Direct Recruiter Channels
              </h3>
              
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11px] block">Primary Email</span>
                    <a href="mailto:amanbishtab99@gmail.com" className="font-semibold text-white hover:text-cyan-400 transition">
                      amanbishtab99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11px] block">Mobile & WhatsApp</span>
                    <a href="tel:+917973478552" className="font-semibold text-white hover:text-indigo-400 transition">
                      +91 7973478552
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11px] block">Current Location</span>
                    <span className="font-semibold text-white">Mohali / Chandigarh, India (Open to Remote / Relocation)</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-800">
                <a
                  href="https://linkedin.com/in/aman-bisht"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-xs font-semibold text-cyan-300 transition flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn Profile
                </a>
                <a
                  href="https://github.com/AmanBeast"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </div>

            {/* Quick Resume Download Callout */}
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 text-xs">
              <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] block mb-2">
                Need Offline Copies for Your ATS?
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="/Aman_Bisht_Data_Analyst_Resume_1Page.docx"
                  download
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-200 transition group"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <strong>1-Page ATS Resume</strong> (.docx)
                  </span>
                  <Download className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition" />
                </a>

                <a
                  href="/Aman_Bisht_Data_Analyst_Resume_2Page.docx"
                  download
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-200 transition group"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    <strong>2-Page Detailed Executive Resume</strong> (.docx)
                  </span>
                  <Download className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Email Form */}
          <div className="lg:col-span-7 bg-slate-900/70 p-7 sm:p-9 rounded-2xl border border-slate-800 shadow-xl shadow-cyan-500/5">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" /> Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below. Resend delivers your message straight to Aman&apos;s primary inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" /> Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" /> Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Deloitte, Amazon, Fractal"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Target Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs transition"
                  >
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Business Intelligence (BI) Analyst">Business Intelligence (BI) Analyst</option>
                    <option value="Analytics Engineer">Analytics Engineer</option>
                    <option value="Data Scientist / ML Analyst">Data Scientist / ML Analyst</option>
                    <option value="Full-Stack Data Consultant">Full-Stack Data Consultant</option>
                    <option value="Other Opportunity">Other Opportunity</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> Message / Role Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Aman, I came across your portfolio and would like to discuss an opportunity for a Data Analyst role at our organization..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder:text-slate-600 transition resize-y"
                />
              </div>

              {/* Feedback messages */}
              {status.success && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-start gap-2 text-xs animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 flex items-start gap-2 text-xs animate-fadeIn">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400 mt-0.5" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status.submitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Dispatching via Resend...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Directly to Aman</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
