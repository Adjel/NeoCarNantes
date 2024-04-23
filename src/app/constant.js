export const COLORS = {
  background: {
    darkGray: "hsl(0 1 18)",
  },
  primary: "hsl(0 100 27)",
};

// Desktop is the basic display, so it's display by default and be
// hidden if we are on other device size type

// Reverse for others
export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};