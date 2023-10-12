/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      spacing: {
        54: "54%",
        85: "85%",
        45: "45%",
        60: "60%",
      },
    },
  },
  plugins: [],
};
