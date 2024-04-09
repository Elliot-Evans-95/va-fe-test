import {Holiday} from "@/types/booking";

export const filterResultsByRating = (holidays: Holiday[], rating: string) =>
    holidays.filter((holiday) =>
        String(holiday.hotel.content.vRating) === rating)