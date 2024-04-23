export const COLORS = {
  background: {
    darkGray: "hsl(0 1 18)",
    transparentDarkGray: "hsla(0, 0%, 0%, 0.7)",
    transparentLightGray: "hsla(0, 4%, 70%, 0.55)",
    transparentGray: "hsla(0, 4%, 68%, 0.9)",
  },
  primary: "hsl(0 100 27)",
};

export const FONTSIZE = {
  title: {
    desktop: `${34 / 16}rem`,
    tablet: `${34 / 16}rem`,
    phone: `${28 / 16}rem`,
  },
  content: {
    desktop: `${24 / 16}rem`,
    tablet: `${24 / 16}rem`,
    phone: `${16 / 16}rem`,
  },
  item: {
    desktop: `${14 / 16}rem`,
    tablet: `${12 / 16}rem`,
    phone: `${10 / 16}rem`,
  },
};

export const FONTFAMILY = {
  Fjalla: "Fjalla One",
};

export const FONTWEIGHT = {
  tier1: "180",
  tier2: "200",
  tier25: "250",
  tier3: "300",
  normal: "400",
  bold: "700",
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
