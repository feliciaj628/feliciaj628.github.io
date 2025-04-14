/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-lg": "inset 0px 4px 5px rgba(0, 0, 0, 0.2)",
        "custom-light": "2px 3px 0px rgba(207, 211, 224, 1)",
      },
      backgroundImage: {
        reviewsbefore: "url('assets/harvestly-reviews-before.png')",
        reviews: "url('assets/harvestly-reviews-after.png')",
        harvestlyhomebefore: "url('assets/harvestly-home-before.png')",
        harvestlyhome: "url('assets/harvestly-home.png')",
        portfolio: "url('assets/portfolio.png')",
        tarot: "url('assets/tarot.png')",
        pontebefore: "url('assets/ponte-before.png')",
        slibefore: "url('assets/sli-before.png')",
        sli: "url('assets/sli.png')",
        sliloginbefore: "url('assets/sli-login-before.png')",
        slilogin: "url('assets/sli-login.png')",
        userlist: "url('assets/user-list.png')",
        ponte: "url('assets/ponte.png')",
        me: "url('assets/me.png')",
        drops: "url('assets/drops.png')",
        transition: "url('assets/bluetransition1.png')",
        transition1: "url('assets/bluetransition2.png')",
        transition2: "url('assets/bluetransition2.png')",
        circle: "url('assets/circle.png')",
        webimage: "url('assets/webimage.png')",
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        "primary-50": "#F0F1F5",
        "primary-100": "#CFD3E0",
        "primary-200": "#B8BED1",
        "primary-300": "#97A0BB",
        "primary-400": "#838DAE",
        "primary-500": "#64719A",
        "primary-600": "#5B678C",
        "primary-700": "#47506D",
        "primary-800": "#373E55",
        "primary-900": "#2A2F41",
      },
    },
  },
  plugins: [],
};
