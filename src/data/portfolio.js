export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiradityagupta09@gmail.com',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'Quantitative Researcher',
    'ML/AI Engineer',
    'Data Scientist',
  ],
  tagline: 'I work on reliable statistical and machine learning methods for prediction under uncertainty.',
  stats: [
    { label: 'YuJa · Current', value: 'ML/AI Engineer', suffix: '', color: '#8b5cf6' },
  ],
}

export const education = {
  school: 'University of Toronto',
  degree: 'Honours BSc, Computer Science and Statistics (Double Major), Minor in Mathematics',
  period: 'Sep 2021 – Apr 2026',
  location: 'Toronto, ON',
  gpa: '3.91 / 4.0',
  ta: ['Introduction to Data Science', 'Calculus'],
  achievements: [
    'UofT International Scholarship ($100,000)',
    "Dean's List Scholar (4×)",
    'New College Scholarship (3×)',
    'George Luste Prize in Physics ($1,500)',
  ],
  olympiads: [
    'JEE Physics 100 Percentile',
    'IChO National Qualifier',
    'NTSE Scholar',
    'KVPY Scholar',
    'IGCSE World Topper',
  ],
}

export const experience = [
  {
    role: 'ML/AI Engineer',
    company: 'YuJa',
    shortCompany: 'YuJa',
    period: 'May 2026 – Present',
    location: 'Toronto, ON',
    color: '#8b5cf6',
    bullets: [
      'Trained a vision-language model on thousands of PDFs, raising OCR accuracy from 90% to 98% across 5M PDFs per month for institutional clients.',
      'Extended a ResNet backbone with multi-head cross-attention to match fonts by size and type, then reconstruct fully editable PDFs from scanned and corrupted files.',
      'Raised automated remediation of accessibility issues from 33% to over 80% across 50+ issue types in PDF and XML, greatly reducing manual effort.',
      'Responsible for deploying and operating these models in production pods.',
    ],
    metrics: [
      { label: 'OCR Accuracy', value: '90→98%', color: '#00d4ff' },
      { label: 'PDFs / Month', value: '5M', color: '#f59e0b' },
      { label: 'Auto-Remediation', value: '33→80%+', color: '#00ff88' },
      { label: 'Issue Types', value: '50+', color: '#8b5cf6' },
    ],
    tags: ['PyTorch', 'Vision-Language Models', 'ResNet', 'Cross-Attention', 'OCR', 'Kubernetes'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#00ff88',
    bullets: [
      'Studied implied volatility skew as a predictor of longer-term equity returns: learned the Greeks and reviewed 20+ papers on options-implied signals (IV skew, IV spread) to understand the limits of existing work.',
      'Built a time-weighted signal from options-chain data using cross-sectional regression, adding interaction terms between company characteristics to strengthen it.',
      'Validated it with multivariate lagged backtests in R. After correcting inconsistencies in the underlying data, the signal generated 25 bps of annualized excess return and was selected by the PMs for further research.',
    ],
    metrics: [
      { label: 'Annualized Alpha', value: '+25 bps', color: '#00ff88' },
      { label: 'Papers Reviewed', value: '20+', color: '#00d4ff' },
    ],
    tags: ['R', 'Python', 'Options Data', 'Cross-Sectional Regression', 'Backtesting'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'RBC Capital Markets, Central Risk Book',
    shortCompany: 'RBC',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    color: '#00d4ff',
    bullets: [
      'Took over a teammate’s project three months into the year-long role on a short handover, and later became primary owner of the desk’s backtesting engine.',
      'Worked with a high-frequency order dataset of 50+ interacting columns. When vendor issues forced a format overhaul, learned the old format first so the new one was interpreted correctly.',
      'Segmenting orders by completion rate showed only part of the flow was profitable, a relationship the existing strategy did not use. My backtested version was deployed the same week: Sharpe ratio rose from 1.2 to 2.25, average daily PnL roughly doubled, and fill quality improved by 30%.',
      'Deployed 2 alpha signals from proprietary tick-level data. On a separate overnight strategy, reduced inventory risk by 6.7% and increased PnL by 22%.',
      'Built research tools in Python and KDB/Q that cut strategy evaluation runtime by 30%.',
    ],
    metrics: [
      { label: 'Sharpe Ratio', value: '1.2→2.25', color: '#00d4ff' },
      { label: 'Avg Daily PnL', value: '~2×', color: '#00ff88' },
      { label: 'Fill Quality ↑', value: '+30%', color: '#8b5cf6' },
      { label: 'Overnight Risk ↓', value: '-6.7%', color: '#ff6b6b' },
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'High-Frequency Data', 'Market Microstructure', 'Backtesting'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bell Canada',
    shortCompany: 'Bell',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    color: '#f59e0b',
    bullets: [
      'Designed 15+ production-grade FastAPI services supporting downstream analytics and ML inference, processing 500K+ requests per day with a 30% latency reduction.',
      'Built Logstash and SQL ingestion pipelines enabling feature extraction and real-time monitoring over 250GB+ of daily logs.',
    ],
    metrics: [
      { label: 'Requests/day', value: '500K+', color: '#f59e0b' },
      { label: 'Latency ↓', value: '-30%', color: '#00ff88' },
      { label: 'Daily Data', value: '250GB+', color: '#00d4ff' },
    ],
    tags: ['FastAPI', 'Python', 'Logstash', 'SQL', 'Java'],
  },
]

export const research = [
  {
    title: 'Auditing LLM Summaries of Public Opinion for Fairness',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – Jun 2026',
    color: '#00ff88',
    featured: true,
    description: 'Do LLM-written summaries of public opinion fairly represent the people being summarized? Even defining what to measure took real mathematical work, so the project turned ideas from cooperative game theory into metrics I could compute and test.',
    highlights: [
      'Built an end-to-end pipeline (embedding, fair clustering, LLM summarization, fairness auditing) on 5 Polis opinion datasets (6.9K comments), embedding free text in up to 3,072 dimensions and benchmarking 6 clustering algorithms.',
      'Used a mixed-integer linear program, grounded in cooperative game theory, to find the worst-off group of participants, with PCA to keep it solvable.',
      'Caught that my Fully Justified Representation (FJR) ratio did not exactly match its formal definition, corrected it, and reran the tests.',
      'When the optimization showed a fairer summary existed mathematically, tested whether an LLM could actually write one before claiming it.',
      'Showed that embedding distance predicts which comment a respondent prefers to be grouped with, at 84–87% agreement across 1,578 judgments from 6 LLM judges.',
    ],
    tags: ['Python', 'LLMs', 'Embeddings', 'Fair Clustering', 'Mixed-Integer Programming', 'PCA', 'Cooperative Game Theory'],
    icon: '⚖️',
  },
  {
    title: 'LLM Compression',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Mehri Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2025',
    color: '#00d4ff',
    description: 'Benchmarked a new LLM pruning method against 6 existing techniques across 6 models (0.5B–13B parameters) and 8 tasks. Reproduced competing methods in PyTorch and measured GPU inference speed and memory, including 4-bit quantized variants.',
    tags: ['PyTorch', 'Pruning', '4-bit Quantization', 'GPU Benchmarking', 'LLMs'],
    icon: '🧠',
  },
  {
    title: 'Efficient Attention for Long-Context NLP',
    institution: 'Department of Statistics, UofT',
    advisor: 'Prof. Xin Bing',
    period: 'Sep 2024 – Dec 2024',
    color: '#8b5cf6',
    description: 'Surveyed sparse and low-rank attention mechanisms with applications to long-context NLP models.',
    tags: ['Attention', 'Sparse Methods', 'Low-Rank', 'Transformers', 'NLP'],
    icon: '🔬',
  },
]

export const skills = {
  'Statistics & Quant': {
    color: '#00d4ff',
    icon: '∑',
    items: ['Cross-Sectional Regression', 'Time-Series Analysis', 'Multivariate Statistics', 'Optimization (MILP)', 'Signal Research', 'Backtesting', 'Market Microstructure'],
  },
  'Machine Learning': {
    color: '#00ff88',
    icon: '◈',
    items: ['Statistical Learning', 'Deep Learning', 'Computer Vision', 'LLMs & Transformers', 'Clustering & Embeddings', 'Dimensionality Reduction', 'Model Compression'],
  },
  'Languages': {
    color: '#8b5cf6',
    icon: '</>',
    items: ['Python', 'C++', 'C', 'Java', 'R', 'SQL', 'KDB/Q'],
  },
  'Frameworks & Infra': {
    color: '#f59e0b',
    icon: '⚙',
    items: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'FastAPI', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Linux'],
  },
}
