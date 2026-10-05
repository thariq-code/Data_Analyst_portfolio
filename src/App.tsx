import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { ProjectIllustration, illustrationCaptions } from "./components/ProjectIllustration";

type IconName =
  | "arrow"
  | "github"
  | "linkedin"
  | "mail"
  | "phone"
  | "pin"
  | "check"
  | "menu"
  | "close"
  | "spark";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  categories: string[];
  tools: string[];
  cardTools: string[];
  focus: string[];
  repository: string;
  artwork: string;
  accent: string;
  accentSoft: string;
  problem: string;
  objective: string;
  data: string;
  workflow: string[];
  analysis: string[];
  outputs: string[];
  businessUse: string;
  skills: string[];
  results?: { label: string; value: string }[];
};

const GITHUB = "https://github.com/thariq-code";
const LINKEDIN = "https://linkedin.com/in/thariq-arsath-j-5017ab315";
const EMAIL = "thariqarsath786@gmail.com";
const PHONE = "6374458693";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Analytics", href: "#analytics", id: "analytics" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const projectFilters = [
  "All",
  "Data Analytics",
  "Business Analytics",
  "SQL",
  "Power BI",
  "Excel",
  "Python",
  "Customer Analytics",
  "Business Intelligence",
];

const projects: Project[] = [
  {
    number: "01",
    title: "GLOBAL AI RESEARCH OBSERVATORY",
    category: "POWER BI / BUSINESS INTELLIGENCE",
    description:
      "An interactive Power BI view of the global AI model ecosystem, built from Hugging Face Hub metadata. Python and Pandas prepare the data for DAX analysis across four dashboard pages covering popularity, engagement, activity and research patterns.",
    categories: ["Data Analytics", "Business Intelligence", "Power BI", "Python"],
    tools: [
      "Python",
      "Pandas",
      "Hugging Face Hub API",
      "Power BI",
      "DAX",
      "CSV",
      "Git",
      "GitHub",
      "VS Code",
    ],
    cardTools: ["Python", "Pandas", "Power BI", "DAX", "Hugging Face Hub API"],
    focus: ["KPI & trend analysis", "Popularity & engagement", "Dashboard development"],
    repository: `${GITHUB}/Global-AI-Research-Observatory`,
    artwork: "observatory",
    accent: "#6d4fd6",
    accentSoft: "#efeafd",
    problem:
      "AI model metadata is spread across model records and is difficult to explore as a single ecosystem. This project organizes those records into views of popularity, activity, engagement and research signals.",
    objective:
      "Collect real model metadata and make its distribution and trends explorable through a cleaned dataset, DAX measures and an interactive Power BI report.",
    data:
      "Model metadata collected from the Hugging Face Hub API. Repository files include raw and cleaned CSV datasets with fields such as model ID, author, creation date, downloads, likes, trending score, task, library and tags.",
    workflow: [
      "Collect metadata through the Hugging Face Hub API",
      "Inspect and clean records with Pandas",
      "Remove duplicates and handle missing values",
      "Convert dates and numeric fields; clean categories",
      "Create derived popularity and activity features",
      "Build DAX measures and interactive Power BI pages",
    ],
    analysis: [
      "Total models, downloads, likes and authors",
      "Average trending score and engagement rate",
      "Recently updated and highly popular models",
      "Model popularity, downloads versus likes, and activity",
      "Research, innovation and ecosystem patterns",
    ],
    outputs: [
      "Global AI Ecosystem Pulse",
      "Model Intelligence",
      "Research & Innovation",
      "AI Market & Insights",
      "Raw and cleaned CSV data, collection and inspection scripts, and a Power BI report",
    ],
    businessUse:
      "Explore which model types and models attract attention, how downloads relate to engagement, and how update and research activity varies across the ecosystem.",
    skills: [
      "API data collection",
      "Data inspection and cleaning",
      "Feature creation",
      "DAX measures",
      "Power BI modeling and dashboard development",
      "Data storytelling",
    ],
  },
  {
    number: "02",
    title: "BLINKIT BUSINESS ANALYTICS & DASHBOARD",
    category: "EXCEL / BUSINESS ANALYTICS",
    description:
      "An Excel analytics workbook connecting eight business datasets across sales, customers, products, delivery, feedback, inventory and marketing. Power Query, the Excel Data Model, PivotTables, PivotCharts and slicers bring the analysis together in an interactive dashboard.",
    categories: ["Data Analytics", "Business Analytics", "Excel", "Business Intelligence"],
    tools: [
      "Microsoft Excel",
      "Power Query",
      "PivotTables",
      "PivotCharts",
      "Excel Data Model",
      "Slicers",
      "Data cleaning & transformation",
      "Data visualization",
    ],
    cardTools: ["Excel", "Power Query", "PivotTables", "PivotCharts", "Slicers"],
    focus: ["Revenue & sales analysis", "Customer and operations", "Interactive dashboard"],
    repository: `${GITHUB}/blinkit-business-analytics-dashboard`,
    artwork: "blinkit",
    accent: "#2e8a72",
    accentSoft: "#e6f4ef",
    problem:
      "Operational, customer, product, delivery and marketing information sits across separate business datasets. The workbook connects those datasets so performance can be reviewed together.",
    objective:
      "Transform raw CSV datasets into an interactive Excel dashboard with business summaries, visual analysis and slicer-based exploration.",
    data:
      "Eight CSV datasets: Customers, Orders, Order Items, Products, Inventory, Delivery Performance, Customer Feedback and Marketing Performance. Relationships use customer, order and product keys described in the repository.",
    workflow: [
      "Import raw CSV datasets",
      "Clean and transform data with Power Query",
      "Connect datasets through the Excel Data Model",
      "Create PivotTables and PivotCharts",
      "Build KPI and business summaries",
      "Explore the interactive dashboard with slicers",
    ],
    analysis: [
      "Monthly revenue trend, payment method revenue and order performance",
      "Category average price, product quantities and product damage",
      "Delivery status and average delivery time",
      "Customer segment orders, ratings and area-wise orders",
      "Marketing revenue and ROAS by channel",
    ],
    outputs: [
      "Interactive Excel analytics dashboard",
      "PivotTable-based charts and business summary",
      "Eight connected CSV datasets",
      "Supporting PivotTables for detailed analysis",
    ],
    businessUse:
      "Review sales and revenue patterns alongside customer behavior, product performance, delivery operations, feedback, inventory and marketing channels.",
    skills: [
      "Excel data modeling",
      "Power Query transformation",
      "Relational data analysis",
      "PivotTable and PivotChart reporting",
      "KPI analysis",
      "Dashboard development",
    ],
  },
  {
    number: "03",
    title: "AI SAAS ANALYTICS USING MYSQL",
    category: "SQL / BUSINESS INTELLIGENCE",
    description:
      "A MySQL business analytics project that models customers, plans, subscriptions, payments, AI usage and support activity. SQL analysis explores revenue, customer value, subscriptions, engagement, payment outcomes and support patterns using an explicitly synthetic portfolio dataset.",
    categories: ["Data Analytics", "Business Analytics", "SQL", "Business Intelligence"],
    tools: ["MySQL", "SQL", "MySQL Workbench", "Relational database", "ER modeling"],
    cardTools: ["MySQL", "SQL", "MySQL Workbench", "Relational database", "ER modeling"],
    focus: ["Revenue & customer analytics", "Advanced SQL", "Relational data modeling"],
    repository: `${GITHUB}/AI-SaaS-Analytics-Using-MySQL`,
    artwork: "saas",
    accent: "#3f5bb0",
    accentSoft: "#e9eefa",
    problem:
      "An AI SaaS business generates related customer, subscription, payment, product-usage and support records. A relational structure and analytical SQL layer help answer business questions across those records.",
    objective:
      "Design a normalized MySQL schema and use SQL to analyze revenue, subscription behavior, customer engagement, AI usage, payments and support operations.",
    data:
      "A synthetic portfolio dataset across Customers (500), Plans (4), Subscriptions (650), Payments (1,200), AI Usage (3,500) and Support Tickets (900). The repository includes CSV files, an ER diagram and SQL scripts.",
    workflow: [
      "Create a relational schema and ER model",
      "Load and validate the synthetic CSV data",
      "Join customer, plan, subscription and activity tables",
      "Write business-focused analytical queries",
      "Create reusable views and stored procedures",
      "Add indexes and data-integrity triggers",
    ],
    analysis: [
      "SELECT, WHERE, ORDER BY, GROUP BY, HAVING and LIMIT",
      "INNER JOIN, LEFT JOIN, CASE, COALESCE, aggregates, subqueries and CTEs",
      "RANK, DENSE_RANK, ROW_NUMBER, PARTITION BY and date functions",
      "Revenue by plan, payment method, month and customer",
      "Customer value, industry and engagement",
      "Subscription activity and status",
      "AI platform usage and customer engagement",
      "Support categories, ticket patterns and payment status",
    ],
    outputs: [
      "Normalized schema and ER diagram",
      "Business analytics SQL queries using joins, CTEs and window functions",
      "Views, stored procedures, triggers and indexes",
      "Data validation scripts and query examples",
    ],
    businessUse:
      "Answer questions about high-value customers, plan revenue, AI engagement, support issues and payment outcomes from connected business data.",
    skills: [
      "SQL querying and aggregation",
      "CTEs and window functions",
      "Relational database design",
      "Data validation and integrity",
      "Views and stored procedures",
      "Indexing and query optimization",
    ],
  },
  {
    number: "04",
    title: "AIRBNB REVIEW SUMMARIZATION & SENTIMENT ANALYSIS",
    category: "CUSTOMER ANALYTICS / FEEDBACK",
    description:
      "A customer-feedback analysis workflow for Inside Airbnb reviews. The notebook cleans review text, generates BERT embeddings, analyzes sentiment, summarizes reviews with T5, extracts TF-IDF keywords and visualizes the resulting feedback signals.",
    categories: ["Customer Analytics", "Data Analytics", "Python", "Business Intelligence"],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "NLTK",
      "BeautifulSoup",
      "Scikit-learn",
      "Hugging Face Transformers",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
      "WordCloud",
    ],
    cardTools: ["Python", "Pandas", "NLTK", "Hugging Face Transformers", "Scikit-learn"],
    focus: ["Customer feedback analysis", "Sentiment & topics", "Text visualization"],
    repository: `${GITHUB}/Airbnb-Customer-Review-Summarization`,
    artwork: "airbnb",
    accent: "#c2537c",
    accentSoft: "#fbeaf1",
    problem:
      "Free-text customer reviews contain detailed feedback that is not immediately structured for analysis. This notebook turns review text into sentiment, summary and topic outputs.",
    objective:
      "Analyze Airbnb review text to surface customer sentiment, concise review summaries and important keywords for feedback exploration.",
    data:
      "The repository uses the Inside Airbnb reviews.csv dataset, described as Airbnb customer reviews.",
    workflow: [
      "Load the Inside Airbnb reviews dataset",
      "Clean text, remove HTML and tokenize",
      "Generate BERT embeddings",
      "Analyze sentiment with Hugging Face Transformers",
      "Summarize reviews with T5 and extract TF-IDF keywords",
      "Visualize results and sentiment distribution",
    ],
    analysis: [
      "Sentiment labels and sentiment scores",
      "Review summaries and key topics",
      "TF-IDF keyword extraction",
      "Word cloud and sentiment distribution visualization",
    ],
    outputs: [
      "Cleaned reviews",
      "Sentiment labels and scores",
      "Review summaries and keywords",
      "Word cloud and sentiment distribution graph",
    ],
    businessUse:
      "Support customer feedback analysis, opinion mining, tourism analytics and customer experience exploration from review text.",
    skills: [
      "Text cleaning and preprocessing",
      "Customer feedback analysis",
      "Sentiment analysis",
      "Keyword extraction",
      "Review summarization",
      "Analytical visualization",
    ],
  },
  {
    number: "05",
    title: "TESLA STOCK PRICE ANALYSIS & FORECASTING",
    category: "TIME-SERIES ANALYSIS / PYTHON",
    description:
      "A time-series workflow using historical Tesla open prices, 60-day input sequences and a 75/25 train-test split. The project combines preprocessing, LSTM forecasting, statistical evaluation and actual-versus-predicted visualizations.",
    categories: ["Data Analytics", "Python"],
    tools: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow / Keras",
      "Jupyter Notebook",
    ],
    cardTools: ["Python", "Pandas", "Scikit-learn", "TensorFlow / Keras", "Jupyter Notebook"],
    focus: ["Time-series analysis", "Trend visualization", "Statistical evaluation"],
    repository: `${GITHUB}/tesla-stock-price-prediction-with-lstm`,
    artwork: "tesla",
    accent: "#1f7286",
    accentSoft: "#e6f1f4",
    problem:
      "Historical stock values form a time series with changing trends and market volatility. The project explores how a sequential forecasting workflow represents those patterns and where its predictions differ from observed values.",
    objective:
      "Prepare historical Tesla open-price data, create rolling input sequences, train an LSTM forecasting model and evaluate the predictions.",
    data:
      "Historical Tesla stock price data in CSV form. The README identifies the Open price as the selected feature; no exact dataset row count is stated.",
    workflow: [
      "Load data with Pandas and check for missing values",
      "Select the Open price feature",
      "Scale values with MinMaxScaler",
      "Create 60-day sequences",
      "Split data into 75% training and 25% testing",
      "Train, evaluate and visualize LSTM forecasts",
    ],
    analysis: [
      "Historical stock price trend",
      "Actual versus predicted stock price",
      "Prediction error using MAE, MSE and RMSE",
    ],
    outputs: [
      "Historical stock price graph",
      "Actual-versus-predicted comparison",
      "Evaluation metric visualization",
    ],
    businessUse:
      "Explore historical price trends and forecast deviations as a time-series analysis exercise. The project does not make a claim about investment outcomes.",
    skills: [
      "Data preprocessing and scaling",
      "Sequence preparation",
      "Time-series analysis",
      "Statistical evaluation",
      "Trend visualization",
    ],
    results: [
      { label: "MAE", value: "28.38" },
      { label: "MSE", value: "1257.55" },
      { label: "RMSE", value: "35.46" },
    ],
  },
  {
    number: "06",
    title: "CARDEKO CAR PRICE PREDICTION MODEL",
    category: "PRICING ANALYTICS / PYTHON",
    description:
      "A pricing analytics project comparing regression approaches for used-car values using vehicle age, distance driven, mileage, engine capacity and other vehicle attributes. The repository identifies Random Forest as its selected model and documents its evaluation metrics.",
    categories: ["Data Analytics", "Python"],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
    cardTools: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
    focus: ["Pricing analytics", "Feature analysis", "Model comparison"],
    repository: `${GITHUB}/Cardeko-Car-Price-Prediction-Model`,
    artwork: "cardeko",
    accent: "#8a4bb0",
    accentSoft: "#f4ebfa",
    problem:
      "Used-car prices vary with a combination of vehicle and listing attributes. This project compares regression approaches for estimating a selling price from those attributes.",
    objective:
      "Prepare vehicle features, compare regression models and use the repository's selected model in a small Flask prediction application.",
    data:
      "Vehicle attributes include age, kilometers driven, mileage, engine capacity, fuel type, seller type, transmission type and seats. The README does not identify a dataset source or row count.",
    workflow: [
      "Load and prepare vehicle attributes in a notebook",
      "Compare six regression approaches",
      "Select the documented Random Forest model",
      "Use the saved model in the Flask application",
    ],
    analysis: [
      "Feature-based used-car pricing",
      "Linear Regression, SVR, Decision Tree, Random Forest, Ridge and Lasso comparison",
      "RMSE and R-squared evaluation",
    ],
    outputs: [
      "Notebook-based model comparison",
      "Saved best-model artifact",
      "Flask form for entering vehicle details and estimating price",
    ],
    businessUse:
      "Explore how vehicle characteristics relate to a price estimate and how regression approaches can be compared for a pricing use case.",
    skills: [
      "Data preprocessing",
      "Feature analysis",
      "Regression analysis",
      "Model comparison",
      "Pricing analytics",
      "Flask application integration",
    ],
    results: [
      { label: "RMSE", value: "213890.68" },
      { label: "R-squared", value: "0.9341" },
    ],
  },
  {
    number: "07",
    title: "AI-BASED DEVELOPER BURNOUT DETECTION",
    category: "BEHAVIORAL ANALYTICS / PYTHON",
    description:
      "An analytical application that connects public GitHub commit activity with engineered behavioral features such as night coding, sentiment-related signals and consistency. The repository includes Flask and MongoDB Atlas components; no model performance figures are claimed here.",
    categories: ["Data Analytics", "Python"],
    tools: ["Python", "GitHub API", "Flask", "MongoDB Atlas", "Random Forest", "XGBoost / LSTM structure"],
    cardTools: ["Python", "GitHub API", "Random Forest", "Flask", "MongoDB Atlas"],
    focus: ["GitHub activity analytics", "Behavioral patterns", "Feature engineering"],
    repository: `${GITHUB}/Burnout-Detection`,
    artwork: "burnout",
    accent: "#4a4a8f",
    accentSoft: "#ececf8",
    problem:
      "Commit history can be transformed into activity patterns for exploration. The repository frames this as developer burnout risk analysis and implements a GitHub-connected application.",
    objective:
      "Fetch public GitHub commit activity, engineer behavioral features and expose an interactive analysis flow through a Flask application.",
    data:
      "Public GitHub commit activity. The repository does not document a dataset size or measured prediction performance.",
    workflow: [
      "Connect to public GitHub commit activity",
      "Extract commit patterns",
      "Engineer night-coding, sentiment-related and consistency features",
      "Pass features through the repository's model structure",
      "Serve the application with Flask and MongoDB Atlas components",
    ],
    analysis: [
      "Commit timing and night-coding patterns",
      "Sentiment-related and consistency features",
      "Random Forest implementation with XGBoost / LSTM structure noted in the repository",
    ],
    outputs: [
      "GitHub activity integration",
      "Feature engineering code",
      "Interactive Flask application",
    ],
    businessUse:
      "Explore developer activity signals as a behavioral analytics use case. The portfolio does not state an accuracy, dataset size or validated burnout outcome.",
    skills: [
      "GitHub data integration",
      "Behavioral pattern analysis",
      "Feature engineering",
      "Python application structure",
      "Careful interpretation of model outputs",
    ],
  },
  {
    number: "08",
    title: "BOOKSTORE MANAGEMENT SYSTEM",
    category: "SQL / DATABASE DESIGN",
    description:
      "A supporting MySQL database project for books, customers, orders, order items and admins. It demonstrates relational design and operational SQL concepts including joins, stored procedures, triggers, transactions, views, indexing and EXPLAIN-based query optimization.",
    categories: ["SQL"],
    tools: ["MySQL", "SQL", "DBMS concepts"],
    cardTools: ["MySQL", "SQL", "Relational design", "Stored procedures", "EXPLAIN"],
    focus: ["SQL fundamentals", "Relational data design", "Query optimization"],
    repository: `${GITHUB}/SQL-Bookstore-Database`,
    artwork: "bookstore",
    accent: "#9a6a37",
    accentSoft: "#f7efe2",
    problem:
      "A bookstore needs structured records for books, customers and orders, with order items linking purchased books to transactions.",
    objective:
      "Create a MySQL database that demonstrates relational design, CRUD workflows and reusable logic for common bookstore operations.",
    data:
      "MySQL tables for Books, Customers, Orders, Order_Items and Admins, connected through primary and foreign key relationships.",
    workflow: [
      "Create relational tables and key relationships",
      "Insert, retrieve, update and delete records",
      "Join customer, order, item and book data",
      "Process orders with procedures, triggers and transactions",
      "Add views, functions and indexes",
      "Inspect query plans with EXPLAIN",
    ],
    analysis: [
      "Customer order details",
      "Best-selling books by quantity",
      "Order summaries and grouped SQL queries",
    ],
    outputs: [
      "MySQL schema and SQL script",
      "ProcessOrder procedure and UpdateStock trigger",
      "OrderSummary view and CalculateDiscount function",
      "Indexing and EXPLAIN examples",
    ],
    businessUse:
      "Support structured bookstore operations and demonstrate how order, inventory and customer data can be queried and maintained consistently.",
    skills: [
      "Relational database design",
      "SQL CRUD and joins",
      "Transactions",
      "Stored procedures and triggers",
      "Views and functions",
      "Indexing and query optimization",
    ],
  },
];

