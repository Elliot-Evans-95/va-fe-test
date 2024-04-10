"use client";

import styles from "./search-results.module.css";
import { SearchResultsItemComponent } from "@/app/(search)/components/search-results-item";
import { useMediaQuery } from "@/utils/hooks";
import { SearchResultsState } from "@/utils/reducer/search-reducer.types";

interface SearchResultsComponentProperties {
  state: SearchResultsState;
}

export function SearchResultsComponent({
  state,
}: SearchResultsComponentProperties) {
  const isDesktop = useMediaQuery("(min-width: 500px)");

  return (
    <section className={styles.searchResult}>
      <hgroup>
        <h2>{state.searchResults.holidays?.length} Holidays found</h2>
        <p>
          From {state.searchResults.destination.gateway} into{" "}
          {state.searchResults.destination.name}
        </p>
      </hgroup>
      {state.searchResults.holidays?.map((holiday) => (
        <SearchResultsItemComponent
          key={holiday.hotel.id}
          holiday={holiday}
          isDesktop={isDesktop}
        />
      ))}
    </section>
  );
}
