export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiraditya.gupta@mail.utoronto.ca',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'Quantitative Researcher',
    'ML Engineer',
    'Software Developer',
    'Data Scientist',
    'Algorithm Designer',
  ],
  tagline: 'Building at the intersection of markets, mathematics, and machine learning.',
  stats: [
    { label: 'GPA', value: '3.90', suffix: '/ 4.0', color: '#00ff88' },
    { label: 'CodeSignal Python', value: '600', suffix: '/ 600', color: '#00d4ff' },
    { label: 'IIT-JEE Rank', value: 'AIR 889', suffix: '', color: '#8b5cf6' },
    { label: 'UofT Scholarship', value: '$100K', suffix: '', color: '#00ff88' },
  ],
}

export const education = {
  school: 'University of Toronto',
  degree: 'Honours Bachelor\'s in Computer Science, Statistics & Mathematics',
  period: 'Sep 2021 – Apr 2026',
  location: 'Toronto, ON',
  gpa: '3.90 / 4.0',
  ta: ['Introduction to Data Science', 'Calculus'],
  achievements: [
    'UofT International Scholarship ($100,000)',
    "Dean's List Scholar (3×)",
    'New College Scholarship (3×)',
    'George Luste Prize in Physics',
  ],
  olympiads: [
    'IIT-JEE AIR 889 (Top 0.03% nationally)',
    'JEE — 100 Percentile',
    'IChO National Qualifier',
    'IMO National Qualifier (Stage 1)',
    'GCSE World Topper',
  ],
}

export const experience = [
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#00ff88',
    bullets: [
      'Conducted literature reviews and empirical validation to construct a multi-day forecasting signal using options chain for prediction of underlying securities.',
      'Applied time-series modeling, Bayesian inference, and cross-sectional ML techniques.',
      'Engineered and backtested predictive signals in R using feature selection and multivariate lagged analysis.',
    ],
    metrics: [{ label: 'Risk-Adjusted Return ↑', value: '+0.5%', color: '#00ff88' }],
    tags: ['Time Series', 'Bayesian Inference', 'Options', 'R', 'Cross-sectional ML'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'Royal Bank of Canada — Capital Markets (CRB)',
    shortCompany: 'RBC',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    color: '#00d4ff',
    bullets: [
      'Designed two alpha prediction signals using proprietary tick-level datasets, incorporating feature engineering, labeling strategies, and rigorous backtesting.',
      'Developed scalable data pipelines in KDB/Q and Python for real-time market microstructure analysis.',
      'Built execution signals leveraging order book imbalance, time-series signals, and statistical learning.',
    ],
    metrics: [
      { label: 'Sharpe Ratio ↑', value: '+87.5%', color: '#00d4ff' },
      { label: 'PnL ↑', value: '+22%', color: '#00ff88' },
      { label: 'Fill Quality ↑', value: '+30%', color: '#8b5cf6' },
      { label: 'Overnight Risk ↓', value: '-6.7%', color: '#ff6b6b' },
    ],
    tags: ['KDB/Q', 'Python', 'Market Microstructure', 'Order Book', 'Alpha Research'],
  },
  {
    role: 'Data Engineering Intern',
    company: 'Bell Canada',
    shortCompany: 'Bell',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    color: '#8b5cf6',
    bullets: [
      'Built 15+ production-grade FastAPI services supporting downstream analytics and ML inference.',
      'Developed large-scale ingestion pipelines using Logstash and SQL over 250GB+ of daily log data.',
    ],
    metrics: [
      { label: 'Requests/day', value: '500K+', color: '#8b5cf6' },
      { label: 'Latency ↓', value: '-30%', color: '#00ff88' },
      { label: 'Daily Data', value: '250GB+', color: '#00d4ff' },
    ],
    tags: ['FastAPI', 'Python', 'Logstash', 'SQL', 'ML Inference'],
  },
]

export const research = [
  {
    title: 'AI Research Assistant — Algorithmic Fairness',
    institution: 'UofT Department of Computer Science',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – Present',
    color: '#00ff88',
    description: 'Working on clustering and summarization of large-scale opinion datasets with provable fairness guarantees.',
    tags: ['Algorithmic Fairness', 'Clustering', 'Opinion Summarization', 'Provable Guarantees'],
    icon: '⚖️',
  },
  {
    title: 'ML Research Assistant — LLM Compression',
    institution: 'UofT Department of Computer Science',
    advisor: 'Prof. Maryam Dehnavi (Principal, NVIDIA)',
    period: 'Sep 2025 – Dec 2026',
    color: '#00d4ff',
    description: 'Researched sparse and quantized compression techniques for DNNs and LLMs to improve inference efficiency.',
    tags: ['LLM Compression', 'Quantization', 'Sparsity', 'Neural Nets', 'NVIDIA'],
    icon: '🧠',
  },
  {
    title: 'ML Research Assistant — Efficient Attention',
    institution: 'UofT Department of Statistics',
    advisor: 'Prof. Xin Bing',
    period: 'Sep 2024 – Dec 2024',
    color: '#8b5cf6',
    description: 'Surveyed sparse and low-rank attention mechanisms with applications to long-context NLP models.',
    tags: ['Attention Mechanisms', 'Sparse Methods', 'Low-Rank', 'Transformers', 'NLP'],
    icon: '🔬',
  },
]

export const skills = {
  'ML & Statistics': {
    color: '#00ff88',
    icon: '∑',
    items: ['Time Series Modeling', 'Bayesian Inference', 'Convex Optimization', 'Feature Engineering', 'Neural Networks', 'Cross-sectional ML', 'Statistical Learning'],
  },
  'Programming': {
    color: '#00d4ff',
    icon: '</>',
    items: ['Python (600/600)', 'R', 'SQL', 'KDB/Q', 'Java', 'C', 'Linux/Bash'],
  },
  'Quantitative Finance': {
    color: '#8b5cf6',
    icon: '∂',
    items: ['Market Microstructure', 'Options Pricing', 'Risk & Hedging', 'Backtesting', 'Alpha Research', 'Portfolio Management', 'Order Book Analysis'],
  },
  'Tools & Libraries': {
    color: '#f59e0b',
    icon: '⚙',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'Docker', 'Git', 'Logstash'],
  },
}
