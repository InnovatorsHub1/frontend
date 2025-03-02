//This file has been created to bridge sx and tailwind
import { generateColors, BaseColorsProps, StatesType } from './Color';

const states: StatesType = {
  hover: 0.8,
  pressed: 0.6,
  disabled: 0.4,
};

const baseColors: Record<'light' | 'dark', BaseColorsProps> = {
  light: {
    default: 'rgba(43, 43, 43, 1)',
    background: 'rgba(233, 222, 200, 1)',
    secondary: 'rgba(61, 61, 61, 1)',
    primary: 'rgba(72, 143, 102, 1)',
    accent: 'rgba(237, 245, 255, 1)',
    forms: 'rgba(61, 61, 61, 0.44)',
    error: 'rgba(207, 111, 111, 1)',
    success: 'rgba(38, 223, 115, 1)',
    card: 'rgba(33, 37, 51, 1)',
  },
  dark: {
    default: 'rgba(236, 236, 236, 1)',
    background: 'rgba(17, 21, 31, 1)',
    secondary: 'rgba(61, 61, 61, 1)',
    primary: 'rgba(111, 207, 151, 1)',
    accent: 'rgba(237, 245, 255, 1)',
    forms: 'rgba(61, 61, 61, 0.44)',
    error: 'rgba(207, 111, 111, 1)',
    success: 'rgba(38, 223, 115, 1)',
    card: 'rgba(33, 37, 51, 1)',
  },
};

const colors = generateColors(baseColors.light, baseColors.dark, states);

const screens = { sm: '480px', md: '768px', lg: '976px', xl: '1440px' };

const spacing = { 13: '3.25rem', 15: '3.75rem', 18: '4.5rem', 19: '4.75rem', 30: '7.5rem' };

const width = {
  '10/100': '10%',
  '20/100': '20%',
  '30/100': '30%',
  '40/100': '40%',
  '60/100': '60%',
  '70/100': '70%',
  '80/100': '80%',
  '90/100': '90%',
  '95/100': '95%',
  px: '1px',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};
const minWidth = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const maxWidth = {
  thirdish: '32.5%',
  '1/3': '33.33%',
  '2/3': '66.66%',
  '10/100': '10%',
  '20/100': '20%',
  '30/100': '30%',
  '40/100': '40%',
  '50/100': '50%',
  '60/100': '60%',
  '70/100': '70%',
  '80/100': '80%',
  '90/100': '90%',
  '95/100': '95%',
  '96/100': '96%',
  '97/100': '97%',
  '98/100': '98%',
  '99/100': '99%',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const height = {
  '80/100': '80%',
  '85/100': '85%',
  '90/100': '90%',
  '95/100': '95%',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const minHeight = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const maxHeight = {
  '10/100': '10%',
  '20/100': '20%',
  '30/100': '30%',
  '40/100': '40%',
  '50/100': '50%',
  '60/100': '60%',
  '70/100': '70%',
  '80/100': '80%',
  '90/100': '90%',
  '95/100': '95%',
  '96/100': '96%',
  '97/100': '97%',
  '98/100': '98%',
  '99/100': '99%',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
};

const borderWidth = {
  0.5: '0.5px',
  1: '1px',
  1.5: '1.5px',
};

const borderRadius = {
  '4xl': '2rem', // use like so: rounded-4xl
};

const boxShadow = {
  '2xs': '0 0 1px 1px rgba(0, 0, 0, 0.1)',
  xs: '0 0 2px 2px rgba(0, 0, 0, 0.1)',
  sm: '0 0 4px 4px rgba(0, 0, 0, 0.1)',
  md: '0 0 6px 6px rgba(0, 0, 0, 0.1)',
  base: '0 0 8px 8px rgba(0, 0, 0, 0.1)',
  lg: '0 0 10px 10px rgba(0, 0, 0, 0.1)',
  'dark-xs': '0 0 2px 2px rgba(255,255,255, 0.1)',
  'dark-sm': '0 0 4px 4px rgba(255,255,255, 0.1)',
  'dark-md': '0 0 6px 6px rgba(255,255,255, 0.1)',
  'dark-base': '0 0 8px 8px rgba(255,255,255, 0.1)',
  'dark-lg': '0 0 10px 10px rgba(255,255,255, 0.1)',
};

const saturate = {
  10: '.1',
  20: '.2',
  30: '.3',
  40: '.4',
  60: '.6',
  70: '.7',
  80: '.8',
  90: '.9',
  110: '1.1',
  120: '1.2',
  130: '1.3',
  140: '1.4',
};

const contrast = {
  10: '.1',
  20: '.2',
  30: '.3',
  40: '.4',
  60: '.6',
  70: '.7',
  80: '.8',
  90: '.9',
};

const invert = {
  10: '.1',
  20: '.2',
  30: '.3',
  40: '.4',
  50: '.5',
  60: '.6',
  70: '.7',
  80: '.8',
  90: '.9',
};

const translate = {
  10: '10%',
  half: '-50%',
};

const scale = {
  80: '0.8',
};

const backgroundImage = {
  'gradient-radial': 'radial-gradient(circle,var(--tw-gradient-stops))',
  'gradient-radial-bottom': 'radial-gradient(circle at bottom,var(--tw-gradient-stops))',
};

const rotate = {
  270: '270deg',
};

const animation = {
  'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  'appear-quick': 'appear 150ms normal ease forwards',
  spin: 'spin 1.5s cubic-bezier(.72,.18,.3,.99) infinite',
  blinkingText: 'blinkingText 0.8s ease-in-out infinite alternate',
  shake: 'shake ease-in 5s infinite',
  appear: 'appear 1000ms normal ease forwards',
};

const keyframes = {
  slideUp: {
    from: { opacity: '0', transform: 'translateY(10px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  slideDown: {
    from: { opacity: '0', transform: 'translateY(-10px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  blinkingText: {
    from: {
      textShadow:
        '0 0 2px #fff, 0 0 3px #dfaa7e, 0 0 4px #dfaa7e, 0 0 5px #dfaa7e, 0 0 6px #dfaa7e, 0 0 7px #dfaa7e, 0 0 8px #dfaa7e;',
    },
    to: {
      textShadow:
        '#FFF 0px 0px 1px, #FFF 0px 0px 2px, #FFF 0px 0px 3px, #dfaa7e 0px 0px 2px, #dfaa7e 0px 0px 3px, #dfaa7e 0px 0px 4px, #dfaa7e 0px 0px 20px, #dfaa7e 0px 0px 10px;',
    },
  },
  shake: {
    '0%': { left: '0' },
    '1%': { left: '-3px' },
    '2%': { left: '5px' },
    '3%': { left: '-8px' },
    '4%': { left: '8px' },
    '5%': { left: '-5px' },
    '6%': { left: '3px' },
    '7%': { left: '0' },
  },
  appear: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
};

const lineClamp = {
  // line clamp's default stops at 6 lines! but you can add even more:
  10: '10',
  12: '12',
};

export {
  colors,
  screens,
  spacing,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  borderWidth,
  borderRadius,
  boxShadow,
  saturate,
  contrast,
  invert,
  translate,
  scale,
  backgroundImage,
  rotate,
  animation,
  keyframes,
  lineClamp,
};
