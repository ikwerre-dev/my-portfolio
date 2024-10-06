module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'barrel-roll-x': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
      animation: {
        'barrel-roll-x': 'barrel-roll-x 20s linear infinite', // Adjust the duration (4s) for speed
      },
    },
  },
  plugins: [],
}
