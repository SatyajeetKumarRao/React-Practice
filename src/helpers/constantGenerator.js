export const constantGenerator = (constantKey) => {
  return {
    REQUEST: `${constantKey}_REQUEST`,
    LOADING: `${constantKey}_LOADING`,
    SUCCESS: `${constantKey}_SUCCESS`,
    ERROR: `${constantKey}_ERROR`,
  };
};
