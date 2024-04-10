import { filterHolidaysResultsByAppliedFilters } from "./filter-holidays-results-by-applied-filters";
import {
  mockAppliedNoFilters,
  mockBookingResponseWithNoHolidays,
  mockBookingResponseWithHolidays,
  mockAppliedStarRatingFilter,
  mockAppliedHotelFacilityFilter,
  mockAppliedPricePerPersonFilter,
  mockAppliedHotelFacilityStarRatingFilter,
  mockAppliedAllFilterType,
} from "../mocks";

describe("filter holidays results by applied filters", () => {
  test("no data returns when there is no holiday data", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithNoHolidays,
      mockAppliedNoFilters,
    );

    expect(actual).toStrictEqual([]);
  });

  test("data returns when there is holiday data", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedNoFilters,
    );

    expect(actual.length).toBe(12);
  });

  test("data is filtered by star rating when there is a star rating filter applied", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedStarRatingFilter,
    );

    expect(actual.length).toBe(2);
  });

  test("data is filtered by price per person when there is a price per person filter applied", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedPricePerPersonFilter,
    );

    expect(actual.length).toBe(11);
  });

  test("data is filtered by hotel facilities when there is a hot facility filter applied", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedHotelFacilityFilter,
    );

    expect(actual.length).toBe(9);
  });

  test("data is filtered by both hotel facilities and star rating when there are star rating and hotel facility filters", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedHotelFacilityStarRatingFilter,
    );

    expect(actual.length).toBe(3);
  });

  test("data is filtered by all three filter types when there is a filter in each type", () => {
    const actual = filterHolidaysResultsByAppliedFilters(
      mockBookingResponseWithHolidays,
      mockAppliedAllFilterType,
    );

    expect(actual.length).toBe(2);
  });
});
