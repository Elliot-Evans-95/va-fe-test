import { screen, render, fireEvent } from "@testing-library/react";

import { FilterSearchItemComponent } from "./filter-search-item.component";
import type { FilterDataType } from "@/types";
import { mockFilterSearchData } from "@/utils/mocks";

describe("<FilterSearchItemComponent>", () => {
  const mockFilterSearchDataPricePerPerson =
    mockFilterSearchData.pricePerPerson[0];
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

  test("search results item display name is rendered with a checkbox", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchDataPricePerPerson}
      />,
    );

    const checkbox = screen.getByLabelText("Over £5,000");

    expect(checkbox).toBeInTheDocument();
  });

  test("clicking on a search results item triggers a callback", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchDataPricePerPerson}
      />,
    );

    const checkbox = screen.getByLabelText("Over £5,000");

    fireEvent.click(checkbox);

    expect(mockCheckboxChangeCallback).toBeCalledWith(
      true,
      "PRICE_PER_PERSON",
      [5000, 99_999],
    );
  });

  test("clicking on a search results item checks the checkbox", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchDataPricePerPerson}
      />,
    );

    const checkbox = screen.getByLabelText<HTMLInputElement>("Over £5,000");

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  test("clicking on a search results item twice triggers the callback with unchecked data", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchDataPricePerPerson}
      />,
    );

    const checkbox = screen.getByLabelText<HTMLInputElement>("Over £5,000");

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(mockCheckboxChangeCallback).toHaveBeenLastCalledWith(
      false,
      "PRICE_PER_PERSON",
      [5000, 99_999],
    );
  });

  test("clicking on a search results item twice un-checks the checkbox", () => {
    render(
      <FilterSearchItemComponent
        checkboxChangeCallback={mockCheckboxChangeCallback}
        item={mockFilterSearchDataPricePerPerson}
      />,
    );

    const checkbox = screen.getByLabelText<HTMLInputElement>("Over £5,000");

    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
  });
});
