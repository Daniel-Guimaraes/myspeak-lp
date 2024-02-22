import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        heading: '#3b6eb6',
      },

      backgroundColor: {
        primary: '#f0f7ff',

        'red-100': '#CC4E32',

        'gray-400': '#3b4858',

        'green-200': '#52B879',

        button: '#3b6eb6',
      },
    },
  },
  plugins: [],
}
export default config
