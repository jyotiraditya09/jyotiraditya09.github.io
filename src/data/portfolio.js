export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiraditya.gupta@mail.utoronto.ca',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'Quantitative Researcher',
    'ML Engineer',
    'Data Scientist',
    'Software Developer',
  ],
  tagline: 'Building at the intersection of machine learning and financial markets.',
  stats: [
    { label: 'Prof. Nisarg Shah', value: 'AI Research Assistant', suffix: '', color: '#1D3557' },
    { label: 'Statistics and Mathematics', value: 'Teaching Assistant', suffix: '', color: '#457B9D' },
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
    'George Luste Prize in Physics ($1,500)',
  ],
  olympiads: [
    'JEE Physics 100 Percentile',
    'IChO National Qualifier',
    'IMO National Qualifier (Stage 1)',
    'NTSE Scholar',
    'KVPY Scholar',
    'IGCSE World Topper',
  ],
}

export const experience = [
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#457B9D',
    bullets: [
      'Conducted literature reviews and empirical validation to construct a multi-day forecasting signal using options chain for prediction of underlying securities.',
      'Applied time-series modeling, Bayesian inference, and cross-sectional ML techniques.',
      'Engineered and backtested predictive signals in R using feature selection and multivariate lagged analysis.',
    ],
    metrics: [{ label: 'Risk-Adjusted Return↑', value: '+0.5%', color: '#457B9D' }],
    tags: ['Time Series', 'Options Chain', 'R', 'Cross-sectional Regression', 'Fundamental Analysis'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'Royal Bank of Canada, Capital Markets',
    shortCompany: 'RBC',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    color: '#A8DADC',
    bullets: [
      'Electronic Market Making and Central Risk Book',
      'Designed two alpha prediction signals using proprietary tick-level datasets, incorporating feature engineering, labeling strategies, and rigorous backtesting.',
      'Developed scalable data pipelines in KDB/Q and Python for real-time market microstructure analysis.',
      'Built execution signals leveraging order book imbalance, time-series signals, and statistical learning.',
    ],
    metrics: [
      { label: 'Sharpe Ratio ↑', value: '+87.5%', color: '#A8DADC' },
      { label: 'Strategy PnL ↑', value: '+22%', color: '#457B9D' },
      { label: 'Fill Quality ↑', value: '+30%', color: '#1D3557' },
      { label: 'Overnight Risk ↓', value: '-6.7%', color: '#ff6b6b' },
    ],
    tags: ['KDB/Q', 'Python', 'Market Microstructure', 'Order Book', 'Cython', 'SQL', 'Regression'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bell Canada',
    shortCompany: 'Bell',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    color: '#1D3557',
    bullets: [
      'Built 15+ production-grade FastAPI services supporting downstream analytics and ML inference.',
      'Developed large-scale ingestion pipelines using Logstash and SQL over 250GB+ of daily log data.',
    ],
    metrics: [
      { label: 'Requests/day', value: '500K+', color: '#1D3557' },
      { label: 'Latency ↓', value: '-30%', color: '#457B9D' },
      { label: 'Daily Data', value: '250GB+', color: '#A8DADC' },
    ],
    tags: ['FastAPI', 'Python', 'Logstash', 'SQL', 'Java'],
  },
]

export const research = [
  {
    title: 'AI Research Assistant - Algorithmic Fairness',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – Present',
    color: '#457B9D',
    description: 'Working on clustering and summarization of large-scale opinion datasets with provable fairness guarantees.',
    tags: ['Embeddings', 'Clustering', 'Opinion Summarization', 'Proportional Fairness'],
    icon: '⚖️',
  },
  {
    title: 'ML Research Assistant - LLM Compression',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2025',
    color: '#A8DADC',
    description: 'Researched sparse and quantized compression techniques for DNNs and LLMs to improve inference efficiency.',
    tags: ['LLM Compression', 'Quantization', 'Sparsity', 'Neural Nets', 'Helion'],
    icon: '🧠',
  },
  {
    title: 'ML Research Assistant - Efficient Attention',
    institution: 'UofT Department of Statistics',
    advisor: 'Prof. Xin Bing',
    period: 'Sep 2024 – Dec 2024',
    color: '#1D3557',
    description: 'Surveyed sparse and low-rank attention mechanisms with applications to long-context NLP models.',
    tags: ['Attention', 'Sparse Methods', 'Low-Rank', 'Transformers', 'NLP'],
    icon: '🔬',
  },
]

export const skills = {
  'ML & Statistics': {
    color: '#457B9D',
    icon: '∑',
    items: ['Time Series Modeling', 'Bayesian Inference', 'Convex Optimization', 'Feature Engineering', 'Neural Networks', 'Cross-sectional ML', 'Multivariate Statistics'],
  },
  'Programming': {
    color: '#A8DADC',
    icon: '</>',
    items: ['Python', 'R', 'SQL', 'KDB/Q', 'Java', 'C', 'Linux/Bash'],
  },
  'Quant': {
    color: '#1D3557',
    icon: '∂',
    items: ['Market Microstructure', 'Options Pricing', 'Risk & Hedging', 'Backtesting', 'Alpha Research', 'Portfolio Management', 'Order Book Analysis'],
  },
  'Tools': {
    color: '#457B9D',
    icon: '⚙',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'FastAPI', 'Docker', 'Git', 'Logstash', 'Tableau', 'Bloomberg'],
  },
}
