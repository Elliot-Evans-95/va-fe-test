import { filterHolidaysResultsByAppliedFilters } from "./filter-holidays-results-by-applied-filters";
import { searchReducer } from "./search-reducer";
import {
  mockState,
  mockAddPricePerPerson,
  mockAppliedNoFilters,
  mockRemovePricePerPerson,
  mockAppliedPricePerPersonFilter,
  mockAddHotelFacility,
  mockRemoveHotelFacility,
  mockAppliedHotelFacilityFilter,
  mockAddStarRating,
  mockRemoveStarRating,
  mockAppliedStarRatingFilter,
} from "../mocks";

jest.mock("./filter-holidays-results-by-applied-filters", () => {
  const originalModule = jest.requireActual(
    "./filter-holidays-results-by-applied-filters",
  );

  return {
    __esModule: true,
    ...originalModule,
    filterHolidaysResultsByAppliedFilters: jest.fn(),
  };
});

const mockedFilterHolidaysResultsByAppliedFilters = jest.mocked(
  filterHolidaysResultsByAppliedFilters,
);

describe("search reducer", () => {
  beforeEach(() => {
    mockedFilterHolidaysResultsByAppliedFilters.mockReturnValue([]);
  });

  afterEach(() => {
    mockedFilterHolidaysResultsByAppliedFilters.mockClear();
  });

  test("no new search results return when there is no initial search results", () => {
    const updatedState = searchReducer(mockState, mockAddPricePerPerson);

    expect(updatedState.searchResults).toStrictEqual(mockState.searchResults);
  });

  test("price per person filter is added to state when a price per person filter is selected", () => {
    const updatedState = searchReducer(mockState, mockAddPricePerPerson);

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      pricePerPerson: [mockAddPricePerPerson.pricePerPerson],
    });
  });

  test("price per person filter is removed from state when a price per person filter is de-selected", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedPricePerPersonFilter },
      mockRemovePricePerPerson,
    );

    expect(updatedState.appliedFilters).toStrictEqual(mockAppliedNoFilters);
  });

  test("price per person filter is not added again if it already exists as a filter", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedPricePerPersonFilter },
      mockAddPricePerPerson,
    );

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      pricePerPerson: [mockAddPricePerPerson.pricePerPerson],
    });
  });

  test("hotel facility filter is added to state when a hotel facility filter is selected", () => {
    const updatedState = searchReducer(mockState, mockAddHotelFacility);

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      hotelFacilities: [mockAddHotelFacility.facility],
    });
  });

  test("hotel facility filter is removed from state when a hotel facility filter is de-selected", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedHotelFacilityFilter },
      mockRemoveHotelFacility,
    );

    expect(updatedState.appliedFilters).toStrictEqual(mockAppliedNoFilters);
  });

  test("hotel facility filter is not added again if it already exists as a filter", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedHotelFacilityFilter },
      mockAddHotelFacility,
    );

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      hotelFacilities: [mockAddHotelFacility.facility],
    });
  });

  test("star rating filter is added to state when a star rating filter is selected", () => {
    const updatedState = searchReducer(mockState, mockAddStarRating);

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      starRating: [mockAddStarRating.rating],
    });
  });

  test("star rating filter is removed from state when a star rating filter is de-selected", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedStarRatingFilter },
      mockRemoveStarRating,
    );

    expect(updatedState.appliedFilters).toStrictEqual(mockAppliedNoFilters);
  });

  test("star rating filter is not added again if it already exists as a filter", () => {
    const updatedState = searchReducer(
      { ...mockState, appliedFilters: mockAppliedStarRatingFilter },
      mockAddStarRating,
    );

    expect(updatedState.appliedFilters).toStrictEqual({
      ...mockAppliedNoFilters,
      starRating: [mockAddStarRating.rating],
    });
  });

  test("filterHolidaysResultsByAppliedFilters is called whenever an action is used", () => {
    searchReducer(mockState, mockAddPricePerPerson);

    expect(mockedFilterHolidaysResultsByAppliedFilters).toHaveBeenCalledTimes(
      1,
    );
  });

  test("filterHolidaysResultsByAppliedFilters is called with the applied filter whenever an action is used", () => {
    searchReducer(mockState, mockAddStarRating);

    expect(mockedFilterHolidaysResultsByAppliedFilters).toHaveBeenCalledWith(
      mockState.initialSearchResults,
      {
        ...mockAppliedNoFilters,
        starRating: [mockAddStarRating.rating],
      },
    );
  });
});
