import { Dispatch, useCallback } from "react";

import styles from "./filter-search.module.css";
import { filterSearchData } from "@/app/(search)/components/filter-search/filter-search.data";
import { FilterSearchItemComponent } from "@/app/(search)/components/filter-search-item";
import { FilterDataType } from "@/types/filter-search";
import { SearchResultsAction } from "@/utils/reducer/search-reducer.types";

interface FilterSearchComponentProperties {
  searchFilterActions: Dispatch<SearchResultsAction>;
}

export function FilterSearchComponent({
  searchFilterActions,
}: FilterSearchComponentProperties) {
  const handleCheckboxChange = useCallback(
    (
      checked: boolean,
      type: FilterDataType,
      value: string | [min: number, max: number],
    ) => {
      const actionForType = {
        STAR_RATING: () =>
          searchFilterActions({
            type: checked
              ? "ADD_STAR_RATING_FILTER"
              : "REMOVE_STAR_RATING_FILTER",
            rating: value as string,
          }),
        HOTEL_FACILITIES: () =>
          searchFilterActions({
            type: checked
              ? "ADD_HOTEL_FACILITIES_FILTER"
              : "REMOVE_HOTEL_FACILITIES_FILTER",
            facility: value as string,
          }),
        PRICE_PER_PERSON: () =>
          searchFilterActions({
            type: checked
              ? "ADD_PRICE_PER_PERSON_FILTER"
              : "REMOVE_PRICE_PER_PERSON_FILTER",
            pricePerPerson: value as [min: number, max: number],
          }),
      };

      actionForType[type]();
    },
    [searchFilterActions],
  );

  return (
    <aside className={styles.filterSearch}>
      <h2 className={styles.filterSearch__heading}>Filter your search</h2>

      <fieldset className={styles.filterSearch__fieldset}>
        <legend>Price per person</legend>

        <ul className={styles.filterSearch__fieldsetList}>
          {filterSearchData.pricePerPerson.map((pricePerPersonItem) => (
            <li key={pricePerPersonItem.id}>
              <FilterSearchItemComponent
                item={pricePerPersonItem}
                checkboxChangeCallback={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className={styles.filterSearch__fieldset}>
        <legend>Hotel facilities</legend>

        <ul className={styles.filterSearch__fieldsetList}>
          {filterSearchData.hotelFacilities.map((hotelFacility) => (
            <li key={hotelFacility.id}>
              <FilterSearchItemComponent
                item={hotelFacility}
                checkboxChangeCallback={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className={styles.filterSearch__fieldset}>
        <legend>Star Rating</legend>

        <ul className={styles.filterSearch__fieldsetList}>
          {filterSearchData.starRating.map((starRating) => (
            <li key={starRating.id}>
              <FilterSearchItemComponent
                item={starRating}
                checkboxChangeCallback={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </aside>
  );
}