const skillGroups: { title: string; items: string[]; supporting?: boolean }[] = [
  {
    title: "Data analysis & programming",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Data Validation",
      "Data Preprocessing",
      "Data Transformation",
      "Data Manipulation",
      "Feature Analysis",
    ],
  },
  {
    title: "SQL & database",
    items: [
      "SQL",
      "MySQL",
      "MySQL Workbench",
      "Data Extraction",
      "Data Filtering",
      "JOINs",
      "Subqueries",
      "CTEs",
      "Aggregate Functions",
      "GROUP BY",
      "HAVING",
      "Window Functions",
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER",
      "Views",
      "Stored Procedures",
      "Triggers",
      "Indexes",
      "Query Optimization",
      "Relational Database Design",
      "ER Diagrams",
    ],
  },
  {
    title: "Power BI & business intelligence",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Measures",
      "Calculated Columns",
      "KPI Development",
      "Dashboard Development",
      "Interactive Dashboards",
      "Data Visualization",
      "Business Reporting",
      "Business Intelligence",
      "Data Storytelling",
    ],
  },
  {
    title: "Excel & advanced Excel",
    items: [
      "Microsoft Excel",
      "Advanced Excel",
      "Power Query",
      "PivotTables",
      "PivotCharts",
      "Slicers",
      "Excel Data Model",
      "VLOOKUP",
      "XLOOKUP",
      "INDEX-MATCH",
      "SUMIF",
      "SUMIFS",
      "COUNTIF",
      "COUNTIFS",
      "IF",
      "Conditional Formatting",
      "Data Validation",
      "Dashboard Development",
    ],
  },
  {
    title: "Tableau & visualization",
    items: [
      "Tableau",
      "Interactive Visualization",
      "KPI Reporting",
      "Trend Analysis",
      "Comparative Analysis",
      "Performance Analysis",
      "Charts",
      "Graphs",
      "Data Storytelling",
    ],
  },
  {
    title: "Statistics & analytics",
    items: [
      "Descriptive Statistics",
      "Mean",
      "Median",
      "Mode",
      "Variance",
      "Standard Deviation",
      "Correlation Analysis",
      "Trend Analysis",
      "Statistical Analysis",
      "Data Interpretation",
      "Business Analysis",
      "Case Study Analysis",
      "Data-Driven Decision Making",
    ],
  },
  {
    title: "Data sources & analytics tools",
    items: [
      "Kaggle",
      "Hugging Face Hub API",
      "GitHub API",
      "Public Datasets",
      "CSV",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "AI-assisted analytics & productivity",
    supporting: true,
    items: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Grok",
      "NotebookLM",
      "Gamma",
      "AI-Assisted Research",
      "Data Exploration",
      "Documentation",
      "Insight Generation",
    ],
  },
];

