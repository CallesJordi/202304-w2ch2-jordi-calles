export const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  }

  if (!valueA && !valueB) {
    return true;
  }

  if (Object.is(valueA, valueB)) {
    return true;
  } else {
    return false;
  }
};
