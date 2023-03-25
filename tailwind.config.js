/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"]
  ],
  theme: {
    extend: {
      colors: {
        bgBlueUser: "#006EC5"
      }
    }
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")]
};
