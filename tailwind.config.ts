import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7065FF',
        'custom-orange': '#FF9E53',
        'custom-navy': '#000A0F',
        'custom-navy-blue': '#001119',
        'custom-red': '#92000E',
      },
    },
  },
  plugins: [],
}
export default config
