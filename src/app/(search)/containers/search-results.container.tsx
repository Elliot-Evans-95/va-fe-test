"use client";

import { BookingResponse } from "@/types/booking";
import { useReducer } from "react";
import { searchReducer } from "@/utils/reducer/search-reducer";
import { FilterSearchComponent } from "@/app/(search)/components/filter-search";
import { SearchResultsComponent } from "@/app/(search)/components/search-results";

interface SearchResultsContainerProperties {
  response: BookingResponse;
}

export function SearchResultsContainer({
  response,
}: SearchResultsContainerProperties) {
  const [state, dispatch] = useReducer(searchReducer, {
    initialSearchResults: response,
    searchResults: response,
    appliedFilters: {
      hotelFacilities: [],
      starRating: [],
      pricePerPerson: [],
    },
  });

  return (
    <>
      <FilterSearchComponent searchFilterActions={dispatch} />
      <SearchResultsComponent state={state} />
    </>
  );
}
