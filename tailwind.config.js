/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        paper2: '#F5F6F7',
        ink: '#0E1116',
        ink2: '#3B414C',
        mute: '#646B77',
        line: '#E3E5E9',
        line2: '#CDD1D7',
        accent: '#2B4FD8',
        accentSoft: '#EEF2FF',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', '"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
        prose: '42rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(14,17,22,0.04), 0 12px 32px -12px rgba(14,17,22,0.18)',
      },
    },
  },
  plugins: [],
}