const businessCapabilityGroups = [
  {
    title: "Decision support",
    items: [
      "Business Analysis",
      "Business Intelligence",
      "Data-Driven Decision Making",
      "Requirements-oriented analytical thinking",
      "Problem Solving",
      "Case Study Analysis",
      "Insight Generation",
    ],
  },
  {
    title: "Performance & reporting",
    items: [
      "KPI Analysis",
      "Dashboard Development",
      "Business Reporting",
      "Trend Analysis",
      "Performance Analysis",
      "Comparative Analysis",
      "Data Storytelling",
    ],
  },
  {
    title: "Customer & product",
    items: [
      "Customer Analytics",
      "Customer Segmentation",
      "Customer Feedback Analysis",
      "Product Analysis",
    ],
  },
  {
    title: "Revenue & operations",
    items: [
      "Revenue Analysis",
      "Sales Analysis",
      "Operational Analytics",
      "Marketing Analytics",
      "Delivery Performance Analysis",
    ],
  },
];

const workflowSteps = [
  "Data collection",
  "Data extraction",
  "Data cleaning",
  "Data validation",
  "Data transformation",
  "Data modeling",
  "Exploratory data analysis",
  "KPI / statistical analysis",
  "Data visualization",
  "Business insights",
  "Data-driven decision making",
];

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.4 1.4-4.4-2.5-6.2-3m12.4 5v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.8 6a4.3 4.3 0 0 0-.1-3.2S17.6 2.5 15 4.2a13 13 0 0 0-6 0C6.4 2.5 5.3 2.8 5.3 2.8A4.3 4.3 0 0 0 5.2 6a4.7 4.7 0 0 0-1.2 3.3c0 4.7 2.9 5.7 5.6 6a3 3 0 0 0-.8 2.3V21" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" />
          <circle cx="5" cy="5.5" r="1" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7.2 3.5 9.8 7l-1.5 1.8a15.5 15.5 0 0 0 6.9 6.9l1.8-1.5 3.5 2.6-.8 3.1c-.2.8-1 1.3-1.8 1.2C9.6 19.8 4.2 14.4 2.9 6.1c-.1-.8.4-1.6 1.2-1.8l3.1-.8Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m4.5 12.5 5 5 10-11" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
          <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
        </svg>
      );
  }
}

