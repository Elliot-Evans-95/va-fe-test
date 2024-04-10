import { screen, render, fireEvent } from "@testing-library/react";

import { FilterSearchItemComponent } from "./filter-search-item.component";
import { FilterDataType } from "../../../../../types";
import { filterSearchData } from "../filter-search.data";

describe("<FilterSearchItemComponent>", () => {
  const mockFilterSearchData = filterSearchData.pricePerPerson[0];
  const mockCheckboxChangeCallback = jest.fn(
    (
      checked: boolean,
      type: FilterDataType,
      value: string | [min: number, max: number],
    ) => ({ checked, type, value }),
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("search results item is rendered with a checkbox", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchData}
      />,
    );

    const checkbox = screen.getByRole("label", {
      name: "price-per-person-5000-to-99999",
    });

    expect(checkbox).toBeInTheDocument();
  });

  test("search results item display name is rendered with a checkbox", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchData}
      />,
    );

    const checkbox = screen.getByRole("label", {
      name: "price-per-person-5000-to-99999",
    });

    expect(checkbox.textContent).toBe("Over £5000");
  });

  test("clicking on a search results item triggers a callback", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchData}
      />,
    );

    const checkbox = screen.getByRole("label", {
      name: "price-per-person-5000-to-99999",
    });

    fireEvent.click(checkbox);

    expect(mockCheckboxChangeCallback).toBeCalledWith("");
  });
});
