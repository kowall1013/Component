const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: {
    brightOrange: "hsl(31, 77%, 52%)",
    darkCyan: "hsl(184, 100%, 22%)",
    veryDarkCyan: "hsl(179, 100%, 13%)"
  },
  neutral: {
    transparentWhite: "hsla(0, 0%, 100%, 0.75)",
    lightGray: "hsl(0, 0%, 95%)",
  }
};
