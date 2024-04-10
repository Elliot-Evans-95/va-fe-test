import { stringToCurrencyString } from "./string-to-currency-string";

describe("string to currency string", () => {
  test("price is changes into a currency string", () => {
    const actual = stringToCurrencyString(1000);

    expect(actual).toBe("£1,000.00");
  });

  test("price is not rounded into a currency string", () => {
    const actual = stringToCurrencyString(1000.99);

    expect(actual).toBe("£1,000.99");
  });
});
