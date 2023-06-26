export function convertUnicode(input) {
  return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a, b) =>
    String.fromCharCode(parseInt(b, 16))
  );
}

export function ArrShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export const formatPrice = (cents) => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const starRating = (rating, max = 5) => {
  const full = Math.floor(rating);
  const starArr = [];
  for (let i = 0; i < full; i++) {
    starArr.push(<i className="fa-solid fa-star"></i>);
  }
  for (let i = 0; i < max - full; i++) {
    starArr.push(<i className="fa-regular fa-star"></i>);
  }
  return starArr;
};