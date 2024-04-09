import { AppliedFilters } from "@/utils/filter-holidays-results-by-applied-filters";
import { BookingResponse } from "@/types";

export type SearchResultsState = {
  appliedFilters: AppliedFilters;
  initialSearchResults: BookingResponse;
  searchResults: BookingResponse;
};
export type SearchResultsAction =
  | {
      type: "ADD_PRICE_PER_PERSON_FILTER";
      pricePerPerson: [min: number, max: number];
    }
  | {
      type: "REMOVE_PRICE_PER_PERSON_FILTER";
      pricePerPerson: [min: number, max: number];
    }
  | { type: "ADD_HOTEL_FACILITIES_FILTER"; facility: string }
  | { type: "REMOVE_HOTEL_FACILITIES_FILTER"; facility: string }
  | { type: "ADD_STAR_RATING_FILTER"; rating: string }
  | { type: "REMOVE_STAR_RATING_FILTER"; rating: string };
