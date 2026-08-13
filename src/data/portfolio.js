export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiraditya.gupta@mail.utoronto.ca',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  roles: [
    'AI Engineer',
    'Applied ML Engineer',
    'LLM Systems',
  ],
  tagline: 'Building production AI systems — document pipelines, retrieval, and LLM applications.',
  stats: [
    { label: 'YuJa', value: 'Applied ML Engineer', suffix: '', color: '#8b5cf6' },
    { label: 'Production APIs', value: 'FastAPI · 500K+/day', suffix: '', color: '#00ff88' },
  ],
}

export const education = {
  school: 'University of Toronto',
  degree: 'Honours Bachelor\'s in Computer Science, Statistics & Mathematics',
  period: 'Sep 2021 – Apr 2026',
  location: 'Toronto, ON',
  gpa: '3.91 / 4.0',
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
    role: 'Applied Machine Learning Engineer',
    company: 'YuJa',
    shortCompany: 'YuJa',
    period: 'May 2026 – Present',
    location: 'Toronto, ON',
    color: '#8b5cf6',
    bullets: [
      'Designed AI-driven remediation workflows covering 20+ accessibility issues across PDF, DOCX, XLSX, and HTML documents.',
      'Engineered OCR pipelines to improve PDF-to-DOCX layout preservation and text extraction accuracy on messy, unstructured files.',
      'Turned multi-format documents into structured, retrieval-ready assets with consistent layout, text, and metadata for downstream AI workflows.',
    ],
    metrics: [
      { label: 'Issue types', value: '20+', color: '#8b5cf6' },
      { label: 'Formats', value: '4', color: '#00d4ff' },
    ],
    tags: ['Python', 'OCR', 'Document Processing', 'PDFs', 'Accessibility', 'Workflow Automation'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    shortCompany: 'CC&L',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    color: '#00ff88',
    bullets: [
      'Took a signed-off forecasting spec to a production-ready pipeline: literature review, empirical validation, and a time-weighted signal from options-chain data.',
      'Implemented time-series models, Bayesian inference, and cross-sectional ML in a reviewable R codebase with feature selection and lagged multivariate analysis.',
      'Backtested and documented evaluation results, improving annualized risk-adjusted return by 0.5%.',
    ],
    metrics: [{ label: 'Risk-Adjusted Return↑', value: '+0.5%', color: '#00ff88' }],
    tags: ['Python', 'R', 'Time Series', 'Feature Selection', 'Evaluation', 'Options Data'],
  },
  {
    role: 'Quantitative Trading and Developer Intern',
    company: 'Royal Bank of Canada, Capital Markets',
    shortCompany: 'RBC',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    color: '#00d4ff',
    bullets: [
      'Built two prediction systems on proprietary tick-level data with feature engineering, labeling, and rigorous backtesting as the evaluation harness.',
      'Developed internal Python and KDB/Q tools that cut classification latency by 30% for strategy performance evaluation.',
      'Shipped execution signals from order-book imbalance and time-series features, improving fill quality by 30% and Sharpe ratio by 87.5%.',
      'Reduced overnight risk by 6.7% and increased strategy PnL by 22%.',
    ],
    metrics: [
      { label: 'Sharpe Ratio ↑', value: '+87.5%', color: '#00d4ff' },
      { label: 'Strategy PnL ↑', value: '+22%', color: '#00ff88' },
      { label: 'Fill Quality ↑', value: '+30%', color: '#8b5cf6' },
      { label: 'Overnight Risk ↓', value: '-6.7%', color: '#ff6b6b' },
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'Data Pipelines', 'Cython', 'Evaluation'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bell Canada',
    shortCompany: 'Bell',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
    color: '#f59e0b',
    bullets: [
      'Built 15+ production-grade FastAPI services supporting downstream analytics and ML inference.',
      'Developed large-scale ingestion pipelines using Logstash and SQL over 250GB+ of daily log data.',
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
    title: 'Applied ML — Fair Clustering & Summarization',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Nisarg Shah',
    period: 'Jan 2026 – June 2026',
    color: '#00ff88',
    description: 'Built clustering and summarization tools for large-scale opinion datasets with fairness guarantees. Implemented and benchmarked approximation algorithms in Python, measuring trade-offs between summarization quality and fairness across multiple datasets.',
    tags: ['Python', 'Embeddings', 'Clustering', 'Summarization', 'Evaluation'],
    icon: '⚖️',
  },
  {
    title: 'LLM Systems — Compression & RAG',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2026',
    color: '#00d4ff',
    description: 'Implemented pruning and quantization pipelines in PyTorch, benchmarking accuracy–efficiency trade-offs for DNN and LLM inference. Built RAG pipelines on top of those compressed models — chunking, metadata, indexing, and retrieval — so grounded generation stayed within memory and latency budgets.',
    tags: ['RAG', 'Chunking', 'Retrieval', 'PyTorch', 'Quantization', 'Sparsity'],
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
  'LLM & Retrieval': {
    color: '#00ff88',
    icon: '◈',
    items: ['RAG Pipelines', 'Document Processing', 'OCR', 'Chunking & Metadata', 'Prompting', 'Retrieval Evaluation', 'PyTorch'],
  },
  'Programming': {
    color: '#00d4ff',
    icon: '</>',
    items: ['Python', 'SQL', 'R', 'KDB/Q', 'Java', 'C', 'Linux/Bash'],
  },
  'Production ML': {
    color: '#8b5cf6',
    icon: '⚙',
    items: ['FastAPI', 'Workflow Automation', 'Data Pipelines', 'Docker', 'Git', 'Evaluation Harnesses', 'Latency Tuning'],
  },
  'Tools': {
    color: '#f59e0b',
    icon: '⌘',
    items: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Logstash / ELK', 'Docker', 'Git', 'Tableau'],
  },
}
