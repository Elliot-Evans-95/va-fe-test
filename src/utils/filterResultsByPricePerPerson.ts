import {Holiday} from "@/types/booking";

export const filterResultsByPricePerPerson = (holidays: Holiday[], minPricePerPerson: number, maxPricePerPerson: number) =>
    holidays.filter((holiday) => holiday.pricePerPerson > minPricePerPerson && holiday.pricePerPerson <= maxPricePerPerson)
