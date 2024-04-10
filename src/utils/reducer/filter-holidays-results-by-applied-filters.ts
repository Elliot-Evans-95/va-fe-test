import { BookingResponse, Holiday } from "@/types";
import { AppliedFilters } from "@/utils/reducer/search-reducer.types";

export const filterHolidaysResultsByAppliedFilters = (
  initialResults: BookingResponse,
  appliedFilters: AppliedFilters,
): Holiday[] => {
  const filteredPricePerson =
    appliedFilters.pricePerPerson.length > 0
      ? initialResults.holidays.filter((holiday) =>
          appliedFilters.pricePerPerson.some((pricePerPersonRange) => {
            const [min, max] = pricePerPersonRange;

            return (
              holiday.pricePerPerson >= min && holiday.pricePerPerson <= max
            );
          }),
        )
      : initialResults.holidays;

  const filteredHotelFacilities =
    appliedFilters.hotelFacilities.length > 0
      ? filteredPricePerson.filter((holiday) => {
          const lowercaseHotelFacilities = new Set(
            holiday.hotel.content.hotelFacilities.map((facility) =>
              facility.toLowerCase(),
            ),
          );

          return appliedFilters.hotelFacilities.every((facility) => {
            const facilityLowerCase = facility.toLowerCase();

            return lowercaseHotelFacilities.has(facilityLowerCase);
          });
        })
      : filteredPricePerson;

  const filteredByStarRating =
    appliedFilters.starRating.length > 0
      ? filteredHotelFacilities.filter((holiday) => {
          const stringedStarRating = String(holiday.hotel.content.starRating);

          return appliedFilters.starRating.includes(stringedStarRating);
        })
      : filteredHotelFacilities;

  return filteredByStarRating;
};
