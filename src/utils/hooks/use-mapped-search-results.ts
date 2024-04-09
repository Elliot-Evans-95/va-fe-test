import { Holiday } from "@/types/booking";
// import { DateTime } from "luxon";

interface MappedBookingResponse {
  holidays: Holiday[];
}

export const useMappedSearchResults = (
  holidayData: Holiday[],
): MappedBookingResponse => {
  const mappedHolidayData: Holiday[] = holidayData.map((holiday) => {
    return {
      ...holiday,
      // selectedDate: DateTime.fromFormat(holiday.selectedDate, 'yyyy-mm-dd') as string,
      // departureDate: DateTime.fromFormat(holiday.departureDate, 'yyyy-mm-dd') as string,
    };
  });

  return {
    holidays: mappedHolidayData,
  };
};
