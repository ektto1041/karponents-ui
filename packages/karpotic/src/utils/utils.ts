import { Border, Color, DimensionValue, SpacingValue } from "../types";

export const parseDimension = (dimension?: string | DimensionValue) => {
  if (!dimension) return {};

  if (typeof dimension === "string") {
    return { value: dimension };
  }

  const [min, value, max] = dimension;
  return {
    min,
    value,
    max,
  };
};

export const parseSpacing = (spacing?: SpacingValue) => {
  if (!spacing) return {};

  if (typeof spacing === "string") {
    return {
      paddingTop: spacing,
      paddingRight: spacing,
      paddingBottom: spacing,
      paddingLeft: spacing,
    };
  }

  const [first, second, third, fourth] = spacing;

  if (spacing.length === 2) {
    return {
      paddingTop: first,
      paddingRight: second,
      paddingBottom: first,
      paddingLeft: second,
    };
  }

  if (spacing.length === 3) {
    return {
      paddingTop: first,
      paddingRight: second,
      paddingBottom: third,
      paddingLeft: second,
    };
  }

  if (spacing.length === 4) {
    return {
      paddingTop: first,
      paddingRight: second,
      paddingBottom: third,
      paddingLeft: fourth,
    };
  }

  return {};
};

export const parseMargin = (spacing?: SpacingValue) => {
  if (!spacing) return {};

  if (typeof spacing === "string") {
    return {
      marginTop: spacing,
      marginRight: spacing,
      marginBottom: spacing,
      marginLeft: spacing,
    };
  }

  const [first, second, third, fourth] = spacing;

  if (spacing.length === 2) {
    return {
      marginTop: first,
      marginRight: second,
      marginBottom: first,
      marginLeft: second,
    };
  }

  if (spacing.length === 3) {
    return {
      marginTop: first,
      marginRight: second,
      marginBottom: third,
      marginLeft: second,
    };
  }

  if (spacing.length === 4) {
    return {
      marginTop: first,
      marginRight: second,
      marginBottom: third,
      marginLeft: fourth,
    };
  }

  return {};
};

export const createStyleFromDimensions = (
  w?: string | DimensionValue,
  h?: string | DimensionValue,
  p?: SpacingValue,
  m?: SpacingValue
) => {
  const width = parseDimension(w);
  const height = parseDimension(h);
  const padding = parseSpacing(p);
  const margin = parseMargin(m);

  return {
    width: width.value,
    height: height.value,
    minWidth: width.min,
    maxWidth: width.max,
    minHeight: height.min,
    maxHeight: height.max,
    ...padding,
    ...margin,
  };
};

export const createStyleFromColor = (color: Color) => {
  if (color === "inherit") return { color };
  else return { color: `var(--color-${color})` };
};

export const createStyleFromBackgroundColor = (bgc: Color | undefined) => {
  if (bgc === undefined) return undefined;
  if (bgc === "inherit") return { backgroundColor: bgc };
  else return { backgroundColor: `var(--color-${bgc})` };
};

export const createBorderClassName = (border: Border) => {
  if (border === "none") return;

  return border;
};
