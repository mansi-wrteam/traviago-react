/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  colors: {
    'nav-text': '#2D2C2F',
    'primary': '#EC9105',
    'muted': '#464549',
    'dark': '#202326',
    'white': '#FFFFFF',
    'red': '#DB3D26',
    'warm': '#FEF5E6',
    'border-color': '#D8E0E6',
    'hover-color': '#f8f9fa',
    'sub-muted': '#5C788C'
  },
  extend: {
    opacity: {
      '76': '76%',
      '16': '16%',
    }
  },
};
export const plugins = [];

