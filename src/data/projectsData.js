export const projectsData = [
  {
    id: "healthcare-analytics",
    title: "Healthcare Operations & Clinical Billing Intelligence",
    domain: "Healthcare & Operations",
    badge: "Tableau & Relational Modeling",
    summary: "Relational data modeling across 5 clinical entity tables (Patients, Doctors, Appointments, Treatments, Billing) to identify hospital scheduling bottlenecks, bed utilization rates, and revenue leakages.",
    metrics: [
      { label: "Clinic Idle Time", value: "-22%", note: "Optimized shift scheduling" },
      { label: "Billing Realization", value: "+18%", note: "Faster receivables collection" },
      { label: "Bed Utilization Rate", value: "87.4%", note: "Peak capacity management" },
      { label: "Entities Modeled", value: "5 Tables", note: "End-to-end star schema" }
    ],
    tools: ["Tableau", "PostgreSQL", "Relational Modeling", "LOD Expressions", "Healthcare Analytics"],
    businessProblem: "Hospital administration faced significant scheduling delays during peak outpatient hours, physician workload imbalances, and delayed billing realization across elective vs. emergency treatment procedures.",
    architecture: "5 Relational Entity Tables (Patients, Doctors, Appointments, Treatments, Billing) ➔ SQL Relational Normalization ➔ Tableau Data Source with Cross-Table Joins ➔ Executive Operational Dashboard with LOD Expressions.",
    sqlSnippet: `-- Top Clinical Revenue & Outstanding Receivables by Specialty
SELECT 
    d.specialty,
    COUNT(DISTINCT a.appointment_id) AS total_consultations,
    SUM(b.amount) AS gross_billed_revenue,
    SUM(CASE WHEN b.payment_status = 'Pending' THEN b.amount ELSE 0 END) AS outstanding_receivables,
    ROUND(AVG(t.duration_minutes), 1) AS avg_treatment_duration
FROM doctors d
JOIN appointments a ON d.doctor_id = a.doctor_id
JOIN treatments t ON a.appointment_id = t.appointment_id
JOIN billing b ON a.appointment_id = b.appointment_id
GROUP BY d.specialty
ORDER BY gross_billed_revenue DESC;`,
    visualType: "healthcare",
    chartData: [
      { label: "Cardiology", revenue: 420, bedOcc: 92, outstanding: 45 },
      { label: "Orthopedics", revenue: 340, bedOcc: 86, outstanding: 28 },
      { label: "Neurology", revenue: 290, bedOcc: 89, outstanding: 34 },
      { label: "General Surgery", revenue: 380, bedOcc: 84, outstanding: 22 },
      { label: "Pediatrics", revenue: 190, bedOcc: 78, outstanding: 12 }
    ]
  },
  {
    id: "retail-sales-analytics",
    title: "Omnichannel Retail & Commercial Sales Analytics",
    domain: "Retail & E-Commerce",
    badge: "PostgreSQL & Power BI DAX",
    summary: "Multi-thousand row transactional analysis benchmarking Month-over-Month (MoM) revenue velocity, salesperson quota attainment, and high-margin product contributions using PostgreSQL Window Functions and dynamic Power BI DAX.",
    metrics: [
      { label: "Reporting Turnaround", value: "-60%", note: "Replaced manual Excel with SQL views" },
      { label: "Top Margin SKUs", value: "10% SKUs", note: "Drives 45% of total gross margin" },
      { label: "MoM Growth Benchmarked", value: "+14.8%", note: "Evaluated across 6 sales territories" },
      { label: "Query Speed", value: "3.2x Faster", note: "Optimized indexing & CTEs" }
    ],
    tools: ["PostgreSQL", "Power BI", "DAX", "CTEs & Window Functions", "Star Schema"],
    businessProblem: "Commercial leadership lacked centralized visibility into regional salesperson efficiency, SKU profitability variance, and territory penetration, relying on error-prone monthly spreadsheets.",
    architecture: "Raw Sales, People, Product & Geo Datasets ➔ PostgreSQL Data Warehouse Staging ➔ Window Functions & CTE Views ➔ Power BI Tabular Model with Star Schema ➔ 3-Tier Drill-Down Executive Dashboard.",
    sqlSnippet: `-- Benchmark MoM Growth & Salesperson Ranking using Window Functions
WITH MonthlySales AS (
    SELECT 
        s.salesperson,
        s.region,
        DATE_TRUNC('month', s.sale_date) AS sales_month,
        SUM(s.sales_amount) AS current_month_sales,
        LAG(SUM(s.sales_amount)) OVER (
            PARTITION BY s.salesperson ORDER BY DATE_TRUNC('month', s.sale_date)
        ) AS previous_month_sales
    FROM sales_data s
    GROUP BY s.salesperson, s.region, DATE_TRUNC('month', s.sale_date)
)
SELECT 
    salesperson,
    region,
    current_month_sales,
    previous_month_sales,
    ROUND(((current_month_sales - previous_month_sales) / NULLIF(previous_month_sales, 0)) * 100, 2) AS mom_growth_pct,
    DENSE_RANK() OVER (ORDER BY current_month_sales DESC) AS global_sales_rank
FROM MonthlySales;`,
    visualType: "sales",
    chartData: [
      { month: "Jan", sales: 125, target: 110 },
      { month: "Feb", sales: 142, target: 120 },
      { month: "Mar", sales: 188, target: 150 },
      { month: "Apr", sales: 165, target: 155 },
      { month: "May", sales: 215, target: 180 },
      { month: "Jun", sales: 248, target: 200 }
    ]
  },
  {
    id: "telecom-churn-analytics",
    title: "Telecom Subscriber Churn & Retention Diagnostic",
    domain: "Telecom & Subscription Analytics",
    badge: "Python, Pandas & Statistical EDA",
    summary: "Diagnostic exploratory data analysis on 7,043 customer accounts to isolate attrition drivers across contract models, payment channels, and service bundles, establishing a predictive retention framework.",
    metrics: [
      { label: "Churn Velocity Discovered", value: "3.5x Higher", note: "In month-to-month contracts" },
      { label: "Targeted Retention Lift", value: "14% ARR", note: "Preserved via contract incentives" },
      { label: "Records Analyzed", value: "7,043 Accounts", note: "21 customer behavior attributes" },
      { label: "Risk Cohort Accuracy", value: "82.4%", note: "Statistical classification baseline" }
    ],
    tools: ["Python", "Pandas", "NumPy", "Seaborn", "Statistical EDA", "Scikit-Learn"],
    businessProblem: "A telecom provider experienced unexplained subscriber attrition spikes. Marketing teams needed quantitative proof of churn triggers to replace blanket discounts with targeted contract retention strategies.",
    architecture: "Raw Subscriber Logs ➔ Automated Python Cleaning & Imputation ➔ Statistical Distribution & Correlation Modeling ➔ Cohort Segmentation ➔ Executive Retention Strategy Playbook.",
    sqlSnippet: `# Python Pandas Feature Correlation & Churn Cohort Calculation
import pandas as pd
import numpy as np

df = pd.read_csv('Telco-Customer-Churn.csv')
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce').fillna(0)

# Contract Churn Velocity Index
contract_cohort = df.groupby('Contract').agg(
    total_subscribers=('customerID', 'count'),
    churned_subscribers=('Churn', lambda x: (x == 'Yes').sum()),
    avg_monthly_charges=('MonthlyCharges', 'mean')
)
contract_cohort['churn_rate_%'] = round((contract_cohort['churned_subscribers'] / contract_cohort['total_subscribers']) * 100, 2)
print(contract_cohort)`,
    visualType: "telecom",
    chartData: [
      { contract: "Month-to-Month", churnRate: 42.7, subCount: 3875, color: "#F43F5E" },
      { contract: "One Year", churnRate: 11.3, subCount: 1473, color: "#F59E0B" },
      { contract: "Two Year", churnRate: 2.8, subCount: 1695, color: "#10B981" }
    ]
  },
  {
    id: "predictive-streamlit-app",
    title: "Interactive Predictive Analytics & Decision Simulator",
    domain: "Predictive Analytics & Web Deployment",
    badge: "Full-Stack Data: Streamlit, MySQL & Scikit-Learn",
    summary: "Full-lifecycle data application: engineered categorical binning and outlier pipelines in Python, persisted structured tables into MySQL, trained decision tree classifiers, and deployed a live interactive Streamlit web dashboard with real-time probability scorecards.",
    metrics: [
      { label: "Deployment Type", value: "Interactive Web UI", note: "Streamlit Cloud + MySQL" },
      { label: "Inference Latency", value: "<15ms", note: "Real-time decision calculation" },
      { label: "Pipeline Automation", value: "100%", note: "Zero manual intervention" },
      { label: "Model Architecture", value: "Decision Tree / Scikit", note: "Serialized via Joblib" }
    ],
    tools: ["Python", "Streamlit", "MySQL", "Scikit-Learn", "Joblib", "Full-Stack Deployment"],
    businessProblem: "Business stakeholders frequently cannot interpret static model outputs or confusion matrices. They need an intuitive web playground where they can adjust input variables dynamically and observe immediate probability scorecards.",
    architecture: "Raw Ingestion ➔ Feature Binning (Age Brackets, Fare Tiers, Family Size) ➔ MySQL Storage ➔ Scikit-Learn Inference Pipeline ➔ Streamlit Interactive Cloud Dashboard with Live Probability Scorecards.",
    sqlSnippet: `# Streamlit Live Inference Handler snippet
import streamlit as st
import pandas as pd
from joblib import load

model = load('tree.joblib')
train_cols = load('columns.joblib')

input_df = pd.DataFrame({
    'Pclass': [pclass], 'Sex': [sex_val], 'Embarked': [embarked_val],
    'Age Category': [age_cat], 'Fare Category': [fare_cat], 'Family': [family_val]
}).reindex(columns=train_cols, fill_value=0)

probability = model.predict_proba(input_df)[0][1]
st.metric("Survival Probability Score", f"{round(probability * 100, 2)}%")`,
    visualType: "streamlit",
    interactiveSimulator: true
  },
  {
    id: "banking-wealth-segmentation",
    title: "Financial Services & Banking Customer Wealth Analytics",
    domain: "BFSI & Wealth Management",
    badge: "PostgreSQL & Database Architecture",
    summary: "Structured relational database tracking customer profiles, multi-tier accounts, and deposit/withdrawal transactions. Formulated conditional wealth tiering, cash velocity tracking, and automated liquidity alerts using PostgreSQL.",
    metrics: [
      { label: "Customer Tiers", value: "3 Segments", note: "Premium (>=100k), Regular, Low Balance" },
      { label: "Cash Velocity", value: "Daily/MoM", note: "Deposit vs. Withdrawal ratios" },
      { label: "Data Cleaning", value: "COALESCE & NULLIF", note: "Zero division & null protection" },
      { label: "Schema Design", value: "3 Relational Tables", note: "Customers, Accounts, Transactions" }
    ],
    tools: ["PostgreSQL", "Database Design", "CASE WHEN", "COALESCE / NULLIF", "BFSI Domain"],
    businessProblem: "Bank branch managers required automated segmentation to proactively detect customer capital flight, identify high-net-worth accounts qualifying for premium wealth advisory, and maintain risk reserves.",
    architecture: "Customers, Accounts & Transactions Relational Schema ➔ Foreign Key Integrity Constraints ➔ PostgreSQL Analytical Views ➔ Wealth Tiering & Net Cashflow Dashboard.",
    sqlSnippet: `-- Wealth Tiering & Cash Flow Velocity per Account
SELECT 
    c.customer_name,
    c.city,
    a.account_type,
    a.balance,
    CASE 
        WHEN a.balance >= 100000 THEN 'Premium Wealth Client'
        WHEN a.balance >= 50000 THEN 'Regular Core Client'
        ELSE 'Low Balance Account'
    END AS client_segment,
    COALESCE(c.email, 'Contact Details Pending') AS sanitized_contact,
    ROUND(SUM(CASE WHEN t.transaction_type = 'Deposit' THEN t.amount ELSE 0 END), 2) AS total_deposits,
    ROUND(SUM(CASE WHEN t.transaction_type = 'Withdrawal' THEN t.amount ELSE 0 END), 2) AS total_withdrawals
FROM customers c
JOIN accounts a ON c.customer_id = a.customer_id
LEFT JOIN transactions t ON a.account_id = t.account_id
GROUP BY c.customer_id, c.customer_name, c.city, a.account_type, a.balance;`,
    visualType: "banking",
    chartData: [
      { tier: "Premium (>=100k)", percentage: 38, avgBalance: 121666, accounts: 3 },
      { tier: "Regular (>=50k)", percentage: 37, avgBalance: 75000, accounts: 3 },
      { tier: "Low Balance (<50k)", percentage: 25, avgBalance: 18333, accounts: 2 }
    ]
  },
  {
    id: "hr-compensation-analytics",
    title: "HR Workforce Demographics & Compensation Benchmarking",
    domain: "People Analytics & HR",
    badge: "Power BI & Advanced Excel",
    summary: "Workforce distribution analysis across job roles, qualification bands, gender diversity, and leave liability reserves using Excel Pivot Tables, Power Query, and Power BI visual dashboards.",
    metrics: [
      { label: "Pay Parity Audited", value: "100% Roles", note: "Across educational qualifications" },
      { label: "Leave Liability", value: "Quantified", note: "Saved unaccrued payroll cost" },
      { label: "Headcount Mapped", value: "All Job Titles", note: "Executive to operational staff" },
      { label: "Dashboard Automation", value: "Power Query", note: "One-click refreshable reports" }
    ],
    tools: ["Power BI", "Advanced Excel", "Power Query", "Pivot Tables", "People Analytics"],
    businessProblem: "HR and executive leadership needed visibility into compensation equity across job titles, leave balance liabilities across tenure groups, and gender diversity representation across technical departments.",
    architecture: "HR Master Roster ➔ Power Query Data Cleaning & Type Casting ➔ Calculated DAX Metrics ➔ Interactive Power BI Diversity & Compensation Dashboard.",
    sqlSnippet: `-- Benchmark Average Salary vs Education Level in PostgreSQL
SELECT 
    qualification,
    COUNT(employee_id) AS total_staff,
    ROUND(AVG(salary), 0) AS avg_compensation,
    MIN(salary) AS min_band,
    MAX(salary) AS max_band,
    ROUND(AVG(leave_balance), 1) AS avg_unused_leave_days
FROM hr_workforce_data
GROUP BY qualification
ORDER BY avg_compensation DESC;`,
    visualType: "hr",
    chartData: [
      { role: "Executive / Director", avgSalary: 145000, headcount: 12 },
      { role: "Lead Analyst", avgSalary: 95000, headcount: 28 },
      { role: "Senior Engineer", avgSalary: 90000, headcount: 45 },
      { role: "Data Analyst", avgSalary: 72000, headcount: 64 },
      { role: "Associate / Junior", avgSalary: 48000, headcount: 52 }
    ]
  }
];
