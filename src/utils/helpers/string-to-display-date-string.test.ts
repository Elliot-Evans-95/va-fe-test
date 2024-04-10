import { stringToDisplayDateString } from "./string-to-display-date-string";

describe("string to display date string", () => {
  test("ISO date format is changed to display format", () => {
    const actual = stringToDisplayDateString("2024-04-10");

    expect(actual).toBe("10 Apr, 2024");
  });

  test("text string returns when its not an ISO date format", () => {
    const actual = stringToDisplayDateString("11-12-2020");

    expect(actual).toBe("11-12-2020");
  });
});
