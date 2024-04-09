import { filterHolidaysResultsByAppliedFilters } from "@/utils/filter-holidays-results-by-applied-filters";
import {
  SearchResultsAction,
  SearchResultsState,
} from "@/utils/reducer/search-reducer.types";

export function searchReducer(
  state: SearchResultsState,
  action: SearchResultsAction,
): SearchResultsState {
  switch (action.type) {
    case "ADD_PRICE_PER_PERSON_FILTER": {
      const appliedFilters = {
        pricePerPerson: [
          ...state.appliedFilters.pricePerPerson,
          action.pricePerPerson,
        ],
        hotelFacilities: state.appliedFilters.hotelFacilities,
        starRating: state.appliedFilters.starRating,
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    case "REMOVE_PRICE_PER_PERSON_FILTER": {
      const appliedFilters = {
        pricePerPerson: state.appliedFilters.pricePerPerson.filter(
          (pricePerPersonRange) => {
            const [min, max] = pricePerPersonRange;
            const [minToBeRemoved, maxToBeRemoved] = action.pricePerPerson;

            return min !== minToBeRemoved && max !== maxToBeRemoved;
          },
        ),
        hotelFacilities: state.appliedFilters.hotelFacilities,
        starRating: state.appliedFilters.starRating,
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    case "ADD_HOTEL_FACILITIES_FILTER": {
      const appliedFilters = {
        pricePerPerson: state.appliedFilters.pricePerPerson,
        hotelFacilities: [
          ...state.appliedFilters.hotelFacilities,
          action.facility,
        ],
        starRating: state.appliedFilters.starRating,
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    case "REMOVE_HOTEL_FACILITIES_FILTER": {
      const appliedFilters = {
        pricePerPerson: state.appliedFilters.pricePerPerson,
        hotelFacilities: state.appliedFilters.hotelFacilities.filter(
          (facility) =>
            facility.toLowerCase() !== action.facility.toLowerCase(),
        ),
        starRating: state.appliedFilters.starRating,
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    case "ADD_STAR_RATING_FILTER": {
      const appliedFilters = {
        pricePerPerson: state.appliedFilters.pricePerPerson,
        hotelFacilities: state.appliedFilters.hotelFacilities,
        starRating: [...state.appliedFilters.starRating, action.rating],
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    case "REMOVE_STAR_RATING_FILTER": {
      const appliedFilters = {
        pricePerPerson: state.appliedFilters.pricePerPerson,
        hotelFacilities: state.appliedFilters.hotelFacilities,
        starRating: state.appliedFilters.starRating.filter(
          (rating) => rating !== action.rating,
        ),
      };

      return {
        appliedFilters: appliedFilters,
        initialSearchResults: state.initialSearchResults,
        searchResults: {
          destination: state.searchResults.destination,
          mixedArrivalAirports: state.searchResults.mixedArrivalAirports,
          holidays: filterHolidaysResultsByAppliedFilters(
            state.initialSearchResults,
            appliedFilters,
          ),
        },
      };
    }

    default: {
      return state;
    }
  }
}
