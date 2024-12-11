/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#37C390",
        success: {
          base: "#1FC16B",
        },
        heading: "#0E121B",
        para: "#525866 ",
        border: "#1c1c1c",
      },
      backgroundImage: {
        "gradient-primary-from-top":
          "linear-gradient(179.94deg, #CAE7FF 0.18%, #E1F2FE 35.54%, #FFFFFF 100.03%)",

        "gradient-primary-from-bottom":
          "linear-gradient(0deg, #CAE7FF 0.18%, #E1F2FE 35.54%, #FFFFFF 100.03%)",
      },
    },
  },
  plugins: [],
};
