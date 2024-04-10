import { screen, render, fireEvent } from "@testing-library/react";

import { FilterSearchComponent } from "./filter-search.component";
import { FilterDataType, FilterSearchItem } from "@/types";

jest.mock("@/app/(search)/components/filter-search-item", () => {
  const originalModule = jest.requireActual(
    "@/app/(search)/components/filter-search-item",
  );

  return {
    __esModule: true,
    ...originalModule,
    FilterSearchItemComponent: jest.fn(
      ({
        item,
        checkboxChangeCallback,
      }: {
        item: FilterSearchItem;
        checkboxChangeCallback: (
          checked: boolean,
          type: FilterDataType,
          value: string | [min: number, max: number],
        ) => void;
      }) => {
        const callbackData = {
          STAR_RATING: {
            checked: true,
            type: "STAR_RATING",
            value: "4",
          },
          PRICE_PER_PERSON: {
            checked: true,
            type: "PRICE_PER_PERSON",
            value: [1000, 2000],
          },
          HOTEL_FACILITIES: {
            checked: true,
            type: "HOTEL_FACILITIES",
            value: "Bar",
          },
        };

        return (
          <button
            onClick={() =>
              checkboxChangeCallback(
                callbackData[item.type].checked,
                callbackData[item.type].type as FilterDataType,
                callbackData[item.type].value as never,
              )
            }
          >
            {item.name}
          </button>
        );
      },
    ),
  };
});

describe("<FilterSearchComponent>", () => {
  const mockDispatch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("search results heading appears on the document", () => {
    render(<FilterSearchComponent searchFilterActions={mockDispatch} />);

    const heading = screen.getByRole("heading", {
      name: "Filter your search",
    });

    expect(heading).toBeInTheDocument();
  });

  test("search results shows 20 filters on the document", () => {
    render(<FilterSearchComponent searchFilterActions={mockDispatch} />);

    const filters = screen.getAllByRole("button");

    expect(filters.length).toBe(19);
  });

  test("clicking a search results price per person filter triggers a dispatch with price per person data", () => {
    render(<FilterSearchComponent searchFilterActions={mockDispatch} />);

    const pricePerPersonFilter = screen.getByRole("button", {
      name: "price-per-person-5000-to-99999",
    });

    fireEvent.click(pricePerPersonFilter);

    expect(mockDispatch).toBeCalledWith({
      pricePerPerson: [1000, 2000],
      type: "ADD_PRICE_PER_PERSON_FILTER",
    });
  });

  test("clicking a search results star rating filter triggers a dispatch with star rating data", () => {
    render(<FilterSearchComponent searchFilterActions={mockDispatch} />);

    const pricePerPersonFilter = screen.getByRole("button", {
      name: "4-star-rating",
    });

    fireEvent.click(pricePerPersonFilter);

    expect(mockDispatch).toBeCalledWith({
      rating: "4",
      type: "ADD_STAR_RATING_FILTER",
    });
  });

  test("clicking a search results hotel facility filter triggers a dispatch with hotel facility data", () => {
    render(<FilterSearchComponent searchFilterActions={mockDispatch} />);

    const pricePerPersonFilter = screen.getByRole("button", {
      name: "bar-facility",
    });

    fireEvent.click(pricePerPersonFilter);

    expect(mockDispatch).toBeCalledWith({
      facility: "Bar",
      type: "ADD_HOTEL_FACILITIES_FILTER",
    });
  });
});
