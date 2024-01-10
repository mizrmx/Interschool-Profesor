/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background": "#f3f4ff",
        dodgerblue: "#2188e7",
        "color-white": "#fff",
        "color-purple": "#4d44b5",
        gray: {
          "100": "#878787",
          "200": "#222",
          "300": "#212121",
          "400": "rgba(34, 34, 34, 0.4)",
        },
        "color-gray-2": "#c1bbeb",
        "color-text": "#303972",
        "color-orange": "#fb7d5b",
        "color-gray-3": "#a098ae",
        thistle: "rgba(193, 187, 235, 0.1)",
        black: "#000",
        silver: {
          "100": "#bfbfbf",
          "200": "#bdbdbd",
        },
        mediumpurple: "#ab91ff",
        darkslategray: {
          "100": "#434343",
          "200": "#3c3c3c",
          "300": "#434",
        },
        gainsboro: "#e1e1e1",
      },
      spacing: {},
      fontFamily: {
        "heading-heading-3": "Poppins",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
        "21xl": "40px",
        "6xl": "25px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      sm: "14px",
      smi: "13px",
      "5xl": "24px",
      "17xl": "36px",
      xl: "20px",
      lg: "18px",
      "9xl": "28px",
      "11xl": "30px",
      base: "16px",
      "6xl": "25px",
      "2xs": "11px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
