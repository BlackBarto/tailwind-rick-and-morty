/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/public/index.html", "./src/public/js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
        screens: {
            "res": "850px"
        },
        colors: {
            "alpha-blue": "rgba(107, 220, 255, .15)",
        },
        spacing: {
            "nav": "calc(70vh)",
            "section-desk": "450px",
            "section-res": "650px"
        },
        fontSize: {
            "icon": "1.35rem"
        },
        zIndex: {
            "100": "100",
        },
        flexGrow: {
            "2": 2
        },
        gridTemplateRows: {
            "desk-place": "23% 1fr",
        },
        minHeight: {
            "res-section": "770px"
        }
    },
  },
  plugins: [],
}
