export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiradityagupta09@gmail.com',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'ML/AI Engineer',
    'Quantitative Researcher',
    'ML Engineer',
  ],
  tagline: 'I build and ship production AI systems.',
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
      'Designed AI-driven remediation workflows covering 50+ accessibility issue types across PDF and XML, auto-resolving 30% of flagged issues and cutting manual remediation time per document by 40%.',
      'Built ML-based OCR pipelines on a ResNet architecture for scanned and corrupted PDFs, raising text recognition accuracy from 90% to 98% across 5M documents per month for institutional clients.',
    ],
    metrics: [
      { label: 'Issue Types', value: '50+', color: '#8b5cf6' },
      { label: 'Auto-Resolved', value: '30%', color: '#00ff88' },
      { label: 'Remediation Time ↓', value: '-40%', color: '#ff6b6b' },
      { label: 'OCR Accuracy', value: '90→98%', color: '#00d4ff' },
      { label: 'Docs / Month', value: '5M', color: '#f59e0b' },
    ],
    tags: ['Python', 'PyTorch', 'ResNet', 'OCR', 'LLMs', 'Accessibility'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#00ff88',
    bullets: [
      'Synthesized 20+ papers on options-implied signals (IV skew, IV spread) to build a time-weighted alpha signal from options-chain data using cross-sectional regression.',
      'Backtested signals in R with multivariate lagged analysis, improving annualized alpha by 25 bps; presented to PMs and selected for further research.',
    ],
    metrics: [
      { label: 'Annualized Alpha ↑', value: '+25 bps', color: '#00ff88' },
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
      'Constructed execution signals from order-book imbalance, time-series features, and statistical learning methods, improving fill quality by 30% and raising Sharpe ratio from 1.2 to 2.25 (+87.5%).',
      'Reduced overnight inventory risk of an existing strategy by 6.7% and increased the strategy’s PnL by 22%.',
      'Deployed 2 alpha signals for a trading desk from proprietary tick-level data, including feature engineering and backtesting.',
      'Developed internal research tools in Python and KDB/Q, reducing strategy performance evaluation runtime by 30%.',
    ],
    metrics: [
      { label: 'Sharpe Ratio', value: '1.2→2.25', color: '#00d4ff' },
      { label: 'Strategy PnL ↑', value: '+22%', color: '#00ff88' },
      { label: 'Fill Quality ↑', value: '+30%', color: '#8b5cf6' },
      { label: 'Overnight Risk ↓', value: '-6.7%', color: '#ff6b6b' },
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'Market Microstructure', 'Time Series', 'Backtesting'],
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
    title: 'Fair Clustering & Summarization',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – Jun 2026',
    color: '#00ff88',
    description: 'Built an end-to-end fair summarization pipeline (embedding, fair clustering, LLM summarization, fairness auditing) and benchmarked 6 clustering algorithms on 5 Polis datasets (6.9K comments). Showed that embedding distance predicts which comment a respondent prefers to be grouped with, at 84–87% agreement across 1,578 judgments from 6 LLM judges.',
    tags: ['Python', 'Embeddings', 'Fair Clustering', 'LLM Summarization', 'LLM-as-Judge'],
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
    institution: 'UofT Department of Statistics',
    advisor: 'Prof. Xin Bing',
    period: 'Sep 2024 – Dec 2024',
    color: '#8b5cf6',
    description: 'Implemented and compared sparse and low-rank attention mechanisms for long-context NLP, focusing on the latency and memory trade-offs that show up in production transformer serving.',
    tags: ['Attention', 'Transformers', 'Sparse Methods', 'NLP', 'PyTorch'],
    icon: '🔬',
  },
]

export const skills = {
  'Machine Learning': {
    color: '#00ff88',
    icon: '◈',
    items: ['Deep Learning', 'Computer Vision', 'LLMs & Transformers', 'Model Compression', 'Statistical Learning', 'Clustering & Embeddings'],
  },
  'Quantitative Methods': {
    color: '#00d4ff',
    icon: '∑',
    items: ['Signal Research', 'Market Microstructure', 'Backtesting', 'Time-Series Analysis', 'Multivariate Statistics', 'Optimization'],
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
