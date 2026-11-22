export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiradityagupta09@gmail.com',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'ML/AI Engineer',
    'Data Scientist',
    'Quantitative Researcher',
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
      'Trained a vision-language model (ResNet backbone with multi-head cross-attention) that raised OCR accuracy from 90% to 98% across 5M PDFs per month.',
      'Raised automated accessibility remediation from 33% to over 80% across 50+ issue types.',
      'Responsible for deploying and operating these models in production.',
    ],
    metrics: [
      { label: 'OCR Accuracy', value: '90→98%', color: '#00d4ff' },
      { label: 'PDFs / Month', value: '5M', color: '#f59e0b' },
      { label: 'Auto-Remediation', value: '33→80%+', color: '#00ff88' },
    ],
    tags: ['Python', 'PyTorch', 'Vision-Language Models', 'OCR', 'Kubernetes'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#00ff88',
    bullets: [
      'Built an equity return signal from options-implied volatility skew using cross-sectional regression, after reviewing 20+ papers on options-implied signals.',
      'Validated it with multivariate backtests in R: +25 bps of annualized excess return, selected by the PMs for further research.',
    ],
    metrics: [{ label: 'Annualized Alpha', value: '+25 bps', color: '#00ff88' }],
    tags: ['R', 'Python', 'Regression', 'Backtesting'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'RBC Capital Markets, Central Risk Book',
    shortCompany: 'RBC',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    color: '#00d4ff',
    bullets: [
      'Took over a teammate’s project and became primary owner of the desk’s backtesting engine.',
      'Identified a link between order completion rate and profitability that the existing strategy missed; my update, deployed the same week, raised Sharpe ratio from 1.2 to 2.25 and roughly doubled average daily PnL.',
      'Built research tools in Python and KDB/Q that cut strategy evaluation runtime by 30%.',
    ],
    metrics: [
      { label: 'Sharpe Ratio', value: '1.2→2.25', color: '#00d4ff' },
      { label: 'Avg Daily PnL', value: '~2×', color: '#00ff88' },
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'Time Series', 'Backtesting'],
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
    title: 'Fairness in LLM Summarization',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – Jun 2026',
    color: '#00ff88',
    description: 'Tested whether LLM-written summaries of public opinion fairly represent the participants. Built a pipeline of embeddings, fair clustering, LLM summarization, and fairness auditing on Polis data, using a mixed-integer program from cooperative game theory to find the worst-off group.',
    tags: ['Python', 'LLMs', 'Embeddings', 'Fair Clustering', 'Optimization'],
    icon: '⚖️',
  },
  {
    title: 'LLM Compression',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Mehri Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2025',
    color: '#00d4ff',
    description: 'Benchmarked a new LLM pruning method against 6 existing techniques on models from 0.5B to 13B parameters, measuring accuracy, GPU inference speed, and memory, including 4-bit quantized variants.',
    tags: ['PyTorch', 'Pruning', 'Quantization', 'LLMs'],
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
  'Machine Learning': {
    color: '#00ff88',
    icon: '◈',
    items: ['Deep Learning', 'Computer Vision', 'LLMs & Transformers', 'Statistical Learning', 'Clustering & Embeddings', 'Model Compression'],
  },
  'Statistics & Quant': {
    color: '#00d4ff',
    icon: '∑',
    items: ['Regression', 'Time-Series Analysis', 'Multivariate Statistics', 'Optimization', 'Signal Research', 'Backtesting'],
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
