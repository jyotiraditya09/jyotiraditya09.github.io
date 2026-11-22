/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0e1014',
        surface: '#14171d',
        'surface-2': '#1a1e26',
        line: '#242934',
        'line-strong': '#333b4a',
        ink: '#e8eaef',
        'ink-2': '#b6becc',
        muted: '#8f98a9',
        accent: '#5eead4',
        'accent-hover': '#8af2e1',
        'accent-ink': '#042f2a',
        violet: '#a78bfa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '68rem',
      },
    },
  },
  plugins: [],
}
