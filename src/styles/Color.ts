export type BaseColorsProps = {
  default: string;
  background: string;
  secondary: string;
  primary: string;
  accent: string;
  forms: string;
  error: string;
  success: string;
  card: string;
};

export type StatesType = {
  hover: number;
  pressed: number;
  disabled: number;
};

type IStateKeys = keyof StatesType;

type ColorProps = BaseColorsProps & {
  dark: BaseColorsProps;
} & {
  [K in IStateKeys]: {
    dark: BaseColorsProps;
  } & BaseColorsProps;
};

const createColorVariant = (color: string, opacity: number): string => {
  return color.replace(/[\d.]+\)$/, `${opacity})`);
};

const themeGenerate = (baseColors: BaseColorsProps, opacity: number): BaseColorsProps => {
  return Object.entries(baseColors).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: createColorVariant(value, opacity),
    }),
    {} as BaseColorsProps,
  );
};

export const generateColors = (
  lightColors: BaseColorsProps,
  darkColors: BaseColorsProps,
  states: StatesType,
): ColorProps => {
  const colors = {
    ...lightColors,
    dark: darkColors,
  } as ColorProps;

  Object.entries(states).forEach(([stateName, opacity]) => {
    colors[stateName as IStateKeys] = {
      ...themeGenerate(lightColors, opacity),
      dark: themeGenerate(darkColors, opacity),
    };
  });

  return colors;
};
