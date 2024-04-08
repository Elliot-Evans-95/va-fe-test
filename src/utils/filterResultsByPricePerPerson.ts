import {BookingResponse} from "@/types/booking";

export const filterResultsByPricePerPerson = (bookingData: BookingResponse, pricePerPerson: number) => {
    const hotelsWithPriceBelowSelected = bookingData.holidays.filter((holiday) => {
        console.log('holiday.pricePerPerson: ', holiday.pricePerPerson);

        return holiday.pricePerPerson <= pricePerPerson
    })

    return {
        ...bookingData,
        holidays: hotelsWithPriceBelowSelected
    }
}