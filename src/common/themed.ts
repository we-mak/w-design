import defaultTheme from "./theme";

const { colors } = defaultTheme;

const getColors = (
  themeColors: Array<string>,
  defaultColors: Array<string>
) => {
  let result = {};

  const appearanceKeys = [
    "default",
    "primary",
    "warning",
    "danger",
    "success",
    "link"
  ];

  for (let i in appearanceKeys) {
    if (!themeColors) {
      result[appearanceKeys[i]] = defaultColors[i];
    }
    result[appearanceKeys[i]] = themeColors[i];
  }

  return result;
};

export const background = (themeColors: string) =>
  getColors(
    [
      themeColors["N3"],
      themeColors["B50"],
      themeColors["O30"],
      themeColors["R30"],
      themeColors["G30"]
    ],
    [colors["N3"], colors["B50"], colors["O30"], colors["R30"], colors["G30"]]
  );

export const backgroundHover = (themeColors: string) =>
  getColors(
    [
      themeColors["N4"],
      themeColors["B40"],
      themeColors["O20"],
      themeColors["R20"],
      themeColors["G20"],
      themeColors["N3"]
    ],
    [
      colors["N4"],
      colors["B40"],
      colors["O20"],
      colors["R20"],
      colors["G20"],
      colors["N3"]
    ]
  );

export const backgroundActive = (themeColors: string) =>
  getColors(
    [
      themeColors["B5"],
      themeColors["B60"],
      themeColors["O40"],
      themeColors["R40"],
      themeColors["G40"],
      themeColors["B5"]
    ],
    [
      colors["B5"],
      colors["B60"],
      colors["O40"],
      colors["R40"],
      colors["G40"],
      colors["B5"]
    ]
  );

export const backgroundFocus = (themeColors: string) =>
  getColors(
    [
      themeColors["B5"],
      themeColors["B60"],
      themeColors["O40"],
      themeColors["R40"],
      themeColors["G40"],
      themeColors["B5"]
    ],
    [
      colors["B5"],
      colors["B60"],
      colors["O40"],
      colors["R40"],
      colors["G40"],
      colors["B5"]
    ]
  );

export const border = (themeColors: string) =>
  getColors(
    [
      themeColors["N3"],
      themeColors["B60"],
      themeColors["O40"],
      themeColors["R40"],
      themeColors["G40"]
    ],
    [colors["N3"], colors["B60"], colors["O40"], colors["R40"], colors["G40"]]
  );

export const borderHover = (themeColors: string) =>
  getColors(
    [
      themeColors["N4"],
      themeColors["B50"],
      themeColors["O30"],
      themeColors["R30"],
      themeColors["G30"]
    ],
    [colors["N4"], colors["B50"], colors["O30"], colors["R30"], colors["G30"]]
  );

export const borderActive = (themeColors: string) =>
  getColors(
    [
      themeColors["B5"],
      themeColors["B70"],
      themeColors["O50"],
      themeColors["R50"],
      themeColors["G50"]
    ],
    [colors["B5"], colors["B70"], colors["O50"], colors["R50"], colors["G50"]]
  );

export const borderFocus = (themeColors: string) =>
  getColors(
    [
      themeColors["B5"],
      themeColors["B70"],
      themeColors["O50"],
      themeColors["R50"],
      themeColors["G50"]
    ],
    [colors["B5"], colors["B70"], colors["O50"], colors["R50"], colors["G50"]]
  );
export const text = (themeColors: string) =>
  getColors(
    [
      themeColors["N90"],
      themeColors["N1"],
      themeColors["N1"],
      themeColors["N1"],
      themeColors["N1"],
      themeColors["B50"]
    ],
    [
      colors["N90"],
      colors["N1"],
      colors["N1"],
      colors["N1"],
      colors["N1"],
      colors["B50"]
    ]
  );

const shadowSize = `0 0 0 0.1rem`;

export const boxShadow = (themeColors: string) =>
  getColors(
    [
      "none",
      `${shadowSize} ${themeColors["B5"]}`,
      `${shadowSize} ${themeColors["O10"]}`,
      `${shadowSize} ${themeColors["R5"]}`,
      `${shadowSize} ${themeColors["G5"]}`,
      `${shadowSize} ${themeColors["B50"]}`
    ],
    [
      "none",
      `${shadowSize} ${colors["B5"]}`,
      `${shadowSize} ${colors["O10"]}`,
      `${shadowSize} ${colors["R5"]}`,
      `${shadowSize} ${colors["G5"]}`,
      `${shadowSize} ${colors["B50"]}`
    ]
  );

export const fontSizes = (fontSizes: string) => ({
  sm: fontSizes[0],
  md: fontSizes[1],
  lg: fontSizes[2]
});

export const padding = {
  sm: "0.15rem 0.3rem",
  md: "0.35rem 0.4rem",
  lg: "0.45rem 0.6rem"
};

export const height = {
  sm: "1.4rem",
  md: "1.8rem",
  lg: "2rem"
};
