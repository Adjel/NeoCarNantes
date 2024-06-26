export const COLORS = {
  background: {
    darkGray: "hsl(0 1 18)",
    transparentBlack: "hsla(0, 0%, 0%, 0.7)",
    transparentLightGray: "hsla(0, 4%, 70%, 0.55)",
    transparentGray: "hsla(0, 4%, 68%, 0.9)",
    transparentLightBlack: "hsla(0, 0%, 0%, 0.2)",
  },
  primary: "hsl(0 100 27)",
  blue: "hsl(215 75 46)",
};

export const FONTSIZE = {
  big: {
    desktop: `${64 / 16}rem`,
    tablet: `${60 / 16}rem`,
    phone: `${58 / 16}rem`,
  },
  normal: {
    desktop: `${16 / 16}rem`,
    tablet: `${14 / 16}rem`,
    phone: `${12 / 16}rem`,
  },
  bigItem: {
    desktop: `${18 / 16}rem`,
    tablet: `${16 / 16}rem`,
    phone: `${10 / 16}rem`,
  },
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
    desktop: `${16 / 16}rem`,
    tablet: `${15 / 16}rem`,
    phone: `${14 / 16}rem`,
  },
  little: {
    desktop: `${12 / 16}rem`,
    tablet: `${10 / 16}rem`,
    phone: `${8 / 16}rem`,
  },
};

export const FONTFAMILY = {
  Fjalla: "Fjalla One",
  Pathway: "Pathway Gothic One",
};

export const FONTWEIGHT = {
  tier1: "180",
  tier2: "200",
  tier25: "250",
  tier3: "300",
  normal: "400",
  bold: "700",
};

// Mobile is the basic display, so it's display by default and be
// hidden if we are on other device size type

// Reverse for others
export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
