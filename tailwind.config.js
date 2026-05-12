/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        bg:     '#13101c', 
        panel:  '#1a1428',  
        line:   '#2a2240',  
        muted:  '#7d6f9a',  
        text:   '#e8e2f0',  
        dim:    '#a89db8', 
        plum:   '#b89dff',  
        plumDark: '#7a5cc4',
        gold:   '#e8c78c',  
        red:    '#e07a6f',  
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        // display: the Minecraft/Monocraft pixel font
        pixel: ['"Minecraft"', '"Monocraft"', 'monospace'],
      },
      animation: {
        blink: 'blink 1.1s steps(2, start) infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
        wiggle: { '0%, 100%': { transform: 'rotate(-2deg)' }, '50%': { transform: 'rotate(3deg)' } },
      },
    },
  },
  plugins: [],
}
