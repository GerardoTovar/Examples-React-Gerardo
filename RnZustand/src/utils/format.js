export const money = num => {
  return `$${(Math.round(num * 100) / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};
export const moneyUnid = num => {
  return `$${(Math.round(num * 100) / 100)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} c/u`;
};
