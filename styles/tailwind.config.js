const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['_site/**/*.html'],
  theme: {
    /* For Letter size */
    screens: {
      print: { "raw": "print" },
      xsm: "500px",
      sm: "640px",
      md: "833px",
      lg: "1079.5px",
      xl: "1280px",
    },
    /* For A4 size */
    // screens: {
    //   screen: {"raw": "screen"},
    //   print: {"raw": "print"},
    //   xsm: "500px",
    //   sm: "640px",
    //   md: "811px",
    //   lg: "1051px",
    //   xl: "1280px",
    // },
    extend: {
      lineHeight: {
        snugish: "1.32",
        normal: "1.34",
      },
      // maxWidth: {
      //   "letter": "85.40625rem",
      //   "a4": "64.609375rem"
      // },
      // height: {
      //   "letter": "85.9375rem",
      //   "letter-col": "71.625rem",
      //   "letter-col-full": "77.9375rem",
      //   "a4": "91.350883rem",
      //   "a4-col": "77.038383rem",
      //   "a4-col-full": "83.350883rem",
      // },
      spacing: {
        "0.5": "2px", // 2px
        "1.5": "0.375rem", // 6px
        "1.6": "0.4375rem", // 7px
        "2.1": "0.5625rem", // 9px
        "2.5": "10px", // 10px
        "3.2": "0.8125rem", // 16px
        "4.5": "1.125rem", // 8px
        "11": "2.75rem", // 44px (once)
      },
    },
  },
  plugins: []
}