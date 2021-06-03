export const parseRating = (rating: number): number => {
  if (rating >= 8) {
    return 4.5;
  } else if (rating >= 7) {
    return 4;
  } else if (rating >= 6) {
    return 3.5;
  } else if (rating >= 5) {
    return 3;
  } else if (rating >= 4) {
    return 2.5;
  } else if (rating >= 3) {
    return 2;
  } else {
    return 1;
  }
};
