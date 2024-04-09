import { Dispatch, useCallback } from "react";

import styles from "./filter-search.module.css";
import { FilterDataType } from "@/types/filter-search";
import { SearchResultsAction } from "@/utils/reducer/search-reducer.types";
import { FilterSearchItemComponent } from "@/app/(search)/components/filter-search/filter-search-item";
import { filterSearchData } from "@/app/(search)/components/filter-search/filter-search.data";

interface FilterSearchComponentProperties {
  searchFilterActions: Dispatch<SearchResultsAction>;
}

export function FilterSearchComponent({
  searchFilterActions,
}: FilterSearchComponentProperties) {
  const handleCheckboxChange = useCallback(
    (checked: boolean, type: FilterDataType, value: any) => {
      const actionForType = {
        STAR_RATING: () =>
          searchFilterActions({
            type: checked
              ? "ADD_STAR_RATING_FILTER"
              : "REMOVE_STAR_RATING_FILTER",
            rating: value,
          }),
        HOTEL_FACILITIES: () =>
          searchFilterActions({
            type: checked
              ? "ADD_HOTEL_FACILITIES_FILTER"
              : "REMOVE_HOTEL_FACILITIES_FILTER",
            facility: value,
          }),
        PRICE_PER_PERSON: () =>
          searchFilterActions({
            type: checked
              ? "ADD_PRICE_PER_PERSON_FILTER"
              : "REMOVE_PRICE_PER_PERSON_FILTER",
            pricePerPerson: value,
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
          {filterSearchData.hotelFacilities.map((pricePerPersonItem) => (
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
        <legend>Star Rating</legend>

        <ul className={styles.filterSearch__fieldsetList}>
          {filterSearchData.starRating.map((pricePerPersonItem) => (
            <li key={pricePerPersonItem.id}>
              <FilterSearchItemComponent
                item={pricePerPersonItem}
                checkboxChangeCallback={handleCheckboxChange}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </aside>
  );
}
