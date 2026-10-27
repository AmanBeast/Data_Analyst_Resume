# 📊 Enterprise Data Analyst Portfolio & Decision Systems

An interactive, high-impact **Data Analyst & Business Intelligence Portfolio Website** built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS**, featuring live project hover visualizations, an embedded predictive ML simulator, downloadable ATS-tailored DOCX resumes, and **Resend** recruiter email delivery.

🌐 **Live Deployed Portfolio:** [resume-lemon-eta.vercel.app](https://resume-lemon-eta.vercel.app)  
👤 **Author:** Aman Bisht ([LinkedIn](https://linkedin.com/in/aman-bisht) | [GitHub](https://github.com/AmanBeast) | [Email](mailto:amanbishtab99@gmail.com))

---

## 🌟 Key Highlights & Features

- **🎯 Interactive Project Hover Inspection Deck:** Hovering over any project card reveals real-time simulated BI visualizations, production SQL queries/CTEs, and end-to-end data pipeline architectures.
  - **Healthcare Clinical Operations:** Tableau-style bed occupancy rates, LoS, and billing realization across 5 relational tables.
  - **Omnichannel Retail Sales:** Power BI MoM revenue velocity and target quota tracking powered by PostgreSQL Window Functions (`DENSE_RANK`, `LAG`/`LEAD`).
  - **Telecom Churn Diagnostic:** Statistical churn velocity by contract type and payment channel correlations.
  - **Interactive Streamlit ML Simulator:** Real-time decision tree simulator where users can toggle passenger class, gender, and age to see live survival probability scorecards.
  - **BFSI & Wealth Management:** PostgreSQL conditional wealth tiering, cash velocity tracking, and null-safety functions (`COALESCE`, `NULLIF`).
  - **HR Compensation Benchmarking:** Diversity and salary band equity analysis across educational qualifications and job roles.
- **📬 Recruiter Direct Message via Resend:** Recruiters can send an inquiry directly through the `#contact` form, dispatching a beautifully styled HTML notification directly to `amanbishtab99@gmail.com`.
- **📥 Official MNC-Tailored DOCX Resumes:** Downloadable directly from the site:
  - `Aman_Bisht_Data_Analyst_Resume_1Page.docx` (Single-page ATS-optimized format)
  - `Aman_Bisht_Data_Analyst_Resume_2Page.docx` (Executive 2-page detailed case study format)
  - `Aman_Bisht_Data_Analyst_Portfolio_and_Profile_Guide.docx` (LinkedIn copy, project pitches, 90-sec interview pitch)

---

## 🛠️ Tech Stack

- **Frontend & App Framework:** Next.js 16 (Turbopack, App Router), React 19, Tailwind CSS
- **Email Delivery:** Resend API SDK (`/api/contact`)
- **Icons & Styling:** Lucide React, Glassmorphism, Dark Mode Theme
- **Data Analytics Tools Highlighted:** PostgreSQL, MySQL, Power BI (DAX, Power Query), Tableau (LODs), Python (Pandas, NumPy, Scikit-Learn), Streamlit, Advanced Excel

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmanBeast/Data_Analyst_Resume.git
   cd Data_Analyst_Resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
   *(Get your free API key at [resend.com](https://resend.com))*.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

1. Push this repository to your GitHub account.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Under **Project Settings ➔ Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend API key.
4. Click **Deploy**.
