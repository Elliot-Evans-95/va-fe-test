import { FilterSearchData } from "@/types";

export const filterSearchData: FilterSearchData = {
  pricePerPerson: [
    {
      id: 1,
      name: "price-per-person-99999-to-2000",
      displayName: "Over £2000",
      value: [2000, 99_999],
      type: "PRICE_PER_PERSON",
    },
    {
      id: 2,
      name: "price-per-person-1000-to-2000",
      displayName: "£1000 - £2000",
      value: [1000, 2000],
      type: "PRICE_PER_PERSON",
    },
    {
      id: 3,
      name: "price-per-person-0-1000",
      displayName: "£1000 - £2000",
      value: [0, 1000],
      type: "PRICE_PER_PERSON",
    },
  ],
  hotelFacilities: [
    {
      id: 1,
      name: "restaurant-facility",
      displayName: "Restaurant",
      value: "restaurant",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 2,
      name: "bar-facility",
      displayName: "Bar",
      value: "bar",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 3,
      name: "safety-deposit-box-facility",
      displayName: "Safety Deposit Box",
      value: "safety deposit box",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 4,
      name: "fitness-centre/gym-facility",
      displayName: "Fitness Centre/Gym",
      value: "fitness centre/gym",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 5,
      name: "laundry-service",
      displayName: "Laundry Service",
      value: "laundry service",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 6,
      name: "games-room",
      displayName: "Games Room",
      value: "games room",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 7,
      name: "internet-access",
      displayName: "Internet Access",
      value: "internet access",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 8,
      name: "free-transport-to-theme-parks",
      displayName: "Free transport to theme parks",
      value: "free transport to theme parks",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 9,
      name: "swimming-pool",
      displayName: "Swimming Pool",
      value: "swimming pool",
      type: "HOTEL_FACILITIES",
    },
    {
      id: 10,
      name: "hot-tub",
      displayName: "Hot Tub",
      value: "hot tub",
      type: "HOTEL_FACILITIES",
    },
  ],
  starRating: [
    {
      id: 1,
      name: "5-plus-star-rating",
      displayName: "5+ Star",
      value: "5+",
      type: "STAR_RATING",
    },
    {
      id: 2,
      name: "5-star-rating",
      displayName: "5 Star",
      value: "5",
      type: "STAR_RATING",
    },
    {
      id: 3,
      name: "4-plus-star-rating",
      displayName: "4+ Star",
      value: "4+",
      type: "STAR_RATING",
    },
    {
      id: 4,
      name: "4-star-rating",
      displayName: "4 Star",
      value: "4",
      type: "STAR_RATING",
    },
    {
      id: 5,
      name: "3-plus-star-rating",
      displayName: "3+ Star",
      value: "3+",
      type: "STAR_RATING",
    },
    {
      id: 6,
      name: "3-star-rating",
      displayName: "3 Star",
      value: "3",
      type: "STAR_RATING",
    },
  ],
};
