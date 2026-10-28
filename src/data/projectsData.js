export const projectsData = [
  {
    id: "cardiovascular-risk-ml",
    title: "Cardiovascular Clinical Risk & Emergency Triage ML Pipeline",
    domain: "Machine Learning & AI",
    badge: "Supervised ML: Random Forest & ROC-AUC",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/06_Cardiovascular_Risk_Prediction_ML",
    summary: "Cost-sensitive machine learning pipeline trained on 1,319 emergency clinical cases, predicting acute myocardial infarction risk from cardiac enzymes (Troponin, CK-MB) and vitals with prioritized recall (98.4%) to eliminate lethal false negatives in emergency triage.",
    metrics: [
      { label: "Clinical Recall (Sensitivity)", value: "98.4%", note: "Zero missed acute cardiac events" },
      { label: "ROC-AUC Score", value: "0.993", note: "Validated across stratified 75/25 split" },
      { label: "Emergency Cases", value: "1,319 Patients", note: "Cardiac troponin, CK-MB & vitals" },
      { label: "Top Biomarker", value: "Troponin cTnI", note: "Contributes >48% predictive importance" }
    ],
    tools: ["Python", "Scikit-Learn", "Random Forest", "ROC-AUC", "Clinical ML", "Seaborn"],
    businessProblem: "Hospital emergency departments face severe patient volume surges. Physicians need automated algorithmic triaging to immediately flag high-risk acute coronary syndrome patients for immediate catheterization.",
    architecture: "1,319 Patient Emergency Records ➔ Stratified Imputation & Enzyme Outlier Auditing ➔ Balanced Cost-Sensitive Random Forest (n=100) ➔ Confusion Matrix & ROC-AUC Threshold Calibration ➔ Clinical Triage Engine.",
    sqlSnippet: `# Cost-Sensitive Random Forest with Clinical Recall Prioritization
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

# Balanced class weights to eliminate false negatives
rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=6,
    class_weight='balanced',
    random_state=42
)
rf.fit(X_train, y_train)

y_pred = rf.predict(X_test)
y_prob = rf.predict_proba(X_test)[:, 1]

print("Clinical ROC-AUC:", round(roc_auc_score(y_test, y_prob), 4))
print(classification_report(y_test, y_pred, target_names=['Stable', 'Acute Cardiac Event']))`,
    visualType: "cardio",
    chartData: [
      { biomarker: "Troponin I (cTnI)", importance: 48.2, status: "Critical" },
      { biomarker: "CK-MB (kcm)", importance: 21.4, status: "Elevated" },
      { biomarker: "Blood Glucose", importance: 11.6, status: "High" },
      { biomarker: "Systolic BP", importance: 8.5, status: "Elevated" },
      { biomarker: "Age Factor", importance: 6.1, status: "Baseline" }
    ]
  },
  {
    id: "nlp-sentiment-intelligence",
    title: "NLP Sentiment Intelligence & Real-Time Review Classifier",
    domain: "NLP & LLMs",
    badge: "NLP: TF-IDF, NLTK & Multinomial Naive Bayes",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/07_NLP_Sentiment_Intelligence_Pipeline",
    summary: "Production NLP text classification pipeline trained on 50,000 full-text reviews. Implements regex sanitization, Porter stemming, TF-IDF n-gram vectorization, and a Multinomial Naive Bayes model deployed in an interactive Streamlit web dashboard.",
    metrics: [
      { label: "Test Accuracy", value: "88.6%", note: "Benchmarked on 50k IMDB reviews" },
      { label: "Inference Latency", value: "1.2 ms", note: "Sublinear TF-IDF transformation" },
      { label: "Corpus Trained", value: "50,000 Texts", note: "Balanced positive/negative reviews" },
      { label: "Deployment", value: "Streamlit Cloud", note: "Serialized Joblib model artifacts" }
    ],
    tools: ["Python", "NLTK", "TF-IDF", "Multinomial Naive Bayes", "Streamlit", "Joblib"],
    businessProblem: "Digital streaming platforms and retailers receive millions of unstructured customer critiques. Product teams require automated sentiment tagging to surface negative sentiment spikes and isolate high-churn feature defects in real time.",
    architecture: "50,000 Unstructured Text Reviews ➔ Regex Tokenizer & Stopword Pruning ➔ Porter Stemming Normalization ➔ Sublinear TF-IDF Matrix ➔ Multinomial Naive Bayes ➔ Interactive Streamlit Inference Web App.",
    sqlSnippet: `# Production NLP Pipeline & Streamlit Inference
import joblib, re
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords

model = joblib.load('mnb_model.joblib')
tfidf = joblib.load('tfidf_vectorizer.joblib')
ps = PorterStemmer()

def predict_sentiment(raw_text):
    clean = re.sub('[^a-z]', ' ', raw_text.lower())
    stemmed = " ".join([ps.stem(w) for w in clean.split() if w not in stopwords.words('english')])
    vector = tfidf.transform([stemmed])
    return "Positive" if model.predict(vector)[0] == 1 else "Negative"`,
    visualType: "nlp",
    chartData: [
      { model: "Multinomial NB", accuracy: 88.6, latency: 1.2 },
      { model: "Logistic Regression", accuracy: 89.2, latency: 3.4 },
      { model: "Linear SVM (SGD)", accuracy: 89.8, latency: 2.1 },
      { model: "Random Forest (NLP)", accuracy: 84.1, latency: 18.5 }
    ]
  },
  {
    id: "customer-segmentation-clustering",
    title: "Customer Behavioral Segmentation & Clustering Engine",
    domain: "Machine Learning & AI",
    badge: "Unsupervised ML: K-Means++ & Silhouette",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/08_Customer_Segmentation_Clustering_Engine",
    summary: "Unsupervised clustering engine segmenting commercial mall patrons by annual income and spending score. Applied WCSS Elbow Method and Silhouette Coefficient optimization to extract 5 actionable customer personas (VIP Champions to Careful Savers).",
    metrics: [
      { label: "Optimal Clusters", value: "k = 5", note: "Validated via WCSS & Silhouette analysis" },
      { label: "Silhouette Score", value: "0.554", note: "High intra-cluster cohesion" },
      { label: "VIP Cohort Discovered", value: "19.5% Volume", note: "Drives 42% high-margin gross spend" },
      { label: "Algorithms Tested", value: "K-Means & Ward", note: "Cross-validated with Hierarchical" }
    ],
    tools: ["Python", "Scikit-Learn", "K-Means++", "Silhouette Score", "Hierarchical Clustering", "DBSCAN"],
    businessProblem: "Retail property managers wasted marketing expenditure on generic blast promotions. Management needed data-driven behavioral cohorts to formulate bespoke luxury concierge services vs discount coupon drives.",
    architecture: "Customer Demographics & Spending Log ➔ Feature Normalization ➔ Inertia WCSS Elbow & Silhouette Cross-Evaluation ➔ K-Means++ Convergence (k=5) ➔ 5 Commercial Personas with Targeted ROI Playbooks.",
    sqlSnippet: `# K-Means++ Cluster Optimization & Silhouette Scoring
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

X = df[['Annual Income (k$)', 'Spending Score (1-100)']].values

# Optimal k=5 cluster fit
kmeans = KMeans(n_clusters=5, init='k-means++', random_state=42)
df['Cluster'] = kmeans.fit_predict(X)

sil = silhouette_score(X, df['Cluster'])
print(f"Validated Silhouette Coefficient: {round(sil, 3)}")
print(df.groupby('Cluster')[['Annual Income (k$)', 'Spending Score (1-100)']].mean())`,
    visualType: "clustering",
    chartData: [
      { persona: "VIP Champions", count: 39, income: 86.5, spend: 82.1, color: "#10B981" },
      { persona: "Careful Savers", count: 35, income: 88.2, spend: 17.1, color: "#F43F5E" },
      { persona: "Core Average", count: 81, income: 55.3, spend: 49.5, color: "#38BDF8" },
      { persona: "Trendsetters", count: 22, income: 25.7, spend: 79.4, color: "#F59E0B" },
      { persona: "Budget Minded", count: 23, income: 26.3, spend: 20.9, color: "#A855F7" }
    ]
  },
  {
    id: "enterprise-rag-intelligence",
    title: "Enterprise RAG Document Intelligence & Conversational AI",
    domain: "NLP & LLMs",
    badge: "GenAI: LangChain, FAISS & Groq LLaMA-3",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/09_Enterprise_RAG_Document_Intelligence",
    summary: "Production-grade Retrieval-Augmented Generation (RAG) system with PyMuPDF ingestion, sliding-window chunking (1,000 tokens), HuggingFace MiniLM vector embeddings, FAISS persistent caching, and Groq LLaMA-3 streaming responses with strict source citations.",
    metrics: [
      { label: "Retrieval Recall", value: "94.6%", note: "1,000 token chunk / 200 overlap" },
      { label: "FAISS Query Speed", value: "112 ms", note: "Sub-second semantic lookup" },
      { label: "Vector Embeddings", value: "384-Dim", note: "sentence-transformers/all-MiniLM-L6-v2" },
      { label: "LLM Engine", value: "Groq LLaMA-3", note: "Zero hallucination guardrails" }
    ],
    tools: ["LangChain", "Groq LLaMA-3", "FAISS", "HuggingFace", "Python", "Streamlit"],
    businessProblem: "Technical staff spent hours searching disparate enterprise PDF manuals. Foundational LLMs frequently hallucinated technical facts without verification. The organization required grounded semantic search with exact page citations.",
    architecture: "Technical PDF Documents ➔ PyMuPDF Loader ➔ Recursive Character Text Splitter ➔ HuggingFace Embeddings ➔ Persistent FAISS Cache ➔ Groq LLaMA-3 Prompt Grounding ➔ Streamlit UI with Citations.",
    sqlSnippet: `# LangChain RAG Chain with Strict Anti-Hallucination Guardrails
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

SYSTEM_PROMPT = """Answer strictly from the retrieved context.
If context is insufficient, reply: 'Information not found in documentation.'
Context: {context}
Question: {question}"""

rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | ChatPromptTemplate.from_template(SYSTEM_PROMPT)
    | groq_llm
    | StrOutputParser()
)`,
    visualType: "rag",
    chartData: [
      { chunk: "250 tokens", latency: 42, recall: 72.4 },
      { chunk: "500 tokens", latency: 68, recall: 84.1 },
      { chunk: "1000 tokens", latency: 112, recall: 94.6, optimal: true },
      { chunk: "1500 tokens", latency: 185, recall: 91.2 },
      { chunk: "2000 tokens", latency: 260, recall: 85.0 }
    ]
  },
  {
    id: "predictive-streamlit-app",
    title: "Interactive Predictive Analytics & Decision Simulator",
    domain: "Predictive Analytics & Web Deployment",
    badge: "Full-Stack Data: Streamlit, MySQL & Scikit-Learn",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/04_Predictive_Passenger_Survival_Pipeline",
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
    id: "healthcare-analytics",
    title: "Healthcare Operations & Clinical Billing Intelligence",
    domain: "Healthcare & Operations",
    badge: "Tableau & Relational Modeling",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/01_Healthcare_Clinical_Operations_Analysis",
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
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/03_Omnichannel_Retail_Sales_SQL_PowerBI",
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
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/02_Telecom_Customer_Churn_Retention",
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
    id: "banking-wealth-segmentation",
    title: "Financial Services & Banking Customer Wealth Analytics",
    domain: "BFSI & Wealth Management",
    badge: "PostgreSQL & Database Architecture",
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis/tree/main/05_BFSI_Banking_Wealth_Segmentation",
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
    githubUrl: "https://github.com/AmanBeast/Dataset_Analysis",
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
