import {Holiday} from "@/types/booking";

export const filterResultsByHotelFacility = (holidays: Holiday[], facility: string) =>
    holidays.filter((holiday) => {
        const lowercaseHotelFacilities = holiday.hotel.content.hotelFacilities.map((facility) => facility.toLowerCase());

        return lowercaseHotelFacilities.includes(facility.toLowerCase());
    })
