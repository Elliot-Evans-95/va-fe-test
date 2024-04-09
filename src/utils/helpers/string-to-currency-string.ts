const currencyFormat = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export const stringToCurrencyString = (numberString: number) =>
  currencyFormat.format(numberString);
