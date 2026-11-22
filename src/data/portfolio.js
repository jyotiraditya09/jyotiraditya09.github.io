export const personal = {
  name: 'Jyotiraditya Gupta',
  email: 'jyotiradityagupta09@gmail.com',
  linkedin: 'https://linkedin.com/in/jyotirgupta',
  github: 'https://github.com/jyotiraditya09',
  cv: 'https://drive.google.com/file/d/1xm3runHRu071iPb4Ddb0rFh02nXrYtwi/view?usp=sharing',
  role: 'ML/AI Engineer at YuJa',
  affiliation: 'Computer Science and Statistics, University of Toronto',
  headline: 'Reliable prediction for noisy, changing data.',
  summary:
    'Statistical and machine learning methods that hold up under uncertainty, from production ML to financial markets to AI fairness research.',
}

export const highlights = [
  { value: '98%', label: 'OCR accuracy', context: 'YuJa · 5M PDFs a month' },
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
    bullets: [
      'Trained a vision-language model (ResNet backbone with multi-head cross-attention) that raised OCR accuracy from 90% to 98% across 5M PDFs per month.',
      'Raised automated accessibility remediation from 33% to over 80% across 50+ issue types.',
      'Responsible for deploying and operating these models in production.',
    ],
    tags: ['Python', 'PyTorch', 'Vision-Language Models', 'OCR', 'Kubernetes'],
  },
  {
    role: 'Quantitative Research Intern',
    company: 'Connor, Clark & Lunn Investment Management',
    period: 'May 2025 – Aug 2025',
    location: 'Vancouver, BC',
    bullets: [
      'Built an equity return signal from options-implied volatility skew using cross-sectional regression, after reviewing 20+ papers on options-implied signals.',
      'Validated it with multivariate backtests in R: +25 bps of annualized excess return, selected by the PMs for further research.',
    ],
    tags: ['R', 'Python', 'Regression', 'Backtesting'],
  },
  {
    role: 'Quantitative Trading Analyst',
    company: 'RBC Capital Markets, Central Risk Book',
    period: 'May 2024 – Apr 2025',
    location: 'Toronto, ON',
    bullets: [
      'Took over a teammate’s project and became primary owner of the desk’s backtesting engine.',
      'Identified a link between order completion rate and profitability that the existing strategy missed; my update, deployed the same week, raised Sharpe ratio from 1.2 to 2.25 and roughly doubled average daily PnL.',
      'Built research tools in Python and KDB/Q that cut strategy evaluation runtime by 30%.',
    ],
    tags: ['Python', 'KDB/Q', 'SQL', 'Time Series', 'Backtesting'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Bell Canada',
    period: 'May 2023 – Aug 2023',
    location: 'Toronto, ON',
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
    description:
      'Tested whether LLM-written summaries of public opinion fairly represent the participants. Built a pipeline of embeddings, fair clustering, LLM summarization, and fairness auditing on Polis data, using a mixed-integer program from cooperative game theory to find the worst-off group.',
    tags: ['Python', 'LLMs', 'Embeddings', 'Fair Clustering', 'Optimization'],
  },
  {
    title: 'LLM Compression',
    institution: 'Department of Computer Science, UofT',
    advisor: 'Prof. Maryam Mehri Dehnavi (Principal at NVIDIA)',
    period: 'Sep 2025 – Dec 2025',
    figure: 'pruning',
    description:
      'Benchmarked a new LLM pruning method against 6 existing techniques on models from 0.5B to 13B parameters, measuring accuracy, GPU inference speed, and memory, including 4-bit quantized variants.',
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
