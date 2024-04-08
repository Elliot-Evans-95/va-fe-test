import {BookingResponse} from "@/types/booking";

export const filterResultsByRating = (bookingData: BookingResponse, rating: string) => {
    const hotelsWithRating = bookingData.holidays.filter((holiday) => {
        console.log('holiday.hotel.content.vRating: ', holiday.hotel.content.vRating);

        return String(holiday.hotel.content.vRating) === rating
    })

    return {
        ...bookingData,
        holidays: hotelsWithRating
    }
}