function SectionIntro({
  index,
  eyebrow,
  title,
  description,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="section-intro reveal">
      <div className="section-kicker">
        <span>{index}</span>
        <span className="section-kicker-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal" aria-hidden="true">
      <svg viewBox="0 0 620 460" role="presentation">
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a793ff" />
            <stop offset="1" stopColor="#7558df" />
          </linearGradient>
          <linearGradient id="hero-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b6a6ff" />
            <stop offset="1" stopColor="#ded6ff" />
          </linearGradient>
        </defs>
        <circle cx="344" cy="220" r="178" fill="#f4f0ff" />
        <circle cx="480" cy="82" r="21" fill="#ebe5ff" />
        <circle cx="131" cy="333" r="11" fill="#e6dfff" />
        <path d="M70 102h450M70 162h450M70 222h450M70 282h450M70 342h450" className="hero-grid-line" />
        <path d="M70 91v258M160 91v258M250 91v258M340 91v258M430 91v258M520 91v258" className="hero-grid-line hero-grid-vertical" />
        <text x="74" y="75" className="hero-svg-label">ANALYTICS / FROM DATA TO DECISIONS</text>
        <rect x="104" y="265" width="36" height="80" rx="8" fill="url(#hero-bar)" />
        <rect x="171" y="226" width="36" height="119" rx="8" fill="url(#hero-bar)" />
        <rect x="238" y="246" width="36" height="99" rx="8" fill="url(#hero-bar)" />
        <rect x="305" y="176" width="36" height="169" rx="8" fill="url(#hero-bar)" />
        <rect x="372" y="198" width="36" height="147" rx="8" fill="url(#hero-bar)" />
        <rect x="439" y="135" width="36" height="210" rx="8" fill="url(#hero-bar)" />
        <path d="M92 249c46-17 49-55 92-42s50 30 86 12 42-52 87-34 53-5 90-34 52-23 99-43" fill="none" stroke="url(#hero-line)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="92" cy="249" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <circle cx="184" cy="207" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <circle cx="270" cy="219" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <circle cx="357" cy="185" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <circle cx="447" cy="151" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <circle cx="536" cy="108" r="5" fill="#fff" stroke="#8b72ea" strokeWidth="3" />
        <path d="M82 377h378" stroke="#d8d0f4" strokeWidth="1" />
        <text x="83" y="404" className="hero-svg-foot">COLLECT</text>
        <text x="192" y="404" className="hero-svg-foot">CLEAN</text>
        <text x="293" y="404" className="hero-svg-foot">ANALYZE</text>
        <text x="414" y="404" className="hero-svg-foot">INSIGHT</text>
        <path d="m163 400 14 0m0 0-4-4m4 4-4 4m97-4h14m0 0-4-4m4 4-4 4m107-4h14m0 0-4-4m4 4-4 4" stroke="#9b86e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="540" cy="341" r="30" fill="#fff" stroke="#e8e2fa" strokeWidth="1.5" />
        <path d="M540 311a30 30 0 0 1 26 45l-26-15Z" fill="#9a84f2" />
        <path d="M540 341v-30" stroke="#fff" strokeWidth="2" />
        <circle cx="540" cy="341" r="7" fill="#fff" />
      </svg>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article
      className={`project-card reveal project-${project.number}`}
      style={{ "--accent": project.accent, "--accent-soft": project.accentSoft } as CSSProperties}
    >
      <div className="project-preview">
        <button
          type="button"
          className="preview-trigger"
          onClick={() => onOpen(project)}
          aria-label={`Open illustration and details for ${project.title}`}
        >
          <ProjectIllustration variant={project.artwork} />
          <span className="preview-sheen" aria-hidden="true" />
          <span className="preview-caption">
            {illustrationCaptions[project.artwork]?.tagline ?? "Analytics illustration"}
          </span>
          <span className="preview-open">
            Open detail view <Icon name="arrow" size={14} />
          </span>
        </button>
        <span className="project-number">{project.number}</span>
        <span className="preview-domain">{illustrationCaptions[project.artwork]?.domain}</span>
      </div>
      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-card-meta">
          <div className="meta-block">
            <h4>Tools &amp; technologies</h4>
            <div className="tool-tags">
              {project.cardTools.map((tool) => (
                <span className="tool-tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="meta-block focus-block">
            <h4>Analytics focus</h4>
            <div className="focus-list">
              {project.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-card-actions">
          <button className="project-details-link" type="button" onClick={() => onOpen(project)}>
            Explore project <Icon name="arrow" size={16} />
          </button>
          <a href={project.repository} target="_blank" rel="noreferrer">
            View GitHub <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>(".dialog-close");
    closeButton?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        ref={dialogRef}
        tabIndex={-1}
        style={{ "--accent": project.accent, "--accent-soft": project.accentSoft } as CSSProperties}
      >
        <div className="dialog-topline">
          <div>
            <span className="dialog-number">PROJECT {project.number}</span>
            <span className="dialog-category">{project.category}</span>
          </div>
          <button className="dialog-close icon-button" type="button" onClick={onClose} aria-label="Close project details">
            <Icon name="close" size={19} />
          </button>
        </div>

        <div className="dialog-stage" aria-hidden="true">
          <ProjectIllustration variant={project.artwork} live />
          <span className="dialog-stage-tag">{illustrationCaptions[project.artwork]?.domain}</span>
        </div>

        <div className="dialog-heading">
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className="dialog-content-grid">
          <section className="dialog-section">
            <h3>Business problem</h3>
            <p>{project.problem}</p>
          </section>
          <section className="dialog-section">
            <h3>Objective</h3>
            <p>{project.objective}</p>
          </section>
          <section className="dialog-section dialog-wide">
            <h3>Data / source</h3>
            <p>{project.data}</p>
          </section>
          <section className="dialog-section dialog-wide">
            <h3>Workflow</h3>
            <ol className="workflow-detail-list">
              {project.workflow.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <section className="dialog-section">
            <h3>Tools &amp; technologies</h3>
            <div className="tool-tags dialog-tool-tags">
              {project.tools.map((tool) => (
                <span className="tool-tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </section>
          <section className="dialog-section">
            <h3>Analytics performed</h3>
            <DetailList items={project.analysis} />
          </section>
          <section className="dialog-section">
            <h3>Key outputs</h3>
            <DetailList items={project.outputs} />
          </section>
          <section className="dialog-section">
            <h3>Business use case</h3>
            <p>{project.businessUse}</p>
          </section>
          {project.results && (
            <section className="dialog-section dialog-wide">
              <h3>Documented evaluation metrics</h3>
              <div className="result-metrics">
                {project.results.map((result) => (
                  <div key={result.label}>
                    <span>{result.label}</span>
                    <strong>{result.value}</strong>
                  </div>
                ))}
              </div>
            </section>
          )}
          <section className="dialog-section dialog-wide">
            <h3>Skills demonstrated</h3>
            <div className="dialog-skill-list">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="dialog-footer">
          <span>Repository / GitHub</span>
          <a href={project.repository} target="_blank" rel="noreferrer">
            View source repository <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillList({ items }: { items: string[] }) {
  return (
    <div className="skill-token-list">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const copyTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(false), 2200);
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    const observed = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 0.8] },
    );
    observed.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const openProject = (project: Project) => {
    lastFocusedElement.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
  };

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    window.setTimeout(() => lastFocusedElement.current?.focus(), 0);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand-mark" aria-label="Thariq Arsath J, home">
            <span className="brand-monogram" aria-hidden="true">
              TJ
              <svg className="brand-trend" viewBox="0 0 22 10">
                <path
                  d="M1 8.6 5.2 4.3l3.4 3L13.4 2l3 1.6L21 1.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">Thariq Arsath J</span>
              <span className="brand-caption">DATA / BUSINESS / INSIGHT</span>
            </span>
          </a>

          <nav className="primary-navigation" aria-label="Primary navigation">
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={22} />
            </button>
            <div id="primary-menu" className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.id}
                  className={activeSection === item.id ? "is-active" : ""}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <a href="#contact" className="header-contact">
            Let's connect <Icon name="arrow" size={15} />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-inner page-shell">
            <div className="hero-copy">
              <h1 id="hero-title">
                THARIQ
                <br />
                <span>ARSATH</span>
              </h1>
              <p className="hero-roles">
                <span>DATA ANALYST</span>
                <i aria-hidden="true">/</i>
                <span>BUSINESS ANALYST</span>
                <i aria-hidden="true">/</i>
                <span>BUSINESS INTELLIGENCE</span>
              </p>
              <p className="hero-description">
                B.Sc. Artificial Intelligence and Machine Learning graduate with hands-on project
                experience in data analysis, business intelligence, SQL, Python, Power BI, DAX,
                Excel, Advanced Excel, Tableau and statistics - building dashboards, cleaning and
                transforming data, analyzing KPIs, visualizing patterns and writing business
                reports.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  View Projects <Icon name="arrow" size={17} />
                </a>
                <a href={GITHUB} target="_blank" rel="noreferrer" className="button button-secondary">
                  <Icon name="github" size={17} /> GitHub
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="projects-title">
          <div className="page-shell">
            <SectionIntro
              id="projects-title"
              index="01"
              eyebrow="SELECTED PROJECTS"
              title="Business questions.\nAnalytical answers."
              description="A project portfolio centered on BI dashboards, Excel reporting, SQL analysis and business-focused data work."
            />

            <div className="project-controls reveal">
              <div className="filter-list" role="group" aria-label="Filter projects by focus">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    className={`filter-button ${activeFilter === filter ? "is-selected" : ""}`}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <p className="project-count" aria-live="polite">
                {String(filteredProjects.length).padStart(2, "0")} repositories
              </p>
            </div>

            <div className="project-grid" aria-live="polite">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.number} project={project} onOpen={openProject} />
              ))}
            </div>
            <p className="project-evidence-note reveal">
              Project summaries are based on the README files and assets in the linked repositories.
            </p>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="page-shell about-layout">
            <div className="about-main">
              <SectionIntro id="about-title" index="02" eyebrow="ABOUT" title="Data analysis with a business lens." />
              <div className="about-copy reveal">
                <p>
                  I am a B.Sc. Artificial Intelligence and Machine Learning graduate focused on
                  Data Analytics, Business Analytics and Business Intelligence. My hands-on project
                  work spans SQL, Python, Power BI, DAX, Excel, Advanced Excel, Tableau and
                  statistics.
                </p>
                <p>
                  I enjoy transforming structured and unstructured data into useful insights,
                  dashboards, reports and business-focused analytical outputs - from cleaning and
                  shaping data through to visualizing patterns and communicating findings.
                </p>
              </div>
            </div>
            <aside className="about-aside reveal" aria-label="Professional details">
              <div className="about-quote-mark" aria-hidden="true">01</div>
              <p className="about-quote">
                Useful analysis connects the detail in the data to the question a business needs to answer.
              </p>
              <dl className="profile-details">
                <div>
                  <dt><Icon name="pin" size={15} /> Location</dt>
                  <dd>Coimbatore, Tamil Nadu, India</dd>
                </div>
                <div>
                  <dt><Icon name="spark" size={15} /> Career status</dt>
                  <dd>Data Analyst / Business Analyst fresher - immediate joiner</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>English / Tamil</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
          <div className="page-shell">
            <SectionIntro
              id="skills-title"
              index="03"
              eyebrow="SKILLS & CAPABILITIES"
              title="The toolkit behind the analysis."
              description="A practical foundation across data preparation, SQL, BI, reporting and statistical thinking."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <section
                  className={`skill-group reveal ${group.supporting ? "supporting-skill-group" : ""}`}
                  key={group.title}
                  aria-labelledby={`skill-group-${index}`}
                >
                  <div className="skill-group-heading">
                    <span className="skill-group-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3 id={`skill-group-${index}`}>{group.title}</h3>
                    {group.supporting && <span className="supporting-label">SUPPORTING TOOLING</span>}
                  </div>
                  <SkillList items={group.items} />
                </section>
              ))}
            </div>

            <div className="business-capabilities reveal">
              <div className="capability-intro">
                <p className="minor-eyebrow">BUSINESS ANALYST CAPABILITIES</p>
                <h3>Analysis shaped around decisions.</h3>
                <p>
                  Project-supported capabilities for asking clear questions, structuring analysis
                  and communicating useful findings.
                </p>
              </div>
              <div className="capability-grid">
                {businessCapabilityGroups.map((group) => (
                  <div className="capability-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <SkillList items={group.items} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="analytics-section section-pad" id="analytics" aria-labelledby="analytics-title">
          <div className="page-shell analytics-layout">
            <div className="analytics-intro">
              <SectionIntro
                id="analytics-title"
                index="04"
                eyebrow="ANALYTICS WORKFLOW"
                title="From raw data to a decision."
                description="A clear sequence keeps analysis traceable, useful and connected to the business question."
              />
              <div className="workflow-aside reveal">
                <span className="workflow-symbol" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <p>Collect carefully. Validate the signal. Communicate what matters.</p>
              </div>
            </div>
            <ol className="workflow-list reveal">
              {workflowSteps.map((step, index) => (
                <li key={step}>
                  <span className="workflow-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="workflow-step">{step}</span>
                  {index < workflowSteps.length - 1 && <span className="workflow-connector" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="education-section section-pad" id="education" aria-labelledby="education-title">
          <div className="page-shell education-layout">
            <SectionIntro
              id="education-title"
              index="05"
              eyebrow="EDUCATION & LEARNING"
              title="A strong analytical foundation."
            />
            <div className="education-content reveal">
              <div className="education-entry">
                <p className="education-dates">2023 - 2026</p>
                <div>
                  <h3>B.Sc. Artificial Intelligence and Machine Learning</h3>
                  <p className="education-school">Shri Nehru Maha Vidyalaya College of Arts and Science</p>
                  <p className="education-university">Affiliated with Bharathiar University</p>
                </div>
                <p className="education-grade"><span>CGPA</span> 8.5 / 10</p>
              </div>
              <div className="learning-entry">
                <p className="minor-eyebrow">ADDITIONAL LEARNING</p>
                <ul>
                  <li>GUVI-HCL GenZen AIML Program</li>
                  <li>Mastering MySQL in Tamil - GUVI HCL</li>
                  <li>AI Fundamentals</li>
                  <li>JavaScript - GUVI HCL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="page-shell contact-layout">
            <div className="contact-copy reveal">
              <p className="contact-eyebrow"><span className="live-dot" /> OPEN TO DATA ANALYST / BUSINESS ANALYST ROLES</p>
              <h2 id="contact-title">Let's turn data into actionable insights.</h2>
              <p>
                Looking for a fresher who enjoys finding the signal in data? I am available for
                immediate joining.
              </p>
              <a href={`mailto:${EMAIL}`} className="contact-email">
                {EMAIL} <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="contact-actions reveal">
              <div className="contact-buttons">
                <a href={GITHUB} target="_blank" rel="noreferrer" className="button button-primary">
                  <Icon name="github" size={17} /> GitHub
                </a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer" className="button button-secondary">
                  <Icon name="linkedin" size={17} /> LinkedIn
                </a>
                <a href={`mailto:${EMAIL}`} className="button button-secondary">
                  <Icon name="mail" size={17} /> Email
                </a>
                <button
                  type="button"
                  className={`button button-copy ${copied ? "is-copied" : ""}`}
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  <Icon name={copied ? "check" : "spark"} size={16} />
                  <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
                </button>
              </div>
              <a className="contact-phone" href={`tel:+91${PHONE}`}>
                <Icon name="phone" size={16} /> +91 {PHONE}
              </a>
              <p className="contact-availability">
                Open to Data Analyst / Business Analyst / Business Intelligence roles
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-brand">
            <a href="#home">THARIQ ARSATH J</a>
            <p>Data Analyst / Business Analyst / Business Intelligence</p>
            <p>Coimbatore, Tamil Nadu, India</p>
          </div>
          <div className="footer-links" aria-label="Social links">
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <Icon name="arrow" size={14} /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" size={14} /></a>
            <a href={`mailto:${EMAIL}`}>Email <Icon name="arrow" size={14} /></a>
          </div>
          <p className="footer-copyright">&copy; 2026 Thariq Arsath J</p>
        </div>
      </footer>

      {selectedProject && <ProjectDialog project={selectedProject} onClose={closeProject} />}
    </>
  );
}

export default App;
