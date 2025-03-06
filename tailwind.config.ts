import type { Config } from 'tailwindcss/types/config';
import {
  colors, screens, spacing, width, minWidth, maxWidth, height,
  minHeight, maxHeight, borderWidth, borderRadius, boxShadow, saturate, contrast,
  invert, translate, scale, backgroundImage, rotate, animation, keyframes, lineClamp,
} from './src/styles/constantsStyle';

const tailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // safelist: [{ pattern: /^(bg-|border-|text-)/, variants: ['hover', 'active'] }, 'bg-red-200'],
  darkMode: ['class', '[data-theme="dark"]'], // <--- from tests I made on Storybook, this array doesn't work. Only the data-theme="dark" affects the result, and the class does nothing. At first I thought may there's an AND behavior, but no, just the data attributes affects it. The class is rendered useless in this array form.
  important: '#root',
  theme: {
    screens,
    extend: {
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
      colors,
    },
  },
  corePlugins: {
    aspectRatio: false, // disable the aspectRatio core plugin to avoid conflicts with the native aspect-ratio utilities included in Tailwind CSS v3.0
    preflight: false, // disable the preflight core plugin to avoid conflicts with the native preflight styles included in Tailwind CSS v3.0
  },
  variants: {
    animation: ({ after }) => after(['motion-safe', 'motion-reduce']),
    transitionProperty: ({ after }) => after(['motion-reduce']),
  },
  plugins: [],
};

export default tailwindConfig;
