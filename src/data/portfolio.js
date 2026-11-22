export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiradityagupta09@gmail.com',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  cv: 'https://drive.google.com/file/d/1xm3runHRu071iPb4Ddb0rFh02nXrYtwi/view?usp=sharing',
  role: 'ML/AI Engineer at YuJa',
  affiliation: 'Computer Science and Statistics, University of Toronto',
  summary:
    'Statistical and machine learning methods that hold up under uncertainty, from production ML to financial markets to AI fairness research.',
}

export const highlights = [
  { value: '98%', label: 'OCR accuracy', context: 'YuJa · 5M documents a month' },
  { value: '1.2 → 2.25', label: 'Sharpe ratio', context: 'RBC Capital Markets' },
  { value: '+25 bps', label: 'Annualized alpha', context: 'CC&L' },
  { value: '84–87%', label: 'LLM-judge agreement', context: 'UofT fairness research' },
]

export const education = {
  school: 'University of Toronto',
  degree: 'Honours BSc, Computer Science and Statistics (Double Major), Minor in Mathematics',
  period: 'Sep 2021 – Apr 2026',
  location: 'Toronto, ON',
  gpa: '3.91',
  gpaScale: '4.0',
  ta: ['Introduction to Data Science', 'Calculus'],
  achievements: [
    'UofT International Scholarship ($100,000)',
    "Dean's List Scholar (4×)",
    'New College Scholarship (3×)',
    'George Luste Prize in Physics ($1,500)',
  ],
  jee: { result: 'IIT-JEE All India Rank 889', note: 'top 0.07% of ~1.2M candidates' },
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
    period: 'May 2026 – Present',
    location: 'Toronto, ON',
    metrics: [
      { value: '90 → 98%', label: 'OCR accuracy' },
      { value: '5M', label: 'documents a month' },
      { value: '30%', label: 'issues auto-resolved' },
      { value: '−40%', label: 'manual remediation time' },
    ],
    bullets: [
      'Built ML-based OCR pipelines on a ResNet architecture for scanned and corrupted PDFs, raising text recognition accuracy from 90% to 98% across 5M documents a month for institutional clients.',
      'Designed AI-driven remediation workflows covering 50+ accessibility issue types across PDF and XML, auto-resolving 30% of flagged issues and cutting manual remediation time per document by 40%.',
      'Responsible for deploying and operating these models in production.',
    ],
    tags: ['Python', 'PyTorch', 'ResNet', 'OCR', 'Kubernetes'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    metrics: [
      { value: '+25 bps', label: 'annualized alpha' },
      { value: '20+', label: 'papers synthesized' },
    ],
    bullets: [
      'Synthesized 20+ papers on options-implied signals (IV skew, IV spread) to build a time-weighted alpha signal from options-chain data using cross-sectional regression.',
      'Backtested the signals in R with multivariate lagged analysis, improving annualized alpha by 25 bps; presented to the PMs and selected for further research.',
    ],
    tags: ['R', 'Python', 'Cross-Sectional Regression', 'Backtesting'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'RBC Capital Markets, Central Risk Book',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    metrics: [
      { value: '1.2 → 2.25', label: 'Sharpe ratio (+87.5%)' },
      { value: '+30%', label: 'fill quality' },
      { value: '+22%', label: 'strategy PnL' },
      { value: '−6.7%', label: 'overnight inventory risk' },
    ],
    bullets: [
      'Constructed execution signals from order-book imbalance, time-series features, and statistical learning methods, improving fill quality by 30% and raising Sharpe ratio from 1.2 to 2.25 (+87.5%).',
      'Reduced overnight inventory risk of an existing strategy by 6.7% and increased its PnL by 22%.',
      'Deployed 2 alpha signals for the desk from proprietary tick-level data, including feature engineering and backtesting.',
      'Developed internal research tools in Python and KDB/Q, cutting strategy performance evaluation runtime by 30%.',
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'Market Microstructure', 'Backtesting'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bell Canada',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    metrics: [
      { value: '500K+', label: 'requests a day' },
      { value: '−30%', label: 'latency' },
      { value: '250GB+', label: 'daily logs' },
    ],
    bullets: [
      'Designed 15+ production-grade FastAPI services supporting downstream analytics and ML inference, processing 500K+ requests per day with a 30% latency reduction.',
      'Built Logstash and SQL ingestion pipelines enabling feature extraction and real-time monitoring over 250GB+ of daily logs.',
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
    figure: 'clusters',
    metrics: [
      { value: '84–87%', label: 'LLM-judge agreement' },
      { value: '1,578', label: 'judgments, 6 LLM judges' },
      { value: '6.9K', label: 'comments, 5 Polis datasets' },
    ],
    description:
      'Tested whether LLM-written summaries of public opinion fairly represent the participants. Built an end-to-end pipeline (embedding, fair clustering, LLM summarization, fairness auditing), benchmarked 6 clustering algorithms, and showed that embedding distance predicts which comment a respondent prefers to be grouped with.',
    tags: ['Python', 'LLMs', 'Embeddings', 'Fair Clustering', 'Optimization'],
  },
  {
    title: 'LLM Compression',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Mehri Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2025',
    figure: 'pruning',
    metrics: [
      { value: '6', label: 'baseline techniques' },
      { value: '0.5B–13B', label: 'parameters, 6 models' },
      { value: '8', label: 'tasks' },
    ],
    description:
      'Benchmarked a new LLM pruning method against 6 existing techniques across 6 models (0.5B–13B parameters) and 8 tasks. Reproduced competing methods in PyTorch and measured GPU inference speed and memory, including 4-bit quantized variants.',
    tags: ['PyTorch', 'Pruning', 'Quantization', 'LLMs'],
  },
  {
    title: 'Efficient Attention for Long-Context NLP',
    institution: 'Department of Statistics, UofT',
    advisor: 'Prof. Xin Bing',
    period: 'Sep 2024 – Dec 2024',
    figure: 'attention',
    description: 'Surveyed sparse and low-rank attention mechanisms with applications to long-context NLP models.',
    tags: ['Attention', 'Sparse Methods', 'Low-Rank', 'Transformers', 'NLP'],
  },
]

export const skills = [
  {
    group: 'Machine learning',
    items: ['Deep Learning', 'Computer Vision', 'LLMs & Transformers', 'Statistical Learning', 'Clustering & Embeddings', 'Model Compression'],
  },
  {
    group: 'Statistics and quant',
    items: ['Regression', 'Time-Series Analysis', 'Multivariate Statistics', 'Optimization', 'Signal Research', 'Backtesting'],
  },
  {
    group: 'Languages',
    items: ['Python', 'C++', 'C', 'Java', 'R', 'SQL', 'KDB/Q'],
  },
  {
    group: 'Frameworks and infrastructure',
    items: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'FastAPI', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Linux'],
  },
]
