// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import daisyui from "daisyui";

  /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
   theme: {
     extend: {
       colors: {
         // Custom 32-color palette
         coral: '#FF7F7F',
         salmon: '#FA8072',
         crimson: '#DC143C',
         ruby: '#E0115F',
         rose: '#FF007F',
         pink: '#FFC0CB',
         magenta: '#FF00FF',
         purple: '#800080',
         violet: '#8A2BE2',
         indigo: '#4B0082',
         navy: '#000080',
         royal: '#4169E1',
         azure: '#007FFF',
         sky: '#87CEEB',
         cyan: '#00FFFF',
         turquoise: '#40E0D0',
         teal: '#008080',
         mint: '#98FB98',
         lime: '#00FF00',
         emerald: '#50C878',
         forest: '#228B22',
         olive: '#808000',
         gold: '#FFD700',
         amber: '#FFBF00',
         orange: '#FFA500',
         tangerine: '#FF8C00',
         bronze: '#CD7F32',
         chocolate: '#D2691E',
         coffee: '#6F4E37',
         charcoal: '#36454F',
         slate: '#708090',
         silver: '#C0C0C0',
       }
     },
   },
   plugins: [daisyui],
   daisyui: {
     themes: [
      "light", 
      "dark", 
      "cupcake", 
      "bumblebee", 
      "emerald", 
      "corporate", 
      "synthwave", 
      "retro", 
      "cyberpunk", 
      "valentine", 
      "halloween",
      "garden", 
      "forest", 
      "aqua", 
      "lofi", 
      "pastel", 
      "fantasy", 
      "wireframe", 
      "black", 
      "luxury", 
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "night",
      "coffee"
    ],
   },
 }