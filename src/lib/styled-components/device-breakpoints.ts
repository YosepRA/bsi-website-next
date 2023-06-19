const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const deviceBreakpoints = {
  sm: `(min-width: ${sizes.sm}px)`,
  md: `(min-width: ${sizes.md}px)`,
  lg: `(min-width: ${sizes.lg}px)`,
  xl: `(min-width: ${sizes.xl}px)`,
  xxl: `(min-width: ${sizes.xxl}px)`,
};

export default deviceBreakpoints;
