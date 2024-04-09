"use client";

import { useReducer } from "react";

import { FilterSearchComponent } from "@/app/(search)/components/filter-search";
import { SearchResultsComponent } from "@/app/(search)/components/search-results";
import { BookingResponse } from "@/types/booking";
import { searchReducer } from "@/utils/reducer/search-reducer";

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
