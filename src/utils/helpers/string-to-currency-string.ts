const currencyFormat = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export const stringToCurrencyString = (price: number) =>
  currencyFormat.format(price);
