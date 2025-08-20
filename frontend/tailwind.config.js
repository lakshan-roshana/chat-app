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
     extend: {},
   },
   plugins: [daisyui],
 }