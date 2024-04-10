import { screen, render } from "@testing-library/react";

import { SearchResultsContainer } from "./search-results.container";
import { mockBookingResponseWithHolidays } from "@/utils/mocks";

jest.mock("./../components/filter-search", () => {
  const originalModule = jest.requireActual("./../components/filter-search");

  return {
    __esModule: true,
    ...originalModule,
    FilterSearchComponent: jest.fn(() => (
      <h2>{mockBookingResponseWithHolidays.holidays.length} Holidays found</h2>
    )),
  };
});

jest.mock("./../components/search-results", () => {
  const originalModule = jest.requireActual("./../components/search-results");

  return {
    __esModule: true,
    ...originalModule,
    SearchResultsComponent: jest.fn(() => <></>),
  };
});

describe("<SearchResultsContainer>", () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("the API data is being shown in the search results component", () => {
    render(
      <SearchResultsContainer response={mockBookingResponseWithHolidays} />,
    );

    const heading = screen.getByRole("heading", {
      name: `${mockBookingResponseWithHolidays.holidays.length} Holidays found`,
    });

    expect(heading).toBeInTheDocument();
  });
});
