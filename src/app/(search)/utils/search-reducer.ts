import {BookingResponse} from "@/types/booking";
import {filterResultsByRating} from "@/utils/filterResultsByRating";
import {filterResultsByPricePerPerson} from "@/utils/filterResultsByPricePerPerson";
import {filterResultsByHotelFacility} from "@/utils/filterResultsByHotelFacility";

export type TodoState = { results: BookingResponse };
export type TodoAction =
    { type: 'FILTER_BY_RATING'; rating: string } |
    { type: 'FILTER_BY_PRICE_PER_PERSON'; pricePerPerson: [min: number, max: number] } |
    { type: 'FILTER_BY_HOTEL_FACILITIES'; facility: string };

export function searchReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case 'FILTER_BY_RATING':
            return {
                results: {
                    ...state.results,
                    holidays: filterResultsByRating(state.results.holidays, action.rating)
                }
            };
        case 'FILTER_BY_PRICE_PER_PERSON':
            const [min, max] = action.pricePerPerson

            return {
                results: {
                    ...state.results,
                    holidays: filterResultsByPricePerPerson(state.results.holidays, min, max)
                }
            };
        case 'FILTER_BY_HOTEL_FACILITIES':
            return {
                results: {
                    ...state.results,
                    holidays: filterResultsByHotelFacility(state.results.holidays, action.facility)
                }
            };
        default:
            return state;
    }
}